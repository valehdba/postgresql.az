/* =============================================
   AZERPUG Language System (AZ/EN)
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

    // Footer
    'footer.privacy': { en: 'Privacy policy', az: 'Məxfilik siyasəti' },
    'footer.website': { en: 'About the website', az: 'Sayt haqqında' },
    'footer.copyright': { en: 'Copyright © 2018-2025 Azerbaijan PostgreSQL User Group (AZERPUG)', az: 'Müəllif hüquqları © 2018-2025 Azərbaycan PostgreSQL İstifadəçiləri Qrupu (AZERPUG)' },

    // Homepage - Hero
    'home.title': { en: 'Azerbaijan PostgreSQL User Group', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupu' },
    'home.subtitle': { en: 'The open-source community for PostgreSQL enthusiasts in Azerbaijan', az: 'Azərbaycanda PostgreSQL həvəskarları üçün açıq-mənbə icması' },
    'home.subtitle_az': { en: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupu', az: 'Azerbaijan PostgreSQL User Group' },
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

    // Homepage - Mission
    'mission.title': { en: 'Our Mission', az: 'Missiyamız' },
    'mission.p1': { en: 'AZERPUG exists to grow and strengthen the PostgreSQL community in Azerbaijan. We believe that knowledge is most powerful when it\'s shared freely, and that open-source technology is the foundation of innovation.', az: 'AZERPUG Azərbaycanda PostgreSQL icmasını inkişaf etdirmək və güclənirmək üçün mövcuddur. Biz inanırıq ki, bilik sərbəst paylaşıldıqda ən güclüdür və açıq-mənbə texnologiyası innovasiyanın əsasıdır.' },
    'mission.p2': { en: 'Our mission is to provide a platform where anyone — from curious beginners to seasoned database experts — can learn, share, and collaborate around PostgreSQL. We organize meetups, publish educational content, and connect professionals who work with the world\'s most advanced open-source relational database.', az: 'Missiyamız hər kəsin — maraqlı yeni başlayandan təcrübəli verilənlər bazası mütəxəssisinə qədər — PostgreSQL ətrafında öyrənə, paylaşa və əməkdaşlıq edə biləcəyi bir platforma təmin etməkdir. Biz görüşlər təşkil edirik, təhsil məzmunu dərc edirik və dünyanın ən təkmil açıq-mənbə relational verilənlər bazası ilə işləyən mütəxəssisləri birləşdiririk.' },
    'mission.p3': { en: 'As an open community, AZERPUG has no hierarchy — every registered member is an equal participant. We welcome developers, DBAs, students, IT managers, and anyone interested in PostgreSQL to join us and contribute to the community.', az: 'Açıq icma olaraq, AZERPUG-da ierarxiya yoxdur — hər qeydiyyatdan keçmiş üzv bərabər iştirakçıdır. Biz proqramçıları, DBA-ları, tələbələri, İT menecerlərini və PostgreSQL ilə maraqlanan hər kəsi icmamıza qoşulmağa və töhfə verməyə dəvət edirik.' },

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
    'login.subtitle': { en: 'Sign in to your AZERPUG account', az: 'AZERPUG hesabınıza daxil olun' },
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

    // Registration page
    'reg.title': { en: 'Join AZERPUG', az: 'AZERPUG-a Qoşul' },
    'reg.subtitle': { en: 'Become a member of the Azerbaijan PostgreSQL User Group — it\'s free, open, and takes less than a minute.', az: 'Azərbaycan PostgreSQL İstifadəçiləri Qrupunun üzvü olun — pulsuz, açıq və bir dəqiqədən az vaxt alır.' },
    'reg.create': { en: 'Create Your Account', az: 'Hesabınızı Yaradın' },
    'reg.google_quick': { en: 'Quick registration with your Google account:', az: 'Google hesabınızla sürətli qeydiyyat:' },
    'reg.or_email': { en: 'or register with email', az: 'və ya e-poçtla qeydiyyat' },
    'reg.account_info': { en: 'Account Information', az: 'Hesab Məlumatları' },
    'reg.first_name': { en: 'First Name', az: 'Ad' },
    'reg.last_name': { en: 'Last Name', az: 'Soyad' },
    'reg.email': { en: 'Email Address', az: 'E-poçt ünvanı' },
    'reg.password': { en: 'Password', az: 'Şifrə' },
    'reg.confirm_password': { en: 'Confirm Password', az: 'Şifrəni Təsdiqləyin' },
    'reg.professional': { en: 'Professional Information', az: 'Peşəkar Məlumatlar' },
    'reg.company': { en: 'Company / Organization', az: 'Şirkət / Təşkilat' },
    'reg.job_title': { en: 'Job Title / Role', az: 'Vəzifə / Rol' },
    'reg.linkedin': { en: 'LinkedIn Profile', az: 'LinkedIn Profili' },
    'reg.phone': { en: 'Phone Number', az: 'Telefon Nömrəsi' },
    'reg.additional': { en: 'Additional Information', az: 'Əlavə Məlumatlar' },
    'reg.notes': { en: 'Personal Notes', az: 'Şəxsi Qeydlər' },
    'reg.terms': { en: 'Terms & Privacy', az: 'Şərtlər və Məxfilik' },
    'reg.agree': { en: 'I agree to the Privacy Policy and consent to AZERPUG storing my registration data.', az: 'Məxfilik Siyasətinə razıyam və AZERPUG-un qeydiyyat məlumatlarımı saxlamasına icazə verirəm.' },
    'reg.newsletter': { en: 'I would like to receive community news, event invitations, and PostgreSQL updates via email.', az: 'İcma xəbərləri, tədbir dəvətnamələri və PostgreSQL yenilikləri e-poçtla almaq istəyirəm.' },
    'reg.register_btn': { en: 'Register', az: 'Qeydiyyat' },
    'reg.reset_btn': { en: 'Reset', az: 'Sıfırla' },
    'reg.have_account': { en: 'Already have an account?', az: 'Artıq hesabınız var?' },
    'reg.sign_in': { en: 'Sign in here', az: 'Buradan daxil olun' },

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
    'members.join_cta': { en: 'Join the AZERPUG community to connect with PostgreSQL professionals in Azerbaijan.', az: 'Azərbaycandakı PostgreSQL mütəxəssisləri ilə əlaqə qurmaq üçün AZERPUG icmasına qoşulun.' },
    'members.register': { en: 'Register Now', az: 'İndi Qeydiyyatdan Keç' },

    // Events page
    'events.title': { en: 'Events & Meetups', az: 'Tədbirlər və Görüşlər' },
    'events.subtitle': { en: 'Join us at PostgreSQL meetups, workshops, webinars, and conferences in Azerbaijan. All events are open to AZERPUG members.', az: 'Azərbaycanda PostgreSQL görüşləri, seminarlar, vebinarlar və konfranslara qoşulun. Bütün tədbirlər AZERPUG üzvləri üçün açıqdır.' },
    'events.info': { en: 'Want to attend an event? Log in and click RSVP to let us know you\'re coming. Want to suggest or organize an event?', az: 'Tədbirə qatılmaq istəyirsiniz? Daxil olun və gəldiyinizi bildirmək üçün RSVP klikləyin. Tədbir təklif etmək və ya təşkil etmək istəyirsiniz?' },
    'events.contact': { en: 'Contact us', az: 'Bizimlə əlaqə saxlayın' },
    'events.upcoming': { en: 'Upcoming Events', az: 'Gələcək Tədbirlər' },
    'events.past': { en: 'Past Events', az: 'Keçmiş Tədbirlər' },
    'events.no_upcoming': { en: 'No upcoming events at the moment. Check back soon or', az: 'Hazırda gələcək tədbir yoxdur. Tezliklə yenidən yoxlayın və ya' },
    'events.suggest': { en: 'suggest an event', az: 'tədbir təklif edin' },
    'events.no_past': { en: 'No past events recorded yet.', az: 'Hələ keçmiş tədbir qeydə alınmayıb.' },
    'events.going': { en: 'going', az: 'gedir' },
    'events.maybe': { en: 'maybe', az: 'bəlkə' },
    'events.rsvp': { en: 'RSVP', az: 'İştirak et' },
    'events.login_rsvp': { en: 'Log in to RSVP', az: 'İştirak üçün daxil olun' },

    // Blog page
    'blog.title': { en: 'Blog Posts', az: 'Bloq Yazıları' },
    'blog.subtitle': { en: 'Articles, tutorials, and insights from the AZERPUG community about PostgreSQL.', az: 'AZERPUG icmasından PostgreSQL haqqında məqalələr, dərsliklər və fikirlər.' },
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

    // Resources page
    'resources.title': { en: 'PostgreSQL Resources', az: 'PostgreSQL Resursları' },
    'resources.subtitle': { en: 'Curated collection of the best PostgreSQL learning materials, tools, and references recommended by the AZERPUG community.', az: 'AZERPUG icması tərəfindən tövsiyə olunan ən yaxşı PostgreSQL öyrənmə materialları, alətləri və istinadların seçilmiş kolleksiyası.' },

    // FAQ page
    'faq.title': { en: 'Frequently Asked Questions', az: 'Tez-tez Verilən Suallar' },
    'faq.subtitle': { en: 'Everything you need to know about AZERPUG and PostgreSQL.', az: 'AZERPUG və PostgreSQL haqqında bilməli olduğunuz hər şey.' },

    // Community page
    'community.title': { en: 'PostgreSQL Global Community', az: 'PostgreSQL Qlobal İcması' },
    'community.subtitle': { en: 'The key organizations, communities, and projects that power the worldwide PostgreSQL ecosystem.', az: 'Dünya miqyasında PostgreSQL ekosistemini gücləndirən əsas təşkilatlar, icmalar və layihələr.' },

    // About page
    'about.title': { en: 'About AZERPUG', az: 'AZERPUG Haqqında' },
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
    'sponsors.subtitle': { en: 'AZERPUG is a volunteer-run, open-source community. Sponsorships help us organize meetups, workshops, and grow the PostgreSQL ecosystem in Azerbaijan.', az: 'AZERPUG könüllü idarə olunan, açıq-mənbə icmasıdır. Sponsorluqlar bizə görüşlər, seminarlar təşkil etməyə və Azərbaycanda PostgreSQL ekosistemini inkişaf etdirməyə kömək edir.' },

    // Gallery page
    'gallery.title': { en: 'Photo Gallery', az: 'Foto Qalereya' },
    'gallery.subtitle': { en: 'Photos from AZERPUG meetups, workshops, and PostgreSQL community events in Azerbaijan.', az: 'Azərbaycanda AZERPUG görüşləri, seminarları və PostgreSQL icma tədbirlərindən fotolar.' },

    // Contribute page
    'contribute.title': { en: 'Contribute to Local Community', az: 'Yerli İcmaya Töhfə Ver' },
    'contribute.subtitle': { en: 'AZERPUG is built by its members. Whether you have 30 minutes or 30 hours a month, there\'s a way for you to help grow the PostgreSQL community in Azerbaijan. Tell us how you\'d like to contribute!', az: 'AZERPUG öz üzvləri tərəfindən qurulub. Ayda 30 dəqiqəniz və ya 30 saatınız olsa da, Azərbaycanda PostgreSQL icmasını inkişaf etdirməyə kömək etmək üçün bir yol var. Necə töhfə vermək istədiyinizi bizə bildirin!' },
    'contribute.info': { en: 'AZERPUG is a volunteer-driven community. Every contribution — big or small — makes a real difference. No prior organizing experience needed!', az: 'AZERPUG könüllü idarə olunan icmadır. Hər töhfə — böyük və ya kiçik — həqiqi fərq yaradır. Əvvəlcədən təşkilatçılıq təcrübəsi tələb olunmur!' },
    'contribute.how': { en: 'How You Can Help', az: 'Necə Kömək Edə Bilərsiniz' },
    'contribute.signup': { en: 'Volunteer Sign-Up', az: 'Könüllü Qeydiyyatı' },
    'contribute.submit': { en: 'Submit Volunteer Application', az: 'Könüllü Müraciətini Göndər' },
    'contribute.thanks': { en: 'Thank You for Volunteering!', az: 'Könüllü Olduğunuz Üçün Təşəkkür Edirik!' },
    'contribute.thanks_desc': { en: 'Your application has been submitted. We\'ll be in touch to discuss how you can best contribute to the AZERPUG community.', az: 'Müraciətiniz göndərildi. AZERPUG icmasına ən yaxşı şəkildə necə töhfə verə biləcəyinizi müzakirə etmək üçün sizinlə əlaqə saxlayacağıq.' },

    // News page
    'news.title': { en: 'PostgreSQL News', az: 'PostgreSQL Xəbərləri' },

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
  }

  // Add language toggle button to navbar
  function addLangToggle() {
    var authDiv = document.getElementById('navbarAuth');
    if (!authDiv) return;
    var lang = getLang();
    var btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.title = lang === 'en' ? 'Azərbaycanca' : 'English';
    btn.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #ccc;border-radius:50%;font-size:0.7rem;font-weight:700;color:#515151;cursor:pointer;transition:all 0.15s;font-family:Maven Pro,sans-serif;';
    btn.textContent = lang === 'en' ? 'AZ' : 'EN';
    btn.onclick = function() {
      var newLang = getLang() === 'en' ? 'az' : 'en';
      setLang(newLang);
      applyTranslations();
      btn.textContent = newLang === 'en' ? 'AZ' : 'EN';
      btn.title = newLang === 'en' ? 'Azərbaycanca' : 'English';
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
