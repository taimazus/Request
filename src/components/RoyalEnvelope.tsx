import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import {
  GoldWaxSeal,
  CelestialMoon,
  CelestialSun,
  TarotCornerFiligree,
  TarotSparkleStar,
} from './CelestialDecorIcons.tsx';
import { celestialAudio } from '../utils/audio.ts';
import confetti from 'canvas-confetti';

interface RoyalEnvelopeProps {
  celebrantName: string;
  age: number;
  guestName?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/**
 * Ornate Micro-Constellation, Crescent Moon & Starlight Pattern
 * Embossed in shimmering gold directly onto the royal envelope parchment
 */
const EnvelopeConstellationPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 460 310"
    fill="none"
    className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
  >
    <defs>
      <linearGradient id="envelopeGoldGrad" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFBE6" stopOpacity="0.85" />
        <stop offset="30%" stopColor="#F5DE91" stopOpacity="0.75" />
        <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#996F14" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="envelopeMoonGrad" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" stopColor="#FFF9E0" stopOpacity="0.95" />
        <stop offset="50%" stopColor="#F5DF95" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
      </linearGradient>
      <radialGradient id="nebulaCluster" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <filter id="starGlowNode" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Concentric Astrological Astrolabe & Declination Coordinate Hairlines */}
    <ellipse cx="230" cy="155" rx="198" ry="128" stroke="url(#envelopeGoldGrad)" strokeWidth="0.6" strokeDasharray="3 4.5" opacity="0.38" />
    <ellipse cx="230" cy="155" rx="146" ry="94" stroke="url(#envelopeGoldGrad)" strokeWidth="0.5" strokeDasharray="2 3.5" opacity="0.3" />
    <ellipse cx="230" cy="155" rx="226" ry="146" stroke="url(#envelopeGoldGrad)" strokeWidth="0.4" opacity="0.22" />

    {/* Celestial Axis Hairlines */}
    <line x1="230" y1="18" x2="230" y2="292" stroke="url(#envelopeGoldGrad)" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />
    <line x1="24" y1="155" x2="436" y2="155" stroke="url(#envelopeGoldGrad)" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />

    {/* ================= 1. URSA MAJOR (The Great Dipper / دب اکبر) - Top Left ================= */}
    <g className="ursa-major" opacity="0.85">
      <polyline
        points="55,58 85,52 118,65 148,60 178,85 186,112 152,118 118,65"
        stroke="url(#envelopeGoldGrad)"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
      <circle cx="55" cy="58" r="2.2" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="85" cy="52" r="1.8" fill="#FFF8DE" />
      <circle cx="118" cy="65" r="2.4" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="148" cy="60" r="1.9" fill="#FFF8DE" />
      <circle cx="178" cy="85" r="2.6" fill="#FFFDF2" filter="url(#starGlowNode)" />
      <circle cx="186" cy="112" r="2" fill="#FCE9A0" />
      <circle cx="152" cy="118" r="2.3" fill="#FFF8DE" />
    </g>

    {/* ================= 2. CASSIOPEIA (The Celestial W / ذات الکرسی) - Top Right ================= */}
    <g className="cassiopeia" opacity="0.85">
      <polyline
        points="320,54 345,72 372,48 402,68 425,45"
        stroke="url(#envelopeGoldGrad)"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
      <circle cx="320" cy="54" r="2" fill="#FFF8DE" />
      <circle cx="345" cy="72" r="2.4" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="372" cy="48" r="2.6" fill="#FFFDF2" filter="url(#starGlowNode)" />
      <circle cx="402" cy="68" r="2" fill="#FFF8DE" />
      <circle cx="425" cy="45" r="2.2" fill="#FFFFFF" filter="url(#starGlowNode)" />
    </g>

    {/* ================= 3. ORION (صورت فلکی شکارچی) - Bottom Left ================= */}
    <g className="orion" opacity="0.82">
      <line x1="50" y1="210" x2="108" y2="198" stroke="url(#envelopeGoldGrad)" strokeWidth="0.65" opacity="0.55" />
      <line x1="68" y1="242" x2="80" y2="240" stroke="url(#envelopeGoldGrad)" strokeWidth="0.85" opacity="0.75" />
      <line x1="80" y1="240" x2="92" y2="238" stroke="url(#envelopeGoldGrad)" strokeWidth="0.85" opacity="0.75" />
      <line x1="50" y1="210" x2="68" y2="242" stroke="url(#envelopeGoldGrad)" strokeWidth="0.6" opacity="0.5" />
      <line x1="108" y1="198" x2="92" y2="238" stroke="url(#envelopeGoldGrad)" strokeWidth="0.6" opacity="0.5" />
      <line x1="68" y1="242" x2="56" y2="280" stroke="url(#envelopeGoldGrad)" strokeWidth="0.6" opacity="0.5" />
      <line x1="92" y1="238" x2="114" y2="272" stroke="url(#envelopeGoldGrad)" strokeWidth="0.6" opacity="0.5" />

      {/* Belt 3 Stars */}
      <circle cx="68" cy="242" r="2.2" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="80" cy="240" r="2.2" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="92" cy="238" r="2.2" fill="#FFFFFF" filter="url(#starGlowNode)" />

      {/* Betelgeuse & Rigel */}
      <circle cx="50" cy="210" r="2.8" fill="#FFF0B0" filter="url(#starGlowNode)" />
      <circle cx="108" cy="198" r="2.3" fill="#FFF8DE" />
      <circle cx="56" cy="280" r="2.1" fill="#FFF8DE" />
      <circle cx="114" cy="272" r="2.7" fill="#FFFFFF" filter="url(#starGlowNode)" />
    </g>

    {/* ================= 4. CYGNUS (The Northern Cross / صورت فلکی قو) - Bottom Right ================= */}
    <g className="cygnus" opacity="0.82">
      <line x1="395" y1="205" x2="365" y2="282" stroke="url(#envelopeGoldGrad)" strokeWidth="0.75" opacity="0.55" />
      <line x1="340" y1="235" x2="420" y2="248" stroke="url(#envelopeGoldGrad)" strokeWidth="0.75" opacity="0.55" />

      <circle cx="395" cy="205" r="2.8" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="380" cy="242" r="2.3" fill="#FFF8DE" />
      <circle cx="340" cy="235" r="2.1" fill="#FFF8DE" />
      <circle cx="420" cy="248" r="2.1" fill="#FFF8DE" />
      <circle cx="365" cy="282" r="2" fill="#FFF8DE" />
    </g>

    {/* ================= 5. PLEIADES (خوشه پروین / هفت خواهران) ================= */}
    <g className="pleiades" transform="translate(295, 122)" opacity="0.85">
      <circle cx="14" cy="8" r="14" fill="url(#nebulaCluster)" />
      <circle cx="4" cy="4" r="1.3" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="10" cy="2" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="6" r="1.8" fill="#FFFFFF" filter="url(#starGlowNode)" />
      <circle cx="22" cy="4" r="1.2" fill="#FFFFFF" />
      <circle cx="12" cy="11" r="1.4" fill="#FFFFFF" />
      <circle cx="19" cy="12" r="1.6" fill="#FFFFFF" />
      <circle cx="25" cy="10" r="1.2" fill="#FFFFFF" />
    </g>

    {/* ================= 6. ORNATE ETCHED CRESCENT MOONS ================= */}
    {/* Left Ethereal Crescent Moon */}
    <g transform="translate(20, 122)" opacity="0.9">
      <path
        d="M 18 0 A 18 18 0 0 0 18 36 A 14 14 0 0 1 18 0 Z"
        fill="url(#envelopeMoonGrad)"
        filter="url(#starGlowNode)"
      />
      <circle cx="26" cy="18" r="1.4" fill="#FFFFFF" />
    </g>

    {/* Right Ethereal Crescent Moon */}
    <g transform="translate(412, 132)" opacity="0.9">
      <path
        d="M 14 0 A 16 16 0 0 1 14 32 A 12.5 12.5 0 0 0 14 0 Z"
        fill="url(#envelopeMoonGrad)"
        filter="url(#starGlowNode)"
      />
      <circle cx="4" cy="16" r="1.3" fill="#FFFFFF" />
    </g>

    {/* Bottom Center Crescent Moon with Radiance */}
    <g transform="translate(216, 266)" opacity="0.85">
      <path
        d="M 14 0 A 14 14 0 0 0 14 26 A 11 11 0 0 1 14 0 Z"
        fill="url(#envelopeMoonGrad)"
      />
      <circle cx="20" cy="13" r="1.5" fill="#FFFFFF" filter="url(#starGlowNode)" />
    </g>

    {/* ================= 7. SCATTERED 4-POINTED & 8-POINTED GOLD FOIL STARS ================= */}
    <g transform="translate(230, 38) scale(0.7)" opacity="0.9">
      <path d="M0 -12 C0 -3 3 0 12 0 C3 0 0 3 0 12 C0 3 -3 0 -12 0 C-3 0 0 -3 0 -12 Z" fill="#FFFDF2" filter="url(#starGlowNode)" />
    </g>
    <g transform="translate(230, 240) scale(0.65)" opacity="0.85">
      <path d="M0 -10 C0 -2 2 0 10 0 C2 0 0 2 0 10 C0 2 -2 0 -10 0 C-2 0 0 -2 0 -10 Z" fill="#FFFDF2" filter="url(#starGlowNode)" />
    </g>
    <g transform="translate(130, 155) scale(0.55)" opacity="0.8">
      <path d="M0 -10 C0 -2 2 0 10 0 C2 0 0 2 0 10 C0 2 -2 0 -10 0 C-2 0 0 -2 0 -10 Z" fill="#FFFDF2" />
    </g>
    <g transform="translate(330, 155) scale(0.55)" opacity="0.8">
      <path d="M0 -10 C0 -2 2 0 10 0 C2 0 0 2 0 10 C0 2 -2 0 -10 0 C-2 0 0 -2 0 -10 Z" fill="#FFFDF2" />
    </g>

    {/* Micro Diamond Stardust Points */}
    {[
      [35, 30], [95, 25], [160, 35], [290, 30], [360, 25], [430, 32],
      [28, 90], [215, 88], [245, 88], [435, 95],
      [145, 185], [175, 230], [285, 235], [315, 190],
      [35, 260], [80, 295], [150, 280], [310, 290], [390, 295], [435, 270],
    ].map(([x, y], idx) => (
      <circle
        key={idx}
        cx={x}
        cy={y}
        r={idx % 3 === 0 ? 1.4 : idx % 2 === 0 ? 1.1 : 0.8}
        fill={idx % 2 === 0 ? "#FFFFFF" : "#FEEBA0"}
        opacity={idx % 3 === 0 ? 0.9 : 0.65}
      />
    ))}
  </svg>
);

