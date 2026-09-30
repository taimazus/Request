export interface EventInvitationData {
  celebrantName: string;
  age: number;
  titlePersian: string;
  titleEnglish: string;
  datePersian: string;
  dateGregorian: string;
  dayOfWeek: string;
  time: string;
  timeEnd?: string;
  targetDateTime: string; // ISO date for countdown
  venueName: string;
  venueNameEnglish: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  neshanUrl?: string;
  baladUrl?: string;
  dressCodeTitle: string;
  dressCodeDesc: string;
  dressCodeColors: { name: string; hex: string; desc: string }[];
  poeticVerse: string;
  welcomeMessage: string;
  hostPhone?: string;
}

export interface RsvpGuest {
  id: string;
  name: string;
  phone?: string;
  status: 'attending' | 'declined';
  guestsCount: number;
  message?: string;
  createdAt: string;
}

export interface WishMessage {
  id: string;
  name: string;
  wish: string;
  timestamp: string;
  starIcon: 'moon' | 'sun' | 'star';
}
