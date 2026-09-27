import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Sparkles, SkipForward, ShieldCheck } from 'lucide-react';

// ============================================================================
// SPLASH SCREEN CONFIGURATION (Active for Today: September 27, 2026)
// Set `showSplash = false` to manually disable this pre-landing overlay.
// ============================================================================
const showSplash = true; // Set to false to disable
const ACTIVE_DATE = '2026-09-27'; // Active on September 27, 2026
const SPLASH_DURATION_SECONDS = 10;

const ktesLogo = '/images/ktes_official_logo_1783686643223.jpg';

function isActiveToday(): boolean {
  if (!showSplash) return false;
  const now = new Date();
  const localDateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;
  return localDateStr <= ACTIVE_DATE;
}

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(() => isActiveToday());
  const [isFading, setIsFading] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(SPLASH_DURATION_SECONDS);

  const handleDismiss = useCallback(() => {
    setIsFading(true);
    window.setTimeout(() => {
      setIsVisible(false);
    }, 650);
  }, []);

  useEffect(() => {
    if (!isVisible || isFading) return;

    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          handleDismiss();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isVisible, isFading, handleDismiss]);

  // Allow Escape or Enter key for immediate access
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleDismiss]);

  if (!isVisible) return null;

  const progressPercentage =
    ((SPLASH_DURATION_SECONDS - secondsLeft) / SPLASH_DURATION_SECONDS) * 100;
  const circleRadius = 54;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset =
    circleCircumference - (secondsLeft / SPLASH_DURATION_SECONDS) * circleCircumference;

  return (
    <div
      id="splash-screen-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Khed Taluka Education Society Welcome Splash Screen"
      className={`fixed inset-0 z-[9999] w-full h-full bg-[#030816] text-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden select-none transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient Radial Gold & Sapphire Backlighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-amber-500/12 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[130px]" />
      </div>

      {/* Top-Right Quick Skip Button */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20">
        <button
          type="button"
          id="splash-skip-top-btn"
          onClick={handleDismiss}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-300 transition-all cursor-pointer backdrop-blur-md shadow-lg"
        >
          <span>Skip</span>
          <SkipForward className="h-3.5 w-3.5 text-amber-400" />
        </button>
      </div>

      {/* Main Centered Institutional Welcome Card */}
      <div className="relative z-10 max-w-2xl w-full bg-slate-900/80 border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col items-center text-center space-y-6">
        {/* Top Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Legacy of Academic Excellence • Est. 1938</span>
        </div>

        {/* Official KTES Emblem */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber-500/30 via-amber-300/20 to-transparent blur-md animate-pulse" />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-white p-1.5 shadow-2xl ring-4 ring-amber-400/50 flex items-center justify-center overflow-hidden">
            <img
              src={ktesLogo}
              alt="Khed Taluka Education Society Official Logo"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Organization Branding */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase font-sans">
            खेड तालुका एज्युकेशन सोसायटी, राजगुरुनगर
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight text-white uppercase leading-tight">
            Khed Taluka Education Society
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-lg mx-auto">
            ज्ञान, संस्कार आणि प्रगतीचे केंद्र — Empowering generations through quality education, character building, and holistic development in Rajgurunagar, Pune.
          </p>
        </div>

        {/* Stylish 10-Second Visual Circular Countdown Timer */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="relative h-32 w-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 128 128">
              {/* Background Track */}
              <circle
                cx="64"
                cy="64"
                r={circleRadius}
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                className="text-slate-800"
              />
              {/* Animated Countdown Ring */}
              <circle
                cx="64"
                cy="64"
                r={circleRadius}
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="text-amber-400 transition-all duration-1000 ease-linear drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                id="splash-countdown-value"
                className="text-3xl sm:text-4xl font-display font-black text-white tabular-nums leading-none"
              >
                {String(secondsLeft).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300/90 mt-1">
                Seconds
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-2">
            Automatically entering website in{' '}
            <span className="text-amber-300 font-bold">{secondsLeft}s</span>...
          </p>
        </div>

        {/* Immediate Access Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full pt-1">
          <button
            type="button"
            id="splash-enter-website-btn"
            onClick={handleDismiss}
            className="w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-display font-black text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-400/35 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Enter Website</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            id="splash-skip-btn"
            onClick={handleDismiss}
            className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            Skip Intro
          </button>
        </div>

        {/* Bottom Progress Bar & Footer Note */}
        <div className="w-full space-y-2 pt-2">
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>Official KTES Digital Portal</span>
            </span>
            <span>Rajgurunagar, Pune • 410505</span>
          </div>
        </div>
      </div>
    </div>
  );
}
