import { EventInvitationData, RsvpGuest, WishMessage } from '../types.ts';

export const INITIAL_INVITATION_DATA: EventInvitationData = {
  celebrantName: 'Sana',
  age: 23,
  titlePersian: 'جشن تولد بیست و سه سالگی ثنا',
  titleEnglish: 'Sana\'s Celestial 23rd Birthday Celebration',
  datePersian: 'پنجشنبه ۹ مهر ماه',
  dateGregorian: 'Thursday, October 1, 2026',
  dayOfWeek: 'پنجشنبه',
  time: '۱۶:۰۰',
  timeEnd: '۲۱:۰۰',
  targetDateTime: '2026-10-01T16:00:00', // Forward-looking default for live countdown
  venueName: 'خانه تقی یام',
  venueNameEnglish: 'Taghi Yam House',
  address: 'خیابان رسالت ، کوی افسران ، ۱۲ متری ویلا ، پلاک ۳۰ ، طبقه ۴',
  city: 'تهران',
  googleMapsUrl: 'https://maps.app.goo.gl/p53f6z2aiMhdSCjK9',
  neshanUrl: 'https://nshn.ir/rbAy0AyCVv0j',
  baladUrl: 'https://maps.app.goo.gl/p53f6z2aiMhdSCjK9',
  dressCodeTitle: 'سرمه‌ای شب، سفید، طلایی، مشکی',
  dressCodeDesc: 'کد پوشش پیشنهادی: سرمه‌ای شب، سفید، طلایی و مشکی',
  dressCodeColors: [
    { name: 'سرمه‌ای شب', hex: '#0B132B', desc: 'Midnight Blue' },
    { name: 'سفید', hex: '#FFFFFF', desc: 'Pure White' },
    { name: 'طلایی', hex: '#D4AF37', desc: 'Burnished Gold' },
    { name: 'مشکی', hex: '#0A0A0E', desc: 'Cosmic Black' },
  ],
  poeticVerse: 'در آغوش کسوف، ماه و خورشید به هم می‌رسند. دیداری جادویی میان نور و سایه در پهنه آسمان.',
  welcomeMessage: 'حضور پرمهر شما زیباترین ستاره در آسمان این شب خاطره‌انگیز خواهد بود. لطفا با اعلام حضور خود، ما را در میزبانی هرچه شایسته‌تر یاری فرمایید.',
  hostPhone: '09120000000',
};

export const INITIAL_GUESTS: RsvpGuest[] = [
  {
    id: 'g-1',
    name: 'آرش و نیلوفر کمالی',
    status: 'attending',
    guestsCount: 2,
    message: 'تولدت هزاران بار مبارک سارای عزیز! بی‌صبرانه منتظر این شب جادویی هستیم ✨🌙',
    createdAt: '۲ ساعت پیش',
  },
  {
    id: 'g-2',
    name: 'مهسا صادقی',
    status: 'attending',
    guestsCount: 1,
    message: 'بیست و سه سالگیت سرشار از نور خورشید و آرامش ماه باشه دوستم 💛',
    createdAt: 'دیروز',
  },
  {
    id: 'g-3',
    name: 'علیرضا حسینی',
    status: 'attending',
    guestsCount: 2,
    message: 'تبریک صمیمانه به دوست عزیزمون. جشن باشکوهی خواهد بود!',
    createdAt: '۲ روز پیش',
  },
];

export const INITIAL_WISHES: WishMessage[] = [
  {
    id: 'w-1',
    name: 'پریناز',
    wish: 'سارا جانم، آرزو می‌کنم دلت همیشه مثل خورشید تابان و شب‌هایت مثل این تم، پر از آرامش مهتاب و درخشش ستاره‌ها باشه!',
    timestamp: 'امروز، ساعت ۱۸:۲۰',
    starIcon: 'moon',
  },
  {
    id: 'w-2',
    name: 'امیرحسین',
    wish: 'Happy 23rd! به امید سالی پر از موفقیت، خنده‌های از ته دل و دستیابی به بلندترین قله‌ها ⭐',
    timestamp: 'دیروز',
    starIcon: 'sun',
  },
  {
    id: 'w-3',
    name: 'سحر و کیان',
    wish: 'تولدت مبارک زیباترین دختر! ۲۳ سالگی بهترین فصل شکوفایی و درخششه 🌙✨',
    timestamp: '۳ روز پیش',
    starIcon: 'star',
  },
];
