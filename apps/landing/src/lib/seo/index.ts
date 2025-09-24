// Export all SEO utilities
export {
  generateMetadata,
  generateStructuredData,
  generateBreadcrumbStructuredData,
  generateArticleStructuredData,
} from "./metadata";
export { SEO_CONSTANTS, PAGE_METADATA } from "./constants";

// SEO utility functions
export const createCanonicalUrl = (path: string, baseUrl?: string) => {
  const base = baseUrl || SEO_CONSTANTS.COMPANY_URL;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

export const createSocialShareUrl = (
  platform: "facebook" | "twitter" | "linkedin",
  url: string,
  title?: string
) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = title ? encodeURIComponent(title) : "";

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    default:
      return "";
  }
};

export const generatePageTitle = (title: string, includeBrand = true) => {
  if (includeBrand && !title.includes(SEO_CONSTANTS.COMPANY_NAME)) {
    return `${title} | ${SEO_CONSTANTS.COMPANY_NAME}`;
  }
  return title;
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
};

// Import SEO_CONSTANTS here to avoid circular dependency
import { SEO_CONSTANTS } from "./constants";
