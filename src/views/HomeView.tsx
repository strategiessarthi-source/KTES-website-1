import { useState, useEffect } from 'react';
import { Announcement } from '../types';
import { FOUNDERS, DIRECTORS } from '../data/mockData';
import HistoryTimeline from '../components/HistoryTimeline';
import ExecutiveDesk from '../components/ExecutiveDesk';
import {
  GraduationCap,
  Users,
  User,
  Trophy,
  Award,
  ArrowRight,
  BookOpen,
  Laptop,
  Flame,
  Globe2,
  BookmarkCheck,
  Megaphone,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Target,
  Compass,
  Eye,
  CheckCircle,
  RotateCw,
  Building,
  Medal,
  Star,
  Shield,
  Library,
  Landmark
} from 'lucide-react';
import { motion } from 'motion/react';
import kailashPacharneImg from '../assets/images/presidents/Shri Kailash Raghunath Pacharne.jpg';
import ganeshJoshiImg from '../assets/images/Ktes Current Body/Air Commodore Shri Ganesh Joshi.jpg';
import rahulKumbharImg from '../assets/images/Ktes Current Body/Shri Rahul Prabhakar Kumbhar.jpg';
import swanandKhedkarImg from '../assets/images/Ktes Current Body/Shri Swanand Vilas Khedkar.jpg';
const ktesCampusImg = '/images/ktes_actual_banner_1783586668608.jpg';
const chairmanImg = '/images/Chairman.png';

// Static /images/ asset URLs for past presidents
const dhanrajKatareImg = '/images/presidents/dhanraj katare.jpg';
const khushalchandLunawatImg = '/images/presidents/khushalchand lunawat.jpg';
const moreshwarSutarImg = '/images/presidents/Late Moreshwar Sutar.jpg';
const narharKulkarniImg = '/images/presidents/Late Narhar Kulkarni.jpg';
const naryanGhumatkarImg = '/images/presidents/Late Naryan Ghumatkar.jpg';
const raghunathJoshiImg = '/images/presidents/raghunath joshi.jpg';
const vishnuPathakImg = '/images/presidents/vishnu (dadasaheb) pathak.jpg';

const PRESIDENT_PHOTO_MAP: Record<string, string> = {
  // Late Naryan Ghumatkar
  'Late Naryan Ghumatkar': naryanGhumatkarImg,
  'Late Narayan Ghumatkar': naryanGhumatkarImg,
  'Naryan Ghumatkar': naryanGhumatkarImg,
  'Narayan Ghumatkar': naryanGhumatkarImg,
  '/src/assets/images/presidents/Late Naryan Ghumatkar.jpg': naryanGhumatkarImg,
  '/src/assets/images/presidents/Late Narayan Ghumatkar.jpg': naryanGhumatkarImg,
  '/src/assets/images/presidents/Naryan Ghumatkar.jpg': naryanGhumatkarImg,
  '/src/assets/images/presidents/Narayan Ghumatkar.jpg': naryanGhumatkarImg,
  '/images/presidents/Late Naryan Ghumatkar.jpg': naryanGhumatkarImg,
  '/images/presidents/Late Narayan Ghumatkar.jpg': naryanGhumatkarImg,
  '/images/presidents/Naryan Ghumatkar.jpg': naryanGhumatkarImg,
  '/images/presidents/Narayan Ghumatkar.jpg': naryanGhumatkarImg,

  // Late Moreshwar Sutar
  'Late Moreshwar Sutar': moreshwarSutarImg,
  'Moreshwar Sutar': moreshwarSutarImg,
  '/src/assets/images/presidents/Late Moreshwar Sutar.jpg': moreshwarSutarImg,
  '/src/assets/images/presidents/Moreshwar Sutar.jpg': moreshwarSutarImg,
  '/images/presidents/Late Moreshwar Sutar.jpg': moreshwarSutarImg,
  '/images/presidents/Moreshwar Sutar.jpg': moreshwarSutarImg,

  // Late Narhar Kulkarni
  'Late Narhar Kulkarni': narharKulkarniImg,
  'Narhar Kulkarni': narharKulkarniImg,
  '/src/assets/images/presidents/Late Narhar Kulkarni.jpg': narharKulkarniImg,
  '/src/assets/images/presidents/Narhar Kulkarni.jpg': narharKulkarniImg,
  '/images/presidents/Late Narhar Kulkarni.jpg': narharKulkarniImg,
  '/images/presidents/Narhar Kulkarni.jpg': narharKulkarniImg,

  // Late Dhanraj Katare
  'Late Dhanraj Katare': dhanrajKatareImg,
  'Dhanraj Katare': dhanrajKatareImg,
  '/src/assets/images/presidents/dhanraj katare.jpg': dhanrajKatareImg,
  '/images/presidents/dhanraj katare.jpg': dhanrajKatareImg,

  // Late Khushalchand Lunawat
  'Late Khushalchand Lunawat': khushalchandLunawatImg,
  'Khushalchand Lunawat': khushalchandLunawatImg,
  '/src/assets/images/presidents/khushalchand lunawat.jpg': khushalchandLunawatImg,
  '/images/presidents/khushalchand lunawat.jpg': khushalchandLunawatImg,

  // Late Raghunath Joshi
  'Late Raghunath Joshi': raghunathJoshiImg,
  'Raghunath Joshi': raghunathJoshiImg,
  '/src/assets/images/presidents/raghunath joshi.jpg': raghunathJoshiImg,
  '/images/presidents/raghunath joshi.jpg': raghunathJoshiImg,

  // Late Vishnu (Dadasaheb) Pathak
  'Late Vishnu (Dadasaheb) Pathak': vishnuPathakImg,
  'Vishnu (Dadasaheb) Pathak': vishnuPathakImg,
  'Vishnu Pathak': vishnuPathakImg,
  '/src/assets/images/presidents/vishnu (dadasaheb) pathak.jpg': vishnuPathakImg,
  '/images/presidents/vishnu (dadasaheb) pathak.jpg': vishnuPathakImg,
};

