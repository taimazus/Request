import React, { useEffect, useRef } from 'react';
import moonSvg from '@/assets/moon.svg';
import sunSvg from '@/assets/sun.svg';

/**
 * High-fidelity Celestial & Tarot Vector Graphics:
 * - Authentic Sun & Moon SVGs from assets
 * - Combined Sol & Luna Celestial Emblem
 * - Gilded tarot frames, astrological rings & sacred geometry
 * - Dynamic starry night canvas with twinkling stars and shooting stars
 */

export const CelestialMoon: React.FC<{ className?: string; alt?: string }> = ({
  className = "w-28 h-28",
  alt = "ماه شب چهارده"
}) => (
  <img
    src={moonSvg}
    alt={alt}
    className={`object-contain select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)] ${className}`}
    loading="eager"
    decoding="async"
  />
);

export const CelestialSun: React.FC<{ className?: string; alt?: string }> = ({
  className = "w-28 h-28",
  alt = "خورشید تابان"
}) => (
  <img
    src={sunSvg}
    alt={alt}
    className={`object-contain select-none pointer-events-none drop-shadow-[0_4px_18px_rgba(212,175,55,0.5)] ${className}`}
    loading="eager"
    decoding="async"
  />
);

/**
 * Authentic Vintage Engraved Celestial Moon Art (ماه وینتج آرت)
 * Serene, noble celestial profile visage with classical engraving proportions,
 * gentle closed eye, refined lips, nose, and starlight.
 */
export const VintageArtMoon: React.FC<{ className?: string }> = ({
  className = "w-22 h-22 sm:w-28 sm:h-28",
}) => (
  <div className={`relative flex items-center justify-center select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] drop-shadow-[0_0_20px_rgba(212,175,55,0.45)] ${className}`}>
    {/* Soft Lunar Corona Back-Glow */}
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,248,220,0.22)_0%,rgba(168,196,232,0.12)_45%,transparent_75%)] blur-lg" />

    <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="vMoonGold" x1="0" y1="0" x2="160" y2="160">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="30%" stopColor="#FDEAA8" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A5123" />
        </linearGradient>
        <radialGradient id="vMoonFaceGrad" cx="45%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FFFDF6" />
          <stop offset="55%" stopColor="#FCF2D8" />
          <stop offset="85%" stopColor="#F3DC9A" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>

      {/* Faint Astrological Celestial Orbit Ring */}
      <circle cx="80" cy="80" r="74" stroke="url(#vMoonGold)" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 3.5" />
      <circle cx="80" cy="80" r="69" stroke="#D4AF37" strokeWidth="0.5" opacity="0.25" />

      {/* Dark Lunar Limb Earthshine Circle (Night side of the moon) */}
      <circle cx="80" cy="80" r="56" fill="#04091A" stroke="url(#vMoonGold)" strokeWidth="0.7" opacity="0.65" />

      {/* Main Vintage Crescent Moon Body with Aristocratic Facial Profile */}
      <path
        d="M 80 24
           C 111 24, 136 49, 136 80
           C 136 111, 111 136, 80 136
           C 88 126, 92 114, 94 102
           C 97 99, 98 96, 96 93
           C 93 90, 93 88, 96 85
           C 98 83, 97 81, 95 80
           C 92 78, 92 75, 95 73
           C 99 70, 104 69, 104 67
           C 102 64, 97 59, 93 54
           C 90 47, 86 35, 80 24 Z"
        fill="url(#vMoonFaceGrad)"
        stroke="#8A5123"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Classical Serene Facial Silhouette Lines */}
      {/* 1. Gracefully Curved Forehead, Nose, Lips and Chin Profile */}
      <path
        d="M 84 34
           C 88 44, 91 50, 92 54
           C 90 56, 92 60, 95 64
           C 99 67, 104 67, 104 68
           C 102 70, 96 71, 94 73
           C 93 75, 93 77, 95 79
           C 96 80, 96 82, 94 83
           C 92 84, 92 87, 95 89
           C 97 92, 97 95, 94 98
           C 91 103, 87 115, 82 126"
        stroke="#8A5123"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 2. Classical Closed Celestial Eye & Eyelashes */}
      {/* Upper arched eyelid */}
      <path
        d="M 85 58 Q 90 55 96 58"
        stroke="#8A5123"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Soft lower lid crease */}
      <path
        d="M 86 59 Q 90 61 95 59"
        stroke="#8A5123"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Fine lashes */}
      <path d="M 88 59 L 87 62" stroke="#8A5123" strokeWidth="1" strokeLinecap="round" />
      <path d="M 90 59 L 90 63" stroke="#8A5123" strokeWidth="1" strokeLinecap="round" />
      <path d="M 93 59 L 94 62" stroke="#8A5123" strokeWidth="1" strokeLinecap="round" />

      {/* 3. Noble Arched Eyebrow */}
      <path
        d="M 82 52 Q 89 48 97 53"
        stroke="#8A5123"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />

      {/* 4. Delicate Nostril Wing */}
      <path
        d="M 94 70 Q 97 68 98 71"
        stroke="#8A5123"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* 5. Serene Lips & Peaceful Smile Curve */}
      <path
        d="M 89 80 Q 93 81 95 79.5"
        stroke="#8A5123"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 91 83 Q 93 84 95 83"
        stroke="#8A5123"
        strokeWidth="0.85"
        strokeLinecap="round"
        fill="none"
      />

      {/* 6. Soft Chin Dimple Indent */}
      <path
        d="M 91 93 Q 93 94 92 96"
        stroke="#8A5123"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />

      {/* 7. Gentle Cheekbone Contour */}
      <path
        d="M 83 68 Q 87 73 90 70"
        stroke="#8A5123"
        strokeWidth="0.75"
        opacity="0.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 8. Vintage Etching Shading Hatch lines on Crescent Outer Rim */}
      {[38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126].map((y, idx) => (
        <line
          key={idx}
          x1={120 + Math.sin(idx * 0.3) * 6}
          y1={y}
          x2={128 + Math.sin(idx * 0.3) * 6}
          y2={y - 2}
          stroke="#8A5123"
          strokeWidth="0.8"
          opacity="0.6"
        />
      ))}

      {/* 4-Pointed Vintage Diamond Starlight Accents on the Dark Limb */}
      <g transform="translate(42, 45) scale(0.65)">
        <path d="M0 -12 C0 -3 3 0 12 0 C3 0 0 3 0 12 C0 3 -3 0 -12 0 C-3 0 0 -3 0 -12 Z" fill="#FFFDF2" />
        <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
      </g>
      <g transform="translate(56, 112) scale(0.55)">
        <path d="M0 -10 C0 -2 2 0 10 0 C2 0 0 2 0 10 C0 2 -2 0 -10 0 C-2 0 0 -2 0 -10 Z" fill="#FFFDF2" />
      </g>
      <g transform="translate(32, 85) scale(0.45)">
        <path d="M0 -10 C0 -2 2 0 10 0 C2 0 0 2 0 10 C0 2 -2 0 -10 0 C-2 0 0 -2 0 -10 Z" fill="#FEECA6" />
      </g>
      <circle cx="68" cy="38" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="74" cy="122" r="1.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  </div>
);