export const RoyalEnvelope: React.FC<RoyalEnvelopeProps> = ({
  celebrantName,
  age,
  guestName,
  isOpen,
  onOpen,
  onClose,
}) => {
  const [openingStage, setOpeningStage] = useState<'idle' | 'breaking' | 'unfolding' | 'revealing'>('idle');
  const envelopeRef = useRef<HTMLDivElement>(null);

  // Smooth spring physics for tactile 3D tilt
  const springConfig = { damping: 26, stiffness: 150, mass: 0.7 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  // Dynamic specular sheen reflection coordinates mapped to interactive tilt physics
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);
  const sheenBackground = useMotionTemplate`radial-gradient(circle 420px at ${sheenX}% ${sheenY}%, rgba(255, 248, 220, 0.24) 0%, rgba(212, 175, 55, 0.09) 35%, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!envelopeRef.current || openingStage !== 'idle') return;
    const rect = envelopeRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!envelopeRef.current || e.touches.length === 0 || openingStage !== 'idle') return;
    const touch = e.touches[0];
    const rect = envelopeRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(Math.max(-0.5, Math.min(0.5, x)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, y)));
  };

  const handleTouchEnd = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleOpenEnvelope = () => {
    if (openingStage !== 'idle' || isOpen) return;
    setOpeningStage('breaking');
    celestialAudio.playCardFlipSound();

    // Stage 1: Breaking seal & golden starburst confetti
    confetti({
      particleCount: 65,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#FFF8D6', '#D4AF37', '#F5DF95', '#AA771C', '#FFFFFF'],
      shapes: ['star'],
      disableForReducedMotion: true,
    });

    // Stage 2: Flap unrolls upwards in 3D
    setTimeout(() => {
      setOpeningStage('unfolding');
      celestialAudio.playCelestialChimeSound();
    }, 280);

    // Stage 3: Luxury Card emerges
    setTimeout(() => {
      setOpeningStage('revealing');
    }, 620);

    // Finalize open and present full card
    setTimeout(() => {
      onOpen();
      setOpeningStage('idle');
    }, 1050);
  };

  const displayName = guestName?.trim() ? guestName.trim() : '';

  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[440px] mx-auto my-auto py-3 px-2 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope-closed"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -30, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
            className="w-full text-center flex flex-col items-center"
          >
            {/* Header / Subtitle with Sun & Moon Flanking */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 space-y-1.5 select-none flex flex-col items-center"
            >
              {/* English line replacing ROYAL CELESTIAL INVITATION */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 backdrop-blur-xs">
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px] animate-pulse">✦</span>
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.16em] xs:tracking-[0.22em] text-[#FFF4C2] font-cinzel font-semibold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                  THE SUN & THE MOON ARE ALSO INVITED TO THIS CELEBRATION
                </span>
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px] animate-pulse">✦</span>
              </div>

              {/* Dreamy golden radiant title: Welcome to the Sana Birthday */}
              <h2 className="relative flex items-center justify-center gap-2 sm:gap-3 py-1 text-center">
                <CelestialMoon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-transform hover:scale-110 shrink-0" />
                <span className="font-pinyon text-3xl xs:text-4xl sm:text-[44px] md:text-[48px] font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF2] via-[#FEEBA0] via-[#D4AF37] to-[#FFF8DB] drop-shadow-[0_0_14px_rgba(255,235,130,0.85)] drop-shadow-[0_0_28px_rgba(212,175,55,0.6)] leading-none select-none">
                  Welcome to the Sana Birthday
                </span>
                <CelestialSun className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-transform hover:scale-110 shrink-0" />
              </h2>
            </motion.div>

            {/* The Envelope 3D Container with Tactile Tilt */}
            <motion.div
              ref={envelopeRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              onClick={handleOpenEnvelope}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenEnvelope();
              }}
              title="لمس برای گشودن پاکت نامه زرین"
              className="group relative cursor-pointer mx-auto w-full aspect-[16/11] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#050C22] to-[#02040E] p-1 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.25)] border-[1.5px] sm:border-2 border-[#D4AF37]/80 overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_32px_90px_rgba(0,0,0,0.98),0_0_50px_rgba(212,175,55,0.45)] touch-manipulation select-none"
            >
              {/* Velvet Texture */}
              <div className="absolute inset-0 velvet-texture pointer-events-none opacity-50" />

              {/* Central Ethereal Golden Nebula Glow */}
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,rgba(30,60,140,0.15)_45%,transparent_75%)] blur-2xl pointer-events-none -z-0" />

              {/* Dynamic Specular Sheen (Tracks Cursor / Tilt) */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl mix-blend-color-dodge transition-opacity duration-300 z-30"
                style={{
                  background: sheenBackground,
                }}
              />

              {/* Specular Light Gleam Sweep */}
              <div className="pointer-events-none absolute -inset-full w-[300%] h-[300%] animate-specular-sweep specular-gleam-gradient opacity-60 mix-blend-overlay z-30" />

              {/* Gilded Double-Ruled Tarot Border with Corner Filigrees */}
              <div className="absolute inset-1.5 xs:inset-2 sm:inset-3 border border-[#D4AF37]/65 rounded-xl sm:rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-[#D4AF37]/90 z-20">
                {/* Inner secondary hairline */}
                <div className="absolute inset-[2.5px] sm:inset-[3px] border border-[#D4AF37]/30 border-dashed rounded-[9px] sm:rounded-[13px]" />

                {/* 4 Vintage Gilded Tarot Corner Filigrees */}
                <div className="absolute -top-1 -left-1">
                  <TarotCornerFiligree className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" rotation={0} />
                </div>
                <div className="absolute -top-1 -right-1">
                  <TarotCornerFiligree className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" rotation={90} />
                </div>
                <div className="absolute -bottom-1 -right-1">
                  <TarotCornerFiligree className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" rotation={180} />
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <TarotCornerFiligree className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" rotation={270} />
                </div>

                {/* Cardinal Stars */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                  <TarotSparkleStar size={9} />
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                  <TarotSparkleStar size={9} />
                </div>
              </div>

              {/* Inside Envelope Lining Texture (Starry Constellations revealed when opened) */}
              <div className="absolute inset-0 bg-[#060D22] pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
              </div>

              {/* Emerging Invitation Card preview when opening */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: openingStage === 'revealing' ? -100 : openingStage === 'unfolding' ? -35 : 0,
                  opacity: openingStage === 'revealing' || openingStage === 'unfolding' ? 1 : 0,
                  scale: openingStage === 'revealing' ? 1.06 : 0.98,
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-5 top-3 h-48 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0F1C40] via-[#09142E] to-[#040816] border-[1.5px] border-[#D4AF37]/75 shadow-2xl z-15 flex flex-col items-center justify-center p-3 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CelestialMoon className="w-5 h-5 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                  <span className="text-xs text-[#D4AF37]">✨</span>
                  <CelestialSun className="w-5 h-5 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                </div>
                <span className="font-readex font-bold text-2xl text-[#FFFDF2] embossed-gold-name">ثنا</span>
                <span className="font-cinzel text-sm font-bold text-[#D4AF37] tracking-widest mt-0.5">XXIII • CELESTIAL</span>
                <span className="text-[10.5px] text-[#A8C4E8] font-vazir mt-1">در حال گشودن دعوت‌نامه...</span>
              </motion.div>

              {/* Envelope Flap Triangular Fold with smooth 3D unfolding */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: openingStage === 'unfolding' || openingStage === 'revealing' ? -180 : 0,
                  zIndex: openingStage === 'unfolding' || openingStage === 'revealing' ? 0 : 25,
                }}
                transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#0E1C45] via-[#091535] to-[#050B1E] border-b border-[#D4AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6)] [clip-path:polygon(0_0,100%_0,50%_100%)] z-25 overflow-hidden"
              >
                {/* Triangular Flap Golden Constellations & Star Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-85">
                  <svg viewBox="0 0 460 155" fill="none" className="w-full h-full">
                    {/* Flap Constellation Triangulation */}
                    <line x1="230" y1="140" x2="130" y2="40" stroke="#D4AF37" strokeWidth="0.65" opacity="0.6" strokeDasharray="3 3" />
                    <line x1="230" y1="140" x2="330" y2="40" stroke="#D4AF37" strokeWidth="0.65" opacity="0.6" strokeDasharray="3 3" />
                    <line x1="130" y1="40" x2="330" y2="40" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 4" />
                    <circle cx="130" cy="40" r="2" fill="#FFFFFF" />
                    <circle cx="330" cy="40" r="2" fill="#FFFFFF" />
                    <circle cx="230" cy="65" r="1.8" fill="#FFF8DE" />
                    <circle cx="180" cy="95" r="1.5" fill="#FFFFFF" />
                    <circle cx="280" cy="95" r="1.5" fill="#FFFFFF" />
                    {/* Flap apex crescent */}
                    <path d="M 230 115 A 8 8 0 0 0 230 131 A 6.5 6.5 0 0 1 230 115 Z" fill="#FFF7DC" opacity="0.75" />
                  </svg>
                </div>

                {/* Gilded Triangular Edge Piping */}
                <div className="absolute inset-0 border-b-2 border-[#D4AF37]/70 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />
                
                {/* Flap apex gold filigree tick */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[#D4AF37]/80 text-[10px] pointer-events-none">
                  ✦
                </div>
              </motion.div>

              {/* Lower pocket envelope folds with realistic diagonal depth */}
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#020510] via-[#050C22] to-[#081330] z-10 [clip-path:polygon(0_0,50%_50%,100%_0,100%_100%,0_100%)] shadow-inner" />
              <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-[#02040E]/80 to-transparent z-12 pointer-events-none" />

              {/* Intricate Celestial Constellations, Moons & Stars Envelope Artwork */}
              <EnvelopeConstellationPattern className="z-15" />

              {/* Wax Seal at the center apex with dynamic click animation & golden aura */}
              <motion.div
                animate={
                  openingStage === 'breaking'
                    ? { scale: [1, 1.35, 0], rotate: [0, 10, -10, 0], opacity: [1, 1, 0] }
                    : openingStage !== 'idle'
                    ? { opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-300 group-hover:scale-110"
              >
                {/* Luminous Pulsing Seal Back-Glow */}
                <div className="absolute inset-0 -m-3 rounded-full bg-radial from-[#D4AF37]/50 via-[#D4AF37]/25 to-transparent blur-md pointer-events-none animate-pulse" />
                <GoldWaxSeal size={74} />
              </motion.div>
            </motion.div>

            {/* Bottom Reflective Pedestal Pool */}
            <div aria-hidden="true" className="pointer-events-none relative w-full flex flex-col items-center select-none -mt-1 sm:-mt-1.5 z-0">
              <div className="w-[82%] h-4 sm:h-5 rounded-[100%] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent blur-md -mb-2 opacity-75" />
              <div className="w-[72%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mt-0.5 opacity-60" />
            </div>
          </motion.div>
        ) : (
          /* Re-seal action banner */
          <motion.div
            key="envelope-open-banner"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="w-full flex items-center justify-between py-1.5 px-3 rounded-xl bg-[#09122C]/70 border border-[#D4AF37]/25 text-xs text-[#C8D3E6] mb-2"
          >
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-[#D4AF37]">✦</span>
              <span>دعوت‌نامه {displayName ? `برای ${displayName}` : 'رسمی'}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-[#D4AF37] hover:text-[#FFF5CC] underline underline-offset-2 transition-colors text-[11px] cursor-pointer"
            >
              بستن پاکت ✉️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