function resolvePresidentPath(pathOrUrl: string, nameEn?: string): string {
  if (!pathOrUrl && !nameEn) return '';
  if (pathOrUrl && PRESIDENT_PHOTO_MAP[pathOrUrl]) {
    return PRESIDENT_PHOTO_MAP[pathOrUrl];
  }
  if (nameEn && PRESIDENT_PHOTO_MAP[nameEn]) {
    return PRESIDENT_PHOTO_MAP[nameEn];
  }
  if (pathOrUrl) {
    if (pathOrUrl.startsWith('/images/')) return pathOrUrl;
    if (pathOrUrl.startsWith('/src/assets/images/')) {
      return pathOrUrl.replace('/src/assets/images/', '/images/');
    }
    if (pathOrUrl.startsWith('../assets/images/')) {
      return pathOrUrl.replace('../assets/images/', '/images/');
    }
    return pathOrUrl;
  }
  return '';
}
// Member photos from Ktes Current Body
const ajitLunawatImg = '/images/Ktes Current Body/Shri Ajit Lunawat.jpg';
const kailasSandbhorImg = '/images/Ktes Current Body/Shri. Kailas Sandbhor.jpg';
const pradeepShewaleImg = '/images/Ktes Current Body/Dr. Shri. Pradeep Shewale.jpg';
const sandeepBhosaleImg = '/images/Ktes Current Body/Adv. Shri. Sandeep Bhosale.jpg';
const urmilaSandbhorImg = '/images/Ktes Current Body/Sau. Urmila Sandbhor.jpg';
const hiramanSatkarImg = '/images/Ktes Current Body/Shri. Hiraman Satkar.jpg';
const pradeepKaswaImg = '/images/Ktes Current Body/Shri. Pradeep Kaswa.jpg';
const ganeshGhumatkarImg = '/images/Ktes Current Body/Shri. Ganesh Ghumatkar.jpg';
const prakashBhansaliImg = '/images/Ktes Current Body/Shri. Prakash Bhansali.jpg';
const dattatrayaSandbhorImg = '/images/Ktes Current Body/Shri. Dattatraya Sandbhor.jpg';
const surekhaShrotriyaImg = '/images/Ktes Current Body/Smt. Surekha Shrotriya.jpeg';

const CURRENT_BODY_IMAGE_PATHS: Record<string, string> = {
  'ajit lunawat': ajitLunawatImg,
  'shri. ajit lunawat': ajitLunawatImg,
  'shri ajit lunawat': ajitLunawatImg,
  'air commodore shri ganesh joshi': ganeshJoshiImg,
  'ganesh joshi': ganeshJoshiImg,
  'shri. kailas sandbhor': kailasSandbhorImg,
  'shri kailas sandbhor': kailasSandbhorImg,
  'kailas sandbhor': kailasSandbhorImg,
  'dr. shri. pradeep shewale': pradeepShewaleImg,
  'dr shri pradeep shewale': pradeepShewaleImg,
  'pradeep shewale': pradeepShewaleImg,
  'adv. shri. sandeep bhosale': sandeepBhosaleImg,
  'adv shri sandeep bhosale': sandeepBhosaleImg,
  'sandeep bhosale': sandeepBhosaleImg,
  'sau. urmila sandbhor': urmilaSandbhorImg,
  'sau urmila sandbhor': urmilaSandbhorImg,
  'urmila sandbhor': urmilaSandbhorImg,
  'shri rahul prabhakar kumbhar': rahulKumbharImg,
  'rahul kumbhar': rahulKumbharImg,
  'shri swanand vilas khedkar': swanandKhedkarImg,
  'swanand khedkar': swanandKhedkarImg,
  'shri kailash raghunath pacharne': kailashPacharneImg,
  'kailash raghunath pacharne': kailashPacharneImg,
  'kailash pacharne': kailashPacharneImg,
  'pacharne': kailashPacharneImg,
  'shri. hiraman satkar': hiramanSatkarImg,
  'shri hiraman satkar': hiramanSatkarImg,
  'hiraman satkar': hiramanSatkarImg,
  'shri. pradeep kaswa': pradeepKaswaImg,
  'shri pradeep kaswa': pradeepKaswaImg,
  'pradeep kaswa': pradeepKaswaImg,
  'shri. ganesh ghumatkar': ganeshGhumatkarImg,
  'shri ganesh ghumatkar': ganeshGhumatkarImg,
  'ganesh ghumatkar': ganeshGhumatkarImg,
  'shri. prakash bhansali': prakashBhansaliImg,
  'shri prakash bhansali': prakashBhansaliImg,
  'prakash bhansali': prakashBhansaliImg,
  'shri. dattatraya sandbhor': dattatrayaSandbhorImg,
  'shri dattatraya sandbhor': dattatrayaSandbhorImg,
  'dattatraya sandbhor': dattatrayaSandbhorImg,
  'smt. surekha shrotriya': surekhaShrotriyaImg,
  'smt surekha shrotriya': surekhaShrotriyaImg,
  'surekha shrotriya': surekhaShrotriyaImg,
};

