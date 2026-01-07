const MEDIA_REPO = 'M4RIIN/marso_media';
const MEDIA_BRANCH = 'main';

export const MEDIA_CDN_BASE_URL = `https://cdn.jsdelivr.net/gh/${MEDIA_REPO}@${MEDIA_BRANCH}/`;

export const buildMediaUrl = (fileName: string): string => `${MEDIA_CDN_BASE_URL}${fileName}`;

export const HERO_VIDEO_FILENAME = 'hero-video.mp4';
export const HERO_POSTER_FILENAME = 'hero-poster.jpg';
