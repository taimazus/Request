import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  X,
  Music,
  Sparkles,
} from 'lucide-react';

interface CelestialMusicWidgetProps {
  autoPlayTrigger?: boolean;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export const CelestialMusicWidget: React.FC<CelestialMusicWidgetProps> = ({
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [volume, setVolume] = useState(65);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(30);

  const playerRef = useRef<any>(null);
  const hasAutoPlayedRef = useRef<boolean>(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Video ID for "Harpy Hare in 26edo - Bryan Deister"
  const videoId = 'n6v7xxM9mmc';
  const START_SECOND = 30;

  // Initialize YouTube Player with immediate autoplay
  useEffect(() => {
    let checkInterval: number | null = null;

    const createPlayer = () => {
      if (playerRef.current || !window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player('celestial-yt-iframe', {
          height: '1',
          width: '1',
          videoId: videoId,
          playerVars: {
            start: START_SECOND,
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            modestbranding: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              setIsPlayerReady(true);
              try {
                event.target.unMute();
                event.target.setVolume(volume);
                event.target.seekTo(START_SECOND, true);
                event.target.playVideo();
                setIsPlaying(true);
              } catch {
                // ignore
              }
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Loop back to 30s
                try {
                  event.target.seekTo(START_SECOND, true);
                  event.target.playVideo();
                } catch {
                  // ignore
                }
              }
            },
            onError: () => {
              // Fallback
            },
          },
        });
      } catch {
        // Player creation error
      }
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    } else if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      checkInterval = window.setInterval(() => {
        if (window.YT && window.YT.Player) {
          createPlayer();
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 200);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
    };
  }, [volume]);

  // Periodic progress tracker
  useEffect(() => {
    let interval: number | null = null;
    if (isPlaying) {
      interval = window.setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          try {
            const time = Math.floor(playerRef.current.getCurrentTime());
            setCurrentTime(time);
          } catch {
            // ignore
          }
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const sendPostMessageCommand = (command: string, args: any[] = []) => {
    try {
      const iframe = document.getElementById('celestial-yt-iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: command, args }),
          '*'
        );
      }
    } catch {
      // ignore
    }
  };

  const playMusic = (seekToStart = false) => {
    setIsPlaying(true);

    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        if (seekToStart) {
          playerRef.current.seekTo(START_SECOND, true);
        }
        playerRef.current.unMute();
        playerRef.current.setVolume(isMuted ? 0 : volume);
        playerRef.current.playVideo();
      } catch {
        sendPostMessageCommand('playVideo');
      }
    } else {
      sendPostMessageCommand('playVideo');
    }
  };

  const pauseMusic = () => {
    setIsPlaying(false);
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch {
        sendPostMessageCommand('pauseVideo');
      }
    } else {
      sendPostMessageCommand('pauseVideo');
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic(false);
    }
  };

  const restartFromThirty = () => {
    setCurrentTime(START_SECOND);
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      try {
        playerRef.current.seekTo(START_SECOND, true);
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch {
        sendPostMessageCommand('seekTo', [START_SECOND, true]);
        sendPostMessageCommand('playVideo');
      }
    } else {
      sendPostMessageCommand('seekTo', [START_SECOND, true]);
      sendPostMessageCommand('playVideo');
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      try {
        playerRef.current.setVolume(newVol);
      } catch {
        sendPostMessageCommand('setVolume', [newVol]);
      }
    } else {
      sendPostMessageCommand('setVolume', [newVol]);
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (playerRef.current) {
      try {
        if (nextMute) {
          playerRef.current.mute();
        } else {
          playerRef.current.unMute();
          playerRef.current.setVolume(volume);
        }
      } catch {
        sendPostMessageCommand(nextMute ? 'mute' : 'unMute');
      }
    }
  };

  // Play immediately upon mount or first user touch/click without any delay
  useEffect(() => {
    // Immediate attempt on mount
    playMusic(true);

    const handleFirstInteraction = () => {
      playMusic(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    return cleanup;
  }, []);

  // Also trigger immediately if autoPlayTrigger changes
  useEffect(() => {
    if (autoPlayTrigger) {
      playMusic(true);
    }
  }, [autoPlayTrigger]);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="relative z-40 select-none">
      {/* Hidden YouTube Iframe for audio streaming with autoplay */}
      <div
        ref={iframeContainerRef}
        aria-hidden="true"
        className="pointer-events-none fixed -top-96 -left-96 opacity-0 w-1 h-1 overflow-hidden"
      >
        <iframe
          id="celestial-yt-iframe"
          title="Harpy Hare in 26edo - Bryan Deister"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&start=${START_SECOND}&autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="w-1 h-1"
        />
      </div>

      {/* The Floating Music Button in Corner: Clicking it opens the settings panel */}
      <button
        type="button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        aria-label="تنظیمات پخش موسیقی"
        title="تنظیمات و پخش موسیقی (Harpy Hare in 26edo)"
        className={`flex items-center gap-1.5 py-1.5 px-2.5 xs:py-2 xs:px-3 rounded-full transition-all border backdrop-blur-md cursor-pointer active:scale-95 touch-manipulation shadow-lg ${
          isPlaying
            ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#FFF6D1] shadow-[0_0_20px_rgba(212,175,55,0.45)]'
            : 'bg-black/60 border-white/15 text-white/70 hover:text-white hover:border-[#D4AF37]/50'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse shrink-0" />
            <span className="text-[11px] text-[#FFF5CC] font-vazir hidden xs:inline">
              Harpy Hare (00:30)
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping shrink-0" />
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-white/60 shrink-0" />
            <span className="text-[11px] text-white/80 font-vazir hidden xs:inline">
              تنظیمات موسیقی
            </span>
          </>
        )}
        <Sliders className="w-3 h-3 text-[#D4AF37]/75 ml-0.5 shrink-0" />
      </button>

      {/* Settings Modal / Popover: Exactly right on the music player control box */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-11 left-0 w-[270px] xs:w-[290px] rounded-2xl bg-gradient-to-b from-[#0C1635]/95 via-[#081028]/95 to-[#040816]/98 border border-[#D4AF37]/60 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-xl z-50 text-right dir-rtl font-vazir"
          >
            {/* Header with Title and Close Button */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#D4AF37]/25">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFF6D1]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>تنظیمات نوای جشن</span>
              </div>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                aria-label="بستن تنظیمات"
                className="w-6 h-6 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Song Track Details Card */}
            <div className="mb-3 p-2.5 rounded-xl bg-[#04091A]/80 border border-[#D4AF37]/25 flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                <Music className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 text-left dir-ltr">
                <p className="text-xs font-bold text-[#FFF8DE] truncate font-readex">
                  Harpy Hare in 26edo
                </p>
                <p className="text-[10.5px] text-[#A8C4E8] truncate">
                  Bryan Deister (Yaelokre Cover)
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] bg-[#D4AF37]/20 text-[#FFF2B2] border border-[#D4AF37]/35 font-time-num">
                    ⏱️ شروع از 00:30
                  </span>
                  {isPlaying && (
                    <span className="text-[9.5px] text-[#E8ECF5]/70 font-time-num">
                      {formatSeconds(currentTime)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Playback Primary Controls */}
            <div className="flex items-center justify-center gap-2 mb-3">
              {/* Play / Pause Primary Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5DF95] to-[#AA771C] text-[#1A1202] font-bold text-xs shadow-[0_2px_12px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>توقف موقت</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>پخش آهنگ</span>
                  </>
                )}
              </button>

              {/* Jump to 00:30 Restart Button */}
              <button
                type="button"
                onClick={restartFromThirty}
                title="شروع مجدد آهنگ از ثانیه 00:30"
                className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-[#FFF6D1] transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[10px] font-time-num">00:30</span>
              </button>
            </div>

            {/* Volume Slider Control */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] text-white/70">
                <span className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="cursor-pointer text-[#D4AF37] hover:scale-110 transition-transform"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <span>بلندی صدا</span>
                </span>
                <span className="font-time-num text-[10px] text-[#FFF5CC]">
                  {isMuted ? 'بی‌صدا' : `${volume}٪`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                aria-label="کنترل میزان صدای موسیقی"
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-white/20 accent-[#D4AF37] transition-all"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
