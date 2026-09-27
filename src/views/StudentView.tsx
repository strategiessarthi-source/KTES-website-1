import React, { useState, useEffect, useMemo } from 'react';
import {
  Flame,
  ShieldCheck,
  Palette,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import fosteringSportsImg from '../assets/images/Fostering.jpg';
import NationalSportsAchievers from '../components/NationalSportsAchievers';
import NCCCarousel from '../components/NCCCarousel';
import NCCGallerySection from '../components/NCCGallerySection';

const kaladalanModules = import.meta.glob<{ default: string }>(
  '../assets/images/Kaladalan/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}',
  { eager: true }
);

interface KaladalanImageItem {
  id: string;
  src: string;
  filename: string;
  title: string;
}

export default function StudentView() {
  const [activeSegment, setActiveSegment] = useState<'sports' | 'ncc' | 'arts'>('sports');
  const [activeArtSlide, setActiveArtSlide] = useState(0);
  const [isArtHovered, setIsArtHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const kaladalanImages: KaladalanImageItem[] = useMemo(() => {
    return Object.entries(kaladalanModules)
      .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
      .map(([filePath, mod], idx) => {
        const filename = filePath.split('/').pop() || `kaladalan-${idx + 1}`;
        return {
          id: `kaladalan-img-${idx + 1}`,
          src: mod.default,
          filename,
          title: `Kala Darpan Cultural & Fine Arts Showcase #${idx + 1}`
        };
      });
  }, []);

  // Autoplay featured slide in Kala Darpan gallery
  useEffect(() => {
    if (activeSegment !== 'arts' || isArtHovered || lightboxIndex !== null || kaladalanImages.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setActiveArtSlide((prev) => (prev + 1) % kaladalanImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeSegment, isArtHovered, lightboxIndex, kaladalanImages.length]);

  // Keyboard navigation for Kala Darpan Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || kaladalanImages.length === 0) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + kaladalanImages.length) % kaladalanImages.length : null));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % kaladalanImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, kaladalanImages.length]);

  // NCC activities
  const nccPrograms = [
    { title: 'Republic Day Parade representation (RDC)', desc: 'Guiding cadettes to pass the arduous state selection rounds to march at New Delhi.' },
    { title: 'Integrated Drill & Tactical Combat Camp', desc: 'A 10-day field camp dealing with map navigation, physical endurance, and air-rifle shooting.' },
    { title: 'Local Flood Relief & Community Outreaches', desc: 'Cadets dispatched under disaster management alerts to distribute medical supplies.' }
  ];

  // Kala Darpan Items
  const artsPerformances = [
    { title: 'Bharatanatyam Recital - Kala Darpan Finals', artist: 'S.Y. College Arts dance team', date: 'April 2026' },
    { title: 'Indian Classical Vocal Fusion Concert', artist: 'HSC Junior Commerce Music group', date: 'January 2026' }
  ];

  return (
    <div className="space-y-16 pb-16 pt-6">
      {/* Category selector */}
      <section className="bg-white/5 border border-white/10 rounded-2.5xl p-4 shadow-2xl max-w-xl mx-auto backdrop-blur-md">
        <div className="flex bg-black/35 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveSegment('sports')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'sports'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Sports Excellence
          </button>
          <button
            onClick={() => setActiveSegment('ncc')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'ncc'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            NCC Cadet Unit
          </button>
          <button
            onClick={() => setActiveSegment('arts')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeSegment === 'arts'
                ? 'bg-secondary text-primary-dark shadow-md font-black'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Kala Darpan (Arts)
          </button>
        </div>
      </section>

      {/* Dynamic Content Views based on active segment */}

      {/* SPORTS VIEW */}
      {activeSegment === 'sports' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1">
                <Flame className="h-4 w-4 text-amber-500" />
                <span>Athletics & Physical Cultivation | क्रीडा व शारीरिक विकास</span>
              </span>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-display font-black text-white leading-tight">
                  Fostering Sportsmanship & Athletic Excellence
                </h1>
                <p className="text-lg sm:text-xl font-display font-bold text-amber-400">
                  क्रीडावृत्ती आणि उत्कृष्ट खेळाडूवृत्तीचा विकास
                </p>
              </div>

              <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  Khed Taluka Education Society provides vast sports grounds, professional coaching, and modern athletic facilities—ensuring our students build physical strength, discipline, and strong academic focus.
                </p>
                <p className="text-slate-300/90 font-medium">
                  खेड तालुका एज्युकेशन सोसायटी विशाल क्रीडांगणे, व्यावसायिक प्रशिक्षण आणि आधुनिक क्रीडा सुविधा उपलब्ध करून देते—ज्यामुळे विद्यार्थ्यांमध्ये शारीरिक क्षमता, शिस्त आणि अभ्यासावर उत्तम लक्ष केंद्रित करण्याची क्षमता निर्माण होते.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2.5xl overflow-hidden shadow-2xl aspect-video border border-white/10 bg-slate-900 group">
              <img
                src={fosteringSportsImg}
                alt="School Sports Ground & Assembly"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </section>

          {/* National Level Sports Achievers & Participants */}
          <NationalSportsAchievers />
        </div>
      )}

      {/* NCC VIEW */}
      {activeSegment === 'ncc' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1.5 font-sans">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>NATIONAL CADET CORPS (NO. 3 MAH AIR SQN NCC, PUNE)</span>
              </span>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4.5xl font-display font-black text-white leading-tight">
                  Discipline, Courage and Leadership
                </h1>
                <p className="text-lg sm:text-xl font-display font-bold text-amber-400">
                  शिस्त, धैर्य आणि नेतृत्व
                </p>
              </div>

              <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  Our active National Cadet Corps Air Wing (Troop No. 10 / No. 3 MAH Air Sqn NCC, Pune) operates under defense instruction guides, molding cadets into values of national service, aviation awareness, drill discipline, and high-order leadership routines.
                </p>
                <p className="text-slate-300/90 font-medium">
                  आमची सक्रिय राष्ट्रीय छात्र सेना (एअर विंग - तुकडी क्र. १० / ३ महा एअर स्क्वाड्रन एनसीसी, पुणे) संरक्षण दलाच्या मार्गदर्शनाखाली कार्य करते; ज्यामुळे विद्यार्थ्यांमध्ये राष्ट्रसेवा, हवाई दल व विमान उड्डाणविषयक ज्ञान, संचलन शिस्त आणि उत्तम नेतृत्वगुण विकसित होतात.
                </p>
              </div>

              <div className="bg-[#000c24]/40 border-l-4 border-amber-400 border border-white/10 p-4 rounded-xl text-xs space-y-1.5 text-slate-300">
                <p><strong className="text-amber-300">Cadet Motto:</strong> Unity and Discipline (एकता आणि शिस्त).</p>
                <p><strong className="text-amber-300">Troop Affiliation:</strong> Troop No. 10 / No. 3 Maharashtra Air Squadron NCC, Pune.</p>
                <p><strong className="text-amber-300">Certification:</strong> Authorized for NCC 'A' Certificate Examination.</p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full">
              <NCCCarousel />
            </div>
          </section>

          {/* NCC Programs & Campaigns */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">NCC Air Wing Training & Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nccPrograms.map((prog, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 hover:border-amber-400/40 transition-all space-y-3 text-white">
                  <div className="h-10 w-10 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl flex items-center justify-center font-bold text-sm">
                    {i+1}
                  </div>
                  <h4 className="font-display font-bold text-white text-base">{prog.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NCC Air Wing Photo Gallery Section */}
          <NCCGallerySection />
        </div>
      )}

      {/* KALA DARPAN (ARTS) Segments */}
      {activeSegment === 'arts' && (
        <div className="space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase flex items-center space-x-1">
                <Palette className="h-4 w-4 text-amber-500" />
                <span>Kala Darpan Fine Arts Society</span>
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                Nurturing Cultural Talents & Performing Arts Heritage
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kala Darpan is K.T.E.S.&apos;s integrated cultural wing, training students in Indian classical dances (Kathak, Bharatanatyam), vocal percussion structures, theatrical dramas, and traditional canvas easel painting boards.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Classical Instruments</span>
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Drama Theatres</span>
                <span className="bg-[#000c24]/30 text-indigo-300 border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full">Canvas Painting Exhibits</span>
              </div>
            </div>

            {/* Right-hand Responsive Image Carousel & Gallery Grid */}
            <div
              className="lg:col-span-7 space-y-4 w-full"
              onMouseEnter={() => setIsArtHovered(true)}
              onMouseLeave={() => setIsArtHovered(false)}
            >
              {kaladalanImages.length > 0 && (
                <>
                  {/* Featured Interactive Carousel Preview */}
                  <div className="relative w-full aspect-video rounded-2.5xl overflow-hidden shadow-2xl bg-slate-950 border border-white/15 group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={kaladalanImages[activeArtSlide % kaladalanImages.length].id}
                        src={kaladalanImages[activeArtSlide % kaladalanImages.length].src}
                        alt={kaladalanImages[activeArtSlide % kaladalanImages.length].title}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        onClick={() => setLightboxIndex(activeArtSlide % kaladalanImages.length)}
                        className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-500 group-hover:scale-105"
                      />
                    </AnimatePresence>

                    {/* Subtle Gradient Overlay & Counter */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 sm:p-5 flex items-center justify-between pointer-events-none">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded inline-block">
                          Kala Darpan Gallery • {(activeArtSlide % kaladalanImages.length) + 1} / {kaladalanImages.length}
                        </span>
                        <p className="text-xs sm:text-sm font-display font-bold text-white drop-shadow">
                          {kaladalanImages[activeArtSlide % kaladalanImages.length].title}
                        </p>
                      </div>
                    </div>

                    {/* Lightbox Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(activeArtSlide % kaladalanImages.length)}
                      className="absolute top-3.5 right-3.5 h-9 w-9 rounded-xl bg-slate-950/75 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg z-10"
                      aria-label="Open image in lightbox"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>

                    {/* Prev / Next Navigation Buttons */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveArtSlide((prev) => (prev - 1 + kaladalanImages.length) % kaladalanImages.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 transition-all cursor-pointer backdrop-blur z-10"
                      aria-label="Previous gallery image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveArtSlide((prev) => (prev + 1) % kaladalanImages.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 transition-all cursor-pointer backdrop-blur z-10"
                      aria-label="Next gallery image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Responsive Image Gallery Grid for All Kaladalan Assets */}
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3">
                    {kaladalanImages.map((img, idx) => {
                      const isCurrent = (activeArtSlide % kaladalanImages.length) === idx;
                      return (
                        <div
                          key={img.id}
                          onClick={() => {
                            setActiveArtSlide(idx);
                            setLightboxIndex(idx);
                          }}
                          className={`group relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 cursor-pointer transition-all duration-300 border ${
                            isCurrent
                              ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                              : 'border-white/15 hover:border-amber-400/60'
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2">
                            <span className="text-[10px] font-mono font-bold text-amber-300 bg-slate-950/80 px-1.5 py-0.5 rounded">
                              #{idx + 1}
                            </span>
                            <span className="h-6 w-6 rounded-lg bg-slate-950/80 text-amber-300 flex items-center justify-center">
                              <Maximize2 className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Fullscreen Lightbox Preview Viewer */}
          <AnimatePresence>
            {lightboxIndex !== null && kaladalanImages[lightboxIndex] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 select-none"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-6 right-6 z-50 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors shadow-2xl"
                  aria-label="Close Lightbox"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Photo Counter */}
                <div className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-amber-300 shadow-xl">
                  {lightboxIndex + 1} / {kaladalanImages.length}
                </div>

                {/* Previous Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((lightboxIndex - 1 + kaladalanImages.length) % kaladalanImages.length);
                  }}
                  className="absolute left-4 sm:left-8 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all shadow-2xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>

                {/* Fullscreen Image Container */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center"
                >
                  <motion.img
                    key={kaladalanImages[lightboxIndex].id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    src={kaladalanImages[lightboxIndex].src}
                    alt={kaladalanImages[lightboxIndex].title}
                    className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
                  />
                  <div className="mt-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 w-full max-w-xl text-center">
                    <h3 className="text-sm sm:text-base font-display font-bold text-white">
                      {kaladalanImages[lightboxIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((lightboxIndex + 1) % kaladalanImages.length);
                  }}
                  className="absolute right-4 sm:right-8 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all shadow-2xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Performances logs */}
          <section className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg">Notable Performances & Events Log</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artsPerformances.map((perf, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 text-white space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-indigo-300 block">Performance</span>
                  <h4 className="font-display font-bold text-white text-base">{perf.title}</h4>
                  <p className="text-slate-350 text-xs">Conducted by: <strong>{perf.artist}</strong> ({perf.date})</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