/**
 * Authentic Vintage Engraved Celestial Sun Art (خورشید وینتج آرت)
 * Majestic solar face with alternating undulating flame rays & engraved beams
 */
export const VintageArtSun: React.FC<{ className?: string }> = ({
  className = "w-22 h-22 sm:w-28 sm:h-28",
}) => (
  <div className={`relative flex items-center justify-center select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] drop-shadow-[0_0_22px_rgba(255,215,80,0.5)] ${className}`}>
    {/* Soft Solar Atmospheric Corona Glow */}
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,225,100,0.25)_0%,rgba(212,175,55,0.12)_45%,transparent_75%)] blur-lg" />

    <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="vSunGold" x1="0" y1="0" x2="160" y2="160">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="35%" stopColor="#FFE898" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A5123" />
        </linearGradient>
        <radialGradient id="vSunFaceGrad" cx="50%" cy="46%" r="50%">
          <stop offset="0%" stopColor="#FFFDF6" />
          <stop offset="55%" stopColor="#FDF1D6" />
          <stop offset="85%" stopColor="#F5DC9A" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>

      {/* Concentric Astrological Degree Ring */}
      <circle cx="80" cy="80" r="74" stroke="url(#vSunGold)" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 3.5" />

      {/* Alternating Undulating Flame Rays & Piercing Sunbeams (16 Rays) */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg, i) => {
        const isFlame = i % 2 === 1;
        return (
          <g key={deg} transform={`rotate(${deg} 80 80)`}>
            {isFlame ? (
              /* Undulating S-curve Flame Tongue */
              <path
                d="M 76 44 C 74 32, 85 24, 79 11 C 82 20, 88 28, 84 44 Z"
                fill="url(#vSunFaceGrad)"
                stroke="#8A5123"
                strokeWidth="0.8"
              />
            ) : (
              /* Sharp Geometric Triangular Sunbeam */
              <polygon
                points="75,44 80,8 85,44"
                fill="url(#vSunGold)"
                stroke="#8A5123"
                strokeWidth="0.8"
              />
            )}
          </g>
        );
      })}

      {/* Ornate Concentric Beaded Ring around Face */}
      <circle cx="80" cy="80" r="39" fill="url(#vSunFaceGrad)" stroke="#8A5123" strokeWidth="1.4" />
      <circle cx="80" cy="80" r="36" stroke="url(#vSunGold)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.75" />

      {/* Classical Celestial Sun Visage (Eyes, Nose, Cheeks, Lips) */}
      {/* Left Eye */}
      <path d="M 64 74 Q 70 71 76 74" stroke="#8A5123" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M 65 74 Q 70 77 75 74" stroke="#8A5123" strokeWidth="0.9" fill="none" />
      <circle cx="70" cy="74" r="1.4" fill="#8A5123" />
      <path d="M 63 69 Q 69 66 76 70" stroke="#8A5123" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* Right Eye */}
      <path d="M 84 74 Q 90 71 96 74" stroke="#8A5123" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M 85 74 Q 90 77 95 74" stroke="#8A5123" strokeWidth="0.9" fill="none" />
      <circle cx="90" cy="74" r="1.4" fill="#8A5123" />
      <path d="M 84 70 Q 91 66 97 69" stroke="#8A5123" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* Classical Sculpted Nose */}
      <path
        d="M 80 72 L 78 85 Q 80 87 83 85"
        stroke="#8A5123"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Nostrils */}
      <path d="M 75 85 Q 77 84 78 86" stroke="#8A5123" strokeWidth="0.9" fill="none" />
      <path d="M 85 85 Q 83 84 82 86" stroke="#8A5123" strokeWidth="0.9" fill="none" />

      {/* Noble Serene Lips */}
      <path d="M 73 94 Q 80 92 87 94" stroke="#8A5123" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M 75 94 Q 80 97 85 94" stroke="#8A5123" strokeWidth="1" fill="none" />

      {/* Chin indent & Cheeks */}
      <path d="M 78 101 Q 80 102 82 101" stroke="#8A5123" strokeWidth="0.9" fill="none" />
      <path d="M 62 82 Q 65 85 68 84" stroke="#8A5123" strokeWidth="0.75" opacity="0.6" fill="none" />
      <path d="M 98 82 Q 95 85 92 84" stroke="#8A5123" strokeWidth="0.75" opacity="0.6" fill="none" />

      {/* Vintage Radial Stippling Dots around Core */}
      <circle cx="80" cy="36" r="1.2" fill="#D4AF37" />
      <circle cx="80" cy="124" r="1.2" fill="#D4AF37" />
      <circle cx="36" cy="80" r="1.2" fill="#D4AF37" />
      <circle cx="124" cy="80" r="1.2" fill="#D4AF37" />
    </svg>
  </div>
);