function getBodyMemberImage(nameEn: string, staticImg?: string | null): string | null {
  if (staticImg) {
    if (staticImg.startsWith('/src/assets/images/')) {
      return staticImg.replace('/src/assets/images/', '/images/');
    }
    if (staticImg.startsWith('../assets/images/')) {
      return staticImg.replace('../assets/images/', '/images/');
    }
    return staticImg;
  }
  const clean = nameEn.trim().toLowerCase();
  if (CURRENT_BODY_IMAGE_PATHS[clean]) return CURRENT_BODY_IMAGE_PATHS[clean];
  const stripped = clean
    .replace(/^(air commodore|shri|smt|sau|dr|adv|\.)\s*/gi, '')
    .replace(/\./g, '')
    .trim();
  if (CURRENT_BODY_IMAGE_PATHS[stripped]) return CURRENT_BODY_IMAGE_PATHS[stripped];
  for (const [key, url] of Object.entries(CURRENT_BODY_IMAGE_PATHS)) {
    if (stripped.length >= 4 && (key.includes(stripped) || stripped.includes(key))) {
      return url;
    }
  }
  return null;
}

const PAST_PRESIDENTS = [
  {
    id: 'p7',
    nameEn: 'Late Vishnu (Dadasaheb) Pathak',
    nameMr: 'कै. विष्णू (दादासाहेब) पाठक',
    image: vishnuPathakImg
  },
  {
    id: 'p1',
    nameEn: 'Late Dhanraj Katare',
    nameMr: 'कै. धनराज कटारे',
    image: dhanrajKatareImg
  },
  {
    id: 'p2',
    nameEn: 'Late Khushalchand Lunawat',
    nameMr: 'कै. खुशालचंद लुणावत',
    image: khushalchandLunawatImg
  },
  {
    id: 'p3',
    nameEn: 'Late Moreshwar Sutar',
    nameMr: 'कै. मोरेश्वर सुतार',
    image: moreshwarSutarImg
  },
  {
    id: 'p4',
    nameEn: 'Late Narhar Kulkarni',
    nameMr: 'कै. नरहर कुलकर्णी',
    image: narharKulkarniImg
  },
  {
    id: 'p5',
    nameEn: 'Late Naryan Ghumatkar',
    nameMr: 'कै. नारायण घुमटकर',
    image: naryanGhumatkarImg
  },
  {
    id: 'p6',
    nameEn: 'Late Raghunath Joshi',
    nameMr: 'कै. रघुनाथ जोशी',
    image: raghunathJoshiImg
  }
];

