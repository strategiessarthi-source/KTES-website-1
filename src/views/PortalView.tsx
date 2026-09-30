import React, { useState } from 'react';
import {
  Clock,
  BookOpen,
  FileText,
  Sparkles,
  Bell,
  CheckCircle2,
  GraduationCap,
  Users,
  ExternalLink,
  Layers,
  Target,
  Award
} from 'lucide-react';

export default function PortalView() {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [alumniLang, setAlumniLang] = useState<'both' | 'mr' | 'en'>('both');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNotifyEmail('');
      }, 3000);
    }
  };

  const upcomingCategories = [
    {
      titleEn: 'Subject-wise Lecture Notes',
      titleMr: 'विषयानुसार अभ्यास नोट्स',
      descEn: 'Chapter summaries and formulas curated by senior faculty.',
      tag: 'In Preparation'
    },
    {
      titleEn: 'Previous Year Question Papers',
      titleMr: 'मागील वर्षांच्या प्रश्नपत्रिका',
      descEn: 'Solved board & university question archives with model keys.',
      tag: 'Scanning & Uploading'
    },
    {
      titleEn: 'Reference Books & Digital Syllabus',
      titleMr: 'संदर्भ पुस्तके व नवीन अभ्यासक्रम',
      descEn: 'Official Maharashtra Board & SPPU university syllabus PDFs.',
      tag: 'Cataloging'
    },
    {
      titleEn: 'Practical Lab Manuals & Guides',
      titleMr: 'प्रात्यक्षिक प्रयोग पुस्तिका',
      descEn: 'Science, Physics, Chemistry, and Computer lab guides.',
      tag: 'Review in Progress'
    }
  ];

  const scholarships = [
    {
      title: 'Pre-Merit Open Category Tuition Waiver Scheme',
      authority: 'State Higher Education Board',
      reward: 'Covering 80% to 100% of academic fees',
      deadline: 'August 2026'
    },
    {
      title: 'Smt. Savitribai Kelkar Sports & Girl Cadet Grant',
      authority: 'KTES Trustee Welfare Board',
      reward: 'Free boarding accommodation & book packages',
      deadline: 'July 2026'
    },
    {
      title: 'National Competitive Exam JEE/NEET Coaching Waiver',
      authority: 'National Merit Trust Funds',
      reward: 'Provides coaching fee sponsorships for entrance tests',
      deadline: 'June 2026'
    }
  ];

  return (
    <div id="student-portal-view" className="space-y-12 pb-16 pt-4 text-white">
      {/* 1. Main Header */}
      <section className="bg-[#000c24]/40 border border-white/10 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
        <div className="space-y-3 relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full">
            <GraduationCap className="h-4 w-4 text-amber-400" />
            <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">
              Student Resource Repository | विद्यार्थी अभ्यास केंद्र
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight tracking-tight text-white">
            Student Study Resources & Academic Downloads <span className="text-amber-400 block sm:inline">| अभ्यासक्रम व अध्ययन साहित्य</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Central digital repository for notes, syllabus guides, reference books, and academic updates.
          </p>
        </div>
      </section>

      {/* 2. Center Notice / Banner Block */}
      <section className="bg-gradient-to-br from-[#000d2b]/80 via-[#031538]/70 to-[#020b1f]/90 border-2 border-amber-400/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Glow ambient background effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          {/* Status Header with Icon */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-white/10 pb-8">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/5">
              <Clock className="h-9 w-9 sm:h-11 sm:w-11 text-amber-400 animate-pulse" />
            </div>
            <div className="space-y-1">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Portal Content Update in Progress
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">
                Study Materials & Academic Portal
              </h2>
            </div>
          </div>

          {/* Dual Language Notice Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* English Notice */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    English Notice
                  </span>
                  <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                    Status: Active Sync
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                  Study Material Updating Soon
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We are currently organizing and uploading official subject-wise study notes, previous year question papers, reference books, and digital syllabus guides for all streams. Students will be able to access and download all academic resources directly from this portal shortly.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-amber-300/90 text-xs font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Direct PDF download links will be published for all classes</span>
              </div>
            </div>

            {/* Marathi Notice */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    मराठी सूचना
                  </span>
                  <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                    नोंद: अद्ययावतीकरण
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                  अभ्यासक्रम साहित्य लवकरच उपलब्ध होईल
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  विद्यार्थ्यांसाठी विषयानुसार अभ्यासक्रम नोट्स, प्रश्नपत्रिका आणि संदर्भ साहित्य अपलोड करण्याचे काम सुरु आहे. लवकरच सर्व शैक्षणिक साहित्य या पोर्टलवर उपलब्ध केले जाईल.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-amber-300/90 text-xs font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>सर्व शाखांसाठी थेट पीडीएफ डाउनलोड उपलब्ध केले जाईल</span>
              </div>
            </div>
          </div>

          {/* Under Preparation Resource Streams Grid */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-400" />
                Resources Under Active Preparation | नियोजित शैक्षणिक साहित्य
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 border border-white/10 rounded-xl p-4 space-y-2 hover:border-amber-400/30 transition-all"
                >
                  <span className="text-[10px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2 py-0.5 rounded-md inline-block">
                    {item.tag}
                  </span>
                  <h5 className="font-bold text-white text-xs leading-snug">{item.titleEn}</h5>
                  <p className="text-amber-400/90 text-[11px] font-medium">{item.titleMr}</p>
                  <p className="text-slate-400 text-[11px] leading-relaxed pt-1">{item.descEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2B. Alumni Association Member Registration Section */}
      <section
        id="alumni-registration-section"
        className="bg-gradient-to-br from-[#000d2b]/90 via-[#031538]/85 to-[#020b1f]/95 border-2 border-amber-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl"
      >
        {/* Ambient Glow Effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          {/* Header & Language Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/15 pb-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/10">
                <Users className="h-9 w-9 sm:h-11 sm:w-11 text-amber-400" />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Official Alumni Network • Registration Open</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white leading-snug">
                  माजी विद्यार्थी संघ - सभासद नोंदणी{' '}
                  <span className="text-amber-400 block sm:inline">
                    | Alumni Association Member Registration
                  </span>
                </h2>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10 self-start lg:self-center shrink-0">
              {(['both', 'mr', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setAlumniLang(lang)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    alumniLang === lang
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang === 'both' && 'मराठी & English'}
                  {lang === 'mr' && 'मराठी'}
                  {lang === 'en' && 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Bilingual Content Grid */}
          <div
            className={`grid grid-cols-1 ${
              alumniLang === 'both' ? 'lg:grid-cols-2' : ''
            } gap-8 items-stretch`}
          >
            {/* Marathi Content Card */}
            {(alumniLang === 'both' || alumniLang === 'mr') && (
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="h-4 w-4" />
                      मराठी निवेदन
                    </span>
                    <span className="text-[11px] bg-amber-400/15 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-semibold">
                      सदस्य नोंदणी सुरू
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-amber-300">
                    सस्नेह नमस्कार !
                  </h3>

                  <div className="space-y-3.5 text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                    <p>
                      सन १९३८ मध्ये स्थापन झालेली व शैक्षणिक क्षेत्रात स्वतःच्या कार्यकर्तृत्वाचा ठसा उमटविणारी, खेड तालुका एज्युकेशन सोसायटी राजगुरुनगर (खेड) पुणे शतकपूर्तीकडे वाटचाल करीत आहे. संस्थेचे &apos;महात्मा गांधी विद्यालय आणि कनिष्ठ महाविद्यालय&apos; हे हजारो विद्यार्थ्यांच्या जीवनाला आकार देणारे संस्कार केंद्र बनले असून विद्यालय ज्ञानदानाचे पवित्र काम अविरतपणे करीत आहे.
                    </p>
                    <p>
                      माजी विद्यार्थ्यांनी विद्यालयाच्या पवित्र प्रांगणातील ते सोनेरी क्षण, वर्गातील तो निरागस कल्ला, शिक्षकांची ती मायेची थाप, या सर्व आठवणी आजवर आपण मनाच्या कप्प्यात जपून ठेवलेल्या आहेत.
                    </p>
                    <p>
                      आज माजी विद्यार्थी विविध क्षेत्रांत यशाची शिखरे पादाक्रांत करत आहेत, याचा संस्थेला व शाळेला सार्थ अभिमान आहे. ज्या भूमीत आपण संस्कारित झालो, आपण लहानाचे मोठे झालो, त्या विद्यालयाशी घट्ट नाते जोडण्याची वेळ आली आहे. संस्था व विद्यालयाशी असलेला हा ऋणानुबंध कायमस्वरूपी जपण्यासाठी संस्थेने माजी विद्यार्थी संघ स्थापन करण्याचा मनोदय केलेला असून &apos;माजी विद्यार्थी संघाची&apos; सदस्य नोंदणी सुरू करीत आहोत.
                    </p>
                  </div>

                  {/* Marathi Objectives */}
                  <div className="bg-slate-950/60 border border-amber-400/25 rounded-xl p-5 space-y-3 mt-2">
                    <h4 className="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
                      <Target className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>माजी विद्यार्थी संघ उद्देश:</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>माजी विद्यार्थ्यांना निमंत्रित करून त्यांचा यथोचित सन्मान करणे व एका सामायिक व्यासपीठावर एकत्र आणणे.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>आजी-माजी विद्यार्थी यांच्यातील संवादाचा पूल दृढ करणे.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>विद्यार्थ्यांच्या सर्वांगीण विकासात मोलाचे योगदान देणे.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>सामाजिक, शैक्षणिक, औद्योगिक यासारख्या विविध क्षेत्रांतील यशस्वी माजी विद्यार्थ्याचे मार्गदर्शन आजच्या (५ वी ते १२ वी पर्यंतच्या) पिढीला उपलब्ध करून देणे.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* English Content Card */}
            {(alumniLang === 'both' || alumniLang === 'en') && (
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="h-4 w-4" />
                      English Appeal
                    </span>
                    <span className="text-[11px] bg-amber-400/15 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-mono">
                      Registration Active
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-amber-300">
                    Warm Greetings!
                  </h3>

                  <div className="space-y-3.5 text-slate-200 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Established in 1938, Khed Taluka Education Society, Rajgurunagar (Khed), Pune, has left an indelible mark on the educational landscape and is steadily marching towards its centenary. The society’s &apos;Mahatma Gandhi Vidyalaya and Junior College&apos; has served as a sacred center of values and learning, shaping the lives of thousands of students and continuing its noble mission of imparting knowledge.
                    </p>
                    <p>
                      As former students, you have safely tucked away in the corners of your hearts those golden moments spent in the sacred courtyards of the school, the innocent chatter in the classrooms, and the affectionate pat of your teachers.
                    </p>
                    <p>
                      Today, as alumni scaling the peaks of success across various fields, the institution and the school take immense pride in your achievements. The time has come to forge an even stronger bond with the very soil that nurtured and shaped you. To permanently cherish this enduring connection between the institution and its alumni, we are proud to establish the Alumni Association and officially commence member registration.
                    </p>
                  </div>

                  {/* English Objectives */}
                  <div className="bg-slate-950/60 border border-amber-400/25 rounded-xl p-5 space-y-3 mt-2">
                    <h4 className="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
                      <Target className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Objectives of the Alumni Association:</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>To invite alumni, honor them suitably, and bring them together on a common platform.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>To strengthen the bridge of communication between current and former students.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>To contribute significantly to the holistic development of students.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>To provide guidance from successful alumni across diverse fields such as social, educational, and industrial sectors to the current generation of students (from 5th to 12th standard).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA & Sign-off Footer Block */}
          <div className="bg-slate-950/75 border border-amber-400/35 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            {/* Sign-off */}
            <div className="space-y-1 text-left">
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                आपले नम्र / Warm regards,
              </p>
              <p className="text-base sm:text-lg font-display font-black text-amber-300">
                प्राचार्या / Principal
              </p>
              <p className="text-xs sm:text-sm text-white font-semibold">
                महात्मा गांधी विद्यालय व कनिष्ठ महाविद्यालय, राजगुरुनगर.
              </p>
            </div>

            {/* Prominent CTA Button */}
            <div className="w-full md:w-auto shrink-0">
              <a
                id="alumni-register-cta-btn"
                href="https://forms.gle/QmcyaFAWdZkZBway8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-display font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Register Now / नोंदणी करा</span>
                <ExternalLink className="h-4 w-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Notification & Stay Tuned Alert Card */}
      <section className="bg-[#000c24]/50 border border-white/10 rounded-2.5xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4 max-w-2xl">
            <div className="h-12 w-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
              <Bell className="h-6 w-6 text-amber-400 animate-bounce" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block">
                Instant Faculty Notification Desk
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold text-white">
                Stay Tuned for Academic Uploads
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Subject-wise PDF resources for School and College wings are being updated by respective faculty members. You can check back regularly or contact the administrative desk for urgent syllabus queries.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Thank you! We will notify you when study PDFs go live.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-80">
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter student / parent email"
                  className="bg-white/10 border border-white/20 text-white rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-secondary text-primary-dark font-bold text-xs px-4 py-2 rounded-xl hover:bg-amber-400 transition-colors shrink-0 cursor-pointer"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Support & Government Scholarship Circulars */}
      <section className="space-y-6 border-t border-white/10 pt-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase block">
            Student Aid & Welfare | शिष्यवृत्ती सहाय्यता
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-black text-white">
            Government Scholarships & Examination Guidance
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Institutional coordination and state welfare circulars assisting eligible students with fee waivers and academic grant schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholarships.map((sch, i) => (
            <div
              key={i}
              className="bg-[#000c24]/30 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-amber-400/40 hover:bg-white/5 transition-all flex flex-col justify-between space-y-4 text-white"
            >
              <div className="space-y-3">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase inline-block">
                  Scheme Circular #{i + 1}
                </span>
                <h4 className="font-display font-bold text-white text-sm sm:text-base leading-snug">
                  {sch.title}
                </h4>
                <p className="text-slate-300 text-xs">
                  <strong>Authority:</strong> {sch.authority}
                </p>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-xs space-y-1">
                  <div className="text-emerald-300 font-semibold text-[11px]">Reward: {sch.reward}</div>
                  <div className="text-amber-300/90 font-mono text-[10px]">Application Cycle: {sch.deadline}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs font-semibold text-amber-300 flex items-center justify-between">
                <span>Contact Admin Desk for Form</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

