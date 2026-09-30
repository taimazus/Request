import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_INVITATION_DATA } from './data/defaultInvitation.ts';
import { EventInvitationData } from './types.ts';
import {
  StarryNightCanvas,
  AstrologicalZodiacRing,
  VintageArtMoon,
  VintageArtSun,
} from './components/CelestialDecorIcons.tsx';
import { RoyalEnvelope } from './components/RoyalEnvelope.tsx';
import { InvitationCard } from './components/InvitationCard.tsx';
import { CelestialMusicWidget } from './components/CelestialMusicWidget.tsx';
import { SaveAndShareModal } from './components/SaveAndShareModal.tsx';
import { Share2 } from 'lucide-react';

export default function App() {
  const [data] = useState<EventInvitationData>(() => {
    try {
      const saved = localStorage.getItem('celestial_birthday_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.celebrantName = 'Sana';
        parsed.datePersian = 'پنجشنبه ۹ مهر ماه';
        parsed.time = '۱۶:۰۰';
        parsed.venueName = 'خانه تقی یام';
        parsed.address = 'خیابان رسالت ، کوی افسران ، ۱۲ متری ویلا ، پلاک ۳۰ ، طبقه ۴';
        parsed.googleMapsUrl = 'https://maps.app.goo.gl/p53f6z2aiMhdSCjK9';
        parsed.neshanUrl = 'https://nshn.ir/rbAy0AyCVv0j';
        parsed.dressCodeTitle = 'سرمه‌ای شب، سفید، طلایی، مشکی';
        parsed.poeticVerse = 'در آغوش کسوف، ماه و خورشید به هم می‌رسند. دیداری جادویی میان نور و سایه در پهنه آسمان.';
        return parsed;
      }
      return INITIAL_INVITATION_DATA;
    } catch {
      return INITIAL_INVITATION_DATA;
    }
  });

  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlGuest = params.get('to') || params.get('guest') || params.get('name') || '';
    if (urlGuest) {
      setGuestName(decodeURIComponent(urlGuest.replace(/\+/g, ' ')));
    }
  }, []);

  // Display the royal envelope first so the guest experiences the luxury unsealing ritual
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#030611] text-[#E8ECF5] overflow-x-hidden flex flex-col items-center justify-center px-2 xs:px-3 sm:px-6 py-2.5 xs:py-3 sm:py-6 selection:bg-[#D4AF37]/30 selection:text-[#FFF5CC]">
      {/* Background Starry Night Canvas with Nebula, Meteors & Constellations */}
      <StarryNightCanvas />

      {/* Rotating Astrological Zodiac Astrolabe in Deep Cosmic Background */}
      <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-[94vw] max-h-[94vw] z-0 flex items-center justify-center opacity-25">
        <AstrologicalZodiacRing className="w-full h-full text-[#D4AF37]" />
      </div>

      {/* Soft, Hazy Ethereal Moon & Sun in Deep Cosmic Background - ONLY shown when envelope is closed */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            key="cosmic-hazy-celestial-bodies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            transition={{ duration: 0.7 }}
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            {/* 1. Vintage Celestial Moon Art on Left / Top-Left */}
            <div className="absolute top-5 sm:top-10 md:top-14 left-2.5 sm:left-8 md:left-14 lg:left-20 animate-float-slow">
              <VintageArtMoon className="w-22 h-22 xs:w-26 xs:h-26 sm:w-28 sm:h-28 md:w-32 md:h-32" />
            </div>

            {/* 2. Vintage Celestial Sun Art on Right / Top-Right */}
            <div className="absolute top-5 sm:top-10 md:top-14 right-2.5 sm:right-8 md:right-14 lg:right-20 animate-float-counter">
              <VintageArtSun className="w-22 h-22 xs:w-26 xs:h-26 sm:w-28 sm:h-28 md:w-32 md:h-32" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Central Ethereal Golden Moon/Sun Aura directly behind the card */}
      <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] max-w-[96vw] max-h-[96vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,rgba(20,35,75,0.22)_45%,transparent_75%)] blur-2xl z-0 animate-astral-breathe" />

      {/* Subtle Polished Horizon Reflective Floor Glow */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#02050E] via-[#040816]/40 to-transparent z-0" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-28 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_70%)] z-0" />

      {/* Subtle Top & Bottom Gold Horizon Hairline Lines */}
      <div className="pointer-events-none fixed top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-20" />
      <div className="pointer-events-none fixed bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-20" />

      {/* Music Player in Corner: Plays "Harpy Hare in 26edo - Bryan Deister" immediately from 00:30; click shows settings */}
      <div className="fixed top-2.5 left-2.5 xs:top-3 xs:left-3 sm:top-4 sm:left-4 z-40">
        <CelestialMusicWidget autoPlayTrigger={true} />
      </div>

      {/* Top Right Quick Action: Save & Share */}
      <div className="fixed top-2.5 right-2.5 xs:top-3 xs:right-3 sm:top-4 sm:right-4 z-40">
        <button
          type="button"
          onClick={() => setIsSaveModalOpen(true)}
          className="flex items-center gap-1.5 py-1.5 px-3 xs:px-3.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F6E294]/30 to-[#D4AF37]/20 hover:from-[#D4AF37]/45 hover:to-[#D4AF37]/45 active:scale-95 border border-[#D4AF37]/75 hover:border-[#D4AF37] text-[10.5px] xs:text-xs font-semibold text-[#FFF7D4] shadow-[0_2px_15px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all cursor-pointer font-vazir"
          title="ذخیره و اشتراک‌گذاری کارت دعوت"
        >
          <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>ذخیره و اشتراک</span>
        </button>
      </div>

      {/* Main Focus: Pure Digital Invitation Card */}
      <main className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center justify-center my-auto">
        {!isEnvelopeOpen ? (
          <RoyalEnvelope
            celebrantName={data.celebrantName}
            age={data.age}
            guestName={guestName}
            isOpen={isEnvelopeOpen}
            onOpen={() => setIsEnvelopeOpen(true)}
            onClose={() => setIsEnvelopeOpen(false)}
          />
        ) : (
          <InvitationCard
            data={data}
            guestName={guestName}
            onViewEnvelope={() => setIsEnvelopeOpen(false)}
            onOpenSaveModal={() => setIsSaveModalOpen(true)}
          />
        )}
      </main>

      {/* Save & Share Modal */}
      <SaveAndShareModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        data={data}
        initialGuestName={guestName}
      />
    </div>
  );
}
