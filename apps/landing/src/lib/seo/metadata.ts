import { Metadata } from "next";
import { SEO_CONSTANTS } from "./constants";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalUrl?: string;
  noIndex?: boolean;
  additionalMetaTags?: Record<string, string>;
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = SEO_CONSTANTS.DEFAULT_TITLE,
    description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    keywords = SEO_CONSTANTS.DEFAULT_KEYWORDS,
    ogImage = SEO_CONSTANTS.DEFAULT_OG_IMAGE,
    ogType = "website",
    canonicalUrl,
    noIndex = false,
    additionalMetaTags = {},
  } = config;

  const fullTitle = title.includes(SEO_CONSTANTS.COMPANY_NAME)
    ? title
    : `${title} | ${SEO_CONSTANTS.COMPANY_NAME}`;

  // Generate dynamic OG image URL
  const dynamicOgImage =
    ogImage ||
    `${SEO_CONSTANTS.DEFAULT_OG_IMAGE}?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(description.substring(0, 100))}`;

  const metadata: Metadata = {
    metadataBase: new URL(SEO_CONSTANTS.COMPANY_URL),
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SEO_CONSTANTS.COMPANY_NAME }],
    creator: SEO_CONSTANTS.COMPANY_NAME,
    publisher: SEO_CONSTANTS.COMPANY_NAME,

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph
    openGraph: {
      type: ogType,
      locale: "en_NG",
      url: canonicalUrl || SEO_CONSTANTS.COMPANY_URL,
      siteName: SEO_CONSTANTS.COMPANY_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: dynamicOgImage,
          width: 1200,
          height: 630,
          alt: `${SEO_CONSTANTS.COMPANY_NAME} - ${title}`,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@gosolar9ja", // Update with actual Twitter handle
      site: "@gosolar9ja", // Update with actual Twitter handle
    },

    // Additional meta tags
    other: {
      "theme-color": "#092D60", // Update with your brand color
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "format-detection": "telephone=no",
      ...additionalMetaTags,
    },

    // Canonical URL
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),

    // App-specific
    applicationName: SEO_CONSTANTS.COMPANY_NAME,
    category: "Business",
  };

  return metadata;
}

export function generateStructuredData(
  type:
    | "Organization"
    | "WebSite"
    | "LocalBusiness"
    | "Service" = "Organization"
) {
  const baseUrl = SEO_CONSTANTS.COMPANY_URL;

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONSTANTS.COMPANY_NAME,
    description: SEO_CONSTANTS.COMPANY_DESCRIPTION,
    url: baseUrl,
    logo: `${baseUrl}${SEO_CONSTANTS.LOGO_URL}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO_CONSTANTS.PHONE,
      contactType: "customer service",
      email: SEO_CONSTANTS.EMAIL,
      areaServed: SEO_CONSTANTS.COUNTRY,
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: SEO_CONSTANTS.COUNTRY,
    },
    sameAs: Object.values(SEO_CONSTANTS.SOCIAL_MEDIA),
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONSTANTS.COMPANY_NAME,
    description: SEO_CONSTANTS.COMPANY_DESCRIPTION,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: SEO_CONSTANTS.COMPANY_NAME,
    description: SEO_CONSTANTS.COMPANY_DESCRIPTION,
    url: baseUrl,
    telephone: SEO_CONSTANTS.PHONE,
    email: SEO_CONSTANTS.EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: SEO_CONSTANTS.COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.0820", // Nigeria's approximate coordinates
      longitude: "8.6753",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    servesCuisine: "Solar Energy Installation",
    sameAs: Object.values(SEO_CONSTANTS.SOCIAL_MEDIA),
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar Panel Installation Services",
    description:
      "Professional solar panel installation and maintenance services across Nigeria",
    provider: {
      "@type": "Organization",
      name: SEO_CONSTANTS.COMPANY_NAME,
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: SEO_CONSTANTS.COUNTRY,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Solar Installation",
            description: "Complete solar panel installation for homes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Solar Installation",
            description: "Solar energy solutions for businesses",
          },
        },
      ],
    },
  };

  switch (type) {
    case "WebSite":
      return websiteData;
    case "LocalBusiness":
      return localBusinessData;
    case "Service":
      return serviceData;
    default:
      return organizationData;
  }
}

export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  publishDate: string;
  modifyDate?: string;
  author: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.modifyDate || article.publishDate,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_CONSTANTS.COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SEO_CONSTANTS.COMPANY_URL}${SEO_CONSTANTS.LOGO_URL}`,
      },
    },
    url: article.url,
  };
}
