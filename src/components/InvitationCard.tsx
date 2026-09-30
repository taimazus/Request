import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import {
  MinimalCelestialEmblem,
  CelestialMoon,
  CelestialSun,
  TarotSparkleStar,
  TarotCornerFiligree,
  CelestialToastIcon,
  CelestialCakeIcon,
  CelestialMusicIcon,
  CelestialFeastIcon,
} from './CelestialDecorIcons.tsx';
import { EventInvitationData } from '../types.ts';
import {
  RefreshCw,
  Navigation,
  Check,
  Copy,
  MapPin,
  ExternalLink,
  Calendar,
  Share2,
} from 'lucide-react';
import { celestialAudio } from '../utils/audio.ts';

interface InvitationCardProps {
  data: EventInvitationData;
  guestName?: string;
  onViewEnvelope?: () => void;
  onOpenSaveModal?: () => void;
}

/**
 * Subtle Yet Discernible Constellation & Astrolabe Chart Background for Invitation Card
 * Features rich celestial linework, glowing stellar nodes, coordinate circles, and fine perimeter ticks
 */
const CardConstellationBackground: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 400 580"
    fill="none"
    className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
  >
    <defs>
      <linearGradient id="cardConstGold" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9E0" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#966C12" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="cardLineFaint" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8D6" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.38" />
        <stop offset="100%" stopColor="#8C6615" stopOpacity="0.25" />
      </linearGradient>
      <filter id="cardStarGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="cardNebulaGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
      </filter>
    </defs>

    {/* Concentric Astrological Coordinate Arcs & Ecliptic Rings */}
    <circle cx="200" cy="245" r="185" stroke="url(#cardConstGold)" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.38" />
    <circle cx="200" cy="245" r="150" stroke="url(#cardConstGold)" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.28" />
    <circle cx="200" cy="245" r="215" stroke="url(#cardConstGold)" strokeWidth="0.5" strokeDasharray="1.5 4.5" opacity="0.22" />
    <circle cx="200" cy="245" r="95" stroke="url(#cardConstGold)" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.25" />

    {/* Astrolabe Axis Crosslines & Radiating Degree Rays */}
    <line x1="200" y1="14" x2="200" y2="566" stroke="url(#cardConstGold)" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.28" />
    <line x1="14" y1="245" x2="386" y2="245" stroke="url(#cardConstGold)" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.28" />
    <line x1="45" y1="90" x2="355" y2="400" stroke="url(#cardLineFaint)" strokeWidth="0.45" strokeDasharray="2 6" opacity="0.2" />
    <line x1="355" y1="90" x2="45" y2="400" stroke="url(#cardLineFaint)" strokeWidth="0.45" strokeDasharray="2 6" opacity="0.2" />

    {/* Perimeter Astrological Degree Tick Marks (fine border details around edges) */}
    {[
      ...[30, 50, 70, 90, 110, 130, 150, 170, 230, 250, 270, 290, 310, 330, 350, 370].flatMap((x) => [
        { x1: x, y1: 10, x2: x, y2: 15 },
        { x1: x, y1: 565, x2: x, y2: 570 },
      ]),
      ...[40, 70, 100, 130, 160, 190, 220, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540].flatMap((y) => [
        { x1: 10, y1: y, x2: 15, y2: y },
        { x1: 385, y1: y, x2: 390, y2: y },
      ]),
    ].map((tick, i) => (
      <line
        key={i}
        x1={tick.x1}
        y1={tick.y1}
        x2={tick.x2}
        y2={tick.y2}
        stroke="#D4AF37"
        strokeWidth="0.75"
        opacity="0.45"
      />
    ))}

    {/* Perimeter Micro Diamond Marks */}
    {[
      [200, 12], [200, 568], [12, 245], [388, 245],
      [100, 12], [300, 12], [100, 568], [300, 568],
      [12, 130], [12, 360], [388, 130], [388, 360]
    ].map(([x, y], idx) => (
      <polygon
        key={idx}
        points={`${x},${y - 2.5} ${x + 2},${y} ${x},${y + 2.5} ${x - 2},${y}`}
        fill="#D4AF37"
        opacity="0.65"
      />
    ))}

    {/* ================= 1. Ursa Major (دب اکبر) - Upper Left ================= */}
    <g opacity="0.85">
      <polyline
        points="42,92 70,88 96,100 120,95 144,116 150,138 124,142 96,100"
        stroke="url(#cardConstGold)"
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="92" r="2.2" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="70" cy="88" r="1.8" fill="#FFF8DE" />
      <circle cx="96" cy="100" r="2.2" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="120" cy="95" r="1.8" fill="#FFF8DE" />
      <circle cx="144" cy="116" r="2.4" fill="#FFFDF2" filter="url(#cardStarGlow)" />
      <circle cx="150" cy="138" r="1.9" fill="#FCE9A0" />
      <circle cx="124" cy="142" r="1.9" fill="#FFF8DE" />
    </g>

    {/* ================= 2. Cassiopeia (ذات‌الکرسی) - Upper Right ================= */}
    <g opacity="0.85">
      <polyline
        points="272,90 294,106 318,86 344,102 364,82"
        stroke="url(#cardConstGold)"
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="272" cy="90" r="1.9" fill="#FFF8DE" />
      <circle cx="294" cy="106" r="2.2" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="318" cy="86" r="2.5" fill="#FFFDF2" filter="url(#cardStarGlow)" />
      <circle cx="344" cy="102" r="1.9" fill="#FFF8DE" />
      <circle cx="364" cy="82" r="2.2" fill="#FFFFFF" filter="url(#cardStarGlow)" />
    </g>

    {/* ================= 3. Corona Borealis (تاج شمالی) - Upper Center ================= */}
    <g opacity="0.75">
      <path
        d="M 175,68 Q 200,82 225,68"
        stroke="url(#cardConstGold)"
        strokeWidth="0.7"
        fill="none"
        strokeDasharray="2 3"
      />
      <circle cx="175" cy="68" r="1.4" fill="#FFF8DE" />
      <circle cx="188" cy="74" r="1.6" fill="#FFF8DE" />
      <circle cx="200" cy="76" r="2.3" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="212" cy="74" r="1.6" fill="#FFF8DE" />
      <circle cx="225" cy="68" r="1.4" fill="#FFF8DE" />
    </g>

    {/* ================= 4. Orion (شکارچی) - Lower Left ================= */}
    <g opacity="0.8">
      <line x1="40" y1="388" x2="86" y2="378" stroke="url(#cardConstGold)" strokeWidth="0.75" opacity="0.6" />
      <line x1="54" y1="413" x2="64" y2="411" stroke="url(#cardConstGold)" strokeWidth="0.9" opacity="0.8" />
      <line x1="64" y1="411" x2="74" y2="409" stroke="url(#cardConstGold)" strokeWidth="0.9" opacity="0.8" />
      <line x1="40" y1="388" x2="54" y2="413" stroke="url(#cardConstGold)" strokeWidth="0.65" opacity="0.55" />
      <line x1="86" y1="378" x2="74" y2="409" stroke="url(#cardConstGold)" strokeWidth="0.65" opacity="0.55" />
      <line x1="54" y1="413" x2="46" y2="443" stroke="url(#cardConstGold)" strokeWidth="0.65" opacity="0.55" />
      <line x1="74" y1="409" x2="92" y2="438" stroke="url(#cardConstGold)" strokeWidth="0.65" opacity="0.55" />
      <circle cx="54" cy="413" r="2.1" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="64" cy="411" r="2.1" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="74" cy="409" r="2.1" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="40" cy="388" r="2.5" fill="#FFF0B0" filter="url(#cardStarGlow)" />
      <circle cx="86" cy="378" r="2" fill="#FFF8DE" />
      <circle cx="46" cy="443" r="2" fill="#FFF8DE" />
      <circle cx="92" cy="438" r="2.4" fill="#FFFFFF" filter="url(#cardStarGlow)" />
    </g>

    {/* ================= 5. Cygnus Northern Cross - Lower Right ================= */}
    <g opacity="0.8">
      <line x1="335" y1="382" x2="310" y2="448" stroke="url(#cardConstGold)" strokeWidth="0.8" opacity="0.65" />
      <line x1="286" y1="408" x2="356" y2="420" stroke="url(#cardConstGold)" strokeWidth="0.8" opacity="0.65" />
      <circle cx="335" cy="382" r="2.4" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="320" cy="414" r="2.1" fill="#FFF8DE" />
      <circle cx="286" cy="408" r="1.9" fill="#FFF8DE" />
      <circle cx="356" cy="420" r="1.9" fill="#FFF8DE" />
      <circle cx="310" cy="448" r="1.9" fill="#FFF8DE" />
    </g>

    {/* ================= 6. Lyra with bright Vega - Right Mid ================= */}
    <g opacity="0.75">
      <polygon
        points="340,165 358,180 348,205 328,198"
        stroke="url(#cardConstGold)"
        strokeWidth="0.7"
        fill="none"
        opacity="0.6"
      />
      <line x1="340" y1="165" x2="332" y2="142" stroke="url(#cardConstGold)" strokeWidth="0.7" opacity="0.6" />
      <circle cx="332" cy="142" r="2.5" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="340" cy="165" r="1.6" fill="#FFF8DE" />
      <circle cx="358" cy="180" r="1.5" fill="#FFF8DE" />
      <circle cx="348" cy="205" r="1.5" fill="#FFF8DE" />
      <circle cx="328" cy="198" r="1.6" fill="#FFF8DE" />
    </g>

    {/* ================= 7. Pleiades 7-Star Cluster - Upper Right ================= */}
    <g transform="translate(245, 140)" opacity="0.85">
      <circle cx="12" cy="6" r="14" fill="#D4AF37" opacity="0.12" filter="url(#cardNebulaGlow)" />
      <circle cx="3" cy="3" r="1.4" fill="#FFFFFF" />
      <circle cx="8" cy="1" r="1.6" fill="#FFFFFF" />
      <circle cx="13" cy="5" r="1.9" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="18" cy="3" r="1.3" fill="#FFFFFF" />
      <circle cx="10" cy="9" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="10" r="1.7" fill="#FFFFFF" filter="url(#cardStarGlow)" />
      <circle cx="21" cy="8" r="1.3" fill="#FFFFFF" />
    </g>

    {/* Rich Ethereal Micro Stardust Sparkles */}
    {[
      [30, 40], [180, 35], [370, 45],
      [32, 175], [368, 175],
      [28, 320], [372, 320],
      [35, 520], [200, 535], [365, 525],
      [60, 220], [335, 230], [115, 335],
      [285, 340], [150, 480], [250, 485],
      [75, 470], [320, 480], [90, 540],
      [310, 540], [200, 110], [200, 380]
    ].map(([x, y], idx) => (
      <g key={idx}>
        <circle
          cx={x}
          cy={y}
          r={idx % 3 === 0 ? 1.4 : idx % 2 === 0 ? 1.0 : 0.75}
          fill={idx % 3 === 0 ? "#FFFFFF" : idx % 2 === 0 ? "#FFF8DE" : "#FEEBA0"}
          opacity={idx % 3 === 0 ? 0.85 : 0.65}
        />
        {idx % 4 === 0 && (
          <path
            d={`M ${x},${y - 3} L ${x},${y + 3} M ${x - 3},${y} L ${x + 3},${y}`}
            stroke="#FFFDF0"
            strokeWidth="0.45"
            opacity="0.7"
          />
        )}
      </g>
    ))}
  </svg>
);

