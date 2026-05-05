-- =============================================================================
-- AZERPUG — Committee Applications schema + submission RPC
-- =============================================================================
-- Run this in your Supabase SQL editor (or via psql) to enable the
--   /committees/apply/ form to persist applications. The form will also work
--   without this (it falls back to the EmailJS notification only), but having
--   the table lets you keep an auditable history and build an admin view.
--
-- Idempotent: safe to run multiple times.
-- =============================================================================

-- 1) Table -------------------------------------------------------------------
create table if not exists public.committee_applications (
  id                  bigserial primary key,
  created_at          timestamptz not null default now(),

  -- Applicant
  member_id           bigint,                       -- nullable; FK if you want
  name                text not null,
  email               text not null,
  phone               text,
  location            text,
  employer            text,
  pg_years            text,                         -- 'lt1' | '1_3' | '3_7' | 'gt7' | 'user'
  linkedin            text,
  github              text,
  languages           text,

  -- Application
  committees          text[] not null,              -- {'coc','program',...}
  motivation          text not null,
  experience          text,
  time_commitment     text,                         -- '2_5' | '5_10' | '10_plus' | 'event_based'

  -- CoC-specific
  coc_seat            text,                         -- 'lead' | 'diversity' | 'external'
  coc_independence    text,
  coc_scenario        text,

  -- Program-specific
  program_topics      text,
  program_review_xp   text,

  -- Organizing-specific
  org_skills          text,
  org_xp              text,

  -- Advocacy-specific
  adv_channels        text,
  adv_sample          text,

  -- Process tracking
  status              text not null default 'submitted',  -- submitted | shortlisted | rejected | accepted | withdrawn
  reviewer_notes      text,
  decided_at          timestamptz,

  -- Light anti-spam
  source_ip_hash      text
);

create index if not exists committee_applications_email_idx
  on public.committee_applications (lower(email));
create index if not exists committee_applications_committees_gin
  on public.committee_applications using gin (committees);
create index if not exists committee_applications_status_idx
  on public.committee_applications (status, created_at desc);

-- 2) RLS ---------------------------------------------------------------------
alter table public.committee_applications enable row level security;

-- Anonymous users can insert (the form posts via the anon key + RPC).
-- They cannot read or update — only the service role (admin panel) can.
drop policy if exists committee_apps_no_select on public.committee_applications;
create policy committee_apps_no_select
  on public.committee_applications
  for select
  using (false);

-- 3) RPC ---------------------------------------------------------------------
-- The form calls /rest/v1/rpc/submit_committee_application.
-- SECURITY DEFINER so it can bypass RLS for the insert while still validating.
create or replace function public.submit_committee_application(
  p_name              text,
  p_email             text,
  p_phone             text,
  p_location          text,
  p_employer          text,
  p_pg_years          text,
  p_linkedin          text,
  p_github            text,
  p_committees        text[],
  p_motivation        text,
  p_experience        text,
  p_time_commitment   text,
  p_languages         text,
  p_coc_seat          text,
  p_coc_independence  text,
  p_coc_scenario      text,
  p_program_topics    text,
  p_program_review_xp text,
  p_org_skills        text,
  p_org_xp            text,
  p_adv_channels      text,
  p_adv_sample        text,
  p_member_id         bigint
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id            bigint;
  v_recent_count  int;
  v_allowed       text[] := array['coc','program','organizing','advocacy'];
begin
  -- Basic validation
  if coalesce(trim(p_name), '') = '' then
    raise exception 'Name is required';
  end if;
  if coalesce(trim(p_email), '') = '' or p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'A valid email is required';
  end if;
  if p_committees is null or array_length(p_committees, 1) is null then
    raise exception 'At least one committee must be selected';
  end if;
  if not (p_committees <@ v_allowed) then
    raise exception 'Unknown committee in selection';
  end if;
  if coalesce(trim(p_motivation), '') = '' then
    raise exception 'Motivation is required';
  end if;

  -- Light rate limit: max 3 submissions per email in last 24h
  select count(*) into v_recent_count
  from public.committee_applications
  where lower(email) = lower(p_email)
    and created_at > now() - interval '24 hours';
  if v_recent_count >= 3 then
    raise exception 'Too many submissions from this email in the last 24 hours';
  end if;

  insert into public.committee_applications (
    member_id, name, email, phone, location, employer, pg_years, linkedin, github,
    committees, motivation, experience, time_commitment, languages,
    coc_seat, coc_independence, coc_scenario,
    program_topics, program_review_xp,
    org_skills, org_xp,
    adv_channels, adv_sample
  ) values (
    p_member_id, trim(p_name), lower(trim(p_email)), p_phone, p_location, p_employer,
    p_pg_years, p_linkedin, p_github,
    p_committees, p_motivation, p_experience, p_time_commitment, p_languages,
    p_coc_seat, p_coc_independence, p_coc_scenario,
    p_program_topics, p_program_review_xp,
    p_org_skills, p_org_xp,
    p_adv_channels, p_adv_sample
  )
  returning id into v_id;

  return v_id;
end;
$$;

-- Allow anon + authenticated to call the RPC
grant execute on function public.submit_committee_application(
  text, text, text, text, text, text, text, text,
  text[], text, text, text, text,
  text, text, text,
  text, text,
  text, text,
  text, text,
  bigint
) to anon, authenticated;

-- =============================================================================
-- Optional: a view for the admin panel (only reachable with service role)
-- =============================================================================
create or replace view public.v_committee_applications_admin as
select
  id, created_at, name, email, phone, location, employer, pg_years,
  committees, status, time_commitment, motivation
from public.committee_applications
order by created_at desc;