const TRUST_BOARD = [
  // Executive Leadership
  {
    id: 'tb-1',
    nameEn: 'Shri. Haribhau Sandbhor',
    nameMr: 'श्री. हरीभाऊ सांडभोर',
    designationEn: 'Chairman',
    designationMr: 'अध्यक्ष',
    image: chairmanImg,
    isExecutive: true
  },
  {
    id: 'tb-2',
    nameEn: 'Shri. Ajit Lunawat',
    nameMr: 'श्री. अजित लुणावत',
    designationEn: 'Vice Chairman',
    designationMr: 'उपाध्यक्ष',
    image: ajitLunawatImg,
    isExecutive: true
  },
  {
    id: 'tb-3',
    nameEn: 'Air Commodore Shri Ganesh Joshi',
    nameMr: 'एयर कमोडोर श्री गणेश जोशी',
    designationEn: 'Honorary Secretary',
    designationMr: 'मानद सचिव',
    image: ganeshJoshiImg,
    isExecutive: true
  },
  // Board Members
  {
    id: 'tb-4',
    nameEn: 'Shri. Hiraman Satkar',
    nameMr: 'श्री. हिरामाण सातकर',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: hiramanSatkarImg,
    isExecutive: false
  },
  {
    id: 'tb-5',
    nameEn: 'Shri. Kailas Sandbhor',
    nameMr: 'श्री. कैलास सांडभोर',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: kailasSandbhorImg,
    isExecutive: false
  },
  {
    id: 'tb-6',
    nameEn: 'Dr. Shri. Pradeep Shewale',
    nameMr: 'डॉ. श्री. प्रदीप शेवाळे',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: pradeepShewaleImg,
    isExecutive: false
  },
  {
    id: 'tb-7',
    nameEn: 'Adv. Shri. Sandeep Bhosale',
    nameMr: 'ॲड. श्री. संदीप भोसले',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: sandeepBhosaleImg,
    isExecutive: false
  },
  {
    id: 'tb-8',
    nameEn: 'Shri. Pradeep Kaswa',
    nameMr: 'श्री. प्रदीप कासवा',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: pradeepKaswaImg,
    isExecutive: false
  },
  {
    id: 'tb-9',
    nameEn: 'Shri. Ganesh Ghumatkar',
    nameMr: 'श्री. गणेश घुमटकर',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: ganeshGhumatkarImg,
    isExecutive: false
  },
  {
    id: 'tb-10',
    nameEn: 'Shri. Prakash Bhansali',
    nameMr: 'श्री. प्रकाश भनसाळी',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: prakashBhansaliImg,
    isExecutive: false
  },
  {
    id: 'tb-11',
    nameEn: 'Shri. Dattatraya Sandbhor',
    nameMr: 'श्री. दत्तात्रय सांडभोर',
    designationEn: 'Member',
    designationMr: 'संचालक',
    image: dattatrayaSandbhorImg,
    isExecutive: false
  },
  {
    id: 'tb-12',
    nameEn: 'Smt. Surekha Shrotriya',
    nameMr: 'श्रीमती सुरेखा श्रोत्रिय',
    designationEn: 'Member',
    designationMr: 'संचालिका',
    image: surekhaShrotriyaImg,
    isExecutive: false
  },
  {
    id: 'tb-13',
    nameEn: 'Sau. Urmila Sandbhor',
    nameMr: 'सौ. उर्मिला सांडभोर',
    designationEn: 'Member',
    designationMr: 'संचालिका',
    image: urmilaSandbhorImg,
    isExecutive: false
  }
];

const ADMIN_OFFICERS = [
  {
    id: 'ao-2',
    nameEn: 'Shri Rahul Prabhakar Kumbhar',
    nameMr: 'श्री. राहुल प्रभाकर कुंभार',
    designationEn: 'Local Auditor',
    designationMr: 'स्थानिक हिशोब तपासनीस',
    image: rahulKumbharImg
  },
  {
    id: 'ao-3',
    nameEn: 'Shri Swanand Vilas Khedkar',
    nameMr: 'श्री. स्वानंद विलास खेडकर',
    designationEn: 'Local Auditor',
    designationMr: 'स्थानिक हिशोब तपासनीस',
    image: swanandKhedkarImg
  },
  {
    id: 'ao-1',
    nameEn: 'Shri Kailash Raghunath Pacharne',
    nameMr: 'श्री. कैलास रघुनाथ पाचारणे',
    designationEn: 'Administrative Officer',
    designationMr: 'व्यवस्थापकीय अधिकारी',
    image: kailashPacharneImg
  }
];