export const HazyCosmicMoon = VintageArtMoon;
export const HazyCosmicSun = VintageArtSun;

export const IntricateCrescentMoon = CelestialMoon;
export const RadiantVintageSun = CelestialSun;

/**
 * Authentic Luxury Tarot Celestial Emblem (Sol & Luna Talisman):
 * Composes the Sun and Moon SVG assets together in sacred harmony
 * inside an ornate astrological orbit ring with celestial starlight accents.
 */
export const MinimalCelestialEmblem: React.FC<{ className?: string; alt?: string }> = ({
  className = "w-32 h-32",
  alt = "تندیس ماه و خورشید"
}) => (
  <div className={`relative flex items-center justify-center select-none ${className}`} role="img" aria-label={alt}>
    {/* Subtle Luminous Solar-Lunar Back-Halo with Warm Golden Radiant Core */}
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,248,220,0.28)_0%,rgba(212,175,55,0.18)_35%,rgba(16,36,88,0.12)_60%,transparent_75%)] blur-lg pointer-events-none" />

    {/* Astrological Orbit Ring Background with Sacred Geometry & Sunburst Raylets */}
    <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-60 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
      <defs>
        <linearGradient id="emblemOrbitGold" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="#FFF9E0" />
          <stop offset="25%" stopColor="#F5DF95" />
          <stop offset="65%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6715" />
        </linearGradient>
        <radialGradient id="sunburstGlow" cx="62%" cy="50%" r="48%">
          <stop offset="0%" stopColor="#FFECA8" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sunburst radial ambient glow behind sun */}
      <circle cx="122" cy="100" r="60" fill="url(#sunburstGlow)" />
      
      {/* Triple concentric astrological rings */}
      <circle cx="100" cy="100" r="97" stroke="url(#emblemOrbitGold)" strokeWidth="0.9" />
      <circle cx="100" cy="100" r="93" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 3.5" opacity="0.65" />
      <circle cx="100" cy="100" r="85" stroke="url(#emblemOrbitGold)" strokeWidth="0.75" opacity="0.8" />
      <circle cx="100" cy="100" r="76" stroke="#D4AF37" strokeWidth="0.45" strokeDasharray="1.5 3" opacity="0.5" />

      {/* 24 Fine Astrological Degree Marks & Compass Radii */}
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <line
            x1="100"
            y1={deg % 90 === 0 ? "3" : deg % 30 === 0 ? "5" : "7"}
            x2="100"
            y2={deg % 90 === 0 ? "13" : deg % 30 === 0 ? "11" : "9"}
            stroke="url(#emblemOrbitGold)"
            strokeWidth={deg % 90 === 0 ? "1" : "0.6"}
            opacity={deg % 30 === 0 ? "0.9" : "0.5"}
          />
          {deg % 30 === 0 && <circle cx="100" cy="8" r="0.75" fill="#FFF8DE" />}
        </g>
      ))}

      {/* 4 Cardinal Diamond Stars */}
      <g fill="#FFFDEB">
        <polygon points="100,-1 103,4 100,9 97,4" />
        <polygon points="201,100 196,103 191,100 196,97" />
        <polygon points="100,201 103,196 100,191 97,196" />
        <polygon points="-1,100 4,103 9,100 4,97" />
      </g>
    </svg>

    {/* Radiant Celestial Sun from user assets (placed in center-right with warm solar halo) */}
    <img
      src={sunSvg}
      alt="خورشید تابان"
      className="absolute right-0 sm:right-1 w-[75%] h-[75%] object-contain drop-shadow-[0_6px_22px_rgba(212,175,55,0.65)] select-none pointer-events-none transition-transform duration-700 hover:scale-105"
      loading="eager"
      decoding="async"
    />

    {/* Serene Celestial Moon from user assets (placed on left facing toward the sun) */}
    <img
      src={moonSvg}
      alt="ماه شب چهارده"
      className="absolute left-0 sm:left-1 w-[65%] h-[79%] object-contain drop-shadow-[0_6px_20px_rgba(212,175,55,0.75)] select-none pointer-events-none z-10 transition-transform duration-700 hover:scale-105"
      loading="eager"
      decoding="async"
    />

    {/* Subtle 4-Pointed Sparkle Stars with Diamond Luster */}
    <div className="absolute top-1 right-2 text-[#FFF9E6] text-[11px] pointer-events-none drop-shadow-[0_0_6px_rgba(255,248,220,0.95)] animate-pulse">✦</div>
    <div className="absolute bottom-2 left-2 text-[#FFF9E6] text-[10px] pointer-events-none drop-shadow-[0_0_6px_rgba(255,248,220,0.95)] animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
    <div className="absolute top-3 left-3 text-[#D4AF37] text-[8.5px] pointer-events-none opacity-80 drop-shadow-[0_0_3px_rgba(212,175,55,0.6)]">✧</div>
    <div className="absolute bottom-3 right-3 text-[#D4AF37] text-[8.5px] pointer-events-none opacity-80 drop-shadow-[0_0_3px_rgba(212,175,55,0.6)]">✧</div>
  </div>
);

/**
 * 4-Pointed Diamond Tarot Sparkle Star
 */
