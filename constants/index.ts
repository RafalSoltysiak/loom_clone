export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-10-10"),
    userImg: "/assets/images/jason.png",
    username: "Jaon",
    views: 10,
    visibility: "public",
    duration: 50,
  },
  {
    id: "2",
    title: "Instagram Story",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-10-12"),
    userImg: "/assets/images/emma.png",
    username: "Emma",
    views: 25,
    visibility: "private",
    duration: 45,
  },
  {
    id: "3",
    title: "YouTube Shorts",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-10-15"),
    userImg: "/assets/images/mike.png",
    username: "Mike",
    views: 100,
    visibility: "public",
    duration: 60,
  },
  {
    id: "4",
    title: "TikTok Dance",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-10-09"),
    userImg: "/assets/images/sophia.png",
    username: "Sophia",
    views: 80,
    visibility: "public",
    duration: 30,
  },
  {
    id: "5",
    title: "Cooking Tips",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-10-11"),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 45,
    visibility: "private",
    duration: 70,
  },
  {
    id: "6",
    title: "Tech Review",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-10-13"),
    userImg: "/assets/images/olivia.png",
    username: "Olivia",
    views: 90,
    visibility: "public",
    duration: 120,
  },
  {
    id: "7",
    title: "Travel Vlog",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-10-08"),
    userImg: "/assets/images/jack.png",
    username: "Jack",
    views: 60,
    visibility: "unlisted",
    duration: 85,
  },
  {
    id: "8",
    title: "Gym Routine",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-10-14"),
    userImg: "/assets/images/lily.png",
    username: "Lily",
    views: 35,
    visibility: "public",
    duration: 40,
  },
];