function getInitials(name: string): string {
  const clean = name.replace(/^(Air Commodore|Shri|Smt|Sau|Dr|Adv|\.)\s*/gi, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return clean.substring(0, 2).toUpperCase();
}

function MemberAvatar({
  src,
  nameEn,
  borderClasses = "border-amber-400/50 group-hover:border-amber-400",
  sizeClasses = "w-36 h-36 sm:w-40 sm:h-40",
  extraClasses = "",
}: {
  src?: string | null;
  nameEn: string;
  borderClasses?: string;
  sizeClasses?: string;
  extraClasses?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState<string | null>(src || null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || null);
    setImageError(false);
  }, [src]);

  const handleImageError = () => {
    // If the primary image failed to load, check alternative static paths
    if (nameEn) {
      const stripped = nameEn.replace(/^late\s+/i, '').trim().toLowerCase();
      if (stripped.includes('ghumatkar')) {
        if (stripped.includes('ganesh')) {
          if (currentSrc !== '/images/Ktes Current Body/Shri. Ganesh Ghumatkar.jpg') {
            setCurrentSrc('/images/Ktes Current Body/Shri. Ganesh Ghumatkar.jpg');
            return;
          }
        } else {
          if (currentSrc !== '/images/presidents/Late Naryan Ghumatkar.jpg') {
            setCurrentSrc('/images/presidents/Late Naryan Ghumatkar.jpg');
            return;
          }
        }
      }
      if (stripped.includes('sutar')) {
        if (currentSrc !== '/images/presidents/Late Moreshwar Sutar.jpg') {
          setCurrentSrc('/images/presidents/Late Moreshwar Sutar.jpg');
          return;
        }
      }
      if (stripped.includes('kulkarni')) {
        if (currentSrc !== '/images/presidents/Late Narhar Kulkarni.jpg') {
          setCurrentSrc('/images/presidents/Late Narhar Kulkarni.jpg');
          return;
        }
      }
      if (stripped.includes('pacharne')) {
        if (currentSrc !== '/images/presidents/Shri Kailash Raghunath Pacharne.jpg') {
          setCurrentSrc('/images/presidents/Shri Kailash Raghunath Pacharne.jpg');
          return;
        }
      }
      if (stripped.includes('satkar')) {
        if (currentSrc !== '/images/Ktes Current Body/Shri. Hiraman Satkar.jpg') {
          setCurrentSrc('/images/Ktes Current Body/Shri. Hiraman Satkar.jpg');
          return;
        }
      }
      if (stripped.includes('kaswa')) {
        if (currentSrc !== '/images/Ktes Current Body/Shri. Pradeep Kaswa.jpg') {
          setCurrentSrc('/images/Ktes Current Body/Shri. Pradeep Kaswa.jpg');
          return;
        }
      }
      if (stripped.includes('bhansali')) {
        if (currentSrc !== '/images/Ktes Current Body/Shri. Prakash Bhansali.jpg') {
          setCurrentSrc('/images/Ktes Current Body/Shri. Prakash Bhansali.jpg');
          return;
        }
      }
      if (stripped.includes('dattatraya')) {
        if (currentSrc !== '/images/Ktes Current Body/Shri. Dattatraya Sandbhor.jpg') {
          setCurrentSrc('/images/Ktes Current Body/Shri. Dattatraya Sandbhor.jpg');
          return;
        }
      }
      if (stripped.includes('shrotriya')) {
        if (currentSrc !== '/images/Ktes Current Body/Smt. Surekha Shrotriya.jpeg' && currentSrc !== '/images/Ktes Current Body/Smt. Surekha Shrotriya.jpg') {
          setCurrentSrc('/images/Ktes Current Body/Smt. Surekha Shrotriya.jpeg');
          return;
        }
        if (currentSrc === '/images/Ktes Current Body/Smt. Surekha Shrotriya.jpeg') {
          setCurrentSrc('/images/Ktes Current Body/Smt. Surekha Shrotriya.jpg');
          return;
        }
      }
    }
    setImageError(true);
  };

  return (
    <div
      className={`relative ${sizeClasses} rounded-full p-1 border-2 ${borderClasses} bg-slate-950 flex items-center justify-center overflow-hidden shadow-md transition-all duration-300 shrink-0 ${extraClasses}`}
    >
      <div className="relative w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-amber-400 font-display font-black text-xl overflow-hidden">
        {currentSrc && !imageError ? (
          <img
            src={currentSrc}
            alt={nameEn}
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover object-top rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-1 select-none">
            <User className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400/70 mb-0.5" />
            <span className="text-amber-300 font-display font-bold text-xs sm:text-sm tracking-wider uppercase">
              {getInitials(nameEn)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface HomeViewProps {
  announcements: Announcement[];
  onChangeTab: (tab: string) => void;
  onSelectAnnouncement: (announcement: Announcement) => void;
  scrollToAbout?: boolean;
}

export default function HomeView({
  announcements,
  onChangeTab,
  onSelectAnnouncement,
  scrollToAbout = false
}: HomeViewProps) {
  const [flippedFounderId, setFlippedFounderId] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<'en' | 'mr' | 'both'>('both');

  useEffect(() => {
    if (scrollToAbout) {
      const el = document.getElementById('about-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [scrollToAbout]);

  const quickNav = [
    { title: 'Admissions 2026', desc: 'Secure your registration in Science, Commerce or Primary wings online.', tab: 'admission', color: 'border-l-4 border-amber-500' },
    { title: 'Departments', desc: 'Read curriculum offering, faculty, & facilities of Mahatma Gandhi Vidyalay, Sheth Kesharchand Parakh Prathamik Vidyalay, Junior College & English Medium School.', tab: 'departments', color: 'border-l-4 border-blue-500' },
    { title: 'Student Portal', desc: 'Gain access to department downloads, e-notes, syllabi, & library lookups.', tab: 'portal', color: 'border-l-4 border-emerald-500' },
    { title: 'Photo Gallery', desc: 'Explore visual stories of sports tournaments, labs & grand cultural events.', tab: 'gallery', color: 'border-l-4 border-purple-500' },
  ];

  const highlights = announcements.slice(0, 3);

  const testimonials = [
    {
      name: 'Rohan Deshmukh',
      role: 'Alumnus, S.Y. B.Sc Class of 2024 (Now software developer)',
      comment: 'The computer labs here changed the course of my career. Working closely with Prof. Shruti Kulkarni gave me real, deep engineering foundations.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Mr. Arvind Joshi',
      role: 'Parent of Grade 10 Student at English Medium School',
      comment: 'Unbelievable attention from headmistresses. When school classes shifted online or required digital timetables, everything worked within minutes.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Mansi Kelkar',
      role: 'N.C.C. Cadet Master / Under Officer',
      comment: 'Participating in the Republic Day training camps with fully funded society kits and guidance was a proud lifetime milestone.',
      rating: '⭐⭐⭐⭐⭐'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section
        id="home-hero"
        className="relative min-h-[90vh] flex items-center justify-center bg-[#090f20] overflow-hidden pt-24 pb-16 border-b border-white/5"
      >
        {/* Subtle background glow circles for premium atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="space-y-8 md:space-y-10 py-6">
            {/* Typography & CTA */}
            {/* Header / Motto & Establishment */}
            <div className="flex flex-col items-center space-y-4">
              {/* Motto Group */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-1.5"
              >
                <span className="text-amber-400 font-display font-black text-2.5xl sm:text-3xl md:text-4xl tracking-wider block">
                  ।। संहतिः कार्यसाधिका ।।
                </span>
                <span className="text-slate-400 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase block">
                  STRENGTH IN UNITY
                </span>
              </motion.div>

              {/* Establishment Year Badge */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center bg-slate-950/80 border border-white/10 text-slate-300 font-sans px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider shadow-lg"
              >
                <span>१९३८ सालापासून | Since 1938</span>
              </motion.span>
            </div>

            {/* TWO COLUMN CARDS (Directly below the top metrics) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch text-left"
            >
              {/* LEFT BOX - Marathi */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:border-white/15 hover:bg-white/[0.05] transition-all h-full">
                <div className="space-y-4">
                  <div className="space-y-1 pb-3 border-b border-white/5">
                    <h3 className="text-base sm:text-lg font-display font-black text-amber-400">
                      दर्जेदार शिक्षण
                    </h3>
                  </div>
                  
                  <h4 className="font-sans font-black text-white text-base sm:text-lg md:text-xl leading-snug">
                    दर्जेदार शिक्षणातून विद्यार्थ्यांचे उज्ज्वल भविष्य घडवणारी संस्था
                  </h4>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    मानवी सुप्त गुणांचा विकास, अत्याधुनिक प्रयोगशाळा, उत्कृष्ट डिजिटल संसाधने आणि सुरक्षित वातावरणात क्रीडा क्षेत्रातील दैदिप्यमान कामगिरी.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5">
                  <p className="text-xs sm:text-sm font-display font-black text-slate-300 text-right">
                    – खेड तालुका एज्युकेशन सोसायटी
                  </p>
                </div>
              </div>

              {/* RIGHT BOX - English */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:border-white/15 hover:bg-white/[0.05] transition-all h-full">
                <div className="space-y-4">
                  <div className="space-y-1 pb-3 border-b border-white/5">
                    <h3 className="text-base sm:text-lg font-display font-black text-amber-400">
                      Quality Education
                    </h3>
                  </div>

                  <h4 className="font-sans font-bold text-white text-base sm:text-lg md:text-xl leading-snug">
                    An institution shaping a bright future for students through quality education.
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    Nurturing human potential with state-of-the-art laboratory infrastructure, elite digital resources, and sporting achievements in a safe environment.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5">
                  <p className="text-xs sm:text-sm font-sans font-bold text-slate-300 text-right">
                    – Khed Taluka Education Society
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => onChangeTab('admission')}
                className="w-full sm:w-auto bg-secondary hover:bg-amber-500 text-primary-dark font-display font-bold px-6 sm:px-8 py-3.5 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <span>आता ऑनलाईन अर्ज करा | Apply Online Now</span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </button>
              <button
                onClick={() => onChangeTab('departments')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/15 text-white border border-white/10 px-6 sm:px-8 py-3.5 rounded-xl font-semibold transition-all cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                विभाग पहा | Explore Departments
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Desk / Chairman Message Section (Prominent Top Banner) */}
      <ExecutiveDesk />

      {/* Quick Access Navigation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div>
          <div className="text-center space-y-2 mb-8">
            <span className="text-amber-400 font-display font-bold tracking-widest uppercase text-xs">
              थेट मार्गिका | Direct Corridors
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              जलद मार्गक्रमण | Quick Navigation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickNav.map((card, i) => (
              <div
                key={i}
                onClick={() => onChangeTab(card.tab)}
                className={`bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl ${card.color} hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:scale-[1.02] cursor-pointer transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Navigate</span>
                  <ArrowRight className="h-3 w-3 text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Society Section Wrapper (Unified Layout) */}
      <div id="about-section" className="space-y-24 border-t border-white/10 pt-24 mt-12">

        {/* Aim & Vision with animated icons */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Mission Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-white/20 hover:bg-white/8 transition-all">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-[#001f4d] text-amber-300 flex items-center justify-center border border-white/10">
                <Compass className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-display font-black text-white">Our Sacred Mission</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To construct a value-integrated, technically modern learning ecosystem that educates students from preschool up to doctoral studies, transforming raw curiosity into professional integrity and social leadership.
              </p>
              <ul className="space-y-2.5 text-slate-200 text-xs font-medium">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Nurture rational thinking & laboratory skills.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Provide continuous tuition grants for underprivileged kids.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Drive industry-academic placements.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:border-white/20 hover:bg-white/8 transition-all">
            <div className="space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-[#001f4d] text-amber-300 flex items-center justify-center border border-white/10">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-display font-black text-white">Our Future Vision</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To establish our institutions as a nationally recognized benchmark of research innovation and ethical leadership development, where digital smart classrooms and traditional community values achieve a perfect, holistic synthesis.
              </p>
              <ul className="space-y-2.5 text-slate-200 text-xs font-medium">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Zero Carbon solar-powered smart campus by 2028.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Global university tie-ups for joint biotech programs.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Fully AI-integrated personal coaching plans for high schoolers.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Chronological Timeline */}
        <section id="growth-timeline-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 pt-8 scroll-mt-24">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase">Chronicles</span>
            <h2 className="text-3xl font-display font-black text-white">Our Growth Journey / आमचा प्रगतीचा प्रवास</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              From humble village roots to a state-certified, A++ academic capital. / ग्रामीण भागातील मुळांपासून ते राज्य-प्रमाणित, A++ दर्जाच्या शैक्षणिक केंद्रापर्यंतचा प्रवास.
            </p>
          </div>

          <HistoryTimeline />
        </section>

        {/* Past Presidents tribute section */}
        <section id="past-presidents-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-white/10 pt-16 relative z-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6">
            <div className="space-y-3 flex-1">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-1">
                {selectedLang === 'mr' ? 'आदरणीय नेतृत्व' : 'Honored Leadership'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                {selectedLang === 'en' && "Architects of our Progress"}
                {selectedLang === 'mr' && "आमच्या प्रगतीचे शिल्पकार: संस्थेचे माजी अध्यक्ष"}
                {selectedLang === 'both' && "Architects of our Progress / आमच्या प्रगतीचे शिल्पकार: संस्थेचे माजी अध्यक्ष"}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed font-sans font-medium">
                {selectedLang === 'en' && "Honoring the visionaries who designed the foundation of our institution."}
                {selectedLang === 'mr' && "आमच्या संस्थेचा भक्कम पाया रचणाऱ्या थोर दूरदृष्ट्या नेत्यांना विनम्र अभिवादन."}
                {selectedLang === 'both' && "Honoring the visionaries who designed the foundation of our institution. / आमच्या संस्थेचा भक्कम पाया रचणाऱ्या थोर दूरदृष्ट्या नेत्यांना विनम्र अभिवादन."}
              </p>
            </div>

            {/* Language Toggle Controls */}
            <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl shrink-0 self-start md:self-center">
              <button
                onClick={() => setSelectedLang('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'en' ? 'bg-secondary text-primary-dark shadow font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                English Only
              </button>
              <button
                onClick={() => setSelectedLang('mr')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'mr' ? 'bg-secondary text-primary-dark shadow font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => setSelectedLang('both')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'both' ? 'bg-secondary text-primary-dark shadow font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                Dual Language
              </button>
            </div>
          </div>

          {/* 7-Card Leadership Profile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 sm:gap-6 justify-center">
            {PAST_PRESIDENTS.map((pres) => (
              <div
                key={pres.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-lg"
              >
                {/* Larger Circular container with gold border ring */}
                <MemberAvatar
                  src={resolvePresidentPath(pres.image, pres.nameEn)}
                  nameEn={pres.nameEn}
                  borderClasses="border-amber-400/50 group-hover:border-amber-400"
                />

                {/* Stylized Gold Badge / Ribbon Label */}
                <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/30 rounded-xl px-3 py-2.5 flex flex-col items-center justify-center min-h-[60px] shadow-sm">
                  {selectedLang !== 'mr' && (
                    <span className="text-xs sm:text-[13px] font-sans font-bold text-amber-300 tracking-tight leading-snug block">
                      {pres.nameEn}
                    </span>
                  )}
                  {selectedLang === 'both' && (
                    <span className="w-6 h-[1px] bg-amber-400/25 my-1.5 block"></span>
                  )}
                  {selectedLang !== 'en' && (
                    <span className="text-xs sm:text-[13px] font-sans font-semibold text-amber-200 leading-snug block">
                      {pres.nameMr}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Trust Board & Executive Committee section */}
        <section id="trust-board-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-white/10 pt-16 relative z-10 scroll-mt-24">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 inline-block">
              Trust Board / विश्वस्त मंडळ
            </span>
            <h2 className="text-3xl font-display font-black text-white">
              Governing Body & Executive Committee
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans font-medium">
              Governing Trustees and Office Bearers guiding Khed Taluka Education Society with vision, ethics, and dedication.
            </p>
          </div>

          {/* Executive Leadership Sub-Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-amber-400/20 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-base sm:text-lg font-display font-bold text-amber-400 uppercase tracking-wider">
                Executive Leadership / कार्यकारिणी अधिकारी
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
              {TRUST_BOARD.filter((m) => m.isExecutive).map((member) => (
                <div
                  key={member.id}
                  className="bg-white/5 border border-amber-400/30 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:border-amber-400/60 hover:bg-white/10 transition-all duration-300 group shadow-xl relative overflow-hidden"
                >
                  {/* Executive Ribbon Tag */}
                  <div className="absolute top-0 right-0 bg-amber-400/20 text-amber-300 font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl border-l border-b border-amber-400/30">
                    {member.designationEn} / {member.designationMr}
                  </div>

                  {/* Spacious Circular Photo Frame */}
                  <MemberAvatar
                    src={member.image}
                    nameEn={member.nameEn}
                    borderClasses="border-amber-400/60 group-hover:border-amber-400"
                    extraClasses="mt-2"
                  />

                  {/* Name and Designation Card Content */}
                  <div className="w-full bg-gradient-to-r from-amber-500/15 via-amber-500/25 to-amber-500/15 border border-amber-400/40 rounded-xl px-3 py-2.5 flex flex-col items-center justify-center min-h-[64px] shadow-sm">
                    {selectedLang !== 'mr' && (
                      <span className="text-sm font-sans font-bold text-amber-300 tracking-tight leading-snug block">
                        {member.nameEn}
                      </span>
                    )}
                    {selectedLang === 'both' && (
                      <span className="w-8 h-[1px] bg-amber-400/30 my-1 block"></span>
                    )}
                    {selectedLang !== 'en' && (
                      <span className="text-xs sm:text-[13px] font-sans font-semibold text-amber-200 leading-snug block">
                        {member.nameMr}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Board Members Sub-Section */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400"></span>
              <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider">
                Board Members / विश्वस्त सदस्य
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 justify-center">
              {TRUST_BOARD.filter((m) => !m.isExecutive).map((member) => (
                <div
                  key={member.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                >
                  {/* Spacious Circular Photo Frame */}
                  <MemberAvatar
                    src={member.image}
                    nameEn={member.nameEn}
                    borderClasses="border-amber-400/50 group-hover:border-amber-400"
                  />

                  {/* Name and Designation Tag */}
                  <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/30 rounded-xl px-3 py-2.5 flex flex-col items-center justify-center min-h-[64px] shadow-sm">
                    {selectedLang !== 'mr' && (
                      <span className="text-xs sm:text-[13px] font-sans font-bold text-amber-300 tracking-tight leading-snug block">
                        {member.nameEn}
                      </span>
                    )}
                    {selectedLang === 'both' && (
                      <span className="w-6 h-[1px] bg-amber-400/25 my-1 block"></span>
                    )}
                    {selectedLang !== 'en' && (
                      <span className="text-xs sm:text-[13px] font-sans font-semibold text-amber-200 leading-snug block">
                        {member.nameMr}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-amber-400/90 font-semibold uppercase tracking-wider pt-1 block">
                      {member.designationEn} / {member.designationMr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Administrative Officers & Auditors Sub-Section */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider">
                Administrative Officers & Auditors / प्रशासकीय व हिशोब अधिकारी
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 justify-center">
              {ADMIN_OFFICERS.map((officer) => (
                <div
                  key={officer.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center space-y-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                >
                  {/* Spacious Circular Photo Frame */}
                  <MemberAvatar
                    src={officer.image}
                    nameEn={officer.nameEn}
                    borderClasses="border-amber-400/50 group-hover:border-amber-400"
                  />

                  {/* Name and Designation Tag */}
                  <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/30 rounded-xl px-3 py-2.5 flex flex-col items-center justify-center min-h-[64px] shadow-sm">
                    {selectedLang !== 'mr' && (
                      <span className="text-xs sm:text-[13px] font-sans font-bold text-amber-300 tracking-tight leading-snug block">
                        {officer.nameEn}
                      </span>
                    )}
                    {selectedLang === 'both' && (
                      <span className="w-6 h-[1px] bg-amber-400/25 my-1 block"></span>
                    )}
                    {selectedLang !== 'en' && (
                      <span className="text-xs sm:text-[13px] font-sans font-semibold text-amber-200 leading-snug block">
                        {officer.nameMr}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-amber-400/90 font-semibold uppercase tracking-wider pt-1 block">
                      {officer.designationEn} / {officer.designationMr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
