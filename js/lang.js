/* =============================================
   Language System (AZ/EN)
   Include on all pages after navbar-auth.js
   ============================================= */
(function() {
  // Common translations used across all pages
  var T = {
    // Navbar
    'nav.home': { en: 'Home', az: 'Ana səhifə' },
    'nav.blog': { en: 'Blog Posts', az: 'Bloq Yazıları' },
    'nav.events': { en: 'Events', az: 'Tədbirlər' },
    'nav.registration': { en: 'Registration', az: 'Qeydiyyat' },
    'nav.members': { en: 'Members', az: 'Üzvlər' },
    'nav.community': { en: 'Global Community', az: 'Qlobal İcma' },
    'nav.profile': { en: 'My Profile', az: 'Profilim' },
    'nav.about': { en: 'About', az: 'Haqqımızda' },
    'nav.sponsors': { en: 'Sponsors', az: 'Sponsorlar' },
    'nav.faq': { en: 'FAQ', az: 'FAQ' },
    'nav.gallery': { en: 'Gallery', az: 'Qalereya' },
    'nav.contact': { en: 'Contact', az: 'Əlaqə' },
    'nav.contribute': { en: 'Contribute', az: 'Töhfə Ver' },

    // Footer
    'footer.privacy': { en: 'Privacy policy', az: 'Məxfilik siyasəti' },
    'footer.website': { en: 'About the website', az: 'Sayt haqqında' },
    'footer.copyright': { en: 'Copyright © 2018-2025 Azerbaijan PostgreSQL User Group (AZERPUG)', az: 'Müəllif hüquqları © 2018-2025 Azərbaycan PostgreSQL İstifadəçiləri Qrupu (AZERPUG)' },

    // Homepage - Hero
    'home.title': { en: 'Azerbaijan PostgreSQL User Group', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupu' },
    'home.subtitle': { en: 'The open-source community for PostgreSQL enthusiasts in Azerbaijan', az: 'Azərbaycanda PostgreSQL həvəskarları üçün açıq-mənbə icması' },
    'home.subtitle_az': { en: 'Azerbaijan PostgreSQL User Group', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupu' },
    'home.join': { en: 'Join the Community', az: 'İcmaya Qoşul' },
    'home.signin': { en: 'Sign In', az: 'Daxil ol' },
    'home.members': { en: 'Members', az: 'Üzvlər' },
    'home.blogposts': { en: 'Blog Posts', az: 'Bloq Yazıları' },
    'home.founded': { en: 'Founded', az: 'Təsis edilib' },
    'home.opensource': { en: 'Open Source', az: 'Açıq Mənbə' },
    'home.welcome': { en: 'Welcome back,', az: 'Xoş gəldiniz,' },
    'home.welcome_sub': { en: "You're part of the Azerbaijan PostgreSQL User Group community.", az: 'Siz Azərbaycan PostgreSQL İstifadəçiləri Qrupu icmasının üzvüsünüz.' },
    'home.myprofile': { en: 'My Profile', az: 'Profilim' },
    'home.writepost': { en: 'Write a Post', az: 'Yazı Yaz' },

    // Homepage - Features
    'feat.blog': { en: 'Blog Posts', az: 'Bloq Yazıları' },
    'feat.blog_desc': { en: 'Read and write articles about PostgreSQL — tutorials, tips, and real-world experiences', az: 'PostgreSQL haqqında məqalələr oxuyun və yazın — dərsliklər, məsləhətlər və real təcrübələr' },
    'feat.events': { en: 'Events & Meetups', az: 'Tədbirlər və Görüşlər' },
    'feat.events_desc': { en: 'Join workshops, meetups, webinars, and conferences with the community', az: 'Seminarlar, görüşlər, vebinarlar və konfranslara qoşulun' },
    'feat.members': { en: 'Community Members', az: 'İcma Üzvləri' },
    'feat.members_desc': { en: 'Connect with PostgreSQL professionals, developers, and DBAs in Azerbaijan', az: 'Azərbaycandakı PostgreSQL mütəxəssisləri, proqramçılar və DBA-larla əlaqə qurun' },
    'feat.resources': { en: 'Resources', az: 'Resurslar' },
    'feat.resources_desc': { en: 'Curated tutorials, books, tools, and courses for learning PostgreSQL', az: 'PostgreSQL öyrənmək üçün seçilmiş dərsliklər, kitablar, alətlər və kurslar' },
    'feat.jobs': { en: 'Job Board', az: 'İş Elanları' },
    'feat.jobs_desc': { en: 'Find PostgreSQL-related jobs in Azerbaijan and remote positions', az: 'Azərbaycanda və uzaqdan PostgreSQL ilə bağlı iş imkanları tapın' },
    'feat.community': { en: 'Global Community', az: 'Qlobal İcma' },
    'feat.community_desc': { en: 'Connect with the worldwide PostgreSQL ecosystem and organizations', az: 'Dünya miqyasında PostgreSQL ekosistemi və təşkilatlarla əlaqə qurun' },
    'feat.feedback': { en: 'Feedback', az: 'Əks-əlaqə' },
    'feat.feedback_desc': { en: 'Share your thoughts, suggestions, and ideas to help us improve the community', az: 'İcmanı yaxşılaşdırmağa kömək etmək üçün fikir və təkliflərinizi paylaşın' },
    'feat.contribute': { en: 'Contribute to Local Community', az: 'Yerli İcmaya Töhfə Ver' },
    'feat.contribute_desc': { en: 'Volunteer, organize events, write content, and help grow PostgreSQL in Azerbaijan', az: 'Könüllü olun, tədbirlər təşkil edin, məzmun yazın və Azərbaycanda PostgreSQL-i inkişaf etdirin' },
    'feat.committees': { en: 'Committees', az: 'Komitələr' },
    'feat.committees_desc': { en: "Meet AZERPUG's four governing committees — Code of Conduct, Program, Organizing, Advocacy — and apply to join", az: 'AZERPUG-un dörd idarəetmə komitəsi ilə tanış olun — Davranış Qaydaları, Proqram, Təşkilatçılıq, Advocacy — və qoşulmaq üçün müraciət edin' },
    'feat.extensions': { en: 'Extensions & Tools', az: 'Genişlənmələr və Alətlər' },
    'feat.extensions_desc': { en: 'Open-source PostgreSQL extensions, CLIs, and developer tools built by AZERPUG members — browse, star, and submit your own', az: 'AZERPUG üzvləri tərəfindən yaradılmış açıq-mənbə PostgreSQL genişlənmələri, CLI-lar və proqramçı alətləri — baxın, ulduz verin və öz layihənizi göndərin' },

    // Homepage - Mission
    'mission.title': { en: 'Our Mission', az: 'Missiyamız' },
    'mission.p1': { en: 'Azerbaijan PostgreSQL User Group exists to grow and strengthen the PostgreSQL community in Azerbaijan. We believe that knowledge is most powerful when it\'s shared freely, and that open-source technology is the foundation of innovation.', az: 'Azerbaijan PostgreSQL User Group Azərbaycanda PostgreSQL icmasını inkişaf etdirmək və güclənirmək üçün mövcuddur. Biz inanırıq ki, bilik sərbəst paylaşıldıqda ən güclüdür və açıq-mənbə texnologiyası innovasiyanın əsasıdır.' },
    'mission.p2': { en: 'Our mission is to provide a platform where anyone — from curious beginners to seasoned database experts — can learn, share, and collaborate around PostgreSQL. We organize meetups, publish educational content, and connect professionals who work with the world\'s most advanced open-source relational database.', az: 'Missiyamız hər kəsin — maraqlı yeni başlayandan təcrübəli verilənlər bazası mütəxəssisinə qədər — PostgreSQL ətrafında öyrənə, paylaşa və əməkdaşlıq edə biləcəyi bir platforma təmin etməkdir. Biz görüşlər təşkil edirik, təhsil məzmunu dərc edirik və dünyanın ən təkmil açıq-mənbə relational verilənlər bazası ilə işləyən mütəxəssisləri birləşdiririk.' },
    'mission.p3': { en: 'As an open community, our community has no hierarchy — every registered member is an equal participant. We welcome developers, DBAs, students, IT managers, and anyone interested in PostgreSQL to join us and contribute to the community.', az: 'Açıq icma olaraq, icmamızda ierarxiya yoxdur — hər qeydiyyatdan keçmiş üzv bərabər iştirakçıdır. Biz proqramçıları, DBA-ları, tələbələri, İT menecerlərini və PostgreSQL ilə maraqlanan hər kəsi icmamıza qoşulmağa və töhfə verməyə dəvət edirik.' },

    // Homepage - Values
    'values.title': { en: 'Community Values', az: 'İcma Dəyərləri' },
    'values.opensource': { en: 'Open Source', az: 'Açıq Mənbə' },
    'values.opensource_desc': { en: 'We champion open-source software and the collaborative development model that makes PostgreSQL great.', az: 'Biz açıq mənbə proqram təminatını və PostgreSQL-i əla edən əməkdaşlıq inkişaf modelini dəstəkləyirik.' },
    'values.equality': { en: 'Equality', az: 'Bərabərlik' },
    'values.equality_desc': { en: 'Every member has an equal voice. There is no hierarchy — we grow together as a flat, open community.', az: 'Hər üzvün bərabər səsi var. İerarxiya yoxdur — biz düz, açıq icma olaraq birlikdə inkişaf edirik.' },
    'values.knowledge': { en: 'Knowledge Sharing', az: 'Bilik Paylaşımı' },
    'values.knowledge_desc': { en: 'We learn from each other through blog posts, meetups, workshops, and mentorship.', az: 'Biz bloq yazıları, görüşlər, seminarlar və mentorluq vasitəsilə bir-birimizdən öyrənirik.' },
    'values.inclusivity': { en: 'Inclusivity', az: 'İnklyuzivlik' },
    'values.inclusivity_desc': { en: 'Everyone is welcome regardless of experience level, background, or profession.', az: 'Təcrübə səviyyəsindən, keçmişindən və ya peşəsindən asılı olmayaraq hər kəs xoş gəlir.' },

    // Homepage - Posts & Stats
    'home.latest_posts': { en: 'Latest Blog Posts', az: 'Son Bloq Yazıları' },
    'home.community_stats': { en: 'Community', az: 'İcma' },
    'home.organizations': { en: 'Organizations', az: 'Təşkilatlar' },
    'home.no_posts': { en: 'No blog posts yet.', az: 'Hələ bloq yazısı yoxdur.' },
    'home.be_first': { en: 'Be the first to write one!', az: 'İlk yazını siz yazın!' },

    // Login page
    'login.welcome': { en: 'Welcome Back', az: 'Xoş Gəldiniz' },
    'login.subtitle': { en: 'Sign in to your account', az: 'Hesabınıza daxil olun' },
    'login.header': { en: 'Sign In', az: 'Daxil ol' },
    'login.email': { en: 'Email Address', az: 'E-poçt ünvanı' },
    'login.password': { en: 'Password', az: 'Şifrə' },
    'login.btn': { en: 'Sign In', az: 'Daxil ol' },
    'login.or': { en: 'or', az: 'və ya' },
    'login.no_account': { en: "Don't have an account?", az: 'Hesabınız yoxdur?' },
    'login.register_free': { en: 'Register for free', az: 'Pulsuz qeydiyyat' },
    'login.back_home': { en: 'Back to Home', az: 'Ana Səhifəyə' },
    'login.fill_fields': { en: 'Please enter your email and password.', az: 'E-poçt və şifrənizi daxil edin.' },
    'login.invalid': { en: 'Invalid email or password. Please try again.', az: 'Yanlış e-poçt və ya şifrə. Yenidən cəhd edin.' },
    'login.failed': { en: 'Login failed. Please check your connection and try again.', az: 'Daxil olmaq mümkün olmadı. Bağlantınızı yoxlayın və yenidən cəhd edin.' },
    'login.signing_in': { en: 'Signing in...', az: 'Daxil olunur...' },
    'login.ph_email': { en: 'you@example.com', az: 'siz@misal.com' },
    'login.ph_password': { en: 'Your password', az: 'Şifrəniz' },

    // Registration page
    'reg.title': { en: 'Member Registration', az: 'Üzv Qeydiyyatı' },
    'reg.subtitle': { en: 'Become a member of the Azerbaijan PostgreSQL User Group — it\'s free, open, and takes less than a minute.', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupunun üzvü olun — pulsuz, açıq və bir dəqiqədən az vaxt alır.' },
    'reg.create': { en: 'Create Your Account', az: 'Hesabınızı Yaradın' },
    'reg.google_quick': { en: 'Quick registration with your Google account:', az: 'Google hesabınızla sürətli qeydiyyat:' },
    'reg.or_email': { en: 'or register with email', az: 'və ya e-poçtla qeydiyyat' },
    'reg.account_info': { en: 'Account Information', az: 'Hesab Məlumatları' },
    'reg.first_name': { en: 'First Name', az: 'Ad' },
    'reg.last_name': { en: 'Last Name', az: 'Soyad' },
    'reg.email': { en: 'Email Address', az: 'E-poçt Ünvanı' },
    'reg.password': { en: 'Password', az: 'Şifrə' },
    'reg.confirm_password': { en: 'Confirm Password', az: 'Şifrəni Təsdiqləyin' },
    'reg.professional': { en: 'Professional Information', az: 'Peşəkar Məlumatlar' },
    'reg.company': { en: 'Company / Organization', az: 'Şirkət / Təşkilat' },
    'reg.job_title': { en: 'Job Title / Role', az: 'Vəzifə / Rol' },
    'reg.linkedin': { en: 'LinkedIn Profile', az: 'LinkedIn Profili' },
    'reg.linkedin_hint': { en: 'Optional — your public LinkedIn profile URL', az: 'İstəyə bağlı — açıq LinkedIn profil linkiniz' },
    'reg.phone': { en: 'Phone Number', az: 'Telefon Nömrəsi' },
    'reg.phone_hint': { en: 'Optional — for event notifications via SMS', az: 'İstəyə bağlı — SMS ilə tədbir bildirişləri üçün' },
    'reg.additional': { en: 'Additional Information', az: 'Əlavə Məlumatlar' },
    'reg.notes': { en: 'Personal Notes', az: 'Şəxsi Qeydlər' },
    'reg.notes_hint': { en: 'Optional — help us get to know you better', az: 'İstəyə bağlı — sizi daha yaxşı tanımağımıza kömək edin' },
    'reg.terms': { en: 'Terms & Privacy', az: 'Şərtlər və Məxfilik' },
    'reg.agree_html': { en: 'I agree to the <a href="/about/privacypolicy/" target="_blank">Privacy Policy</a> and consent to storing my registration data. <span class="required">*</span>', az: '<a href="/about/privacypolicy/" target="_blank">Məxfilik Siyasəti</a> ilə razıyam və qeydiyyat məlumatlarımı saxlamasına icazə verirəm. <span class="required">*</span>' },
    'reg.newsletter': { en: 'I would like to receive community news, event invitations, and PostgreSQL updates via email.', az: 'İcma xəbərləri, tədbir dəvətnamələri və PostgreSQL yenilikləri e-poçtla almaq istəyirəm.' },
    'reg.register_btn': { en: 'Register', az: 'Qeydiyyat' },
    'reg.reset_btn': { en: 'Reset', az: 'Sıfırla' },
    'reg.have_account': { en: 'Already have an account?', az: 'Artıq hesabınız var?' },
    'reg.sign_in': { en: 'Sign in here', az: 'Buradan daxil olun' },
    'reg.success_title': { en: 'Registration Successful!', az: 'Qeydiyyat Uğurla Tamamlandı!' },
    'reg.success_desc': { en: 'Welcome to the Azerbaijan PostgreSQL User Group. You are now logged in and will be redirected to the home page.', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupuna xoş gəldiniz. Siz artıq daxil olmusunuz və ana səhifəyə yönləndiriləcəksiniz.' },

    // Registration placeholders
    'reg.ph_firstname': { en: 'e.g. Elvin', az: 'məs. Elvin' },
    'reg.ph_lastname': { en: 'e.g. Məmmədov', az: 'məs. Məmmədov' },
    'reg.ph_email': { en: 'you@example.com', az: 'siz@misal.com' },
    'reg.ph_password': { en: 'Minimum 8 characters', az: 'Minimum 8 simvol' },
    'reg.ph_confirm': { en: 'Re-enter your password', az: 'Şifrənizi yenidən daxil edin' },
    'reg.ph_company': { en: 'Your company or organization', az: 'Şirkətiniz və ya təşkilatınız' },
    'reg.ph_jobtitle': { en: 'e.g. Database Administrator', az: 'məs. Verilənlər Bazası Administratoru' },
    'reg.ph_linkedin': { en: 'https://linkedin.com/in/yourname', az: 'https://linkedin.com/in/adiniz' },
    'reg.ph_phone': { en: '+994 XX XXX XX XX', az: '+994 XX XXX XX XX' },
    'reg.ph_notes': { en: "Tell us about yourself — your interests in PostgreSQL, what you hope to gain from the community, or anything else you'd like to share...", az: 'Özünüz haqqında danışın — PostgreSQL-ə marağınız, icmadan nə gözlədiyiniz və ya paylaşmaq istədiyiniz başqa hər hansı bir şey...' },

    // Members page
    'members.title': { en: 'Community Members', az: 'İcma Üzvləri' },
    'members.subtitle': { en: 'Meet the PostgreSQL community in Azerbaijan — developers, DBAs, architects, and enthusiasts building with the world\'s most advanced open-source database.', az: 'Azərbaycandakı PostgreSQL icması ilə tanış olun — dünyanın ən təkmil açıq-mənbə verilənlər bazası ilə işləyən proqramçılar, DBA-lar, arxitektorlar və həvəskarlar.' },
    'members.total': { en: 'Total Members', az: 'Ümumi Üzvlər' },
    'members.companies': { en: 'Companies / Organizations', az: 'Şirkətlər / Təşkilatlar' },
    'members.linkedin_profiles': { en: 'LinkedIn Profiles', az: 'LinkedIn Profilləri' },
    'members.search': { en: 'Search by name, company, or role...', az: 'Ad, şirkət və ya rol üzrə axtarın...' },
    'members.name': { en: 'Name', az: 'Ad' },
    'members.company': { en: 'Company', az: 'Şirkət' },
    'members.role': { en: 'Role', az: 'Vəzifə' },
    'members.linkedin': { en: 'LinkedIn', az: 'LinkedIn' },
    'members.joined': { en: 'Joined', az: 'Qoşulub' },
    'members.join_cta': { en: 'Join the community to connect with PostgreSQL professionals in Azerbaijan.', az: 'Azərbaycandakı PostgreSQL mütəxəssisləri ilə əlaqə qurmaq üçün icmamıza qoşulun.' },
    'members.register': { en: 'Register Now', az: 'İndi Qeydiyyatdan Keç' },

    // Events page
    'events.title': { en: 'Events & Meetups', az: 'Tədbirlər və Görüşlər' },
    'events.subtitle': { en: 'Join us at PostgreSQL meetups, workshops, webinars, and conferences in Azerbaijan. All events are open to all members.', az: 'Azərbaycanda PostgreSQL görüşləri, seminarlar, vebinarlar və konfranslara qoşulun. Bütün tədbirlər bütün üzvlər üçün açıqdır.' },
    'events.info': { en: 'Want to attend an event? Log in and click RSVP to let us know you\'re coming. Want to suggest or organize an event?', az: 'Tədbirə qatılmaq istəyirsiniz? Daxil olun və gəldiyinizi bildirmək üçün RSVP klikləyin. Tədbir təklif etmək və ya təşkil etmək istəyirsiniz?' },
    'events.info_text': { en: 'Want to attend an event? Log in and click <strong>RSVP</strong> to let us know you\'re coming. Want to suggest or organize an event?', az: 'Tədbirə qatılmaq istəyirsiniz? Daxil olun və gəldiyinizi bildirmək üçün <strong>RSVP</strong> klikləyin. Tədbir təklif etmək və ya təşkil etmək istəyirsiniz?' },
    'events.contact': { en: 'Contact us', az: 'Bizimlə əlaqə saxlayın' },
    'events.upcoming': { en: 'Upcoming Events', az: 'Gələcək Tədbirlər' },
    'events.past': { en: 'Past Events', az: 'Keçmiş Tədbirlər' },
    'events.loading': { en: 'Loading events...', az: 'Tədbirlər yüklənir...' },
    'events.no_upcoming': { en: 'No upcoming events at the moment. Check back soon or', az: 'Hazırda gələcək tədbir yoxdur. Tezliklə yenidən yoxlayın və ya' },
    'events.suggest': { en: 'suggest an event', az: 'tədbir təklif edin' },
    'events.no_past': { en: 'No past events recorded yet.', az: 'Hələ keçmiş tədbir qeydə alınmayıb.' },
    'events.going': { en: 'going', az: 'gedir' },
    'events.maybe': { en: 'maybe', az: 'bəlkə' },
    'events.rsvp': { en: 'RSVP', az: 'İştirak et' },
    'events.login_rsvp': { en: 'Log in to RSVP', az: 'İştirak üçün daxil olun' },
    'events.conference': { en: 'Conference', az: 'Konfrans' },
    'events.completed': { en: 'Completed', az: 'Keçirilib' },
    'events.attendees': { en: '100+ attendees', az: '100+ iştirakçı' },
    'events.attendees_label': { en: 'attendees', az: 'iştirakçı' },
    'events.adnsu_title': { en: 'PostgreSQL Talk by Devrim Gündüz at ADNSU', az: 'ADNSU-da Devrim Gündüz tərəfindən PostgreSQL Çıxışı' },
    'events.adnsu_desc': { en: 'A landmark event for the community — PostgreSQL major contributor <a href="https://www.linkedin.com/in/devrimgunduz/" target="_blank" rel="noopener" style="font-weight:700;">Devrim Gündüz</a> visited Baku and delivered a talk at the Azerbaijan State Oil and Industry University (ADNSU) conference hall. Devrim coordinates RPM maintenance at <a href="https://yum.postgresql.org" target="_blank" rel="noopener">yum.postgresql.org</a> for Red Hat, Rocky, Alma Linux, and Fedora, manages packages at <a href="https://zypp.postgresql.org" target="_blank" rel="noopener">zypp.postgresql.org</a> for SLES, contributes to PostgreSQL website maintenance, builds PostgreSQL-related packages for Fedora and EPEL, and helps organise PGDay.UK and other conferences.', az: 'İcmamız üçün əlamətdar tədbir — PostgreSQL-in əsas töhfəçisi <a href="https://www.linkedin.com/in/devrimgunduz/" target="_blank" rel="noopener" style="font-weight:700;">Devrim Gündüz</a> Bakıya gələrək Azərbaycan Dövlət Neft və Sənaye Universitetinin (ADNSU) konfrans zalında çıxış etdi. Devrim Red Hat, Rocky, Alma Linux və Fedora üçün <a href="https://yum.postgresql.org" target="_blank" rel="noopener">yum.postgresql.org</a>-da RPM təminatını koordinasiya edir, SLES üçün <a href="https://zypp.postgresql.org" target="_blank" rel="noopener">zypp.postgresql.org</a>-da paketləri idarə edir, PostgreSQL veb saytının təminatına kömək edir, Fedora və EPEL üçün PostgreSQL ilə əlaqəli paketlər qurur və PGDay.UK və digər konfransları təşkil etməyə kömək edir.' },
    'events.adnsu_thanks': { en: '<strong>Special thanks to <a href="https://www.linkedin.com/in/kamranagayev/" target="_blank" rel="noopener" style="color:var(--pg-blue-dark);">Kamran Agayev</a></strong> for organizational support in making this event possible.', az: 'Bu tədbirin reallaşmasında təşkilati dəstəyə görə <a href="https://www.linkedin.com/in/kamranagayev/" target="_blank" rel="noopener" style="color:var(--pg-blue-dark);"><strong>Kamran Agayev</strong></a>-ə xüsusi təşəkkür.' },
    'events.photo1_caption': { en: 'Devrim Gündüz presenting at ADNSU', az: 'Devrim Gündüz ADNSU-da çıxış edir' },
    'events.photo2_caption': { en: 'Enthusiastic audience at the ADNSU event', az: 'ADNSU tədbirində coşğulu auditoriya' },

    // Blog page
    'blog.title': { en: 'Blog Posts', az: 'Bloq Yazıları' },
    'blog.subtitle': { en: 'Articles, tutorials, and insights from the community about PostgreSQL.', az: 'İcmamızdan PostgreSQL haqqında məqalələr, dərsliklər və fikirlər.' },
    'blog.contribute': { en: 'Want to contribute? Log in with your member credentials and start writing!', az: 'Töhfə vermək istəyirsiniz? Üzv məlumatlarınızla daxil olun və yazmağa başlayın!' },
    'blog.loading': { en: 'Loading blog posts...', az: 'Bloq yazıları yüklənir...' },
    'blog.no_posts': { en: 'No blog posts yet. Be the first to', az: 'Hələ bloq yazısı yoxdur. İlk siz' },
    'blog.write_one': { en: 'write one', az: 'yazın' },
    'blog.back': { en: 'Back to Blog', az: 'Bloqa Qayıt' },
    'blog.views': { en: 'views', az: 'baxış' },

    // Jobs page
    'jobs.title': { en: 'PostgreSQL Job Board', az: 'PostgreSQL İş Elanları' },
    'jobs.subtitle': { en: 'Find PostgreSQL-related jobs in Azerbaijan and remote positions. Members can post job openings for free.', az: 'Azərbaycanda və uzaqdan PostgreSQL ilə bağlı iş imkanları tapın. Üzvlər pulsuz iş elanı yerləşdirə bilər.' },
    'jobs.post': { en: 'Post a Job', az: 'İş Elanı Ver' },
    'jobs.listings': { en: 'Job Listings', az: 'İş Elanları' },
    'jobs.no_jobs': { en: 'No jobs posted yet. Be the first to', az: 'Hələ iş elanı yoxdur. İlk siz' },
    'jobs.post_one': { en: 'post a job', az: 'elan verin' },
    'jobs.loading': { en: 'Loading jobs...', az: 'İş elanları yüklənir...' },
    'jobs.apply_email': { en: 'Apply via Email', az: 'E-poçtla Müraciət' },
    'jobs.company_website': { en: 'Company Website', az: 'Şirkət Saytı' },
    'jobs.view_details': { en: 'View Details', az: 'Ətraflı Bax' },
    'jobs.hide_details': { en: 'Hide Details', az: 'Gizlət' },
    'jobs.edit': { en: 'Edit', az: 'Redaktə' },
    'jobs.delete': { en: 'Delete', az: 'Sil' },
    'jobs.signin_required': { en: 'Please sign in or register first, then you can post a job.', az: 'Zəhmət olmasa əvvəlcə daxil olun və ya qeydiyyatdan keçin, sonra iş elanı verə bilərsiniz.' },

    // Contact page
    'contact.title': { en: 'Contact Us', az: 'Bizimlə Əlaqə' },
    'contact.subtitle': { en: 'Have a question, suggestion, or feedback? We\'d love to hear from you. Reach out through any of the channels below or use the contact form.', az: 'Sualınız, təklifiniz və ya rəyiniz var? Sizdən eşitmək istərdik. Aşağıdakı kanallardan hər hansı biri vasitəsilə əlaqə saxlayın və ya əlaqə formasından istifadə edin.' },
    'contact.send': { en: 'Send Us a Message', az: 'Bizə Mesaj Göndərin' },
    'contact.name': { en: 'Your Name', az: 'Adınız' },
    'contact.email': { en: 'Your Email', az: 'E-poçtunuz' },
    'contact.subject': { en: 'Subject', az: 'Mövzu' },
    'contact.message': { en: 'Message', az: 'Mesaj' },
    'contact.send_btn': { en: 'Send Message', az: 'Mesaj Göndər' },
    'contact.sent': { en: 'Message Sent!', az: 'Mesaj Göndərildi!' },
    'contact.sent_desc': { en: 'Thank you for reaching out. Your message has been sent to our team and we\'ll get back to you as soon as possible.', az: 'Müraciətiniz üçün təşəkkür edirik. Mesajınız komandamıza göndərildi və ən qısa zamanda sizə cavab verəcəyik.' },
    'contact.location': { en: 'Location', az: 'Məkan' },
    'contact.ph_email': { en: 'you@example.com', az: 'siz@misal.com' },
    'contact.ph_message': { en: "Tell us what's on your mind...", az: 'Fikirlərinizi bizimlə bölüşün...' },

    // Resources page
    'resources.title': { en: 'PostgreSQL Resources', az: 'PostgreSQL Resursları' },
    'resources.subtitle': { en: 'Curated collection of the best PostgreSQL learning materials, tools, and references recommended by the community.', az: 'İcmamız tərəfindən tövsiyə olunan ən yaxşı PostgreSQL öyrənmə materialları, alətləri və istinadların seçilmiş kolleksiyası.' },

    // FAQ page
    'faq.title': { en: 'Frequently Asked Questions', az: 'Tez-tez Verilən Suallar' },
    'faq.subtitle': { en: 'Find answers to common questions about membership, events, and PostgreSQL.', az: 'Üzvlük, tədbirlər və PostgreSQL haqqında ümumi suallara cavablar tapın.' },
    'faq.q1': { en: 'What is Azerbaijan PostgreSQL User Group?', az: 'Azerbaijan PostgreSQL User Group nədir?' },
    'faq.a1': { en: '<p>Azerbaijan PostgreSQL User Group (AZERPUG) is an open-source community founded in 2018 in Baku, Azerbaijan. We bring together PostgreSQL enthusiasts — developers, database administrators, students, and IT professionals — to learn, share knowledge, and grow together. We are the first and only dedicated PostgreSQL user group in Azerbaijan.</p>', az: '<p>AZERPUG (Azərbaycan PostgreSQL İstifadəçiləri Qrupu) 2018-ci ildə Bakıda təsis edilmiş açıq-mənbə icmasıdır. Biz PostgreSQL həvəskarlarını — proqramçıları, verilənlər bazası administratorlarını, tələbələri və İT mütəxəssislərini — öyrənmək, bilik paylaşmaq və birlikdə inkişaf etmək üçün bir araya gətiririk. Azərbaycanda ilk və yeganə PostgreSQL istifadəçi qrupuyuq.</p>' },
    'faq.q2': { en: 'Is this an official PostgreSQL organization?', az: 'Bu rəsmi PostgreSQL təşkilatıdır?' },
    'faq.a2': { en: '<p>Azerbaijan PostgreSQL User Group is a community-driven local user group, part of the broader global PostgreSQL community. We are recognized as a PostgreSQL user group and listed among community organizations worldwide. We are not a commercial entity — we are a volunteer-run open-source community.</p>', az: '<p>Azerbaijan PostgreSQL User Group icma tərəfindən idarə olunan yerli istifadəçi qrupudur və daha geniş qlobal PostgreSQL icmasının bir hissəsidir. Biz PostgreSQL istifadəçi qrupu kimi tanınırıq və dünya üzrə icma təşkilatları arasında siyahıya alınmışıq. Biz kommersiya qurumu deyilik — könüllü idarə olunan açıq-mənbə icmasıyıq.</p>' },
    'faq.q3': { en: 'Does the community have a hierarchy or leadership structure?', az: 'icmamızda ierarxiya və ya rəhbərlik strukturu varmı?' },
    'faq.a3': { en: '<p>No. We are a flat, open community. Every registered member is an equal participant — there are no titles, ranks, or hierarchy. All members can write blog posts, attend events, and contribute to the community. Community decisions are made collaboratively.</p>', az: '<p>Xeyr. Biz düz, açıq bir icmayıq. Hər qeydiyyatdan keçmiş üzv bərabər iştirakçıdır — heç bir titul, dərəcə və ya ierarxiya yoxdur. Bütün üzvlər bloq yazıları yaza, tədbirlərdə iştirak edə və icmaya töhfə verə bilər. İcma qərarları birgə qəbul edilir.</p>' },
    'faq.q4': { en: 'How can I contribute?', az: 'İcmaya necə töhfə verə bilərəm?' },
    'faq.a4': { en: '<p>There are many ways to contribute:</p><ul><li>Write blog posts sharing your PostgreSQL knowledge</li><li>Attend and participate in meetups and events</li><li>Suggest topics for workshops or talks</li><li>Help other members in discussions</li><li>Spread the word about the community</li><li>Contribute to our open-source website on <a href="https://github.com/valehdba/postgresql.az" target="_blank">GitHub</a></li></ul>', az: '<p>Töhfə vermənin bir çox yolu var:</p><ul><li>PostgreSQL biliyinizi paylaşan bloq yazıları yazın</li><li>Görüşlərdə və tədbirlərdə iştirak edin</li><li>Seminarlar və ya çıxışlar üçün mövzular təklif edin</li><li>Müzakirələrdə digər üzvlərə kömək edin</li><li>İcma haqqında məlumat yayın</li><li><a href="https://github.com/valehdba/postgresql.az" target="_blank">GitHub</a>-da açıq-mənbə saytımıza töhfə verin</li></ul>' },
    'faq.q5': { en: 'Is membership free?', az: 'Üzvlük pulsuzdur?' },
    'faq.a5': { en: '<p>Yes, membership is completely free and always will be. We are an open-source community — no fees, no subscriptions, no hidden costs.</p>', az: '<p>Bəli, üzvlük tamamilə pulsuzdur və həmişə belə olacaq. Biz açıq-mənbə icmasıyıq — heç bir ödəniş, abunə və ya gizli xərc yoxdur.</p>' },
    'faq.q6': { en: 'Who can join?', az: 'Kim qoşula bilər?' },
    'faq.a6': { en: "<p>Anyone interested in PostgreSQL! You don't need to be a database expert — beginners, students, developers, DBAs, managers, and curious learners are all welcome. You don't even need to be from Azerbaijan, though our focus is on the local community.</p>", az: '<p>PostgreSQL ilə maraqlanan hər kəs! Verilənlər bazası mütəxəssisi olmaq lazım deyil — yeni başlayanlar, tələbələr, proqramçılar, DBA-lar, menecerlər və maraqlı öyrənənlər hamısı xoş gəlir. Azərbaycandan olmaq belə lazım deyil, baxmayaraq ki, diqqətimiz yerli icmaya yönəlib.</p>' },
    'faq.q7': { en: 'How do I register?', az: 'Necə qeydiyyatdan keçim?' },
    'faq.a7': { en: '<p>Visit our <a href="/registration/">Registration page</a> and fill out the form. You\'ll need to provide your name, email, password, and PostgreSQL experience level. After registration you can immediately log in, write blog posts, and RSVP for events.</p>', az: '<p><a href="/registration/">Qeydiyyat səhifəmizi</a> ziyarət edin və formu doldurun. Adınızı, e-poçtunuzu və şifrənizi təqdim etməlisiniz. Qeydiyyatdan sonra dərhal daxil ola, bloq yazıları yaza və tədbirlərə RSVP edə bilərsiniz.</p>' },
    'faq.q8': { en: 'Can I write blog posts as a member?', az: 'Üzv kimi bloq yazıları yaza bilərəm?' },
    'faq.a8': { en: '<p>Yes! All members can write blog posts. Go to the <a href="/blogs/">Blog Posts</a> page, log in, and click "Write New Post." You can use the rich text editor, Markdown, or plain text. Posts are submitted for review before publishing to ensure quality.</p>', az: '<p>Bəli! Bütün üzvlər bloq yazıları yaza bilər. <a href="/blogs/">Bloq Yazıları</a> səhifəsinə keçin, daxil olun və "Yeni Yazı Yaz" düyməsini klikləyin. Zəngin mətn redaktoru, Markdown və ya sadə mətn istifadə edə bilərsiniz. Yazılar keyfiyyəti təmin etmək üçün dərc edilməzdən əvvəl nəzərdən keçirilməyə göndərilir.</p>' },
    'faq.q9': { en: 'How do I update my profile or change my password?', az: 'Profilimi necə yeniləyim və ya şifrəmi necə dəyişim?' },
    'faq.a9': { en: '<p>Log in and go to <a href="/profile/">My Profile</a>. From there you can edit your personal details (name, company, phone, etc.) and change your password. Your email cannot be changed — contact an admin if you need to update it.</p>', az: '<p>Daxil olun və <a href="/profile/">Profilim</a> səhifəsinə keçin. Oradan şəxsi məlumatlarınızı (ad, şirkət, telefon və s.) redaktə edə və şifrənizi dəyişə bilərsiniz. E-poçtunuzu dəyişmək mümkün deyil — yeniləmək lazımdırsa adminlə əlaqə saxlayın.</p>' },
    'faq.q10': { en: 'What is PostgreSQL?', az: 'PostgreSQL nədir?' },
    'faq.a10': { en: '<p>PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance. PostgreSQL is used by companies of all sizes — from startups to enterprises like Apple, Instagram, Spotify, and NASA.</p>', az: '<p>PostgreSQL 35 ildən artıq aktiv inkişafa malik güclü, açıq-mənbə obyekt-relational verilənlər bazası sistemidir. Etibarlılıq, funksional güclülük və performans baxımından güclü reputasiya qazanmışdır. PostgreSQL kiçik startaplardan Apple, Instagram, Spotify və NASA kimi müəssisələrə qədər hər ölçüdə şirkətlər tərəfindən istifadə olunur.</p>' },
    'faq.q11': { en: 'Is PostgreSQL free to use?', az: 'PostgreSQL istifadəsi pulsuzdur?' },
    'faq.a11': { en: '<p>Yes. PostgreSQL is released under the PostgreSQL License, a liberal open-source license similar to BSD/MIT. You can use, modify, and distribute it freely for any purpose — personal, commercial, or academic — without any licensing fees.</p>', az: '<p>Bəli. PostgreSQL BSD/MIT-ə bənzər liberal açıq-mənbə lisenziyası olan PostgreSQL Lisenziyası altında buraxılıb. Onu istənilən məqsəd üçün — şəxsi, kommersiya və ya akademik — heç bir lisenziya haqqı ödəmədən sərbəst istifadə edə, dəyişdirə və paylaya bilərsiniz.</p>' },
    'faq.q12': { en: 'How do I get started with PostgreSQL?', az: 'PostgreSQL-ə necə başlayım?' },
    'faq.a12': { en: '<p>Start by downloading PostgreSQL from <a href="https://www.postgresql.org/download/" target="_blank">postgresql.org/download</a>. Then follow the <a href="https://www.postgresql.org/docs/current/tutorial.html" target="_blank">official tutorial</a>. For more resources, check our <a href="/resources/">Resources page</a> with curated tutorials, books, and tools.</p>', az: '<p><a href="https://www.postgresql.org/download/" target="_blank">postgresql.org/download</a> saytından PostgreSQL-i yükləməklə başlayın. Sonra <a href="https://www.postgresql.org/docs/current/tutorial.html" target="_blank">rəsmi dərsliyi</a> izləyin. Daha çox resurs üçün seçilmiş dərsliklər, kitablar və alətlərlə <a href="/resources/">Resurslar səhifəmizi</a> yoxlayın.</p>' },
    'faq.q13': { en: 'What is the latest version of PostgreSQL?', az: 'PostgreSQL-in ən son versiyası hansıdır?' },
    'faq.a13': { en: '<p>PostgreSQL 17 is the latest major release (September 2024), with regular point releases for maintenance. PostgreSQL follows a yearly major release cycle. Visit <a href="https://www.postgresql.org/" target="_blank">postgresql.org</a> for the most current version information.</p>', az: '<p>PostgreSQL 17 ən son əsas buraxılışdır (Sentyabr 2024), müntəzəm texniki xidmət buraxılışları ilə. PostgreSQL illik əsas buraxılış dövrünü izləyir. Ən aktual versiya məlumatı üçün <a href="https://www.postgresql.org/" target="_blank">postgresql.org</a> saytına baş çəkin.</p>' },
    'faq.q14': { en: 'Why choose PostgreSQL over other databases?', az: 'Niyə digər verilənlər bazalarından PostgreSQL-i seçməli?' },
    'faq.a14': { en: '<p>PostgreSQL stands out for several reasons:</p><ul><li><strong>Standards compliant</strong> — most SQL-standard-compliant database</li><li><strong>Extensible</strong> — custom data types, functions, operators, and extensions</li><li><strong>Advanced features</strong> — JSON/JSONB, full-text search, geospatial (PostGIS), partitioning, logical replication</li><li><strong>Reliability</strong> — ACID compliant, MVCC, point-in-time recovery</li><li><strong>Community</strong> — large, active open-source community with excellent documentation</li><li><strong>No vendor lock-in</strong> — truly free and open source</li></ul>', az: '<p>PostgreSQL bir neçə səbəbə görə fərqlənir:</p><ul><li><strong>Standartlara uyğun</strong> — ən çox SQL standartına uyğun verilənlər bazası</li><li><strong>Genişləndirilə bilən</strong> — xüsusi məlumat tipləri, funksiyalar, operatorlar və əlavələr</li><li><strong>Qabaqcıl xüsusiyyətlər</strong> — JSON/JSONB, tam mətn axtarışı, geoməkan (PostGIS), bölmələmə, məntiqi replikasiya</li><li><strong>Etibarlılıq</strong> — ACID uyğun, MVCC, nöqtə-zaman bərpası</li><li><strong>İcma</strong> — əla sənədlərlə böyük, aktiv açıq-mənbə icması</li><li><strong>Satıcı bağımlılığı yoxdur</strong> — həqiqətən pulsuz və açıq mənbə</li></ul>' },

    // Community page
    'community.title': { en: 'PostgreSQL Global Community', az: 'PostgreSQL Qlobal İcması' },
    'community.subtitle': { en: 'The key organizations, communities, and projects that power the worldwide PostgreSQL ecosystem.', az: 'Dünya miqyasında PostgreSQL ekosistemini gücləndirən əsas təşkilatlar, icmalar və layihələr.' },
    'community.subtitle_full': { en: "PostgreSQL is more than a database — it's a worldwide open-source community of developers, contributors, and organizations dedicated to building the world's most advanced relational database. Here are the key organizations and resources that power the PostgreSQL ecosystem.", az: "PostgreSQL sadəcə verilənlər bazası deyil — dünyanın ən təkmil relational verilənlər bazasını qurmağa həsr olunmuş proqramçılar, töhfə verənlər və təşkilatlardan ibarət dünya miqyasında açıq-mənbə icmasıdır. PostgreSQL ekosistemini gücləndirən əsas təşkilatlar və resurslar bunlardır." },
    'community.info': { en: 'We are proud to be part of the global PostgreSQL community. We encourage all our members to engage with these organizations and support the open-source mission.', az: 'Biz qlobal PostgreSQL icmasının bir hissəsi olmaqdan qürur duyur. Bütün üzvlərimizi bu təşkilatlarla əlaqə qurmağa və açıq-mənbə missiyasını dəstəkləməyə təşviq edirik.' },
    'community.sidebar_onpage': { en: 'On This Page', az: 'Bu Səhifədə' },
    'community.pg_title': { en: 'PostgreSQL — The Official Website', az: 'PostgreSQL — Rəsmi Sayt' },
    'community.pg_desc': { en: "The official home of the PostgreSQL project. PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development. The website serves as the central hub for documentation, downloads, community news, release announcements, and developer resources. Whether you're just getting started or you're a seasoned database administrator, postgresql.org is the definitive resource for everything PostgreSQL.", az: 'PostgreSQL layihəsinin rəsmi evi. PostgreSQL 35 ildən artıq aktiv inkişafa malik güclü, açıq-mənbə obyekt-relational verilənlər bazası sistemidir. Sayt sənədlər, yükləmələr, icma xəbərləri, buraxılış elanları və proqramçı resursları üçün mərkəzi mərkəzdir. Yeni başlayan və ya təcrübəli verilənlər bazası administratoru olsanız da, postgresql.org PostgreSQL ilə bağlı hər şey üçün əsas resursdur.' },
    'community.pg_visit': { en: 'Visit PostgreSQL.org', az: 'PostgreSQL.org-a Baş Çəkin' },
    'community.pg_h1': { en: 'Official Documentation', az: 'Rəsmi Sənədlər' },
    'community.pg_h2': { en: 'Downloads & Installers', az: 'Yükləmələr və Quraşdırıcılar' },
    'community.pg_h3': { en: 'Release Announcements', az: 'Buraxılış Elanları' },
    'community.pg_h4': { en: 'Community & Mailing Lists', az: 'İcma və Poçt Siyahıları' },
    'community.pg_h5': { en: 'Developer Resources', az: 'Proqramçı Resursları' },
    'community.pgca_title': { en: 'PostgreSQL Community Association (PGCA)', az: 'PostgreSQL İcma Assosiasiyası (PGCA)' },
    'community.pgca_desc': { en: "The PostgreSQL Community Association (PGCA) is an official non-profit organization chartered by the PostgreSQL Core Team in 2011 to protect and manage the PostgreSQL brand assets. PGCA safeguards the Postgres trademarks — including the PostgreSQL name and the iconic Slonik elephant logo — ensuring they are used fairly and not misrepresented. The entire Postgres ecosystem, worth billions of dollars and used by millions worldwide, relies on PGCA's stewardship of these critical brand assets.", az: "PostgreSQL İcma Assosiasiyası (PGCA) PostgreSQL brend aktivlərini qorumaq və idarə etmək üçün 2011-ci ildə PostgreSQL Əsas Komandası tərəfindən təsis edilmiş rəsmi qeyri-kommersiya təşkilatıdır. PGCA Postgres ticarət nişanlarını — PostgreSQL adı və ikonik Slonik fil loqosu daxil olmaqla — qoruyur, onların ədalətli istifadəsini və yanlış təqdim edilməməsini təmin edir." },
    'community.pgca_visit': { en: 'Visit PGCA', az: 'PGCA-ya Baş Çəkin' },
    'community.pgca_h1': { en: 'Trademark Protection', az: 'Ticarət Nişanı Qorunması' },
    'community.pgca_h2': { en: 'Global Responsibility', az: 'Qlobal Məsuliyyət' },
    'community.pgca_h3': { en: 'Brand Asset Management', az: 'Brend Aktiv İdarəetməsi' },
    'community.pgca_h4': { en: 'Chartered by Core Team', az: 'Əsas Komanda tərəfindən Təsis Edilib' },
    'community.pgconf_title': { en: 'PGConf.EU — European PostgreSQL Conference', az: 'PGConf.EU — Avropa PostgreSQL Konfransı' },
    'community.pgconf_desc': { en: 'PGConf.EU is the premier European PostgreSQL conference, organized by PostgreSQL Europe (PGEU). It brings together PostgreSQL developers, administrators, architects, and enthusiasts from around the world for talks, workshops, and networking. The conference features sessions ranging from beginner tutorials to advanced internals, performance tuning, and new feature previews. PGConf.EU 2026 will be held in Valencia, Spain on October 20–23.', az: 'PGConf.EU PostgreSQL Europe (PGEU) tərəfindən təşkil olunan əsas Avropa PostgreSQL konfransıdır. Bütün dünyadan PostgreSQL proqramçılarını, administratorları, arxitektorları və həvəskarları çıxışlar, seminarlar və şəbəkələşmə üçün bir araya gətirir. Konfrans yeni başlayanlar üçün dərsliklərdən tutmuş təkmil daxili strukturlar, performans tənzimləməsi və yeni funksiya önizləmələrinə qədər sessiyalar təqdim edir.' },
    'community.pgconf_visit': { en: 'Visit PGConf.EU', az: 'PGConf.EU-ya Baş Çəkin' },
    'community.pgconf_h1': { en: 'Expert Talks & Workshops', az: 'Ekspert Çıxışları və Seminarlar' },
    'community.pgconf_h2': { en: 'Networking', az: 'Şəbəkələşmə' },
    'community.donate_title': { en: 'Donate to PostgreSQL', az: 'PostgreSQL-ə İanə Edin' },
    'community.donate_desc': { en: "PostgreSQL is free and open source, but the project depends on donations to sustain its infrastructure, development, and community efforts. Contributions go to recognized non-profit organizations that support the project: the PostgreSQL Community Association (PGCA) for trademark and brand protection, PostgreSQL Europe (PGEU) for European community support, PostgreSQL United States (PgUS) for education and advocacy, and Software in the Public Interest (SPI) for general project funding. Every donation, no matter the size, helps keep PostgreSQL free, reliable, and growing.", az: 'PostgreSQL pulsuz və açıq mənbədir, lakin layihə infrastrukturu, inkişafı və icma fəaliyyətini davam etdirmək üçün ianələrdən asılıdır. Töhfələr layihəni dəstəkləyən tanınmış qeyri-kommersiya təşkilatlarına gedir: ticarət nişanı və brend qorunması üçün PGCA, Avropa icma dəstəyi üçün PGEU, təhsil və müdafiə üçün PgUS və ümumi layihə maliyyələşdirilməsi üçün SPI. Hər ianə, ölçüsündən asılı olmayaraq, PostgreSQL-in pulsuz, etibarlı və böyüyən qalmasına kömək edir.' },
    'community.donate_visit': { en: 'Donate Now', az: 'İndi İanə Edin' },

    // About page
    'about.title': { en: 'About Us', az: 'Haqqımızda' },
    'about.subtitle': { en: 'The Azerbaijan PostgreSQL User Group — an open-source community for PostgreSQL enthusiasts, founded in 2018.', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupu — 2018-ci ildə təsis edilmiş PostgreSQL həvəskarları üçün açıq-mənbə icması.' },

    // Profile page
    'profile.title': { en: 'My Profile', az: 'Profilim' },
    'profile.login_title': { en: 'Member Login', az: 'Üzv Girişi' },
    'profile.email': { en: 'Email', az: 'E-poçt' },
    'profile.password': { en: 'Password', az: 'Şifrə' },
    'profile.signin': { en: 'Sign In', az: 'Daxil ol' },
    'profile.edit': { en: 'Edit Profile', az: 'Profili Redaktə Et' },
    'profile.change_pw': { en: 'Change Password', az: 'Şifrəni Dəyiş' },
    'profile.save': { en: 'Save Changes', az: 'Dəyişiklikləri Saxla' },
    'profile.cancel': { en: 'Cancel', az: 'Ləğv et' },

    // Sponsors page
    'sponsors.title': { en: 'Sponsors & Partners', az: 'Sponsorlar və Tərəfdaşlar' },
    'sponsors.subtitle': { en: 'We are a volunteer-run, open-source community. Sponsorships help us organize meetups, workshops, and grow the PostgreSQL ecosystem in Azerbaijan.', az: 'Biz könüllü idarə olunan, açıq-mənbə icmasıyıq. Sponsorluqlar bizə görüşlər, seminarlar təşkil etməyə və Azərbaycanda PostgreSQL ekosistemini inkişaf etdirməyə kömək edir.' },

    // Gallery page
    'gallery.title': { en: 'Photo Gallery', az: 'Foto Qalereya' },
    'gallery.subtitle': { en: 'Photos from our meetups, workshops, and PostgreSQL community events in Azerbaijan.', az: 'Azərbaycanda görüşlərimiz, seminarları və PostgreSQL icma tədbirlərindən fotolar.' },

    // Contribute page
    'contribute.title': { en: 'Contribute to Local Community', az: 'Yerli İcmaya Töhfə Ver' },
    'contribute.subtitle': { en: 'Our community is built by its members. Whether you have 30 minutes or 30 hours a month, there\'s a way for you to help grow the PostgreSQL community in Azerbaijan. Tell us how you\'d like to contribute!', az: 'İcmamız öz üzvləri tərəfindən qurulub. Ayda 30 dəqiqəniz və ya 30 saatınız olsa da, Azərbaycanda PostgreSQL icmasını inkişaf etdirməyə kömək etmək üçün bir yol var. Necə töhfə vermək istədiyinizi bizə bildirin!' },
    'contribute.info': { en: 'We are a volunteer-driven community. Every contribution — big or small — makes a real difference. No prior organizing experience needed!', az: 'Biz könüllü idarə olunan icmayıq. Hər töhfə — böyük və ya kiçik — həqiqi fərq yaradır. Əvvəlcədən təşkilatçılıq təcrübəsi tələb olunmur!' },
    'contribute.how': { en: 'How You Can Help', az: 'Necə Kömək Edə Bilərsiniz' },
    'contribute.signup': { en: 'Volunteer Sign-Up', az: 'Könüllü Qeydiyyatı' },
    'contribute.submit': { en: 'Submit Volunteer Application', az: 'Könüllü Müraciətini Göndər' },
    'contribute.thanks': { en: 'Thank You for Volunteering!', az: 'Könüllü Olduğunuz Üçün Təşəkkür Edirik!' },
    'contribute.thanks_desc': { en: 'Your application has been submitted. We\'ll be in touch to discuss how you can best contribute to the community.', az: 'Müraciətiniz göndərildi. icmamıza ən yaxşı şəkildə necə töhfə verə biləcəyinizi müzakirə etmək üçün sizinlə əlaqə saxlayacağıq.' },

    // News page
    'news.title': { en: 'PostgreSQL News', az: 'PostgreSQL Xəbərləri' },


    // About page sections
    'about.mission_title': { en: 'Our Mission', az: 'Missiyamız' },
    'about.mission_text': { en: 'Azerbaijan PostgreSQL User Group exists to grow and strengthen the PostgreSQL community in Azerbaijan. We believe that knowledge is most powerful when it\'s shared freely, and that open-source technology is the foundation of innovation.', az: 'Azerbaijan PostgreSQL User Group Azərbaycanda PostgreSQL icmasını inkişaf etdirmək və güclənirmək üçün mövcuddur. Biz inanırıq ki, bilik sərbəst paylaşıldıqda ən güclüdür və açıq-mənbə texnologiyası innovasiyanın əsasıdır.' },
    'about.values_title': { en: 'Community Values', az: 'İcma Dəyərləri' },
    'about.timeline_title': { en: 'Our Journey', az: 'Bizim Yolumuz' },
    'about.connect_title': { en: 'Connect With Us', az: 'Bizimlə Əlaqə' },
    'about.join_title': { en: 'Join the community Today', az: 'Bu gün icmamıza qoşulun' },
    'about.join_desc': { en: 'Become part of the PostgreSQL community in Azerbaijan. Registration is free and open to everyone.', az: 'Azərbaycandakı PostgreSQL icmasının bir hissəsi olun. Qeydiyyat pulsuz və hər kəs üçün açıqdır.' },
    'about.founded_label': { en: 'Founded', az: 'Təsis edilib' },
    'about.members_label': { en: 'Members', az: 'Üzvlər' },
    'about.events_label': { en: 'Events Held', az: 'Keçirilmiş Tədbirlər' },
    'about.posts_label': { en: 'Blog Posts', az: 'Bloq Yazıları' },

    // Sponsors page sections
    'sponsors.become': { en: 'Become Our First Sponsor', az: 'İlk Sponsorumuz Olun' },
    'sponsors.become_desc': { en: 'We\'re looking for organizations that believe in open-source technology and want to support the growing PostgreSQL community in Azerbaijan.', az: 'Açıq-mənbə texnologiyasına inanan və Azərbaycanda böyüyən PostgreSQL icmasını dəstəkləmək istəyən təşkilatlar axtarırıq.' },
    'sponsors.why': { en: 'Why Sponsor Us?', az: 'Niyə Bizi Sponsorluq Etməli?' },
    'sponsors.tiers': { en: 'Sponsorship Tiers', az: 'Sponsorluq Səviyyələri' },
    'sponsors.contact': { en: 'Interested in Sponsoring Us?', az: 'Bizi Sponsorluq Etməkdə Maraqlısınız?' },
    'sponsors.brand': { en: 'Brand Visibility', az: 'Brend Görünürlüyü' },
    'sponsors.talent': { en: 'Talent Access', az: 'İstedada Giriş' },
    'sponsors.speaking': { en: 'Speaking Opportunities', az: 'Çıxış İmkanları' },
    'sponsors.impact': { en: 'Community Impact', az: 'İcma Təsiri' },
    'sponsors.gold': { en: 'Gold', az: 'Qızıl' },
    'sponsors.silver': { en: 'Silver', az: 'Gümüş' },
    'sponsors.bronze': { en: 'Bronze', az: 'Bürünc' },

    // News page
    'news.subtitle': { en: 'Latest PostgreSQL releases, security updates, and community announcements.', az: 'Ən son PostgreSQL versiyaları, təhlükəsizlik yeniləmələri və icma elanları.' },
    'news.pg_releases': { en: 'PostgreSQL Releases', az: 'PostgreSQL Versiyaları' },
    'news.community_news': { en: 'Community News', az: 'İcma Xəbərləri' },

    // Resources sections
    'resources.docs': { en: 'Official Documentation', az: 'Rəsmi Sənədlər' },
    'resources.tutorials': { en: 'Tutorials & Guides', az: 'Dərsliklər və Bələdçilər' },
    'resources.books': { en: 'Books', az: 'Kitablar' },
    'resources.tools': { en: 'Tools & Extensions', az: 'Alətlər və Əlavələr' },
    'resources.courses': { en: 'Video Courses', az: 'Video Kurslar' },

    // FAQ sections
    'faq.about_azerpug': { en: 'About Us', az: 'Haqqımızda' },
    'faq.membership': { en: 'Membership', az: 'Üzvlük' },
    'faq.about_pg': { en: 'About PostgreSQL', az: 'PostgreSQL Haqqında' },

    // Gallery
    'gallery.all_albums': { en: 'All Albums', az: 'Bütün Albomlar' },
    'gallery.loading': { en: 'Loading gallery...', az: 'Qalereya yüklənir...' },
    'gallery.no_albums': { en: 'No photo albums yet. Photos from upcoming events will appear here!', az: 'Hələ foto albom yoxdur. Gələcək tədbirlərdən fotolar burada görünəcək!' },
    'gallery.back': { en: 'Back to Albums', az: 'Albomlara Qayıt' },

    // Contribute roles
    'contribute.event_organizer': { en: 'Event Organizer', az: 'Tədbir Təşkilatçısı' },
    'contribute.event_organizer_desc': { en: 'Help plan and run meetups, workshops, and conferences. Find venues, coordinate speakers, and manage logistics in Baku.', az: 'Görüşləri, seminarları və konfransları planlaşdırmağa və keçirməyə kömək edin. Bakıda məkanlar tapın, məruzəçiləri koordinasiya edin və logistikanı idarə edin.' },
    'contribute.speaker': { en: 'Speaker / Presenter', az: 'Məruzəçi / Təqdimatçı' },
    'contribute.speaker_desc': { en: 'Share your PostgreSQL knowledge at meetups and workshops. Topics can range from beginner introductions to advanced deep-dives.', az: 'Görüşlərdə və seminarlarda PostgreSQL biliyinizi paylaşın. Mövzular yeni başlayanlar üçün girişdən qabaqcıl mövzulara qədər ola bilər.' },
    'contribute.writer': { en: 'Content Writer', az: 'Məzmun Yazarı' },
    'contribute.writer_desc': { en: 'Write blog posts, tutorials, and guides in English or Azerbaijani. Help translate PostgreSQL documentation for local users.', az: 'İngilis və ya Azərbaycan dilində bloq yazıları, dərsliklər və bələdçilər yazın. Yerli istifadəçilər üçün PostgreSQL sənədlərinin tərcüməsinə kömək edin.' },
    'contribute.social': { en: 'Social Media & Outreach', az: 'Sosial Media və Əlaqə' },
    'contribute.social_desc': { en: 'Manage our Facebook, LinkedIn, Telegram, and YouTube channels. Promote events and share PostgreSQL news with the community.', az: 'Facebook, LinkedIn, Telegram və YouTube kanallarımızı idarə edin. Tədbirləri təbliğ edin və icma ilə PostgreSQL xəbərlərini paylaşın.' },
    'contribute.mentor': { en: 'Mentor / Tutor', az: 'Mentor / Təlimatçı' },
    'contribute.mentor_desc': { en: 'Guide beginners through their PostgreSQL journey. Answer questions, review code, and provide one-on-one support to new members.', az: 'Yeni başlayanları PostgreSQL yolçuluğunda istiqamətləndirin. Suallara cavab verin, kodu nəzərdən keçirin və yeni üzvlərə fərdi dəstək göstərin.' },
    'contribute.developer': { en: 'Website Developer', az: 'Veb Proqramçı' },
    'contribute.developer_desc': { en: 'Help improve the postgresql.az website. Fix bugs, add features, improve design — the code is open source on GitHub.', az: 'postgresql.az saytını yaxşılaşdırmağa kömək edin. Xətaları düzəldin, xüsusiyyətlər əlavə edin, dizaynı yaxşılaşdırın — kod GitHub-da açıq mənbədir.' },
    'contribute.sponsor_coord': { en: 'Sponsorship Coordinator', az: 'Sponsorluq Koordinatoru' },
    'contribute.sponsor_coord_desc': { en: 'Help find sponsors and partners for events. Build relationships with companies that use PostgreSQL in Azerbaijan.', az: 'Tədbirlər üçün sponsorlar və tərəfdaşlar tapmağa kömək edin. Azərbaycanda PostgreSQL istifadə edən şirkətlərlə əlaqələr qurun.' },
    'contribute.photographer': { en: 'Photographer / Videographer', az: 'Fotoqraf / Videoqraf' },
    'contribute.photographer_desc': { en: 'Capture photos and videos at events for our gallery and YouTube channel. Help with livestreaming meetups and talks.', az: 'Qalereyamız və YouTube kanalımız üçün tədbirlərdə foto və video çəkin. Görüşlərin və çıxışların canlı yayımına kömək edin.' },
    'contribute.form_header': { en: 'I Want to Contribute', az: 'Töhfə Vermək İstəyirəm' },
    'contribute.name': { en: 'Full Name', az: 'Tam Ad' },
    'contribute.email': { en: 'Email', az: 'E-poçt' },
    'contribute.phone': { en: 'Phone (optional)', az: 'Telefon (istəyə bağlı)' },
    'contribute.roles_label': { en: 'How would you like to contribute?', az: 'Necə töhfə vermək istərdiniz?' },
    'contribute.select_roles': { en: 'Select all roles that interest you', az: 'Sizi maraqlandıran bütün rolları seçin' },
    'contribute.cb_organizer_desc': { en: 'Plan and run meetups, find venues', az: 'Görüşlər planlaşdırın, məkanlar tapın' },
    'contribute.cb_speaker_desc': { en: 'Give talks at events', az: 'Tədbirlərdə çıxış edin' },
    'contribute.cb_writer_desc': { en: 'Write blogs, tutorials, guides', az: 'Bloqlar, dərsliklər, bələdçilər yazın' },
    'contribute.cb_social_desc': { en: 'Manage channels, promote events', az: 'Kanalları idarə edin, tədbirləri təbliğ edin' },
    'contribute.cb_mentor_desc': { en: 'Guide and support beginners', az: 'Yeni başlayanlara dəstək olun' },
    'contribute.cb_developer_desc': { en: 'Improve postgresql.az', az: 'postgresql.az-ı yaxşılaşdırın' },
    'contribute.cb_sponsor_desc': { en: 'Find sponsors and partners', az: 'Sponsorlar və tərəfdaşlar tapın' },
    'contribute.cb_photo_desc': { en: 'Capture events, livestream', az: 'Tədbirləri çəkin, canlı yayım' },
    'contribute.experience': { en: 'Relevant Experience', az: 'Müvafiq Təcrübə' },
    'contribute.availability': { en: 'Availability', az: 'Müsaitlik' },
    'contribute.avail_prompt': { en: '— How much time can you commit? —', az: '— Nə qədər vaxt ayıra bilərsiniz? —' },
    'contribute.avail_monthly': { en: 'A few hours per month', az: 'Ayda bir neçə saat' },
    'contribute.avail_weekly': { en: 'A few hours per week', az: 'Həftədə bir neçə saat' },
    'contribute.avail_events': { en: 'Only during events', az: 'Yalnız tədbirlər zamanı' },
    'contribute.avail_flexible': { en: 'Flexible — depends on the task', az: 'Çevik — tapşırıqdan asılıdır' },
    'contribute.anything_else': { en: 'Anything Else?', az: 'Başqa Bir Şey?' },
    'contribute.ph_name': { en: 'Your full name', az: 'Tam adınız' },
    'contribute.ph_email': { en: 'you@example.com', az: 'siz@misal.com' },
    'contribute.ph_phone': { en: '+994 XX XXX XX XX', az: '+994 XX XXX XX XX' },
    'contribute.ph_experience': { en: 'Tell us about any relevant experience — organizing events, public speaking, writing, social media management, photography, development, etc. No experience required!', az: 'Müvafiq təcrübəniz haqqında danışın — tədbirlərin təşkili, ictimai çıxışlar, yazıçılıq, sosial media idarəetməsi, fotoqrafiya, proqramlaşdırma və s. Təcrübə tələb olunmur!' },
    'contribute.ph_message': { en: 'Any ideas, suggestions, or questions about contributing...', az: 'Töhfə vermə haqqında hər hansı fikir, təklif və ya sual...' },

    // Profile page
    'profile.first_name': { en: 'First Name', az: 'Ad' },
    'profile.last_name': { en: 'Last Name', az: 'Soyad' },
    'profile.company': { en: 'Company', az: 'Şirkət' },
    'profile.job_title': { en: 'Job Title', az: 'Vəzifə' },
    'profile.linkedin': { en: 'LinkedIn', az: 'LinkedIn' },
    'profile.phone': { en: 'Phone', az: 'Telefon' },
    'profile.notes': { en: 'Personal Notes', az: 'Şəxsi Qeydlər' },
    'profile.newsletter': { en: 'Newsletter', az: 'Xəbər Bülleteni' },
    'profile.member_since': { en: 'Member Since', az: 'Üzv olub' },
    'profile.view_profile': { en: 'View Profile', az: 'Profili Gör' },
    'profile.edit_profile': { en: 'Edit Profile', az: 'Profili Redaktə Et' },

    // Common
    'common.loading': { en: 'Loading...', az: 'Yüklənir...' },
    'common.back_home': { en: 'Back to Home', az: 'Ana Səhifəyə' },
    'common.read_more': { en: 'Read more', az: 'Daha çox oxu' },
    'common.login': { en: 'Log In', az: 'Daxil ol' },
    'common.logout': { en: 'Log Out', az: 'Çıxış' },
    'common.register': { en: 'Register', az: 'Qeydiyyat' },
    'common.profile': { en: 'Profile', az: 'Profil' },
    'common.requirements': { en: 'Requirements', az: 'Tələblər' },
    'common.full_time': { en: 'Full-time', az: 'Tam iş günü' },
    'common.part_time': { en: 'Part-time', az: 'Yarım iş günü' },
    'common.contract': { en: 'Contract', az: 'Müqavilə' },
    'common.remote': { en: 'Remote', az: 'Uzaqdan' },
    'common.community': { en: 'Community', az: 'İcma' },

    // Sidebar titles (shared across pages)
    'about.sidebar_onpage': { en: 'On This Page', az: 'Bu Səhifədə' },
    'sponsors.sidebar_title': { en: 'Sponsorship', az: 'Sponsorluq' },
    'sponsors.contact_link': { en: 'Get in Touch', az: 'Əlaqə Saxlayın' },
    'faq.sidebar_topics': { en: 'FAQ Topics', az: 'TVS Mövzuları' },
    'faq.sidebar_help': { en: 'Need Help?', az: 'Kömək Lazımdır?' },
    'faq.still_questions': { en: 'Still have questions?', az: 'Hələ sualınız var?' },
    'faq.cant_find': { en: "Can't find what you're looking for? Reach out to us directly.", az: 'Axtardığınızı tapa bilmirsiniz? Birbaşa bizimlə əlaqə saxlayın.' },
    'gallery.sidebar_title': { en: 'Gallery', az: 'Qalereya' },
    'news.sidebar_sources': { en: 'News Sources', az: 'Xəbər Mənbələri' },
    'jobs.sidebar_title': { en: 'Job Board', az: 'İş Elanları' },
    'profile.sidebar_account': { en: 'My Account', az: 'Hesabım' },

    // Jobs form labels
    'jobs.form_title': { en: 'Job Title', az: 'İş Başlığı' },
    'jobs.form_company': { en: 'Company', az: 'Şirkət' },
    'jobs.form_location': { en: 'Location', az: 'Məkan' },
    'jobs.form_type': { en: 'Job Type', az: 'İş Növü' },
    'jobs.form_desc': { en: 'Description', az: 'Təsvir' },
    'jobs.form_reqs': { en: 'Requirements', az: 'Tələblər' },
    'jobs.form_salary': { en: 'Salary Range', az: 'Maaş Aralığı' },
    'jobs.form_url': { en: 'Apply URL', az: 'Müraciət Linki' },
    'jobs.form_email': { en: 'Apply Email', az: 'Müraciət E-poçtu' },
    'jobs.form_tags': { en: 'Tags', az: 'Etiketlər' },
    'jobs.ph_title': { en: 'e.g. Senior PostgreSQL DBA', az: 'məs. Baş PostgreSQL DBA' },
    'jobs.ph_company': { en: 'Company name', az: 'Şirkət adı' },
    'jobs.ph_location': { en: 'e.g. Baku, Azerbaijan', az: 'məs. Bakı, Azərbaycan' },

    // Code of Conduct
    'coc.title': { en: 'Code of Conduct', az: 'Davranış Qaydaları' },
    'coc.subtitle': { en: 'Azerbaijan PostgreSQL User Group is committed to providing a welcoming, inclusive, and harassment-free experience for everyone. We explicitly adopt the <strong>PostgreSQL Community Code of Conduct</strong> as our own.', az: 'Azerbaijan PostgreSQL User Group hər kəs üçün qonaqpərvər, inklüziv və təcavüzdən azad mühit təmin etməyə sadiqdir. Biz rəsmi <strong>PostgreSQL İcma Davranış Qaydalarını</strong> qəbul edirik.' },
    'coc.commitment_title': { en: 'Our Commitment', az: 'Öhdəliyimiz' },
    'coc.commitment_text': { en: 'As a recognized PostgreSQL User Group, Azerbaijan PostgreSQL User Group fully adopts the official PostgreSQL Community Code of Conduct. This policy applies to all community spaces — including meetups, events, online discussions, social media groups, and this website.', az: 'Tanınmış PostgreSQL İstifadəçi Qrupu olaraq, Azerbaijan PostgreSQL User Group rəsmi PostgreSQL İcma Davranış Qaydalarını tam qəbul edir. Bu siyasət bütün icma məkanlarına — o cümlədən görüşlər, tədbirlər, onlayn müzakirələr, sosial media qrupları və bu veb sayta şamil edilir.' },
    'coc.read_official': { en: 'Read the Official PostgreSQL Code of Conduct', az: 'Rəsmi PostgreSQL Davranış Qaydalarını Oxuyun' },
    'coc.summary_title': { en: 'Summary of Key Principles', az: 'Əsas Prinsiplərin Xülasəsi' },
    'coc.summary_intro': { en: 'The PostgreSQL Community Code of Conduct is built on a simple idea: treat everyone with respect, professionalism, and consideration. It applies to all community interactions, whether in person or online.', az: 'PostgreSQL İcma Davranış Qaydaları sadə bir fikir üzərində qurulub: hər kəsə hörmət, peşəkarlıq və diqqətlə yanaşın. Bu, istər şəxsən, istərsə də onlayn bütün icma qarşılıqlı əlaqələrinə şamil edilir.' },
    'coc.expected_title': { en: 'Expected Behavior', az: 'Gözlənilən Davranış' },
    'coc.expected_1': { en: 'Be considerate, respectful, and collaborative', az: 'Diqqətli, hörmətli və əməkdaşlığa açıq olun' },
    'coc.expected_2': { en: 'Refrain from demeaning, discriminatory, or harassing behavior and speech', az: 'Alçaldıcı, ayrı-seçkilik edən və ya təcavüzkar davranış və nitqdən çəkinin' },
    'coc.expected_3': { en: 'Be mindful of your surroundings and fellow community members', az: 'Ətrafınıza və icma üzvlərinizə diqqətli olun' },
    'coc.expected_4': { en: 'Attempt collaboration before conflict', az: 'Münaqişədən əvvəl əməkdaşlığa cəhd edin' },
    'coc.expected_5': { en: 'Alert community organizers if you notice violations or someone in distress', az: 'Pozuntular və ya çətinlikdə olan birini görsəniz icma təşkilatçılarını xəbərdar edin' },
    'coc.unacceptable_title': { en: 'Unacceptable Behavior', az: 'Qəbuledilməz Davranış' },
    'coc.unacceptable_1': { en: 'Intimidating, harassing, abusive, discriminatory, or derogatory conduct', az: 'Hədələyici, təcavüzkar, zorakı, ayrı-seçkilik edən və ya alçaldıcı davranış' },
    'coc.unacceptable_2': { en: 'Offensive verbal comments related to gender, sexual orientation, race, religion, or disability', az: 'Cinsiyyət, cinsi oriyentasiya, irq, din və ya əlillik ilə bağlı təhqiredici şifahi şərhlər' },
    'coc.unacceptable_3': { en: 'Inappropriate use of nudity, sexual images, or violent content in community spaces', az: 'İcma məkanlarında çılpaqlıq, cinsi təsvirlər və ya zorakılıq məzmununun uyğunsuz istifadəsi' },
    'coc.unacceptable_4': { en: 'Deliberate intimidation, stalking, or unwelcome photography/recording', az: 'Qəsdən hədələmə, izləmə və ya xoşagəlməz fotoçəkmə/videoyazma' },
    'coc.unacceptable_5': { en: 'Sustained disruption of talks, events, or online discussions', az: 'Çıxışların, tədbirlərin və ya onlayn müzakirələrin davamlı pozulması' },
    'coc.unacceptable_6': { en: 'Any form of unwelcome physical contact or sexual attention', az: 'Xoşagəlməz fiziki təmas və ya cinsi diqqətin hər hansı forması' },
    'coc.scope_title': { en: 'Scope', az: 'Əhatə Dairəsi' },
    'coc.scope_intro': { en: 'This Code of Conduct applies to all community spaces, including but not limited to:', az: 'Bu Davranış Qaydaları bütün icma məkanlarına şamil edilir, o cümlədən:' },
    'coc.scope_1': { en: 'In-person meetups, workshops, and conferences organized by Azerbaijan PostgreSQL User Group', az: 'Azerbaijan PostgreSQL User Group tərəfindən təşkil edilən canlı görüşlər, seminarlar və konfranslar' },
    'coc.scope_2': { en: 'Our website (postgresql.az) — blog posts, comments, and contact messages', az: 'Veb saytımız (postgresql.az) — bloq yazıları, şərhlər və əlaqə mesajları' },
    'coc.scope_3': { en: 'our social media groups (Facebook, LinkedIn, Telegram)', az: 'Sosial media qruplarımız (Facebook, LinkedIn, Telegram)' },
    'coc.scope_4': { en: 'our GitHub repositories and discussions', az: 'our GitHub repoları və müzakirələri' },
    'coc.scope_5': { en: 'Any communication conducted in the context of community activities', az: 'İcma fəaliyyəti kontekstində aparılan istənilən ünsiyyət' },
    'coc.reporting_title': { en: 'Reporting Violations', az: 'Pozuntuların Bildirilməsi' },
    'coc.reporting_text': { en: 'If you experience or witness behavior that violates this Code of Conduct, please report it immediately. All reports will be handled with discretion and confidentiality.', az: 'Bu Davranış Qaydalarını pozan davranışla qarşılaşsanız və ya şahid olsanız, zəhmət olmasa dərhal bildirin. Bütün bildirişlər ehtiyatla və məxfi şəkildə araşdırılacaq.' },
    'coc.reporting_pg': { en: 'You may also refer to the <a href="https://www.postgresql.org/about/policies/coc_committee/" target="_blank" rel="noopener" style="font-weight:700;">PostgreSQL Code of Conduct Committee</a> for guidance on the broader community process.', az: 'Daha geniş icma prosesi üzrə rəhbərlik üçün <a href="https://www.postgresql.org/about/policies/coc_committee/" target="_blank" rel="noopener" style="font-weight:700;">PostgreSQL Davranış Qaydaları Komitəsinə</a> də müraciət edə bilərsiniz.' },
    'coc.contact_email': { en: 'Email', az: 'E-poçt' },
    'coc.contact_form': { en: 'Contact Form', az: 'Əlaqə Formu' },
    'coc.contact_form_link': { en: 'Send a Message', az: 'Mesaj Göndərin' },
    'coc.official_title': { en: 'Official Reference', az: 'Rəsmi İstinad' },
    'coc.official_text': { en: 'This page is a summary. The full, authoritative version is maintained by the PostgreSQL Global Development Group.', az: 'Bu səhifə xülasədir. Tam və rəsmi versiya PostgreSQL Qlobal İnkişaf Qrupu tərəfindən dəstəklənir.' },
    'coc.official_btn': { en: 'PostgreSQL Code of Conduct (Full Text)', az: 'PostgreSQL Davranış Qaydaları (Tam Mətn)' },
    'nav.coc': { en: 'Code of Conduct', az: 'Davranış Qaydaları' },
    'footer.coc': { en: 'Code of Conduct', az: 'Davranış Qaydaları' },

    // -------- Committees page --------
    'nav.committees': { en: 'Committees', az: 'Komitələr' },
    'committees.title': { en: 'Community Committees', az: 'İcma Komitələri' },
    'committees.subtitle': { en: "AZERPUG is governed by four volunteer-led committees. Following PostgreSQL global community practice, each committee has a clear charter, recommended composition, and an open application process — anyone in the community can apply.", az: 'AZERPUG dörd könüllü komitə tərəfindən idarə olunur. PostgreSQL qlobal icma praktikasına uyğun olaraq, hər komitənin aydın nizamnaməsi, tövsiyə olunan tərkibi və açıq müraciət prosesi var — icmanın hər üzvü müraciət edə bilər.' },
    'committees.forming_notice': { en: '<strong>These committees are currently being formed.</strong> Open seats are highlighted below — apply through the <a href="/committees/apply/">application form</a>. Decisions follow the PostgreSQL community principle of openness and rotation: terms are limited and selections are made transparently.', az: '<strong>Bu komitələr hazırda formalaşır.</strong> Açıq yerlər aşağıda göstərilib — <a href="/committees/apply/">müraciət formu</a> vasitəsilə müraciət edin. Qərarlar PostgreSQL icmasının açıqlıq və rotasiya prinsipinə uyğun verilir: vəzifə müddətləri məhduddur və seçim şəffaf aparılır.' },
    'committees.sidebar_committees': { en: 'Committees', az: 'Komitələr' },
    'committees.sidebar_get_involved': { en: 'Get Involved', az: 'Qoşul' },
    'committees.sidebar_apply': { en: 'Apply to a Committee', az: 'Komitəyə Müraciət Et' },
    'committees.coc_short': { en: 'Code of Conduct', az: 'Davranış Qaydaları' },
    'committees.program_short': { en: 'Program', az: 'Proqram' },
    'committees.organizing_short': { en: 'Organizing', az: 'Təşkilatçılıq' },
    'committees.advocacy_short': { en: 'Advocacy', az: 'Təbliğat' },

    'committees.principle_terms_h': { en: 'Limited Terms & Rotation', az: 'Məhdud Müddət və Rotasiya' },
    'committees.principle_terms_p': { en: 'No permanent leadership. Coordinators rotate every 6 months; members serve fixed terms with regular rotation, so responsibility is shared and the community avoids entrenchment.', az: 'Daimi liderlik yoxdur. Koordinatorlar 6 ayda bir rotasiya olunur; üzvlər müntəzəm rotasiya ilə müəyyən müddətə xidmət edir — beləliklə məsuliyyət bölüşdürülür və icmada möhkəmlənmə yaranmır.' },
    'committees.principle_open_h': { en: 'Open & Transparent', az: 'Açıq və Şəffaf' },
    'committees.principle_open_p': { en: 'Charters, decisions, and meeting summaries are public. Applications are open to any community member.', az: 'Nizamnamələr, qərarlar və iclas xülasələri açıqdır. Müraciətlər icmanın hər üzvü üçün açıqdır.' },
    'committees.principle_diverse_h': { en: 'Flat & Diverse', az: 'Düz Struktur və Müxtəliflik' },
    'committees.principle_diverse_p': { en: 'Every member has an equal voice — there is no hierarchy. Members are drawn from different companies and backgrounds; no single employer holds a majority.', az: 'Hər üzvün bərabər səsi var — ierarxiya yoxdur. Üzvlər müxtəlif şirkət və sahələrdən cəlb olunur; heç bir tək işəgötürən çoxluq təşkil edə bilməz.' },

    'committees.coc_name': { en: 'Code of Conduct Committee (CoCC)', az: 'Davranış Qaydaları Komitəsi (CoCC)' },
    'committees.coc_tagline': { en: 'Receives and investigates Code of Conduct complaints, ensuring a safe and welcoming community.', az: 'Davranış Qaydaları ilə bağlı şikayətləri qəbul edir və araşdırır, təhlükəsiz və xoş icma mühitini təmin edir.' },
    'committees.coc_desc': { en: 'The CoC Committee is the confidential body that handles all reports of Code of Conduct violations across AZERPUG events, channels, and activities. Members must demonstrate impartiality, discretion, and good judgement. The committee follows the official <a href="/coc/">PostgreSQL Code of Conduct</a> as adopted by AZERPUG.', az: 'CoC Komitəsi AZERPUG tədbirləri, kanalları və fəaliyyətlərində Davranış Qaydalarının pozulması ilə bağlı bütün məruzələrə baxan məxfi orqandır. Üzvlər qərəzsizlik, ehtiyatlılıq və sağlam mühakimə nümayiş etdirməlidir. Komitə AZERPUG tərəfindən qəbul edilmiş rəsmi <a href="/coc/">PostgreSQL Davranış Qaydaları</a>na əməl edir.' },
    'committees.coc_size': { en: '5 members', az: '5 üzv' },
    'committees.coc_term': { en: 'Members serve 1 year; coordinators rotate every 6 months', az: 'Üzvlər 1 il xidmət edir; koordinatorlar 6 ayda bir rotasiya olunur' },
    'committees.coc_composition': { en: '2 Coordinators (rotating), 1 Diversity, 1 External, 1 Member-at-large', az: '2 Koordinator (rotasiya), 1 Müxtəliflik, 1 Kənar, 1 Geniş təmsilçilik üzvü' },

    'committees.program_name': { en: 'Program Committee', az: 'Proqram Komitəsi' },
    'committees.program_tagline': { en: 'Selects meetup and conference talks via double-blind review.', az: 'Görüş və konfrans çıxışlarını ikitərəfli kor (double-blind) qiymətləndirmə ilə seçir.' },
    'committees.program_desc': { en: 'The Program Committee runs the Call for Papers (CFP) for AZERPUG meetups and conferences, evaluates proposals on merit, and shapes the technical agenda. To minimise bias, reviews are <strong>double-blind</strong>: speaker names and affiliations are hidden from reviewers during scoring. Members recuse themselves from reviewing proposals where they have a conflict of interest.', az: 'Proqram Komitəsi AZERPUG görüşləri və konfransları üçün Call for Papers (CFP) prosesini idarə edir, təklifləri keyfiyyətə görə qiymətləndirir və texniki gündəliyi formalaşdırır. Qərəzliliyi azaltmaq üçün rəylər <strong>ikitərəfli kor (double-blind)</strong> aparılır: qiymətləndirmə zamanı natiqlərin adları və mənsubiyyətləri reviewer-lərdən gizlədilir. Üzvlər maraqlar toqquşması olan təklifləri qiymətləndirməkdən imtina edir.' },
    'committees.program_size': { en: '9 members', az: '9 üzv' },
    'committees.program_term': { en: 'Members per CFP cycle; coordinators rotate every cycle', az: 'Üzvlər hər CFP dövrü üçün; koordinatorlar hər dövrdə rotasiya olunur' },
    'committees.program_method': { en: 'Double-blind review, conflict-of-interest recusal', az: 'İkitərəfli kor qiymətləndirmə, maraqlar toqquşmasında imtina' },

    'committees.organizing_name': { en: 'Organizing & Volunteers Committee', az: 'Təşkilatçılıq və Könüllülər Komitəsi' },
    'committees.organizing_tagline': { en: 'Runs event logistics: venue, registration, A/V, sponsors, on-site coordination.', az: 'Tədbir logistikasını idarə edir: məkan, qeydiyyat, A/V, sponsorlar, hadisə günü koordinasiya.' },
    'committees.organizing_desc': { en: 'This committee turns plans into reality. Responsibilities include venue scouting and contracts, sponsorship coordination, registration management, A/V and streaming, on-site signage, volunteer coordination, and post-event reporting. It works closely with the Program Committee for talks and the Advocacy Committee for promotion.', az: 'Bu komitə planları reallığa çevirir. Vəzifələrə məkan axtarışı və müqavilələr, sponsorluq koordinasiyası, qeydiyyatın idarə edilməsi, A/V və canlı yayım, məkan tabloları, könüllülərin koordinasiyası və tədbir sonrası hesabat daxildir. Çıxışlar üzrə Proqram Komitəsi, təbliğat üzrə isə Advocacy Komitəsi ilə sıx əməkdaşlıq edir.' },
    'committees.organizing_size': { en: '9 members', az: '9 üzv' },
    'committees.organizing_term': { en: 'Members rolling per event; coordinators rotate between events', az: 'Üzvlər hər tədbirdə davamlı; koordinatorlar tədbirlər arasında rotasiya olunur' },
    'committees.organizing_skills': { en: 'Logistics, vendor mgmt, A/V, hospitality', az: 'Logistika, satıcılarla iş, A/V, qonaqpərvərlik' },

    'committees.advocacy_name': { en: 'Advocacy & Marketing Committee', az: 'Advocacy və Marketinq Komitəsi' },
    'committees.advocacy_tagline': { en: "Owns AZERPUG's voice — social media, press, brand, and community outreach.", az: 'AZERPUG-ın səsidir — sosial media, mətbuat, brend və icma əlaqələri.' },
    'committees.advocacy_desc': { en: 'The Advocacy Committee promotes PostgreSQL and AZERPUG in Azerbaijan and abroad. Responsibilities include managing official channels (LinkedIn, Facebook, Telegram, YouTube, X), writing announcements, coordinating with PostgreSQL Europe / global press contacts, designing event posters, and engaging with universities and student groups to grow the next generation of contributors.', az: 'Advocacy Komitəsi PostgreSQL və AZERPUG-ı Azərbaycanda və xaricdə təbliğ edir. Vəzifələrə rəsmi kanalların (LinkedIn, Facebook, Telegram, YouTube, X) idarə edilməsi, elanların yazılması, PostgreSQL Europe və qlobal mətbuat ilə koordinasiya, tədbir posterlərinin dizaynı və növbəti nəsil töhfəçilərini yetişdirmək üçün universitetlər və tələbə qrupları ilə əməkdaşlıq daxildir.' },
    'committees.advocacy_size': { en: '7 members', az: '7 üzv' },
    'committees.advocacy_term': { en: 'Members serve 1 year; coordinators rotate every 6 months', az: 'Üzvlər 1 il xidmət edir; koordinatorlar 6 ayda bir rotasiya olunur' },
    'committees.advocacy_skills': { en: 'Writing, design, social media, PR, AZ/EN/RU', az: 'Yazı, dizayn, sosial media, PR, AZ/EN/RU' },

    'committees.meta_size': { en: 'Size', az: 'Tərkib' },
    'committees.meta_term': { en: 'Term', az: 'Müddət' },
    'committees.meta_composition': { en: 'Composition', az: 'Tərkib' },
    'committees.meta_method': { en: 'Method', az: 'Metod' },
    'committees.meta_skills': { en: 'Useful skills', az: 'Faydalı bacarıqlar' },
    'committees.meta_contact': { en: 'Contact', az: 'Əlaqə' },
    'committees.label_members': { en: 'Members', az: 'Üzvlər' },

    'committees.seat_open': { en: 'Open Seat', az: 'Açıq Yer' },
    'committees.seat_coordinator': { en: 'Coordinator (rotating)', az: 'Koordinator (rotasiya)' },
    'committees.seat_member': { en: 'Member', az: 'Üzv' },
    'committees.seat_lead': { en: 'Lead', az: 'Lider' },
    'committees.seat_chair': { en: 'Chair', az: 'Sədr' },
    'committees.seat_diversity': { en: 'Diversity Member', az: 'Müxtəliflik Üzvü' },
    'committees.seat_external': { en: 'External Reviewer', az: 'Kənar Reviewer' },
    'committees.seat_reviewer': { en: 'Reviewer', az: 'Reviewer' },
    'committees.seat_logistics': { en: 'Logistics', az: 'Logistika' },
    'committees.seat_sponsorship': { en: 'Sponsorship', az: 'Sponsorluq' },
    'committees.seat_volunteer': { en: 'Volunteer Coordinator', az: 'Könüllü Koordinator' },
    'committees.seat_social': { en: 'Social Media', az: 'Sosial Media' },
    'committees.seat_content': { en: 'Content / Writing', az: 'Kontent / Yazı' },
    'committees.seat_comms': { en: 'Communications', az: 'Kommunikasiya' },
    'committees.seat_press': { en: 'Press / Outreach', az: 'Mətbuat / Xarici Əlaqələr' },
    'committees.btn_apply_short': { en: 'Apply', az: 'Müraciət Et' },

    // -------- Member bios --------
    'committees.member_valeh_bio': { en: 'AZERPUG founder · Baku · PostgreSQL DBA', az: 'AZERPUG təsisçisi · Bakı · PostgreSQL DBA' },
    'committees.member_gulay_bio': { en: 'AZERPUG community · Baku', az: 'AZERPUG icması · Bakı' },
    'committees.member_zaur_bio': { en: 'Database Expert · Baku', az: 'Verilənlər Bazası üzrə Mütəxəssis · Bakı' },
    'committees.member_eltun_bio': { en: 'Senior PostgreSQL DBA · Baku', az: 'Baş PostgreSQL DBA · Bakı' },
    'committees.member_vusal_bio': { en: 'AZERPUG community · Baku', az: 'AZERPUG icması · Bakı' },
    'committees.member_mehman_bio': { en: 'Senior PostgreSQL DBA · Baku', az: 'Baş PostgreSQL DBA · Bakı' },
    'committees.member_kamran_bio': { en: 'Oracle ACE Director · 2× OCM · AzerOUG founder · AzerCell', az: 'Oracle ACE Director · 2× OCM · AzerOUG təsisçisi · AzerCell' },
    'committees.member_mahir_bio': { en: 'Oracle ACE · AzerOUG board · Baku', az: 'Oracle ACE · AzerOUG idarə heyəti · Bakı' },
    'committees.member_maharram_bio': { en: 'Database Expert · PostgreSQL · Oracle · MongoDB · MySQL · MSSQL', az: 'Verilənlər Bazası üzrə Mütəxəssis · PostgreSQL · Oracle · MongoDB · MySQL · MSSQL' },

    'committees.coc_seat_coordinator_desc': { en: 'Rotates every 6 months. Coordinates the committee, ensures the process is followed, serves as the primary point of contact. Not a leader — equal voice in decisions.', az: '6 ayda bir rotasiya olunur. Komitəni koordinasiya edir, prosesin gözlənilməsini təmin edir, əsas əlaqə nöqtəsi rolunu oynayır. Lider deyil — qərarlarda bərabər səs.' },
    'committees.coc_seat_member_desc': { en: 'Equal voice in committee decisions; no formal hierarchy among members.', az: 'Komitə qərarlarında bərabər səs; üzvlər arasında rəsmi ierarxiya yoxdur.' },
    'committees.coc_seat_diversity_desc': { en: 'Brings perspective from underrepresented groups; helps surface blind spots.', az: 'Təmsilçiliyi az olan qruplardan baxış gətirir; kor nöqtələri üzə çıxarmağa kömək edir.' },
    'committees.coc_seat_external_desc': { en: 'Independent of the AZERPUG board and active sponsors; provides outside check.', az: 'AZERPUG idarə heyətindən və aktiv sponsorlardan asılı deyil; kənar yoxlama təmin edir.' },
    'committees.program_seat_coordinator_desc': { en: 'Runs the CFP cycle, schedules review rounds, breaks ties when reviewers split. Rotates per cycle.', az: 'CFP dövrünü idarə edir, qiymətləndirmə dövrlərini planlaşdırır, reviewer-lər bərabər olduqda qərar verir. Hər dövrdə rotasiya.' },
    'committees.program_seat_reviewer_desc': { en: 'Reviews proposals double-blind across PostgreSQL topics.', az: 'PostgreSQL mövzuları üzrə təklifləri ikitərəfli kor formada qiymətləndirir.' },
    'committees.org_seat_coordinator_desc': { en: 'Coordinates event delivery end-to-end and the run-of-show. Rotates between events.', az: 'Tədbirin başdan-sona icrasını və ssenarisini koordinasiya edir. Tədbirlər arasında rotasiya.' },
    'committees.org_seat_logistics_desc': { en: 'Venue, catering, A/V, signage, on-site flow.', az: 'Məkan, qida, A/V, tablo, hadisə günü axın.' },
    'committees.org_seat_sponsorship_desc': { en: 'Identifies and onboards sponsors, manages contracts and benefits.', az: 'Sponsorları tapır və cəlb edir, müqavilələr və imtiyazları idarə edir.' },
    'committees.org_seat_volunteer_desc': { en: 'Recruits and coordinates day-of volunteers.', az: 'Tədbir günü könüllüləri cəlb edir və koordinasiya edir.' },
    'committees.org_seat_comms_desc': { en: 'Day-of communications: signage, announcements, attendee comms, on-site updates.', az: 'Tədbir günü kommunikasiyaları: tablolar, elanlar, iştirakçı əlaqələri, canlı yeniliklər.' },
    'committees.adv_seat_coordinator_desc': { en: 'Coordinates the channel calendar and brand voice. Rotates every 6 months.', az: 'Kanal təqvimini və brend səsini koordinasiya edir. 6 ayda bir rotasiya olunur.' },
    'committees.adv_seat_social_desc': { en: 'Posts to LinkedIn / Facebook / Telegram / YouTube / X.', az: 'LinkedIn / Facebook / Telegram / YouTube / X kanallarında paylaşımlar edir.' },
    'committees.adv_seat_content_desc': { en: 'Writes announcements, blog posts, recap pieces in AZ/EN.', az: 'AZ/EN dillərində elanlar, bloq yazıları, tədbir xülasələri yazır.' },
    'committees.adv_seat_press_desc': { en: 'Press relations and outreach to PostgreSQL Europe / global community contacts.', az: 'Mətbuat əlaqələri və PostgreSQL Europe / qlobal icma əlaqələri.' },

    'committees.cta_title': { en: 'Want to help govern AZERPUG?', az: 'AZERPUG-ın idarə olunmasına kömək etmək istəyirsən?' },
    'committees.cta_desc': { en: 'All committees have open seats. Applications are reviewed openly and decisions are communicated to applicants. No prior committee experience required — just a commitment to PostgreSQL and to the community.', az: 'Bütün komitələrdə açıq yerlər var. Müraciətlər açıq qiymətləndirilir və qərarlar bütün müraciətçilərə bildirilir. Əvvəlki komitə təcrübəsi tələb olunmur — yalnız PostgreSQL-ə və icmaya bağlılıq.' },
    'committees.cta_btn': { en: 'Apply to a Committee', az: 'Komitəyə Müraciət Et' },

    // -------- Apply page --------
    'apply.title': { en: 'Apply to a Committee', az: 'Komitəyə Müraciət' },
    'apply.subtitle': { en: "Help shape AZERPUG's future. Applications are reviewed openly by the existing committee (or, for the first cohort, by the founding board) and decisions are communicated to every applicant. No prior committee experience needed.", az: 'AZERPUG-ın gələcəyini formalaşdırmağa kömək edin. Müraciətlər mövcud komitə tərəfindən (ilk dəstə üçün isə təsisçi şura tərəfindən) açıq qiymətləndirilir və qərarlar hər müraciətçiyə bildirilir. Əvvəlki komitə təcrübəsi tələb olunmur.' },
    'apply.sidebar_apply': { en: 'Apply', az: 'Müraciət' },
    'apply.sidebar_process': { en: 'How It Works', az: 'Necə işləyir' },
    'apply.sidebar_form': { en: 'Application Form', az: 'Müraciət Formu' },
    'apply.sidebar_committees': { en: 'Committees', az: 'Komitələr' },
    'apply.sidebar_other': { en: 'Other Ways', az: 'Digər Yollar' },

    'apply.process_title': { en: 'How the process works', az: 'Proses necə işləyir' },
    'apply.step1_h': { en: 'Apply', az: 'Müraciət' },
    'apply.step1_p': { en: 'Submit this form. Choose one or more committees and tell us why you want to serve.', az: 'Bu formanı doldurun. Bir və ya bir neçə komitə seçin və xidmət etmək istəyinizin səbəbini yazın.' },
    'apply.step2_h': { en: 'Review', az: 'Qiymətləndirmə' },
    'apply.step2_p': { en: 'The relevant committee reviews applications. CoC applications are reviewed confidentially.', az: 'Müvafiq komitə müraciətləri qiymətləndirir. CoC müraciətləri məxfi qiymətləndirilir.' },
    'apply.step3_h': { en: 'Conversation', az: 'Söhbət' },
    'apply.step3_p': { en: 'Shortlisted applicants have a brief call (online) to align on responsibilities and time commitment.', az: 'Qısa siyahıya düşən müraciətçilərlə vəzifələr və vaxt öhdəliyini razılaşdırmaq üçün qısa onlayn görüş keçirilir.' },
    'apply.step4_h': { en: 'Decision', az: 'Qərar' },
    'apply.step4_p': { en: 'Every applicant receives a written decision. Selected members start with an onboarding call.', az: 'Hər müraciətçiyə yazılı qərar göndərilir. Seçilmiş üzvlər tanışlıq görüşü ilə başlayır.' },
    'apply.privacy_note': { en: '<strong>Privacy:</strong> Your application is shared only with the relevant committee and the AZERPUG board. Code of Conduct applications are kept strictly confidential.', az: '<strong>Məxfilik:</strong> Müraciətiniz yalnız müvafiq komitə və AZERPUG idarə heyəti ilə paylaşılır. Davranış Qaydaları komitəsinə müraciətlər ciddi şəkildə məxfi saxlanılır.' },

    'apply.form_title': { en: 'Application form', az: 'Müraciət formu' },
    'apply.card_header': { en: 'Committee Application', az: 'Komitə Müraciəti' },
    'apply.label_committees': { en: 'Which committee(s) are you applying to?', az: 'Hansı komitə(lər)ə müraciət edirsiniz?' },
    'apply.hint_select_one': { en: 'Pick one or more — overlap is fine.', az: 'Bir və ya bir neçəsini seçin — birgə müraciət olur.' },
    'apply.coc_pick_desc': { en: 'Confidentially handle CoC reports. Requires impartiality and discretion.', az: 'CoC məruzələri ilə məxfi məşğul olur. Qərəzsizlik və ehtiyatlılıq tələb edir.' },
    'apply.program_pick_desc': { en: 'Review and select talks via double-blind review for meetups and conferences.', az: 'Görüş və konfranslar üçün çıxışları ikitərəfli kor qiymətləndirmə ilə seçir.' },
    'apply.organizing_pick_desc': { en: 'Run event logistics: venue, A/V, registration, sponsors, on-site.', az: 'Tədbir logistikasını idarə edir: məkan, A/V, qeydiyyat, sponsorlar, hadisə günü.' },
    'apply.advocacy_pick_desc': { en: 'Social media, press, brand, and outreach to grow the community.', az: 'İcmanı böyütmək üçün sosial media, mətbuat, brend və əlaqələr.' },

    'apply.label_name': { en: 'Full Name', az: 'Tam Ad' },
    'apply.ph_name': { en: 'Your full name', az: 'Tam adınız' },
    'apply.label_email': { en: 'Email', az: 'E-poçt' },
    'apply.ph_email': { en: 'you@example.com', az: 'siz@example.com' },
    'apply.label_phone': { en: 'Phone (optional)', az: 'Telefon (məcburi deyil)' },
    'apply.ph_phone': { en: '+994 XX XXX XX XX', az: '+994 XX XXX XX XX' },
    'apply.label_location': { en: 'Location', az: 'Yer' },
    'apply.ph_location': { en: 'City, Country', az: 'Şəhər, Ölkə' },
    'apply.label_employer': { en: 'Current employer / role', az: 'Hazırkı iş yeri / vəzifə' },
    'apply.ph_employer': { en: 'Company — Job title', az: 'Şirkət — Vəzifə' },
    'apply.label_pg_years': { en: 'Years of PostgreSQL experience', az: 'PostgreSQL təcrübəsi (il)' },
    'apply.opt_pg_pick': { en: '— Select —', az: '— Seçin —' },
    'apply.opt_pg_lt1': { en: 'Less than 1 year', az: '1 ildən az' },
    'apply.opt_pg_1_3': { en: '1–3 years', az: '1–3 il' },
    'apply.opt_pg_3_7': { en: '3–7 years', az: '3–7 il' },
    'apply.opt_pg_gt7': { en: '7+ years', az: '7+ il' },
    'apply.opt_pg_user': { en: 'User / enthusiast (not a primary tool)', az: 'İstifadəçi / həvəskar (əsas iş aləti deyil)' },
    'apply.label_linkedin': { en: 'LinkedIn (optional)', az: 'LinkedIn (məcburi deyil)' },
    'apply.label_github': { en: 'GitHub / website (optional)', az: 'GitHub / sayt (məcburi deyil)' },

    'apply.label_motivation': { en: 'Why do you want to serve?', az: 'Niyə xidmət etmək istəyirsiniz?' },
    'apply.ph_motivation': { en: 'What draws you to this committee? What do you hope to contribute?', az: 'Bu komitə sizi nə ilə cəlb edir? Hansı töhfəni vermək istəyirsiniz?' },
    'apply.label_experience': { en: 'Relevant experience', az: 'Müvafiq təcrübə' },
    'apply.ph_experience': { en: 'Open source involvement, prior committees, organizing, public speaking, writing, mediation — anything relevant.', az: 'Açıq mənbə fəaliyyəti, əvvəlki komitələr, təşkilatçılıq, ictimai çıxışlar, yazı, vasitəçilik — müvafiq olan hər şey.' },
    'apply.label_time': { en: 'Time commitment you can offer', az: 'Verə biləcəyiniz vaxt öhdəliyi' },
    'apply.opt_time_pick': { en: '— Select —', az: '— Seçin —' },
    'apply.opt_time_2_5': { en: '2–5 hours / month', az: 'Ayda 2–5 saat' },
    'apply.opt_time_5_10': { en: '5–10 hours / month', az: 'Ayda 5–10 saat' },
    'apply.opt_time_10p': { en: '10+ hours / month', az: 'Ayda 10+ saat' },
    'apply.opt_time_event': { en: 'Event-based (busy around events, quiet otherwise)', az: 'Tədbir əsaslı (tədbirlər ətrafında məşğul, qalan vaxt sakit)' },
    'apply.label_languages': { en: 'Languages', az: 'Dillər' },
    'apply.ph_languages': { en: 'e.g. Azerbaijani, English, Russian', az: 'məs. Azərbaycan, İngilis, Rus' },

    'apply.coc_extra_h': { en: 'Code of Conduct — additional questions', az: 'Davranış Qaydaları — əlavə suallar' },
    'apply.label_coc_role': { en: 'Which seat are you applying for?', az: 'Hansı yerə müraciət edirsiniz?' },
    'apply.opt_coc_pick': { en: '— Open to any —', az: '— Hər birinə —' },
    'apply.opt_coc_coordinator': { en: 'Coordinator (rotating)', az: 'Koordinator (rotasiya)' },
    'apply.opt_coc_diversity': { en: 'Diversity Member', az: 'Müxtəliflik Üzvü' },
    'apply.opt_coc_external': { en: 'External Reviewer (independent of AZERPUG board / sponsors)', az: 'Kənar Reviewer (AZERPUG idarə heyətindən / sponsorlardan asılı deyil)' },
    'apply.opt_coc_member': { en: 'Member-at-large', az: 'Geniş təmsilçilik üzvü' },
    'apply.hint_coc_seat': { en: 'Composition: 5 members — 2 Coordinators (rotating every 6 months), 1 Diversity, 1 External, 1 Member-at-large.', az: 'Tərkib: 5 üzv — 2 Koordinator (6 ayda bir rotasiya), 1 Müxtəliflik, 1 Kənar, 1 Geniş təmsilçilik üzvü.' },
    'apply.label_coc_independence': { en: 'Conflicts of interest (please disclose)', az: 'Maraqlar toqquşması (zəhmət olmasa açıqlayın)' },
    'apply.ph_coc_independence': { en: "Are you on the AZERPUG board? Employed by an active sponsor? Related to other applicants? Honesty here is what we're looking for.", az: 'AZERPUG idarə heyətindəsiniz? Aktiv sponsorda işləyirsiniz? Digər müraciətçilərlə qohumluq əlaqəniz var? Burada açıqlıq tələb olunur.' },
    'apply.label_coc_scenario': { en: 'How would you handle a complaint where the accused is a well-known speaker?', az: 'İttiham olunanın tanınmış natiq olduğu şikayəti necə idarə edərdiniz?' },
    'apply.ph_coc_scenario': { en: "A short paragraph on your approach — there's no single right answer.", az: 'Yanaşmanız haqqında qısa mətn — vahid doğru cavab yoxdur.' },

    'apply.program_extra_h': { en: 'Program — additional questions', az: 'Proqram — əlavə suallar' },
    'apply.label_pg_topics': { en: 'Topics you can review competently', az: 'Səlahiyyətlə qiymətləndirə biləcəyiniz mövzular' },
    'apply.ph_topics': { en: 'e.g. replication & HA, performance tuning, SQL/PLPGSQL, security, extensions, internals, cloud Postgres', az: 'məs. replication və HA, performans, SQL/PLPGSQL, təhlükəsizlik, extension-lar, daxili struktur, cloud Postgres' },
    'apply.label_review_xp': { en: 'Prior review / CFP experience (optional)', az: 'Əvvəlki review / CFP təcrübəsi (məcburi deyil)' },
    'apply.ph_review_xp': { en: 'Have you reviewed for any conference / journal / paper? Briefly describe.', az: 'Hər hansı konfrans / jurnal / məqalə üçün review etmisiniz? Qısa təsvir edin.' },

    'apply.organizing_extra_h': { en: 'Organizing — additional questions', az: 'Təşkilatçılıq — əlavə suallar' },
    'apply.label_org_skills': { en: 'Which areas do you want to own?', az: 'Hansı sahələri öz üzərinizə götürmək istəyirsiniz?' },
    'apply.ph_org_skills': { en: 'e.g. venue / catering, registration & check-in, A/V & streaming, sponsorship, swag & signage, volunteers', az: 'məs. məkan / qida, qeydiyyat və check-in, A/V və yayım, sponsorluq, swag və tablo, könüllülər' },
    'apply.label_org_xp': { en: 'Past events you helped run (optional)', az: 'Təşkilatında iştirak etdiyiniz əvvəlki tədbirlər (məcburi deyil)' },
    'apply.ph_org_xp': { en: 'Conferences, meetups, hackathons, etc.', az: 'Konfranslar, meetup-lar, hackathon-lar və s.' },

    'apply.advocacy_extra_h': { en: 'Advocacy / Marketing — additional questions', az: 'Advocacy / Marketinq — əlavə suallar' },
    'apply.label_adv_channels': { en: 'Channels you can run / contribute to', az: 'İdarə edə biləcəyiniz / töhfə verə biləcəyiniz kanallar' },
    'apply.ph_adv_channels': { en: 'e.g. LinkedIn writing, Telegram moderation, YouTube editing, Canva/Figma posters, Azerbaijani-language announcements, university outreach', az: 'məs. LinkedIn yazıları, Telegram moderasiya, YouTube montajı, Canva/Figma posterlər, azərbaycan dilində elanlar, universitetlərlə əlaqə' },
    'apply.label_adv_sample': { en: 'Link to a sample of your writing or design (optional)', az: 'Yazı və ya dizayn nümunəsinin linki (məcburi deyil)' },

    'apply.ack_coc': { en: 'I have read and agree to abide by the <a href="/coc/" target="_blank">AZERPUG Code of Conduct</a>. I understand committee members are expected to model the CoC in all community spaces.', az: 'AZERPUG <a href="/coc/" target="_blank">Davranış Qaydaları</a>nı oxudum və əməl etməyə razıyam. Komitə üzvlərinin bütün icma məkanlarında CoC-a nümunə olmalı olduğunu başa düşürəm.' },
    'apply.submit': { en: 'Submit Application', az: 'Müraciəti Göndər' },
    'apply.back': { en: 'Back to Committees', az: 'Komitələrə qayıt' },
    'apply.thanks': { en: 'Application received — thank you!', az: 'Müraciət qəbul edildi — təşəkkürlər!' },
    'apply.thanks_desc': { en: "We'll review it within 2–3 weeks and write back either way. If shortlisted, you'll be invited to a brief call.", az: 'Onu 2–3 həftə ərzində qiymətləndirib mütləq cavab yazacağıq. Qısa siyahıya düşsəniz, qısa görüşə dəvət olunacaqsınız.' },
    'apply.thanks_back': { en: 'View Committees', az: 'Komitələrə Bax' },

    // -------- Extensions & Tools page --------
    'nav.extensions': { en: 'Extensions', az: 'Genişlənmələr' },
    'ext.sidebar_browse': { en: 'Browse', az: 'Bax' },
    'ext.sidebar_categories': { en: 'Categories', az: 'Kateqoriyalar' },
    'ext.sidebar_links': { en: 'Links', az: 'Linklər' },
    'ext.sidebar_submit': { en: 'Submit Yours', az: 'Öz Layihəni Göndər' },
    'ext.featured': { en: 'Featured', az: 'Seçilmiş' },
    'ext.all_projects': { en: 'All Projects', az: 'Bütün Layihələr' },
    'ext.link_contribute': { en: 'Contribute', az: 'Töhfə Ver' },
    'ext.cat_all': { en: 'All', az: 'Hamısı' },
    'ext.cat_extension': { en: 'Extensions', az: 'Genişlənmələr' },
    'ext.cat_tool': { en: 'Tools', az: 'Alətlər' },
    'ext.cat_cli': { en: 'CLIs', az: 'CLI-lar' },
    'ext.cat_library': { en: 'Libraries', az: 'Kitabxanalar' },
    'ext.cat_sample': { en: 'Sample / Example', az: 'Nümunə' },
    'ext.cat_other': { en: 'Other', az: 'Digər' },
    'ext.hero_title': { en: 'Community Extensions & Tools', az: 'İcma Genişlənmələri və Alətləri' },
    'ext.hero_tagline': { en: "Open-source PostgreSQL extensions, CLIs, and developer tools — built by AZERPUG community members. Browse what's already there, star what you like, and submit your own work to help the next developer ship faster.", az: 'Açıq mənbə PostgreSQL genişlənmələri, CLI-lar və proqramçı alətləri — AZERPUG icma üzvləri tərəfindən yaradılıb. Mövcud layihələrə baxın, bəyəndiklərinizə ulduz verin və növbəti proqramçının daha tez işini görməsinə kömək etmək üçün öz işinizi göndərin.' },
    'ext.cta_submit': { en: 'Submit Your Project', az: 'Layihəni Göndər' },
    'ext.cta_browse': { en: 'Browse Projects', az: 'Layihələrə Bax' },
    'ext.search_ph': { en: 'Search by name, description, or tag…', az: 'Ad, təsvir və ya teqlə axtar…' },
    'ext.featured_title': { en: 'Featured Projects', az: 'Seçilmiş Layihələr' },
    'ext.all_title': { en: 'All Community Projects', az: 'Bütün İcma Layihələri' },
    'ext.submit_title': { en: 'Submit Your Tool / Extension', az: 'Alətinizi / Genişlənmənizi Göndərin' },
    'ext.submit_subtitle': { en: 'Share your open-source PostgreSQL project', az: 'Açıq mənbə PostgreSQL layihənizi paylaşın' },
    'ext.submit_intro': { en: "Built a PostgreSQL extension, CLI, monitoring tool, library, or sample app and want to share it with the AZERPUG community? Drop the GitHub URL below — we'll review and add it to the list. All projects must be open-source.", az: 'PostgreSQL genişlənməsi, CLI, monitorinq aləti, kitabxana və ya nümunə tətbiq yaratmısınız və AZERPUG icmasıyla paylaşmaq istəyirsiniz? GitHub URL-ni aşağıda qeyd edin — yoxlayıb siyahıya əlavə edəcəyik. Bütün layihələr açıq mənbə olmalıdır.' },
    'ext.lbl_github': { en: 'GitHub URL', az: 'GitHub URL' },
    'ext.lbl_name': { en: 'Project Name', az: 'Layihə Adı' },
    'ext.lbl_category': { en: 'Category', az: 'Kateqoriya' },
    'ext.lbl_lang': { en: 'Primary Language', az: 'Əsas Dil' },
    'ext.lbl_tags': { en: 'Tags', az: 'Teqlər' },
    'ext.lbl_tags_help': { en: 'Comma-separated', az: 'Vergüllə ayrılmış' },
    'ext.lbl_desc': { en: 'Short Description', az: 'Qısa Təsvir' },
    'ext.lbl_your_name': { en: 'Your Name', az: 'Adınız' },
    'ext.lbl_your_email': { en: 'Your Email', az: 'E-poçtunuz' },
    'ext.btn_submit': { en: 'Submit Project', az: 'Layihəni Göndər' },
    'ext.submit_note': { en: 'Reviewed within a few days.', az: 'Bir neçə gün ərzində yoxlanılır.' },
    'ext.via_issue': { en: 'Or submit via a GitHub issue', az: 'Və ya GitHub issue vasitəsilə göndərin' },
    'ext.sending': { en: 'Submitting…', az: 'Göndərilir…' },
    'ext.err_url': { en: 'GitHub URL must look like https://github.com/owner/repo', az: 'GitHub URL https://github.com/owner/repo formatında olmalıdır' },
    'ext.err_anon': { en: 'Please provide your name and email — or <a href="/login/">sign in</a>.', az: 'Zəhmət olmasa adınız və e-poçtunuzu yazın — və ya <a href="/login/">daxil olun</a>.' },
    'ext.err_no_rpc': { en: 'Submission service is not yet enabled on the server. Please submit via a GitHub issue for now.', az: 'Göndərmə xidməti hələ serverdə aktivləşməyib. Hazırda zəhmət olmasa GitHub issue vasitəsilə göndərin.' },
    'ext.err_failed': { en: 'Submission failed:', az: 'Göndərmə alınmadı:' },
    'ext.err_net': { en: 'Network error. Please try again, or submit via a GitHub issue.', az: 'Şəbəkə xətası. Yenidən cəhd edin və ya GitHub issue vasitəsilə göndərin.' },
    'ext.ok_submitted': { en: '<i class="fas fa-check-circle"></i> Thanks! Your project has been submitted for review. We\'ll publish it on the page once approved.', az: '<i class="fas fa-check-circle"></i> Təşəkkürlər! Layihəniz qiymətləndirmə üçün göndərildi. Təsdiqdən sonra səhifədə dərc ediləcək.' },
  };

  // Get/set language
  function getLang() { return localStorage.getItem('azerpug_lang') || 'en'; }
  function setLang(lang) { localStorage.setItem('azerpug_lang', lang); }

  // Translate function
  function t(key) {
    var lang = getLang();
    if (T[key]) return T[key][lang] || T[key]['en'] || key;
    return key;
  }

  // Apply translations to all elements with data-i18n attribute
  function applyTranslations() {
    var lang = getLang();
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (T[key]) {
        var text = T[key][lang] || T[key]['en'];
        if (el.tagName === 'INPUT' && el.type !== 'submit') {
          el.placeholder = text;
        } else if (el.tagName === 'OPTION') {
          el.textContent = text;
        } else {
          el.textContent = text;
        }
      }
    });
    // Update data-i18n-html for elements with HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[key]) el.innerHTML = T[key][lang] || T[key]['en'];
    });
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T[key]) el.placeholder = T[key][lang] || T[key]['en'];
    });
  }

  // Add language toggle button to navbar
  function addLangToggle() {
    var authDiv = document.getElementById('navbarAuth');
    if (!authDiv) return;
    var lang = getLang();
    var btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.title = lang === 'en' ? 'English' : 'Azərbaycanca';
    btn.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #ccc;border-radius:50%;font-size:0.7rem;font-weight:700;color:#515151;cursor:pointer;transition:all 0.15s;font-family:Maven Pro,sans-serif;';
    btn.textContent = lang === 'en' ? 'EN' : 'AZ';
    btn.onclick = function() {
      var newLang = getLang() === 'en' ? 'az' : 'en';
      setLang(newLang);
      applyTranslations();
      btn.textContent = newLang === 'en' ? 'EN' : 'AZ';
      btn.title = newLang === 'en' ? 'English' : 'Azərbaycanca';
      // Dispatch event for page-specific translations
      window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: newLang } }));
    };
    // Insert before the first child (dark mode button)
    authDiv.insertBefore(btn, authDiv.firstChild);
  }

  // Expose globally
  window.azT = t;
  window.azGetLang = getLang;
  window.azSetLang = setLang;
  window.azApplyTranslations = applyTranslations;
  window.azTranslations = T;

  // Init
  function initLang() {
    addLangToggle();
    applyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