export const TarotSparkleStar: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    style={{ width: size, height: size }}
    className={`drop-shadow-[0_0_6px_rgba(212,175,55,0.7)] ${className}`}
  >
    <path
      d="M20 2 C20 12, 12 20, 2 20 C12 20, 20 28, 20 38 C20 28, 28 20, 38 20 C28 20, 20 12, 20 2 Z"
      fill="url(#sparkleGold)"
    />
    <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
    <defs>
      <radialGradient id="sparkleGold" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#FFF2B2" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6715" />
      </radialGradient>
    </defs>
  </svg>
);

/**
 * 8-Pointed Arcana Star of Bethlehem / Tarot Star
 */
export const ArcanaEightStar: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    style={{ width: size, height: size }}
    className={`drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] ${className}`}
  >
    <defs>
      <linearGradient id="arcanaGold" x1="0" y1="0" x2="60" y2="60">
        <stop offset="0%" stopColor="#FFF7D6" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#966C0F" />
      </linearGradient>
    </defs>
    {/* Diagonal rays */}
    <path
      d="M30 10 L33 27 L50 30 L33 33 L30 50 L27 33 L10 30 L27 27 Z"
      fill="url(#arcanaGold)"
    />
    {/* Secondary 45 deg rays */}
    <path
      d="M30 16 L34 26 L44 30 L34 34 L30 44 L26 34 L16 30 L26 26 Z"
      fill="#FFF4C2"
      transform="rotate(45 30 30)"
      opacity="0.9"
    />
    <circle cx="30" cy="30" r="3" fill="#FFFFFF" />
  </svg>
);

/**
 * Ornate Tarot Arch Vault framing the celestial centerpiece
 */
export const TarotArchVault: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 300 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="archGold" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#AA771C" />
        <stop offset="25%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="75%" stopColor="#FFF2B2" />
        <stop offset="100%" stopColor="#AA771C" />
      </linearGradient>
    </defs>
    {/* Outer arched vault */}
    <path
      d="M10 235 V100 C10 30, 290 30, 290 100 V235"
      stroke="url(#archGold)"
      strokeWidth="1.2"
      opacity="0.55"
    />
    {/* Inner hairline arch */}
    <path
      d="M18 235 V102 C18 42, 282 42, 282 102 V235"
      stroke="#D4AF37"
      strokeWidth="0.75"
      strokeDasharray="3 3"
      opacity="0.35"
    />
    {/* Keystone Arcana Emblem at Apex */}
    <g transform="translate(150, 34)">
      <polygon points="0,-8 6,0 0,8 -6,0" fill="#FFF4C2" />
      <circle cx="0" cy="0" r="2" fill="#D4AF37" />
    </g>
    {/* Astrological side tick marks */}
    <circle cx="28" cy="100" r="1.5" fill="#D4AF37" opacity="0.6" />
    <circle cx="272" cy="100" r="1.5" fill="#D4AF37" opacity="0.6" />
    <circle cx="50" cy="65" r="1.5" fill="#D4AF37" opacity="0.6" />
    <circle cx="250" cy="65" r="1.5" fill="#D4AF37" opacity="0.6" />
  </svg>
);

/**
 * Sacred Geometry Tarot Mandala for the reverse card background
 */
export const TarotMandala: React.FC<{ className?: string }> = ({ className = "w-64 h-64" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.8" opacity="0.25" />
    <circle cx="100" cy="100" r="82" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
    <circle cx="100" cy="100" r="64" stroke="#D4AF37" strokeWidth="0.8" opacity="0.2" />
    <rect x="42" y="42" width="116" height="116" stroke="#D4AF37" strokeWidth="0.6" opacity="0.2" />
    <rect x="42" y="42" width="116" height="116" stroke="#D4AF37" strokeWidth="0.6" transform="rotate(45 100 100)" opacity="0.2" />
    <polygon points="100,20 180,100 100,180 20,100" stroke="#D4AF37" strokeWidth="0.7" opacity="0.25" />
    <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

/**
 * Vintage Gilded Tarot Corner Filigree
 */
export const TarotCornerFiligree: React.FC<{ className?: string; rotation?: number }> = ({ className = "w-6 h-6", rotation = 0 }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${className}`}
  >
    <defs>
      <linearGradient id={`cornerGoldGrad-${rotation}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF9E0" />
        <stop offset="35%" stopColor="#F5DF95" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6715" />
      </linearGradient>
    </defs>
    <path
      d="M2 38 V14 C2 7.37 7.37 2 14 2 H38"
      stroke={`url(#cornerGoldGrad-${rotation})`}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M6 34 V16 C6 10.48 10.48 6 16 6 H34"
      stroke="#FFF3C4"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Inner scrollwork flourish */}
    <circle cx="16" cy="16" r="3" fill="#D4AF37" stroke="#7A560E" strokeWidth="0.5" />
    <circle cx="16" cy="16" r="1.5" fill="#FFFDE6" />
    <path d="M16 19 C16 25 21 28 26 28" stroke="#D4AF37" strokeWidth="0.85" strokeLinecap="round" opacity="0.75" />
    <path d="M19 16 C25 16 28 21 28 26" stroke="#D4AF37" strokeWidth="0.85" strokeLinecap="round" opacity="0.75" />
    {/* Subtle micro jewel dot */}
    <circle cx="8" cy="8" r="1" fill="#FFFBE6" opacity="0.9" />
  </svg>
);

/**
 * Celestial Timeline Icons (Toast, Cake, Music, Feast)
 */
export const CelestialToastIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 22h8" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5V2H7v8a5 5 0 0 0 5 5z" />
    <path d="M7 6h10" strokeWidth="1" strokeDasharray="1 2" />
  </svg>
);