export const InvitationCard: React.FC<InvitationCardProps> = ({
  data,
  guestName,
  onViewEnvelope,
  onOpenSaveModal,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [addedToCalendar, setAddedToCalendar] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth spring physics for tactile 3D tilt
  const springConfig = { damping: 26, stiffness: 150, mass: 0.7 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  // Dynamic specular sheen reflection coordinates mapped to interactive tilt physics
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const sheenBackX = useTransform(mouseX, [-0.5, 0.5], [80, 20]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);
  const sheenBackground = useMotionTemplate`radial-gradient(circle 380px at ${sheenX}% ${sheenY}%, rgba(255, 248, 220, 0.22) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 75%)`;
  const sheenBackgroundBack = useMotionTemplate`radial-gradient(circle 380px at ${sheenBackX}% ${sheenY}%, rgba(255, 248, 220, 0.22) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 75%)`;

  // Desktop mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Mobile touch tilt support
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(Math.max(-0.5, Math.min(0.5, x)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, y)));
  };

  const handleTouchEnd = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleFlip = () => {
    celestialAudio.playCardFlipSound();
    setIsFlipped((prev) => !prev);
  };

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    celestialAudio.playCelestialChimeSound();
    navigator.clipboard.writeText(`${data.venueName} - ${data.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleAddToCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    celestialAudio.playCelestialChimeSound();
    
    // Construct standard .ics calendar file for 10 Mehr
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Celestial Birthday//Sana 23rd Birthday//FA',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:جشن تولد ۲۳ سالگی Sana (۱۰ مهر)',
      `DESCRIPTION:خیلی ممنون می‌شم با حضورتون ورق جدید زندگی منو پر از عشق و دوستی کنید.\\n\\nمحل: ${data.venueName} - ${data.address}`,
      `LOCATION:${data.venueName}, ${data.address}`,
      'DTSTART:20261002T160000',
      'DTEND:20261002T210000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sana-birthday-celebration.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    setAddedToCalendar(true);
    setTimeout(() => setAddedToCalendar(false), 2500);
  };

  const displayName = guestName?.trim() ? guestName.trim() : '';

  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[365px] sm:max-w-[395px] mx-auto my-auto flex flex-col items-center">
      {/* 3D Flip Card Container with Gilded Tarot Luxury Styling */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative [perspective:1400px] w-full h-[515px] xs:h-[550px] sm:h-[600px] max-h-[calc(100dvh-4.8rem)] group transition-shadow duration-300 touch-manipulation"
      >
        <motion.div
          animate={{
            rotateY: isFlipped ? 180 : 0,
            scale: isFlipped ? [1, 1.02, 1] : [1, 1.02, 1],
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full h-full [transform-style:preserve-3d] shadow-[0_25px_80px_rgba(0,0,0,0.92),0_0_24px_rgba(212,175,55,0.22)] rounded-2xl sm:rounded-3xl"
        >
          {/* ===================== FRONT SIDE: GILDED REGAL MINIMALIST ===================== */}
          <div
            onClick={!isFlipped ? toggleFlip : undefined}
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#050B1E] to-[#02040E] border-[1.5px] sm:border-2 border-[#D4AF37]/85 p-3.5 xs:p-4.5 sm:p-6 flex flex-col justify-between overflow-hidden text-center select-none transition-opacity duration-300 ${
              isFlipped ? 'pointer-events-none opacity-0' : 'pointer-events-auto cursor-pointer opacity-100'
            }`}
          >
            {/* Luxury Velvet Paper Suede Texture */}
            <div className="absolute inset-0 velvet-texture pointer-events-none opacity-50" />

            {/* Subtle Yet Visible Constellation & Astrolabe Chart Background */}
            <CardConstellationBackground className="z-[2]" />

            {/* Central Ethereal Golden Nebula Glow behind Centerpiece */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(30,60,140,0.16)_45%,transparent_75%)] blur-2xl pointer-events-none -z-0" />

            {/* Interactive Dynamic Specular Reflection Highlight (Tracks Cursor / Tilt) */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl mix-blend-color-dodge transition-opacity duration-300 z-30"
              style={{
                background: sheenBackground,
              }}
            />

            {/* Ambient Minimalist Specular Light Glint Pass */}
            <div className="pointer-events-none absolute -inset-full w-[300%] h-[300%] animate-specular-sweep specular-gleam-gradient opacity-60 mix-blend-overlay z-30" />

            {/* Polished Glass Bevel Edge Specular Highlights */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-1.5px_2px_rgba(212,175,55,0.25)] z-30" />

            {/* Restored Ornate Gilded Tarot Border Frame with Vintage Filigree Corners & Celestial Edge Accents */}
            <div className="absolute inset-1.5 xs:inset-2 sm:inset-3 border border-[#D4AF37]/65 rounded-xl sm:rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-[#D4AF37]/90 z-20">
              {/* Inner secondary hairline for double-ruled tarot border */}
              <div className="absolute inset-[2.5px] sm:inset-[3px] border border-[#D4AF37]/35 border-dashed rounded-[9px] sm:rounded-[13px]" />

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

              {/* 4 Cardinal Diamond Accents at midpoint borders */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>

              {/* Subtle Celestial Perimeter Glyphs along margins */}
              <div className="absolute top-1/4 -left-1 text-[7px] text-[#D4AF37]/70 select-none">☾</div>
              <div className="absolute top-3/4 -left-1 text-[7px] text-[#D4AF37]/70 select-none">✦</div>
              <div className="absolute top-1/4 -right-1 text-[7px] text-[#D4AF37]/70 select-none">☽</div>
              <div className="absolute top-3/4 -right-1 text-[7px] text-[#D4AF37]/70 select-none">✦</div>
              <div className="absolute -top-1 left-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -top-1 right-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -bottom-1 left-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -bottom-1 right-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
            </div>

            {/* TOP HEADER: Roman Numeral for 23 (XXIII) & English Motto */}
            <div className="relative z-20 pt-0.5 sm:pt-1 shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px]">✦</span>
                <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.35em] text-[#FFF8D6] font-bold drop-shadow-[0_0_6px_rgba(212,175,55,0.45)]">
                  XXIII
                </span>
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px]">✦</span>
              </div>

              <div className="mt-1 text-[9px] xs:text-[10px] sm:text-[10.5px] text-[#FDEAA8] font-cinzel tracking-[0.22em] font-semibold drop-shadow-[0_0_8px_rgba(212,175,55,0.45)] uppercase flex items-center justify-center gap-1.5">
                <span className="text-[#D4AF37] text-[8px]">✦</span>
                <span>YOU ALWAYS SHINE LIKE A STAR</span>
                <span className="text-[#D4AF37] text-[8px]">✦</span>
              </div>

              {displayName && (
                <div className="mt-0.5 text-[9.5px] xs:text-[10px] text-[#A8C4E8] font-vazir truncate max-w-[260px] xs:max-w-[280px] mx-auto">
                  <span>به افتخار حضور گرامی </span>
                  <strong className="text-[#FFF7D4] font-bold drop-shadow-[0_0_4px_rgba(255,248,220,0.5)]">{displayName}</strong>
                </div>
              )}
            </div>

            {/* CENTERPIECE: Minimalist Celestial Sun & Moon Emblem & Calligraphy */}
            <div className="relative z-20 my-auto py-0.5 flex flex-col items-center justify-center shrink min-h-0">
              {/* Single Harmonious Celestial Sun & Moon Emblem from assets */}
              <div className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 drop-shadow-[0_8px_28px_rgba(212,175,55,0.55)]">
                {/* Subtle Ambient Celestial Starlight Reflection Aura */}
                <div className="absolute inset-0 -m-3.5 rounded-full bg-radial from-[#D4AF37]/28 via-[#D4AF37]/12 to-transparent blur-xl pointer-events-none animate-astral-breathe" />
                <MinimalCelestialEmblem className="w-full h-full relative z-10" />
              </div>

              {/* Celebrant Name: Sana in dreamy Pinyon Script font flanked by micro Sun & Moon icons */}
              <div className="mt-1 sm:mt-1.5 flex flex-col items-center">
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 my-0.5">
                  <CelestialMoon className="w-5 h-5 xs:w-6 xs:h-6 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-float-slow shrink-0" />
                  <h2 className="font-pinyon text-4xl xs:text-[46px] sm:text-[54px] font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF2] via-[#FEEBA0] via-[#D4AF37] to-[#FFF8DB] drop-shadow-[0_0_14px_rgba(255,235,130,0.85)] drop-shadow-[0_0_28px_rgba(212,175,55,0.6)] leading-none select-none py-1">
                    Sana
                  </h2>
                  <CelestialSun className="w-5 h-5 xs:w-6 xs:h-6 opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-float-counter shrink-0" />
                </div>
                
                {/* Poetic English subtitle replacing جشن بیست و سه سالگی */}
                <div className="mt-0.5 flex items-center justify-center gap-2 text-[9.5px] xs:text-[10px] sm:text-[10.5px] text-[#EAD598] font-cinzel tracking-[0.18em] uppercase font-semibold">
                  <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
                  <span>Where the Moon and Sun dance in celestial harmony</span>
                  <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-transparent" />
                </div>
              </div>

              {/* Poetic eclipse rendezvous verse in refined typography */}
              <div className="mt-1 sm:mt-1.5 px-3 xs:px-4 sm:px-5 py-1.5 rounded-xl bg-[#040818]/70 border border-[#D4AF37]/30 shadow-inner max-w-[95%]">
                <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] text-[#E0EEFD] leading-relaxed font-vazir font-normal text-balance line-clamp-2 text-center">
                  «در آغوش کسوف، ماه و خورشید به هم می‌رسند. دیداری جادویی میان نور و سایه در پهنه آسمان.»
                </p>
              </div>
            </div>

            {/* BOTTOM SECTION: Date, Time & Venue in clear high-contrast typography */}
            <div className="relative z-20 pt-1.5 sm:pt-2 border-t border-[#D4AF37]/30 space-y-1 xs:space-y-1.5 shrink-0">
              <div className="space-y-1 font-vazir">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-[#D4AF37]/30 text-[11px] xs:text-xs sm:text-[12.5px] font-bold text-[#FFF8DE]">
                    <span>پنجشنبه ۹ مهر ماه</span>
                  </div>
                  <span className="text-[#D4AF37] text-xs">✦</span>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-[#D4AF37]/30 text-[11px] xs:text-xs sm:text-[12.5px] font-bold text-[#FFF8DE]">
                    <span>ساعت ۱۶:۰۰</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 text-[10.5px] xs:text-[11px] sm:text-xs text-[#9BB4D8] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-semibold text-[#FFFDF2]">خانه تقی یام</span>
                </div>
              </div>

              {/* Interactive Flip Hint */}
              <div className="pt-0.5 flex items-center justify-center">
                <div className="inline-flex items-center gap-1.5 py-1 px-3 sm:px-3.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F3D78E]/30 to-[#D4AF37]/20 border border-[#D4AF37]/60 text-[10px] xs:text-[10.5px] sm:text-[11px] text-[#FFF7D4] font-vazir font-semibold shadow-[0_2px_12px_rgba(212,175,55,0.2)] transition-all hover:scale-105 active:scale-95 group-hover:border-[#D4AF37]/90">
                  <RefreshCw className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#D4AF37] transition-transform duration-500 group-hover:rotate-180" />
                  <span>لمس کارت جهت مشاهده پیام و آدرس</span>
                </div>
              </div>
            </div>

          </div>

          {/* ===================== BACK SIDE: GILDED TIMELINE & NAVIGATION ===================== */}
          <div
            onClick={isFlipped ? toggleFlip : undefined}
            className={`absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#050B1E] to-[#02040E] border-[1.5px] sm:border-2 border-[#D4AF37]/85 p-3.5 xs:p-4.5 sm:p-6 flex flex-col justify-between overflow-hidden text-right select-none transition-opacity duration-300 ${
              !isFlipped ? 'pointer-events-none opacity-0' : 'pointer-events-auto cursor-pointer opacity-100'
            }`}
          >
            {/* Velvet Texture */}
            <div className="absolute inset-0 velvet-texture pointer-events-none opacity-50" />

            {/* Subtle Yet Discernible Constellation & Astrolabe Chart Background on Back */}
            <CardConstellationBackground className="z-[2]" />

            {/* Interactive Dynamic Specular Reflection Highlight (Tracks Cursor / Tilt on Back) */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl mix-blend-color-dodge transition-opacity duration-300 z-30"
              style={{
                background: sheenBackgroundBack,
              }}
            />

            {/* Ambient Minimalist Specular Light Glint Pass */}
            <div className="pointer-events-none absolute -inset-full w-[300%] h-[300%] animate-specular-sweep specular-gleam-gradient opacity-60 mix-blend-overlay z-30" />

            {/* Polished Glass Bevel Edge Specular Highlights */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-1.5px_2px_rgba(212,175,55,0.25)] z-30" />

            {/* Subtle Ambient Celestial Starlight Reflection Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-radial from-[#D4AF37]/18 via-[#1C2C5E]/20 to-transparent blur-2xl pointer-events-none animate-astral-breathe -z-0" />

            {/* Matching Ornate Gilded Tarot Border Frame on Back with Perimeter Accents */}
            <div className="absolute inset-1.5 xs:inset-2 sm:inset-3 border border-[#D4AF37]/65 rounded-xl sm:rounded-2xl pointer-events-none">
              {/* Inner secondary hairline */}
              <div className="absolute inset-[2.5px] sm:inset-[3px] border border-[#D4AF37]/35 border-dashed rounded-[9px] sm:rounded-[13px]" />

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

              {/* 4 Cardinal Diamond Accents at midpoint borders */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-[#D4AF37]/90 drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]">
                <TarotSparkleStar size={9} />
              </div>

              {/* Subtle Celestial Perimeter Glyphs along margins */}
              <div className="absolute top-1/4 -left-1 text-[7px] text-[#D4AF37]/70 select-none">☾</div>
              <div className="absolute top-3/4 -left-1 text-[7px] text-[#D4AF37]/70 select-none">✦</div>
              <div className="absolute top-1/4 -right-1 text-[7px] text-[#D4AF37]/70 select-none">☽</div>
              <div className="absolute top-3/4 -right-1 text-[7px] text-[#D4AF37]/70 select-none">✦</div>
              <div className="absolute -top-1 left-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -top-1 right-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -bottom-1 left-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
              <div className="absolute -bottom-1 right-1/4 text-[7px] text-[#D4AF37]/70 select-none">✧</div>
            </div>

            {/* Back Header: Roman Numeral XXIII & Sana's Birthday */}
            <div className="relative z-20 text-center pt-0.5 border-b border-[#D4AF37]/30 pb-1.5 shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px]">✦</span>
                <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.35em] text-[#FFF8D6] font-bold drop-shadow-[0_0_6px_rgba(212,175,55,0.45)]">
                  XXIII
                </span>
                <span className="text-[#D4AF37] text-[9px] sm:text-[10px]">✦</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 mt-0.5">
                <CelestialMoon className="w-4 h-4 xs:w-4.5 xs:h-4.5 opacity-85 drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
                <h3 className="text-xl xs:text-2xl sm:text-[26px] font-pinyon font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF2] via-[#FEEBA0] via-[#D4AF37] to-[#FFF8DB] drop-shadow-[0_0_12px_rgba(255,235,130,0.7)] leading-none select-none py-0.5">
                  Sana's Birthday
                </h3>
                <CelestialSun className="w-4 h-4 xs:w-4.5 xs:h-4.5 opacity-85 drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
              </div>
            </div>

            {/* Heartfelt Personal Message & Invitation Note replacing timetable */}
            <div className="relative z-20 my-auto py-2.5 px-3 xs:px-4 sm:px-5 rounded-2xl bg-[#04091C]/80 border border-[#D4AF37]/35 shadow-[0_4px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] text-center space-y-2 font-vazir">
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-[10px]">
                <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
                <span>✦ ☾ ✦</span>
                <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
              </div>
              <p className="text-[12px] xs:text-[12.5px] sm:text-[13.5px] text-[#FFF9E6] leading-relaxed font-medium">
                خیلی ممنون می‌شم با حضورتون ورق جدید زندگی منو پر از عشق و دوستی کنید.
              </p>
              <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] text-[#DCE8F8] leading-relaxed">
                امیدوارم این جشن برای همه حس خوبی رو القا بکنه، منتظر حضور گرمتون هستم ✨
              </p>
              <div className="pt-0.5 flex items-center justify-center gap-1.5 text-[10px] xs:text-[10.5px] text-[#F0D590] font-medium">
                <span>حضور پرمهر شما روشنایی‌بخش این شب خاطره‌انگیز خواهد بود</span>
                <span className="text-[#D4AF37]">✦</span>
              </div>
            </div>

            {/* Dress code & Location Details */}
            <div className="relative z-20 space-y-1.5 xs:space-y-2 pt-0.5 xs:pt-1 border-t border-[#D4AF37]/25 text-xs font-vazir shrink-0">
              
              {/* Minimal Dress Code Row */}
              <div className="flex items-center justify-between text-[11px] xs:text-[11.5px] sm:text-xs text-[#B4CEF0]">
                <span className="font-medium">کد پوشش:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FFF6C4] font-bold">سرمه‌ای شب، سفید، طلایی، مشکی</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B132B] border border-white/40 shadow-xs" title="سرمه‌ای شب" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF] border border-[#D4AF37]/60 shadow-xs" title="سفید" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-white/40 shadow-xs" title="طلایی" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0E] border border-white/40 shadow-xs" title="مشکی" />
                </div>
              </div>

              {/* Address card with copy button */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#050C22]/95 p-1.5 xs:p-2 sm:p-2.5 rounded-lg xs:rounded-xl border border-[#D4AF37]/35 space-y-0.5 text-xs shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="font-bold text-[#FFF6D8] text-[11.5px] xs:text-xs sm:text-[13px]">{data.venueName}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] text-[#F3D78E] hover:text-white active:scale-95 flex items-center gap-1 transition-colors cursor-pointer py-0.5 px-1.5 xs:px-2 rounded-md hover:bg-white/10 shrink-0 font-semibold"
                  >
                    {copiedAddress ? <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 xs:w-3 xs:h-3" />}
                    <span>{copiedAddress ? 'کپی شد' : 'کپی آدرس'}</span>
                  </button>
                </div>
                <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] text-[#A6C0E2] line-clamp-2 pr-4 xs:pr-5 leading-relaxed font-normal">
                  {data.address}
                </p>
              </div>

              {/* Direct location routing: Google Maps & Neshan */}
              <div className="space-y-0.5 xs:space-y-1">
                <span className="text-[9.5px] xs:text-[10px] text-[#D8E6F8] block text-center font-semibold">
                  مسیریابی (لوکیشن):
                </span>
                
                <div className="grid grid-cols-2 gap-1 xs:gap-1.5">
                  {/* Google Maps link */}
                  <a
                    href="https://maps.app.goo.gl/p53f6z2aiMhdSCjK9"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-1 xs:py-1.5 sm:py-2 px-1.5 rounded-lg xs:rounded-xl bg-gradient-to-r from-[#D4AF37]/30 via-[#F6E294]/35 to-[#D4AF37]/30 hover:from-[#D4AF37]/50 hover:to-[#D4AF37]/50 active:scale-95 border border-[#D4AF37]/80 text-[10px] xs:text-[11px] sm:text-xs text-[#FFF6D6] font-bold flex items-center justify-center gap-1 transition-all shadow-sm cursor-pointer"
                  >
                    <Navigation className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#D4AF37] shrink-0" />
                    <span>گوگل مپ (لوکیشن)</span>
                    <ExternalLink className="w-2 h-2 xs:w-2.5 xs:h-2.5 opacity-70 shrink-0" />
                  </a>

                  {/* Neshan link */}
                  <a
                    href="https://nshn.ir/rbAy0AyCVv0j"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-1 xs:py-1.5 sm:py-2 px-1.5 rounded-lg xs:rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 text-[10px] xs:text-[11px] sm:text-xs text-[#E1EAF7] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    <MapPin className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#D4AF37] shrink-0" />
                    <span>نشان (لوکیشن)</span>
                    <ExternalLink className="w-2 h-2 xs:w-2.5 xs:h-2.5 opacity-70 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Calendar Quick Action */}
              <div className="pt-0.5">
                <button
                  type="button"
                  onClick={handleAddToCalendar}
                  className="w-full py-1.5 px-3 rounded-lg xs:rounded-xl bg-gradient-to-r from-[#D4AF37]/20 via-[#F6E294]/25 to-[#D4AF37]/20 hover:from-[#D4AF37]/40 hover:to-[#D4AF37]/40 active:scale-95 border border-[#D4AF37]/60 text-[10.5px] xs:text-[11px] sm:text-xs text-[#FFF8DE] font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{addedToCalendar ? 'یادآور ۱۰ مهر دانلود شد ✨' : 'ثبت ۱۰ مهر در تقویم گوشی (دانلود یادآور)'}</span>
                </button>
              </div>

            </div>

          </div>

        </motion.div>
      </motion.div>

      {/* ===================== LUXURY GROUND / PEDESTAL MIRROR REFLECTION ===================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative w-full flex flex-col items-center select-none -mt-2 xs:-mt-2.5 sm:-mt-3 z-0"
      >
        {/* Luminous Ambient Contact Reflection Pool */}
        <div className="w-[82%] h-4 xs:h-5 sm:h-6 rounded-[100%] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent blur-md -mb-2.5 opacity-80" />

        {/* Specular Mirror Floor Reflection of Card Base */}
        <div
          className="w-[94%] h-12 xs:h-14 sm:h-16 rounded-b-2xl sm:rounded-b-3xl overflow-hidden opacity-35 sm:opacity-40 blur-[0.8px] floor-reflection-mask"
          style={{
            transform: 'scaleY(-1)',
          }}
        >
          {/* Outer container: tilts with mouse / touch */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full"
          >
            {/* Inner container: flips 180 degrees in exact sync with card */}
            <motion.div
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full h-full [transform-style:preserve-3d]"
            >
              {/* Front Reflection Side */}
              <div
                className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-t from-[#091126] via-[#050A18] to-transparent border-t-[1.5px] sm:border-t-2 border-[#D4AF37]/80 p-2 flex flex-col items-center justify-start text-center"
              >
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFF7D4]/60 to-transparent" />
                <div className="mt-1 flex items-center justify-center gap-1.5 font-vazir text-[9.5px] xs:text-[10px] text-[#FFF7D4]/80 font-bold">
                  <span>{data.datePersian}</span>
                  <span className="text-[#D4AF37]/60">|</span>
                  <span>ساعت {data.time}</span>
                </div>
                <div className="mt-0.5 text-[8.5px] xs:text-[9px] text-[#9BB4D8]/70 font-vazir truncate max-w-[210px]">
                  {data.venueName}
                </div>
                <div className="w-24 h-5 rounded-full bg-[#D4AF37]/20 blur-sm mt-0.5" />
              </div>

              {/* Back Reflection Side */}
              <div
                className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-t from-[#091126] via-[#050A18] to-transparent border-t-[1.5px] sm:border-t-2 border-[#D4AF37]/80 p-2 flex flex-col items-center justify-start text-center"
              >
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFF7D4]/60 to-transparent" />
                <div className="mt-1 flex items-center justify-center gap-1.5 font-vazir text-[9.5px] xs:text-[10px] text-[#FFF7D4]/80 font-bold">
                  <span className="text-[#D4AF37]/60 text-[7px]">✦</span>
                  <span>مسیریابی و برنامه جشن</span>
                  <span className="text-[#D4AF37]/60 text-[7px]">✦</span>
                </div>
                <div className="mt-0.5 text-[8.5px] xs:text-[9px] text-[#9BB4D8]/70 font-vazir truncate max-w-[210px]">
                  {data.venueName}
                </div>
                <div className="w-24 h-5 rounded-full bg-[#D4AF37]/20 blur-sm mt-0.5" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Polished Horizon Line of the Reflective Pedestal */}
        <div className="w-[72%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-0.5 opacity-70" />
      </div>

      {/* Bottom controls: View Envelope & Save/Share */}
      <div className="flex items-center justify-center gap-2.5 mt-2.5 xs:mt-3 sm:mt-3.5 select-none">
        {onViewEnvelope && (
          <button
            type="button"
            onClick={onViewEnvelope}
            className="text-[#D4AF37] hover:text-[#FFF5D1] active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:bg-[#D4AF37]/15 font-vazir font-semibold text-[11px] xs:text-[11.5px] sm:text-xs shadow-sm"
          >
            <span>مشاهده پاکت</span>
            <span className="text-[12px]">✉️</span>
          </button>
        )}
        {onOpenSaveModal && (
          <button
            type="button"
            onClick={onOpenSaveModal}
            className="text-[#FFF7D4] hover:text-white active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#F6E294]/30 to-[#D4AF37]/25 hover:from-[#D4AF37]/45 hover:to-[#D4AF37]/45 border border-[#D4AF37]/70 hover:border-[#D4AF37] font-vazir font-semibold text-[11px] xs:text-[11.5px] sm:text-xs shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>ذخیره و اشتراک‌گذاری</span>
          </button>
        )}
      </div>
    </div>
  );
};
