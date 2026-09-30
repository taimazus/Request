import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Copy,
  Check,
  Share2,
  Download,
  MessageCircle,
  Send,
  Sparkles,
  Smartphone,
  FileArchive,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
} from 'lucide-react';
import { toPng } from 'html-to-image';
import { EventInvitationData } from '../types.ts';
import {
  CelestialMoon,
  CelestialSun,
  MinimalCelestialEmblem,
  TarotCornerFiligree,
  TarotSparkleStar,
} from './CelestialDecorIcons.tsx';

interface SaveAndShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: EventInvitationData;
  initialGuestName?: string;
}

export const SaveAndShareModal: React.FC<SaveAndShareModalProps> = ({
  isOpen,
  onClose,
  data,
  initialGuestName = '',
}) => {
  const [customGuest, setCustomGuest] = useState(initialGuestName);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [isExportingFront, setIsExportingFront] = useState(false);
  const [isExportingBack, setIsExportingBack] = useState(false);
  const [activeTab, setActiveTab] = useState<'link' | 'image' | 'backup'>('link');

  // Compute full invitation URL with optional custom guest parameter
  const getFullShareUrl = () => {
    try {
      const origin = window.location.origin;
      const pathname = window.location.pathname;
      const cleanGuest = customGuest.trim();
      if (cleanGuest) {
        return `${origin}${pathname}?to=${encodeURIComponent(cleanGuest)}`;
      }
      return `${origin}${pathname}`;
    } catch {
      return window.location.href;
    }
  };

  const shareUrl = getFullShareUrl();

  const invitationMessageText = `✨ کارت دعوت اختصاصی جشن تولد سنا ✨
${customGuest.trim() ? `${customGuest.trim()} عزیز، ` : ''}
با کمال میل و افتخار شما را به دیدار جادویی ماه و خورشید در شب تولد سنا دعوت می‌کنیم.

📅 پنجشنبه ۹ مهر ماه | ساعت ۱۶:۰۰
📍 ${data.venueName} - ${data.address}

جهت باز کردن پاکت نامه و مشاهده کارت دعوت دیجیتال روی لینک زیر بزنید:
${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(invitationMessageText);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = invitationMessageText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(invitationMessageText);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareTelegram = () => {
    const text = encodeURIComponent(invitationMessageText);
    const url = encodeURIComponent(shareUrl);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const handleShareSms = () => {
    const body = encodeURIComponent(invitationMessageText);
    window.open(`sms:?body=${body}`, '_blank');
  };

  // Export card sides as pristine PNG image
  const handleExportImage = async (side: 'front' | 'back') => {
    const elementId = side === 'front' ? 'export-card-front-snapshot' : 'export-card-back-snapshot';
    const element = document.getElementById(elementId);
    if (!element) return;

    if (side === 'front') setIsExportingFront(true);
    else setIsExportingBack(true);

    try {
      // Wait a tick for fonts/styles to stabilize
      await new Promise((r) => setTimeout(r, 120));

      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#030611',
      });

      const downloadLink = document.createElement('a');
      downloadLink.download = `sana-birthday-card-${side}.png`;
      downloadLink.href = dataUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (err) {
      console.error('Failed to export image:', err);
    } finally {
      setIsExportingFront(false);
      setIsExportingBack(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        {/* Backdrop dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0B1536] via-[#050C22] to-[#020512] border-2 border-[#D4AF37]/80 shadow-[0_20px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.3)] p-4 sm:p-6 text-[#E8ECF5] z-10 my-auto overflow-hidden font-vazir"
          dir="rtl"
        >
          {/* Ornate corner filigrees */}
          <div className="absolute top-2 right-2 pointer-events-none opacity-60">
            <TarotCornerFiligree className="w-5 h-5 text-[#D4AF37]" rotation={0} />
          </div>
          <div className="absolute top-2 left-2 pointer-events-none opacity-60">
            <TarotCornerFiligree className="w-5 h-5 text-[#D4AF37]" rotation={90} />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-[#D4AF37] hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
            title="بستن پنجره"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center pt-1 pb-3 border-b border-[#D4AF37]/30">
            <div className="inline-flex items-center justify-center gap-2 mb-1">
              <CelestialMoon className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF2] via-[#FEEBA0] to-[#D4AF37]">
                ذخیره و اشتراک‌گذاری کارت دعوت
              </h3>
              <CelestialSun className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <p className="text-[11px] sm:text-xs text-[#9BB4D8]">
              ارسال لینک به مهمانان، ذخیره تصویر کارت در گالری، و دانلود پکیج سایت
            </p>
          </div>

          {/* Cloud Auto-Saved Status Badge */}
          <div className="mt-3 py-2 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-2 text-[11px] sm:text-xs text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>تمام اطلاعات و تغییرات شما به صورت خودکار ذخیره شده‌اند</strong> و لینک دعوتنامه به شکل زنده فعال است.
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-3.5 grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/40 border border-[#D4AF37]/30">
            <button
              type="button"
              onClick={() => setActiveTab('link')}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'link'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38C26] text-[#0A0D1A] shadow-md'
                  : 'text-[#9BB4D8] hover:text-white hover:bg-white/5'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>ارسال لینک</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('image')}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'image'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38C26] text-[#0A0D1A] shadow-md'
                  : 'text-[#9BB4D8] hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>ذخیره عکس</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('backup')}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'backup'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38C26] text-[#0A0D1A] shadow-md'
                  : 'text-[#9BB4D8] hover:text-white hover:bg-white/5'
              }`}
            >
              <FileArchive className="w-3.5 h-3.5" />
              <span>دانلود فایل سایت</span>
            </button>
          </div>

          {/* TAB 1: Share Link */}
          {activeTab === 'link' && (
            <div className="mt-3.5 space-y-3">
              {/* Optional Guest Name Input */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs text-[#DCE8F8] font-medium flex items-center justify-between">
                  <span>نام مهمان (اختیاری جهت شخصی‌سازی روی پاکت و کارت):</span>
                  <span className="text-[10px] text-[#D4AF37]">مثلاً: سارا جان یا خانواده محترم احمدی</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={customGuest}
                    onChange={(e) => setCustomGuest(e.target.value)}
                    placeholder="نام مهمان را وارد کنید..."
                    className="w-full py-1.5 px-3 rounded-xl bg-black/50 border border-[#D4AF37]/50 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50"
                  />
                  {customGuest && (
                    <button
                      type="button"
                      onClick={() => setCustomGuest('')}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Link copy box */}
              <div className="p-2.5 rounded-xl bg-black/60 border border-[#D4AF37]/40 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#A6C0E2]">
                  <span>لینک آنلاین دعوتنامه:</span>
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    <span>پیش‌نمایش</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    readOnly
                    value={shareUrl}
                    dir="ltr"
                    className="w-full py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#FFF8DB] select-all focus:outline-none truncate"
                  />
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="py-1 px-3 rounded-lg bg-[#D4AF37] hover:bg-[#F3D78E] text-[#0A0D1A] font-bold text-xs flex items-center gap-1 shrink-0 transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-900" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'کپی شد!' : 'کپی لینک'}</span>
                  </button>
                </div>
              </div>

              {/* Quick Messaging Share Buttons */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-[#9BB4D8] block">ارسال مستقیم با متن آماده و محترمانه:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="py-2 px-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>واتس‌اپ</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareTelegram}
                    className="py-2 px-2 rounded-xl bg-[#0088cc]/20 hover:bg-[#0088cc]/30 border border-[#0088cc]/50 text-sky-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#0088cc]" />
                    <span>تلگرام</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareSms}
                    className="py-2 px-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                    <span>پیامک</span>
                  </button>
                </div>
              </div>

              {/* Copy Full Message */}
              <button
                type="button"
                onClick={handleCopyText}
                className="w-full py-1.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-[#D4AF37]/40 text-xs text-[#FFF6D8] font-medium flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                <span>{copiedText ? 'متن کامل پیام کپی شد!' : 'کپی متن کامل دعوتنامه جهت ارسال در پیام‌رسان‌ها'}</span>
              </button>
            </div>
          )}

          {/* TAB 2: Save as Image */}
          {activeTab === 'image' && (
            <div className="mt-3.5 space-y-3">
              <p className="text-xs text-[#C5D8F2] leading-relaxed">
                می‌توانید تصویر باکیفیت و بدون انیمیشن کارت دعوت (رو یا پشت کارت) را در گوشی یا سیستم خود ذخیره کرده و به عنوان عکس یا استوری بفرستید:
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Download Front */}
                <div className="p-3 rounded-xl bg-black/50 border border-[#D4AF37]/40 flex flex-col items-center justify-between text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center">
                    <MinimalCelestialEmblem className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#FFF7D4] block">روی کارت (Front)</span>
                    <span className="text-[10px] text-[#8EAAD0] block">طرح ماه و خورشید، تاریخ و نام</span>
                  </div>
                  <button
                    type="button"
                    disabled={isExportingFront}
                    onClick={() => handleExportImage('front')}
                    className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B89228] hover:from-[#F3D78E] hover:to-[#D4AF37] text-[#0A0D1A] font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isExportingFront ? 'در حال تهیه...' : 'دانلود تصویر رو'}</span>
                  </button>
                </div>

                {/* Download Back */}
                <div className="p-3 rounded-xl bg-black/50 border border-[#D4AF37]/40 flex flex-col items-center justify-between text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#FFF7D4] block">پشت کارت (Back)</span>
                    <span className="text-[10px] text-[#8EAAD0] block">آدرس، برنامه جشن و کد پوشش</span>
                  </div>
                  <button
                    type="button"
                    disabled={isExportingBack}
                    onClick={() => handleExportImage('back')}
                    className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B89228] hover:from-[#F3D78E] hover:to-[#D4AF37] text-[#0A0D1A] font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isExportingBack ? 'در حال تهیه...' : 'دانلود تصویر پشت'}</span>
                  </button>
                </div>
              </div>

              <div className="py-2 px-3 rounded-lg bg-white/[0.04] border border-white/10 text-[10.5px] text-[#9BB4D8] text-center">
                💡 نکته: این عکس‌ها با کیفیت بالا (PNG) و مناسب چاپ یا استوری اینستاگرام دانلود می‌شوند.
              </div>
            </div>
          )}

          {/* TAB 3: Full Website ZIP Archive */}
          {activeTab === 'backup' && (
            <div className="mt-3.5 space-y-3">
              <p className="text-xs text-[#C5D8F2] leading-relaxed">
                اگر مایلید تمام فایل‌های کد، آهنگ، تصاویر و ساختار این دعوتنامه را برای همیشه به صورت آفلاین داشته باشید یا روی هاست شخصی خود بارگذاری کنید:
              </p>

              <div className="p-3 rounded-xl bg-black/60 border border-[#D4AF37]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                    <FileArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#FFF7D4] block">پکیج کامل وبسایت (ZIP)</span>
                    <span className="text-[10px] text-[#8EAAD0] block">شامل آهنگ، فونت‌ها و کدها</span>
                  </div>
                </div>

                <a
                  href="/sana-invitation-website.zip"
                  download="sana-invitation-website.zip"
                  className="py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B89228] hover:from-[#F3D78E] hover:to-[#D4AF37] text-[#0A0D1A] font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>دانلود فایل ZIP</span>
                </a>
              </div>

              <div className="space-y-1.5 text-[11px] text-[#9BB4D8] bg-white/[0.03] p-2.5 rounded-xl border border-white/10">
                <div className="font-semibold text-[#D4AF37]">مزایای داشتن این فایل:</div>
                <ul className="list-disc list-inside space-y-0.5 pr-1">
                  <li>اجرای آفلاین بدون نیاز به اینترنت در آینده</li>
                  <li>قابلیت بارگذاری روی هر دامنه یا هاست دیگر</li>
                  <li>ذخیره امن تمام تغییرات و سفارشی‌سازی‌های انجام‌شده</li>
                </ul>
              </div>
            </div>
          )}

          {/* Modal Footer Note */}
          <div className="mt-4 pt-2.5 border-t border-[#D4AF37]/25 flex items-center justify-between text-[10px] sm:text-[10.5px] text-[#8CA6CA]">
            <span>جشن تولد سنا ✨ ۹ مهر ماه</span>
            <button
              type="button"
              onClick={onClose}
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              بستن
            </button>
          </div>
        </motion.div>
      </div>

      {/* ============================================================== */}
      {/* HIDDEN OFF-SCREEN CARDS FOR HIGH-RES IMAGE EXPORT (SNAPSHOT) */}
      {/* ============================================================== */}
      <div style={{ position: 'fixed', top: '-99999px', left: '-99999px', pointerEvents: 'none', opacity: 0 }}>
        {/* Front snapshot container */}
        <div
          id="export-card-front-snapshot"
          style={{
            width: '420px',
            height: '620px',
            backgroundColor: '#050B1E',
            backgroundImage: 'linear-gradient(to bottom, #0B1536, #050B1E, #02040E)',
            border: '2px solid #D4AF37',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            color: '#E8ECF5',
            fontFamily: 'Vazirmatn, sans-serif',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
          }}
          dir="rtl"
        >
          {/* Subtle gold inner border */}
          <div
            style={{
              position: 'absolute',
              inset: '10px',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              borderRadius: '16px',
              pointerEvents: 'none',
            }}
          />

          {/* Top header */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 600 }}>
              CELESTIAL BIRTHDAY INVITATION
            </div>
            {customGuest.trim() && (
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#FFF8DE', fontWeight: 'bold' }}>
                میهمان گرامی: {customGuest.trim()}
              </div>
            )}
          </div>

          {/* Emblem & Name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', position: 'relative', zIndex: 10 }}>
            <div style={{ width: '130px', height: '130px', marginBottom: '8px' }}>
              <MinimalCelestialEmblem className="w-full h-full" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <CelestialMoon className="w-5 h-5 text-[#D4AF37]" />
              <span style={{ fontFamily: 'Pinyon Script, cursive', fontSize: '46px', color: '#FEEBA0', lineHeight: 1 }}>
                Sana
              </span>
              <CelestialSun className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div style={{ fontSize: '10px', color: '#EAD598', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              WHERE THE MOON AND SUN DANCE IN HARMONY
            </div>
            <div
              style={{
                marginTop: '10px',
                padding: '6px 14px',
                backgroundColor: 'rgba(4, 8, 24, 0.75)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                fontSize: '11px',
                color: '#E0EEFD',
                maxWidth: '90%',
                lineHeight: '1.6',
              }}
            >
              «در آغوش کسوف، ماه و خورشید به هم می‌رسند. دیداری جادویی میان نور و سایه در پهنه آسمان.»
            </div>
          </div>

          {/* Bottom details */}
          <div
            style={{
              width: '100%',
              borderTop: '1px solid rgba(212, 175, 55, 0.3)',
              paddingTop: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', gap: '10px', fontSize: '12px', fontWeight: 'bold', color: '#FFF8DE' }}>
              <span>{data.datePersian}</span>
              <span style={{ color: '#D4AF37' }}>✦</span>
              <span>ساعت {data.time}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#FFFDF2', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#D4AF37' }}>📍</span>
              <span>{data.venueName}</span>
            </div>
          </div>
        </div>

        {/* Back snapshot container */}
        <div
          id="export-card-back-snapshot"
          style={{
            width: '420px',
            height: '620px',
            backgroundColor: '#050B1E',
            backgroundImage: 'linear-gradient(to bottom, #0B1536, #050B1E, #02040E)',
            border: '2px solid #D4AF37',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#E8ECF5',
            fontFamily: 'Vazirmatn, sans-serif',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
          }}
          dir="rtl"
        >
          {/* Subtle gold inner border */}
          <div
            style={{
              position: 'absolute',
              inset: '10px',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              borderRadius: '16px',
              pointerEvents: 'none',
            }}
          />

          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px', position: 'relative', zIndex: 10 }}>
            <span style={{ fontSize: '10px', color: '#D4AF37', letterSpacing: '0.15em', fontWeight: 600 }}>
              CELESTIAL TIMELINE & VENUE
            </span>
            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFF8DE', marginTop: '2px' }}>
              جزئیات و زمان‌بندی جشن تولد
            </div>
          </div>

          {/* Timeline & Notes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 'auto 0', position: 'relative', zIndex: 10 }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '12px', padding: '10px' }}>
              <div style={{ fontSize: '11px', color: '#FFF8DE', fontWeight: 'bold', marginBottom: '4px' }}>
                پیام میزبان:
              </div>
              <div style={{ fontSize: '10.5px', color: '#DCE8F8', lineHeight: '1.6' }}>
                خیلی ممنون می‌شم با حضورتون ورق جدید زندگی منو پر از عشق و دوستی کنید. امیدوارم این جشن برای همه حس خوبی رو القا بکنه ✨
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#B4CEF0', padding: '6px 8px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
              <span>کد پوشش:</span>
              <span style={{ color: '#FFF6C4', fontWeight: 'bold' }}>سرمه‌ای شب، سفید، طلایی، مشکی</span>
            </div>

            <div style={{ backgroundColor: '#050C22', border: '1px solid rgba(212,175,55,0.35)', borderRadius: '10px', padding: '10px' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#FFF6D8', marginBottom: '2px' }}>
                📍 {data.venueName}
              </div>
              <div style={{ fontSize: '10px', color: '#A6C0E2', lineHeight: '1.5' }}>
                {data.address}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ textAlign: 'center', fontSize: '10px', color: '#D4AF37', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '8px', position: 'relative', zIndex: 10 }}>
            پنجشنبه ۹ مهر ماه ساعت ۱۶:۰۰ | منتظر دیدارتان هستیم ✦
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