export const CelestialCakeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 21h16" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <circle cx="7" cy="4" r="1" fill="currentColor" />
    <circle cx="12" cy="4" r="1" fill="currentColor" />
    <circle cx="17" cy="4" r="1" fill="currentColor" />
  </svg>
);

export const CelestialMusicIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
    <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const CelestialFeastIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 18h18" />
    <path d="M5 18a7 7 0 0 1 14 0" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Astrological Zodiac Astrolabe Ring (Gently rotating celestial dial)
 */
export const AstrologicalZodiacRing: React.FC<{ className?: string }> = ({ className = "w-64 h-64" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none animate-spin-slow ${className}`}
  >
    <defs>
      <linearGradient id="zodiacGold" x1="0" y1="0" x2="200" y2="200">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6715" />
      </linearGradient>
    </defs>
    {/* Outer ring with tick divisions */}
    <circle cx="100" cy="100" r="95" stroke="url(#zodiacGold)" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.45" />
    <circle cx="100" cy="100" r="91" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
    <circle cx="100" cy="100" r="80" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.3" />
    
    {/* 12 Astrological House Radials */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
      <g key={i} transform={`rotate(${deg} 100 100)`}>
        <line x1="100" y1="5" x2="100" y2="20" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        <circle cx="100" cy="12" r="1.2" fill="#FFF2B2" opacity="0.75" />
      </g>
    ))}

    {/* Delicate sacred geometry square-triangle intersections */}
    <polygon points="100,20 180,100 100,180 20,100" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

export const HangingStarGarland: React.FC<{ count?: number; className?: string }> = ({ count = 5, className = "" }) => {
  const lengths = [50, 75, 42, 68, 45, 82, 55];
  const items = Array.from({ length: count }).map((_, i) => ({
    x: (100 / (count + 1)) * (i + 1),
    length: lengths[i % lengths.length],
    isMoon: i % 3 === 1,
    isDiamond: i % 3 === 2,
    delay: (i * 0.35).toFixed(2),
  }));

  return (
    <svg viewBox="0 0 100 100" fill="none" className={`w-full pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="garlandChain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF4BD" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>
      {items.map((item, idx) => (
        <g
          key={idx}
          className="animate-garland-sway"
          style={{
            animationDelay: `${item.delay}s`,
            transformOrigin: `${item.x}% 0px`,
          }}
        >
          {/* Delicate jewelry chain */}
          <line
            x1={`${item.x}%`}
            y1="0"
            x2={`${item.x}%`}
            y2={item.length}
            stroke="url(#garlandChain)"
            strokeWidth="0.75"
            strokeDasharray="2 1.5"
            opacity="0.75"
          />
          {item.isMoon ? (
            /* Hanging Crescent Moon */
            <path
              d={`M ${item.x - 3} ${item.length + 6} A 6 6 0 0 0 ${item.x + 3.5} ${item.length - 2} A 4.5 4.5 0 0 1 ${item.x - 3} ${item.length + 6} Z`}
              fill="url(#garlandChain)"
              stroke="#FFF5C2"
              strokeWidth="0.4"
              filter="drop-shadow(0 0 3px rgba(212,175,55,0.6))"
            />
          ) : item.isDiamond ? (
            /* 4-Pointed Diamond Tarot Star */
            <path
              d={`
                M ${item.x} ${item.length - 4} 
                Q ${item.x + 0.8} ${item.length} ${item.x + 3.5} ${item.length}
                Q ${item.x + 0.8} ${item.length} ${item.x} ${item.length + 4}
                Q ${item.x - 0.8} ${item.length} ${item.x - 3.5} ${item.length}
                Q ${item.x - 0.8} ${item.length} ${item.x} ${item.length - 4}
                Z
              `}
              fill="url(#garlandChain)"
              stroke="#FFFFFF"
              strokeWidth="0.3"
              filter="drop-shadow(0 0 4px rgba(255,230,130,0.8))"
            />
          ) : (
            /* Classic 5-Pointed Star */
            <polygon
              points={`
                ${item.x},${item.length - 3.5} 
                ${item.x + 1.2},${item.length - 1} 
                ${item.x + 3.8},${item.length - 0.5} 
                ${item.x + 1.8},${item.length + 1.6} 
                ${item.x + 2.4},${item.length + 4} 
                ${item.x},${item.length + 2.5} 
                ${item.x - 2.4},${item.length + 4} 
                ${item.x - 1.8},${item.length + 1.6} 
                ${item.x - 3.8},${item.length - 0.5} 
                ${item.x - 1.2},${item.length - 1}
              `}
              fill="url(#garlandChain)"
              stroke="#FFF8D6"
              strokeWidth="0.3"
              filter="drop-shadow(0 0 4px rgba(255,230,130,0.7))"
            />
          )}
        </g>
      ))}
    </svg>
  );
};

export const GoldWaxSeal: React.FC<{ size?: number; className?: string }> = ({ size = 72, className = "" }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.45)] border-[2px] border-[#916913] bg-gradient-to-br from-[#FFF0BD] via-[#D4AF37] to-[#5C3D04] text-[#FFF9D6] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_rgba(212,175,55,0.65)] ${className}`}
  >
    {/* Molten wax organic outer rim glow */}
    <div className="absolute -inset-1 rounded-full border border-[#D4AF37]/40 pointer-events-none opacity-70 animate-pulse" />
    <div className="absolute inset-1 rounded-full border border-[#FFF8DE]/60 opacity-90 pointer-events-none" />
    <div className="absolute inset-2.5 rounded-full border border-[#7A560E]/60 pointer-events-none" />

    {/* Concentric micro beaded gold rim */}
    <div className="absolute inset-3 rounded-full border border-dashed border-[#FFF3BA]/40 pointer-events-none" />
    
    <div className="relative flex flex-col items-center justify-center pointer-events-none">
      <MinimalCelestialEmblem className="w-11 h-11 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" />
    </div>

    {/* Subtle specular glint reflection */}
    <div className="absolute top-1.5 left-2.5 w-3.5 h-2 rounded-full bg-white/40 blur-[1px] rotate-[-35deg] pointer-events-none" />
  </div>
);

