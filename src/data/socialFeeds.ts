export type Platform = "youtube" | "facebook" | "instagram" | "x";

export type SocialPost = {
  id: string;
  platform: Platform;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  date: string;
  relativeTime: string;
  content: string;
  media?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
    aspectRatio?: "video" | "square" | "portrait";
    duration?: string;
    youtubeId?: string;
  };
  metrics: {
    likes?: number;
    shares?: number;
    comments?: number;
    views?: string;
    retweets?: number;
  };
  url: string;
  tags: string[];
};

export const socialFeeds: SocialPost[] = [
  {
    id: "yt-1",
    platform: "youtube",
    author: {
      name: "Muslim Medical Mission",
      handle: "@mmmpakofficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-09-03",
    relativeTime: "1 day ago",
    content:
      "Field Documentary: Free Medical Camps in Dera Ghazi Khan & Taunsa Sharif. Our volunteer doctors provide consultation, diagnostic screening, and full medicine courses to 500+ flood-affected families.",
    media: {
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/media/field/free-medical-camp-medicines.jpg",
      duration: "06:42",
      youtubeId: "dQw4w9WgXcQ",
    },
    metrics: {
      views: "14.2K",
      likes: 890,
      comments: 74,
    },
    url: "https://youtube.com/@mmmpakofficial",
    tags: ["#MuslimMedicalMission", "#FreeMedicalCamp", "#HumanitarianAid", "#PakistanFloods"],
  },
  {
    id: "fb-1",
    platform: "facebook",
    author: {
      name: "Muslim Medical Mission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-09-04",
    relativeTime: "3 hours ago",
    content:
      "الحمد لله! Today's free medical camp in rural South Punjab concluded successfully. Over 480 patients were examined by volunteer consultant physicians, paediatricians, and gynaecologists. All medicines were dispensed free of charge at the spot.",
    media: {
      type: "image",
      url: "/media/field/free-medical-camp-doctors.jpg",
      aspectRatio: "video",
    },
    metrics: {
      likes: 1240,
      comments: 118,
      shares: 235,
    },
    url: "https://facebook.com/MMMPakOfficial",
    tags: ["#FreeClinic", "#MercyInMotion", "#MuslimDoctors", "#FrontlineCare"],
  },
  {
    id: "ig-1",
    platform: "instagram",
    author: {
      name: "muslimmedicalmission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-09-04",
    relativeTime: "5 hours ago",
    content:
      "A hospital cannot come to the village. A doctor can. 🩺✨ Glimpses of hope from our frontline medical teams delivering free consultations and emergency medicines to patients who walked miles to reach our camp.",
    media: {
      type: "image",
      url: "/media/field/camp-patients-banner.jpg",
      aspectRatio: "square",
    },
    metrics: {
      likes: 2180,
      comments: 94,
    },
    url: "https://instagram.com/MMMPakOfficial",
    tags: ["#MuslimMedicalMission", "#FrontlineHeroes", "#DoctorsWithoutBorders", "#PakistanAid"],
  },
  {
    id: "x-1",
    platform: "x",
    author: {
      name: "Muslim Medical Mission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-09-04",
    relativeTime: "1 hour ago",
    content:
      "🚨 FIELD ALERT: Emergency flood response teams have deployed into Tehsil Taunsa Sharif. Mobile boats & paramedic units are actively evacuating vulnerable families and setting up temporary medical stations. Every rupee goes directly to medicines. #PakistanFloods",
    metrics: {
      retweets: 182,
      likes: 640,
      views: "28.5K",
    },
    url: "https://x.com/MMMPakOfficial",
    tags: ["#EmergencyRelief", "#TaunsaFlood", "#DisasterResponse", "#MMMPakistan"],
  },
  {
    id: "yt-2",
    platform: "youtube",
    author: {
      name: "Muslim Medical Mission",
      handle: "@mmmpakofficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-09-01",
    relativeTime: "3 days ago",
    content:
      "Basic Life Support (BLS) & Disaster First Responder Training in collaboration with Punjab Emergency Service (Rescue 1122). Equipping volunteers with life-saving trauma skills.",
    media: {
      type: "video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "/media/field/bls-rescue-1122.jpg",
      duration: "08:15",
      youtubeId: "dQw4w9WgXcQ",
    },
    metrics: {
      views: "9.8K",
      likes: 650,
      comments: 42,
    },
    url: "https://youtube.com/@mmmpakofficial",
    tags: ["#Rescue1122", "#EmergencyTraining", "#FirstResponders", "#CPR"],
  },
  {
    id: "fb-2",
    platform: "facebook",
    author: {
      name: "Muslim Medical Mission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-08-30",
    relativeTime: "5 days ago",
    content:
      "Annual National Medical Conference recap: Hundreds of consultant doctors, medical students, and paramedics gathered to discuss medical ethics, succession planning, and disaster preparedness. 'The seeking of knowledge is an obligation upon every Muslim.'",
    media: {
      type: "image",
      url: "/media/field/national-conference-stage.jpg",
      aspectRatio: "video",
    },
    metrics: {
      likes: 1890,
      comments: 156,
      shares: 310,
    },
    url: "https://facebook.com/MMMPakOfficial",
    tags: ["#MMMConference", "#MedicalEthics", "#FutureHealers", "#LahoreDoctors"],
  },
  {
    id: "ig-2",
    platform: "instagram",
    author: {
      name: "muslimmedicalmission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-08-29",
    relativeTime: "6 days ago",
    content:
      "Water for Life Mission in Gaza 💧: Our daily clean water tankers continue distribution across displacement camps, serving thousands of children and families. 'The best charity is giving water to drink.'",
    media: {
      type: "image",
      url: "/media/gaza-water/gaza-water-01.jpg",
      aspectRatio: "square",
    },
    metrics: {
      likes: 3450,
      comments: 210,
    },
    url: "https://instagram.com/MMMPakOfficial",
    tags: ["#GazaRelief", "#WaterIsLife", "#SaveGaza", "#MuslimCharity"],
  },
  {
    id: "x-2",
    platform: "x",
    author: {
      name: "Muslim Medical Mission",
      handle: "@MMMPakOfficial",
      avatar: "/media/brand/circle-logo.png",
      verified: true,
    },
    date: "2026-08-28",
    relativeTime: "1 week ago",
    content:
      "Free Surgical Camp at Central Jail Kot Lakhpat concluded. 35 minor and intermediate surgeries performed by volunteer surgical specialists with complete post-operative care and medicines provided. #HealthcareRights #PrisonCare",
    metrics: {
      retweets: 95,
      likes: 410,
      views: "18.2K",
    },
    url: "https://x.com/MMMPakOfficial",
    tags: ["#SurgicalCamp", "#KotLakhpat", "#PrisonHealthcare"],
  },
];

export const socialChannels = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@mmmpakofficial",
    href: "https://youtube.com/@mmmpakofficial",
    followers: "15.8K Subscribers",
    color: "#FF0000",
    bgLight: "bg-red-50 text-red-600 border-red-200 hover:bg-red-600 hover:text-white",
    cta: "Subscribe on YouTube",
    description: "Documentaries, camp coverage & medical lectures",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Muslim Medical Mission",
    href: "https://facebook.com/MMMPakOfficial",
    followers: "42K Followers",
    color: "#1877F2",
    bgLight: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white",
    cta: "Follow on Facebook",
    description: "Daily dispatches, photo albums & announcements",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@MMMPakOfficial",
    href: "https://instagram.com/MMMPakOfficial",
    followers: "28.4K Followers",
    color: "#E1306C",
    bgLight: "bg-pink-50 text-pink-600 border-pink-200 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white",
    cta: "Follow on Instagram",
    description: "Stories, field photography & reels",
  },
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@MMMPakOfficial",
    href: "https://x.com/MMMPakOfficial",
    followers: "19.2K Followers",
    color: "#000000",
    bgLight: "bg-slate-100 text-slate-900 border-slate-300 hover:bg-black hover:text-white",
    cta: "Follow on X",
    description: "Real-time emergency relief alerts & news",
  },
] as const;
