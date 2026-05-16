-- =============================================================================
-- AZERPUG — Knowledge Base
-- =============================================================================
-- Schema + submission RPC for /knowledge-base/. Run in the Supabase SQL editor.
-- Idempotent: safe to run multiple times.
-- =============================================================================

-- 1) Table -------------------------------------------------------------------
create table if not exists public.knowledge_base_articles (
  id            bigserial primary key,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  -- Author
  member_id     bigint,
  author_name   text,
  author_email  text,

  -- Article
  title         text not null,
  slug          text,
  category      text not null default 'administration',
  summary       text not null,
  content       text,                 -- full article body (Markdown)
  tags          text[],
  read_minutes  int default 5,
  source_url    text,                 -- optional external reference / further reading

  -- Workflow
  status        text not null default 'pending',
  is_featured   boolean not null default false,
  reviewer_notes text,

  constraint kb_status_chk
    check (status in ('pending','approved','rejected')),
  constraint kb_category_chk
    check (category in ('performance','security','backup-recovery','replication',
                        'administration','development','monitoring','migration','other'))
);

create index if not exists kb_status_idx
  on public.knowledge_base_articles (status, is_featured desc, created_at desc);
create index if not exists kb_category_idx
  on public.knowledge_base_articles (category);
create index if not exists kb_tags_gin
  on public.knowledge_base_articles using gin (tags);

-- 2) RLS ---------------------------------------------------------------------
alter table public.knowledge_base_articles enable row level security;

drop policy if exists kb_public_read on public.knowledge_base_articles;
create policy kb_public_read
  on public.knowledge_base_articles
  for select
  using (status = 'approved');

-- 3) Public read-only view ---------------------------------------------------
create or replace view public.public_knowledge_base as
select
  id, title, slug, category, summary, content, tags,
  read_minutes, source_url, author_name, is_featured, created_at
from public.knowledge_base_articles
where status = 'approved';

grant select on public.public_knowledge_base to anon, authenticated;

-- 4) Submission RPC ----------------------------------------------------------
create or replace function public.submit_kb_article(
  p_title        text,
  p_category     text,
  p_summary      text,
  p_content      text,
  p_tags         text[],
  p_source_url   text,
  p_read_minutes int,
  p_member_id    bigint,
  p_author_name  text,
  p_author_email text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id           bigint;
  v_slug         text;
  v_recent_count int;
  v_allowed_cats text[] := array['performance','security','backup-recovery','replication',
                                 'administration','development','monitoring','migration','other'];
begin
  if coalesce(trim(p_title), '') = '' then
    raise exception 'Title is required';
  end if;
  if coalesce(trim(p_summary), '') = '' then
    raise exception 'Summary is required';
  end if;
  if char_length(trim(p_summary)) < 20 then
    raise exception 'Summary is too short — please describe the article in at least 20 characters';
  end if;
  if not (coalesce(p_category, 'administration') = any (v_allowed_cats)) then
    raise exception 'Unknown category: %', p_category;
  end if;

  -- slug from title
  v_slug := lower(regexp_replace(trim(p_title), '[^a-zA-Z0-9]+', '-', 'g'));
  v_slug := trim(both '-' from v_slug);

  -- Light rate limit: max 5 submissions per email per 24h
  if p_author_email is not null and trim(p_author_email) <> '' then
    select count(*) into v_recent_count
    from public.knowledge_base_articles
    where lower(author_email) = lower(trim(p_author_email))
      and created_at > now() - interval '24 hours';
    if v_recent_count >= 5 then
      raise exception 'Too many submissions from this email in the last 24 hours';
    end if;
  end if;

  insert into public.knowledge_base_articles (
    member_id, author_name, author_email,
    title, slug, category, summary, content, tags,
    read_minutes, source_url
  ) values (
    p_member_id, p_author_name, p_author_email,
    trim(p_title), v_slug, coalesce(p_category, 'administration'),
    trim(p_summary), p_content, p_tags,
    greatest(coalesce(p_read_minutes, 5), 1), p_source_url
  )
  returning id into v_id;

  return v_id;
end;
$$;

grant execute on function public.submit_kb_article(
  text, text, text, text, text[], text, int, bigint, text, text
) to anon, authenticated;

-- 5) Optional admin view -----------------------------------------------------
create or replace view public.v_knowledge_base_admin as
select
  id, created_at, status, is_featured, title, category,
  author_name, author_email