/**
 * Master-Grade Celestial Starry Night Galaxy Canvas:
 * - Multi-spectral volumetric nebulae (Royal Amber Gold, Midnight Sapphire, Amethyst Dusk)
 * - 4-tiered star field: Micro-stardust, pulsing stellar points, 4-pointed tarot diamond sparkles, 8-pointed hyper-stars
 * - Faint astrological constellation asterisms with glowing golden nodes and hairline connectors
 * - Realistic meteor physics with glowing heads, ionization gradient tails, and spark embers
 * - Interactive 3D Parallax: Smooth depth displacement tracking cursor/touch
 * - Floating ambient stardust motes with natural organic drift
 */
export const StarryNightCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvasSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvasSize();

    // Mouse parallax coordinates
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 40;
      targetMouseY = (e.clientY / height - 0.5) * 30;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / width - 0.5) * 30;
        targetMouseY = (e.touches[0].clientY / height - 0.5) * 20;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    interface Star {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      depth: number; // 0.2 (far) to 1.0 (near) for parallax
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      type: 'dot' | 'sparkle' | 'hyper';
      color: string;
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      color: string;
    }

    interface StardustParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      life: number;
      maxLife: number;
    }

    interface Constellation {
      points: { x: number; y: number }[];
      connections: [number, number][];
      alpha: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let dustParticles: StardustParticle[] = [];
    let constellations: Constellation[] = [];

    const starColors = ['#FFFFFF', '#FFF8DE', '#FEEBA0', '#D4AF37', '#DCEBFF', '#EBE5FF'];

    const initGalaxy = () => {
      stars = [];
      const starDensity = Math.max(180, Math.floor((width * height) / 4800));

      for (let i = 0; i < starDensity; i++) {
        const rand = Math.random();
        let type: 'dot' | 'sparkle' | 'hyper' = 'dot';
        let size = Math.random() * 1.4 + 0.5;
        let depth = 0.2 + Math.random() * 0.4;

        if (rand < 0.08) {
          type = 'hyper'; // 8-pointed royal star
          size = Math.random() * 2.8 + 2.2;
          depth = 0.85 + Math.random() * 0.35;
        } else if (rand < 0.22) {
          type = 'sparkle'; // 4-pointed diamond tarot sparkle
          size = Math.random() * 2.2 + 1.4;
          depth = 0.55 + Math.random() * 0.35;
        }

        const x = Math.random() * width;
        const y = Math.random() * height;

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size,
          depth,
          baseAlpha: Math.random() * 0.45 + 0.35,
          twinkleSpeed: Math.random() * 0.025 + 0.012,
          twinkleOffset: Math.random() * Math.PI * 2,
          type,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }

      // Constellations
      constellations = [
        // Top-left Corona / Dipper asterism
        {
          points: [
            { x: width * 0.12, y: height * 0.18 },
            { x: width * 0.18, y: height * 0.14 },
            { x: width * 0.25, y: height * 0.16 },
            { x: width * 0.29, y: height * 0.24 },
            { x: width * 0.22, y: height * 0.27 },
          ],
          connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]],
          alpha: 0.24,
          pulseSpeed: 0.015,
          pulseOffset: 0,
        },
        // Top-right Cassiopeia W shape
        {
          points: [
            { x: width * 0.72, y: height * 0.16 },
            { x: width * 0.78, y: height * 0.22 },
            { x: width * 0.84, y: height * 0.15 },
            { x: width * 0.89, y: height * 0.21 },
            { x: width * 0.94, y: height * 0.17 },
          ],
          connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
          alpha: 0.26,
          pulseSpeed: 0.018,
          pulseOffset: 1.8,
        },
        // Bottom-left Lyra triangle
        {
          points: [
            { x: width * 0.14, y: height * 0.78 },
            { x: width * 0.22, y: height * 0.72 },
            { x: width * 0.26, y: height * 0.82 },
            { x: width * 0.19, y: height * 0.86 },
          ],
          connections: [[0, 1], [1, 2], [2, 3], [3, 0]],
          alpha: 0.22,
          pulseSpeed: 0.012,
          pulseOffset: 3.2,
        },
        // Bottom-right celestial chevron
        {
          points: [
            { x: width * 0.78, y: height * 0.76 },
            { x: width * 0.85, y: height * 0.82 },
            { x: width * 0.91, y: height * 0.74 },
          ],
          connections: [[0, 1], [1, 2]],
          alpha: 0.22,
          pulseSpeed: 0.014,
          pulseOffset: 4.5,
        },
      ];

      // Shooting stars
      shootingStars = [
        { x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0, active: false, color: '#FFF8DE' },
        { x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0, active: false, color: '#FFE180' },
      ];

      // Stardust motes
      dustParticles = Array.from({ length: 36 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.1,
        size: Math.random() * 1.5 + 0.6,
        alpha: 0,
        maxAlpha: Math.random() * 0.4 + 0.2,
        life: Math.random() * 200,
        maxLife: Math.random() * 300 + 200,
      }));
    };

    const handleResize = () => {
      if (!canvas) return;
      setupCanvasSize();
      initGalaxy();
    };

    window.addEventListener('resize', handleResize);
    initGalaxy();

    const triggerShootingStar = (s: ShootingStar) => {
      s.x = Math.random() * (width * 0.75) + width * 0.1;
      s.y = Math.random() * (height * 0.4);
      s.length = Math.random() * 120 + 90;
      s.speed = Math.random() * 7 + 8;
      s.angle = Math.PI / 4 + (Math.random() * 0.25 - 0.12);
      s.opacity = 1;
      s.color = Math.random() > 0.4 ? '#FFFDF0' : '#FDE89C';
      s.active = true;
    };

    let tick = 0;

    const render = () => {
      tick++;

      // Smooth camera interpolation for parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // ================= 1. DEEP SPACE BASE GRADIENT =================
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, '#03050F');
      baseGrad.addColorStop(0.35, '#050918');
      baseGrad.addColorStop(0.7, '#030510');
      baseGrad.addColorStop(1, '#020308');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // ================= 2. VOLUMETRIC MULTI-SPECTRAL NEBULAE =================
      // Nebula A: Central Moonlight / Starlight Zenith Aura
      const moonNebula = ctx.createRadialGradient(
        width * 0.5 + currentMouseX * 0.4,
        height * 0.38 + currentMouseY * 0.4,
        20,
        width * 0.5 + currentMouseX * 0.4,
        height * 0.38 + currentMouseY * 0.4,
        Math.min(width, height) * 0.65
      );
      const moonPulse = 0.06 + Math.sin(tick * 0.008) * 0.018;
      moonNebula.addColorStop(0, `rgba(255, 245, 210, ${moonPulse + 0.02})`);
      moonNebula.addColorStop(0.35, `rgba(212, 175, 55, ${moonPulse * 0.75})`);
      moonNebula.addColorStop(0.7, 'rgba(12, 22, 54, 0.16)');
      moonNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = moonNebula;
      ctx.fillRect(0, 0, width, height);

      // Nebula B: Deep Indigo-Sapphire Abyss (Top Left to Center)
      const sapphireNebula = ctx.createRadialGradient(
        width * 0.2 + currentMouseX * 0.6,
        height * 0.2 + currentMouseY * 0.6,
        40,
        width * 0.2 + currentMouseX * 0.6,
        height * 0.2 + currentMouseY * 0.6,
        width * 0.55
      );
      const sapphirePulse = 0.13 + Math.cos(tick * 0.01) * 0.03;
      sapphireNebula.addColorStop(0, `rgba(28, 58, 160, ${sapphirePulse})`);
      sapphireNebula.addColorStop(0.5, `rgba(16, 22, 64, ${sapphirePulse * 0.5})`);
      sapphireNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sapphireNebula;
      ctx.fillRect(0, 0, width, height);

      // Nebula C: Royal Warm Golden Amber (Right Quadrant)
      const amberNebula = ctx.createRadialGradient(
        width * 0.8 + currentMouseX * 0.5,
        height * 0.3 + currentMouseY * 0.5,
        30,
        width * 0.8 + currentMouseX * 0.5,
        height * 0.3 + currentMouseY * 0.5,
        width * 0.48
      );
      const amberPulse = 0.09 + Math.sin(tick * 0.012 + 1) * 0.025;
      amberNebula.addColorStop(0, `rgba(212, 175, 55, ${amberPulse})`);
      amberNebula.addColorStop(0.5, `rgba(180, 130, 20, ${amberPulse * 0.4})`);
      amberNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = amberNebula;
      ctx.fillRect(0, 0, width, height);

      // Nebula D: Amethyst Cosmic Dust (Bottom Left Arc)
      const amethystNebula = ctx.createRadialGradient(
        width * 0.25 - currentMouseX * 0.3,
        height * 0.8 - currentMouseY * 0.3,
        20,
        width * 0.25 - currentMouseX * 0.3,
        height * 0.8 - currentMouseY * 0.3,
        width * 0.45
      );
      amethystNebula.addColorStop(0, 'rgba(109, 40, 217, 0.08)');
      amethystNebula.addColorStop(0.6, 'rgba(49, 46, 129, 0.04)');
      amethystNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = amethystNebula;
      ctx.fillRect(0, 0, width, height);

      // ================= 2.5 ROTATING ANCIENT CELESTIAL ASTROLABE =================
      const astroCenterX = width * 0.5 + currentMouseX * 0.2;
      const astroCenterY = height * 0.44 + currentMouseY * 0.2;
      const astroRadius = Math.min(width, height) * 0.46;
      const astroRot = tick * 0.00035;

      ctx.save();
      ctx.translate(astroCenterX, astroCenterY);
      ctx.rotate(astroRot);

      // Astrolabe outermost golden ring
      ctx.beginPath();
      ctx.arc(0, 0, astroRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Middle ecliptic ring
      ctx.beginPath();
      ctx.arc(0, 0, astroRadius * 0.82, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.045)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Inner dashed celestial ring
      ctx.beginPath();
      ctx.arc(0, 0, astroRadius * 0.62, 0, Math.PI * 2);
      ctx.setLineDash([2, 6]);
      ctx.strokeStyle = 'rgba(255, 245, 200, 0.035)';
      ctx.stroke();
      ctx.setLineDash([]);

      // 12 Radiating astrological division rays with subtle constellation points
      for (let a = 0; a < 12; a++) {
        const rad = (a * Math.PI) / 6;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        ctx.beginPath();
        ctx.moveTo(cos * astroRadius * 0.62, sin * astroRadius * 0.62);
        ctx.lineTo(cos * astroRadius, sin * astroRadius);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.045)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Node dot
        ctx.beginPath();
        ctx.arc(cos * astroRadius * 0.82, sin * astroRadius * 0.82, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 248, 220, 0.12)';
        ctx.fill();
      }

      ctx.restore();

      // ================= 3. ASTROLOGICAL CONSTELLATIONS =================
      constellations.forEach((c) => {
        const pulse = Math.sin(tick * c.pulseSpeed + c.pulseOffset);
        const alpha = c.alpha * (0.8 + pulse * 0.25);

        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.55})`;
        ctx.lineWidth = 0.75;
        ctx.setLineDash([2, 3]);

        // Draw connecting lines
        c.connections.forEach(([i1, i2]) => {
          const p1 = c.points[i1];
          const p2 = c.points[i2];
          if (!p1 || !p2) return;

          const p1X = p1.x + currentMouseX * 0.5;
          const p1Y = p1.y + currentMouseY * 0.5;
          const p2X = p2.x + currentMouseX * 0.5;
          const p2Y = p2.y + currentMouseY * 0.5;

          ctx.beginPath();
          ctx.moveTo(p1X, p1Y);
          ctx.lineTo(p2X, p2Y);
          ctx.stroke();
        });

        ctx.setLineDash([]);

        // Draw constellation node stars
        c.points.forEach((p) => {
          const px = p.x + currentMouseX * 0.5;
          const py = p.y + currentMouseY * 0.5;

          // Soft golden halo ring
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 244, 189, ${alpha * 0.6})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Star point
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFDEB';
          ctx.fill();
        });
      });

      // ================= 4. MULTI-LAYER STAR FIELD WITH 3D PARALLAX =================
      stars.forEach((star) => {
        const twinkle = Math.sin(tick * star.twinkleSpeed + star.twinkleOffset);
        const alpha = Math.max(0.12, Math.min(1, star.baseAlpha + twinkle * 0.38));

        // Parallax offset based on depth
        const sx = star.baseX + currentMouseX * star.depth;
        const sy = star.baseY + currentMouseY * star.depth;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;

        if (star.type === 'hyper') {
          // 8-pointed golden royal hyper-star with diffraction cross & halo
          const s = star.size * (1 + twinkle * 0.28);

          // Ethereal circular halo
          ctx.beginPath();
          ctx.arc(sx, sy, s * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(212, 175, 55, 0.18)';
          ctx.fill();

          // 4 Major cardinal spikes
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.moveTo(sx, sy - s * 4);
          ctx.quadraticCurveTo(sx, sy, sx + s * 4, sy);
          ctx.quadraticCurveTo(sx, sy, sx, sy + s * 4);
          ctx.quadraticCurveTo(sx, sy, sx - s * 4, sy);
          ctx.quadraticCurveTo(sx, sy, sx, sy - s * 4);
          ctx.fill();

          // 4 Diagonal secondary spikes
          const diag = s * 2.4;
          ctx.beginPath();
          ctx.moveTo(sx - diag * 0.7, sy - diag * 0.7);
          ctx.quadraticCurveTo(sx, sy, sx + diag * 0.7, sy - diag * 0.7);
          ctx.quadraticCurveTo(sx, sy, sx + diag * 0.7, sy + diag * 0.7);
          ctx.quadraticCurveTo(sx, sy, sx - diag * 0.7, sy + diag * 0.7);
          ctx.quadraticCurveTo(sx, sy, sx - diag * 0.7, sy - diag * 0.7);
          ctx.fill();

          // Luminous white core
          ctx.beginPath();
          ctx.arc(sx, sy, s * 0.75, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        } else if (star.type === 'sparkle') {
          // 4-pointed diamond tarot sparkle
          const s = star.size * (1 + twinkle * 0.32);

          // Soft glow
          ctx.beginPath();
          ctx.arc(sx, sy, s * 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 245, 210, 0.14)';
          ctx.fill();

          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.moveTo(sx, sy - s * 3.4);
          ctx.quadraticCurveTo(sx, sy, sx + s * 3.4, sy);
          ctx.quadraticCurveTo(sx, sy, sx, sy + s * 3.4);
          ctx.quadraticCurveTo(sx, sy, sx - s * 3.4, sy);
          ctx.quadraticCurveTo(sx, sy, sx, sy - s * 3.4);
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(sx, sy, s * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        } else {
          // Standard circular stardust
          const s = star.size * (1 + twinkle * 0.2);
          ctx.beginPath();
          ctx.arc(sx, sy, s, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ================= 5. FLOATING CELESTIAL STARDUST PARTICLES =================
      ctx.globalAlpha = 1;
      dustParticles.forEach((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Fade in and fade out curve
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.alpha = (progress / 0.2) * p.maxAlpha;
        } else if (progress > 0.8) {
          p.alpha = ((1 - progress) / 0.2) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }

        if (p.life >= p.maxLife || p.y < 0) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.life = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 200, ${p.alpha})`;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ================= 6. METEOR / SHOOTING STARS =================
      shootingStars.forEach((s) => {
        if (!s.active) {
          if (Math.random() < 0.004) {
            triggerShootingStar(s);
          }
          return;
        }

        s.x -= Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.011;

        if (s.opacity <= 0 || s.x < 0 || s.y > height) {
          s.active = false;
          return;
        }

        const tailX = s.x + Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(255, 240, 180, 0)');
        grad.addColorStop(0.4, `rgba(212, 175, 55, ${s.opacity * 0.45})`);
        grad.addColorStop(0.8, `rgba(255, 235, 170, ${s.opacity * 0.85})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Glowing Meteor Head with Spark Flare
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.shadowColor = '#FFE89C';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ================= 7. CINEMATIC COSMIC VIGNETTE =================
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.38,
        width / 2, height / 2, Math.max(width, height) * 0.88
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(0.65, 'rgba(2, 4, 12, 0.4)');
      vignette.addColorStop(1, 'rgba(1, 2, 8, 0.84)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
