import { Megaphone } from 'lucide-react';

export default function NewsTicker() {
  const newsItems = [
    {
      englishText: "New English Medium School (CBSE Affiliated) opening soon!",
      marathiText: "न्यू इंग्लिश मिडीयम स्कूल (सी.बी.एस.ई. संलग्न) लवकरच सुरू होत आहे!",
    },
    {
      englishText: "'Alumni Association - Member Registration' is now live; check the Students Portal Page to register!",
      marathiText: "'माजी विद्यार्थी संघ - सभासद नोंदणी' सुरू झाली असून, विद्यार्थी पोर्टल पेजवर (Students Portal Page) लिंक उपलब्ध आहे!",
    },
  ];

  const renderNewsSegment = (prefix: string) => (
    <div className="flex items-center space-x-6">
      {[1, 2].map((loopIdx) =>
        newsItems.map((item, itemIdx) => (
          <div key={`${prefix}-${loopIdx}-${itemIdx}`} className="flex items-center space-x-4">
            <span className="text-amber-300 font-semibold tracking-wide">
              {item.englishText}
            </span>
            <span className="text-red-400/80 font-bold text-xs">|</span>
            <span className="text-amber-200 font-medium font-sans">
              {item.marathiText}
            </span>
            <span className="text-red-400/70 font-bold text-xs pl-2">✦</span>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div
      id="breaking-news-ticker"
      className="w-full bg-slate-950/95 backdrop-blur-md border-y border-red-500/30 text-slate-100 flex items-center overflow-hidden shadow-md select-none group"
    >
      {/* High contrast Accent Badge */}
      <div
        id="ticker-badge"
        className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-black text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 uppercase flex items-center space-x-2 shrink-0 z-20 shadow-md tracking-wider border-r border-red-400/30"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
        </span>
        <Megaphone className="h-3.5 w-3.5 text-yellow-300" />
        <span className="hidden xs:inline sm:inline">LATEST NEWS / महत्त्वाची बातमी</span>
        <span className="xs:hidden sm:hidden">NEWS</span>
      </div>

      {/* Continuous marquee-scrolling text loop */}
      <div className="overflow-hidden flex-1 relative flex items-center py-1.5 bg-red-950/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
        <div className="animate-marquee flex whitespace-nowrap items-center space-x-6 group-hover:[animation-play-state:paused]">
          {renderNewsSegment('primary')}
          <div aria-hidden="true" className="flex items-center space-x-6">
            {renderNewsSegment('secondary')}
          </div>
        </div>
      </div>
    </div>
  );
}