from public.knowledge_base_articles
order by status asc, created_at desc;

-- 6) Seed (only inserts if a row with the same title does not exist) ---------
insert into public.knowledge_base_articles
  (title, slug, category, summary, content, tags, read_minutes, source_url,
   author_name, status, is_featured)
select * from (values
  ('Use connection pooling in front of PostgreSQL',
   'use-connection-pooling',
   'performance',
   'Every PostgreSQL connection is a separate OS process with real memory cost. Past a few hundred connections, performance degrades sharply — put a pooler like PgBouncer in front.',
   E'PostgreSQL forks a backend process per connection. Each one consumes memory (work_mem, temp buffers) and adds scheduling overhead, so opening thousands of direct connections is wasteful and unstable.\n\n**Recommended approach**\n\n- Run PgBouncer (or pgcat) in transaction-pooling mode for web/API workloads.\n- Size the pool to your CPU/IO capacity, not your client count — a common starting point is `((core_count * 2) + effective_spindle_count)`.\n- Keep `max_connections` on the server modest (100–200) and let the pooler multiplex.\n- Watch for prepared statements / session-level state: transaction pooling does not preserve session state between transactions.\n\n**Why it matters**\n\nA pooler turns 5,000 idle app connections into 20–40 busy server connections, dramatically reducing memory pressure and context-switching, and smoothing out latency spikes under load.',
   array['pgbouncer','connections','scaling'],
   6, 'https://www.pgbouncer.org/',
   'AZERPUG', 'approved', true),

  ('Tune autovacuum before bloat becomes a problem',
   'tune-autovacuum',
   'administration',
   'Autovacuum reclaims dead tuples and keeps statistics fresh. Default settings are conservative — busy tables need more aggressive thresholds to avoid table and index bloat.',
   E'Every UPDATE and DELETE leaves dead tuples behind. Autovacuum cleans them up, but its defaults are tuned for small, low-traffic databases.\n\n**Practical tuning**\n\n- Lower `autovacuum_vacuum_scale_factor` for large, write-heavy tables (e.g. 0.01 instead of 0.2) so vacuum triggers sooner.\n- Raise `autovacuum_max_workers` and `autovacuum_vacuum_cost_limit` on capable hardware so vacuum keeps up.\n- Set per-table overrides with `ALTER TABLE ... SET (autovacuum_vacuum_scale_factor = ...)` rather than changing global defaults for everything.\n- Monitor `n_dead_tup` in `pg_stat_user_tables` and watch for transaction-ID wraparound warnings.\n\n**Warning signs**\n\nGrowing table size with stable row counts, slow index scans, and `VACUUM` taking longer each run all point to autovacuum falling behind.',
   array['autovacuum','bloat','maintenance'],
   7, 'https://www.postgresql.org/docs/current/routine-vacuuming.html',
   'AZERPUG', 'approved', true),

  ('Read EXPLAIN ANALYZE before optimizing a query',
   'read-explain-analyze',
   'performance',
   'Guessing why a query is slow wastes time. EXPLAIN ANALYZE shows the real plan, actual row counts, and where time is spent — let it guide the fix.',
   E'`EXPLAIN ANALYZE` runs the query and reports the plan the planner chose alongside actual timings and row counts.\n\n**How to read it**\n\n- Compare *estimated* vs *actual* rows — a large gap means stale statistics or a bad estimate; run `ANALYZE`.\n- Look for `Seq Scan` on large tables inside selective filters — often a missing index.\n- Watch for `Nested Loop` joins over big row counts, and for high `loops=` values.\n- Note `Sort` and `Hash` nodes spilling to disk — that is a sign `work_mem` is too low for that query.\n\n**Tips**\n\nUse `EXPLAIN (ANALYZE, BUFFERS)` to see cache vs disk reads, and paste plans into a visualizer to spot the expensive node quickly. Optimize the node that actually dominates total time — not the one that looks scariest.',
   array['explain','query-tuning','indexes'],
   6, 'https://www.postgresql.org/docs/current/using-explain.html',
   'AZERPUG', 'approved', false),

  ('Choose the right index type for the job',
   'choose-the-right-index',
   'performance',
   'B-tree is the default, but GIN, GiST, BRIN, and partial/expression indexes solve problems B-tree cannot. Match the index to the query pattern.',
   E'PostgreSQL ships several index types, each suited to different access patterns.\n\n**Quick guide**\n\n- **B-tree** — equality and range on scalar columns. The default, and right most of the time.\n- **GIN** — multi-value columns: `jsonb`, arrays, full-text search.\n- **GiST** — geometric data, ranges, nearest-neighbour search.\n- **BRIN** — very large tables with naturally ordered data (e.g. append-only time series); tiny and cheap.\n- **Partial index** — `WHERE` a condition, to index only the rows you actually query (e.g. `WHERE status = ''active''`).\n- **Expression index** — index `lower(email)` if you always query case-insensitively.\n\n**Cost reminder**\n\nEvery index slows writes and consumes space. Index for the queries you actually run, drop indexes that `pg_stat_user_indexes` shows are never scanned.',
   array['indexes','b-tree','gin','brin'],
   7, 'https://www.postgresql.org/docs/current/indexes-types.html',
   'AZERPUG', 'approved', false),

  ('Have a backup strategy you have actually tested',
   'tested-backup-strategy',
   'backup-recovery',
   'A backup you have never restored is a hope, not a strategy. Combine logical and physical backups, automate them, and rehearse recovery.',
   E'Backups exist to be restored. The only way to know they work is to practise restoring them.\n\n**Layers**\n\n- **Logical** (`pg_dump` / `pg_dumpall`) — portable, good for single databases and migrations, but slow to restore at scale.\n- **Physical** (`pg_basebackup` + WAL archiving) — enables Point-In-Time Recovery (PITR) and fast restores of large clusters.\n- Consider tools like pgBackRest or Barman that manage retention, compression, and parallelism for you.\n\n**Discipline**\n\n- Automate backups and **monitor that they succeed** — a silently failing cron job is worse than no job.\n- Store copies off-host and off-site.\n- Schedule regular restore drills and measure your RTO/RPO against the business requirement.\n- Document the recovery procedure so anyone on the team can follow it under pressure.',
   array['backup','pitr','pgbackrest','disaster-recovery'],
   8, 'https://www.postgresql.org/docs/current/backup.html',
   'AZERPUG', 'approved', true),

  ('Harden access with least-privilege roles',
   'least-privilege-roles',
   'security',
   'Applications should never connect as a superuser. Create dedicated roles, grant only what is needed, and lock down pg_hba.conf.',
   E'Most PostgreSQL security incidents come from over-privileged accounts and permissive host-based authentication.\n\n**Roles**\n\n- Never let an application log in as `postgres` or any superuser.\n- Create a role per application with exactly the privileges it needs — often just `SELECT/INSERT/UPDATE/DELETE` on specific schemas.\n- Use `GROUP` roles to manage permissions centrally, and revoke the default `PUBLIC` privileges on schemas you care about.\n\n**Connection security**\n\n- In `pg_hba.conf`, prefer `scram-sha-256` over `md5`, and restrict each entry to the narrowest CIDR range possible.\n- Require SSL/TLS for connections crossing untrusted networks.\n- Keep superuser access to local, audited sessions only.\n\n**Bonus**\n\nConsider Row-Level Security for multi-tenant data, and review `pg_hba.conf` whenever the network changes.',
   array['security','roles','pg_hba','ssl'],
   7, 'https://www.postgresql.org/docs/current/auth-pg-hba-conf.html',
   'AZERPUG', 'approved', false)
) as seed(title, slug, category, summary, content, tags, read_minutes, source_url,
          author_name, status, is_featured)
where not exists (
  select 1 from public.knowledge_base_articles k where k.title = seed.title
);
