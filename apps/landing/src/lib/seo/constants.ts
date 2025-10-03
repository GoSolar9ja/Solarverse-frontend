export const SEO_CONSTANTS = {
  // Company Information
  COMPANY_NAME: "Solar Verse",
  COMPANY_DESCRIPTION:
    "Nigeria's trusted platform to connect homeowners with certified solar installers. Get competitive bids, choose your best match, and manage your installation seamlessly all in one place.",
  COMPANY_URL: "https://solarverse.com", // Update with your actual domain

  //TODO: Contact Information
  // Contact Information
  PHONE: "+234-XXX-XXX-XXXX", // Update with actual phone
  EMAIL: "info@solarverse.com", // Update with actual email

  // Location
  COUNTRY: "Nigeria",
  LOCATION: "Nigeria",

  // Social Media
  SOCIAL_MEDIA: {
    FACEBOOK: "https://facebook.com/solarverse",
    TWITTER: "https://twitter.com/solarverse",
    INSTAGRAM: "https://instagram.com/solarverse",
    LINKEDIN: "https://linkedin.com/company/solarverse",
  },

  // SEO Defaults
  DEFAULT_TITLE: "Solar Verse - Nigeria's Leading Solar Installation Platform",
  DEFAULT_DESCRIPTION:
    "Switch to solar energy with Solar Verse. Connect with certified solar installers across Nigeria, get competitive quotes, and power your future with clean, affordable solar solutions.",
  DEFAULT_KEYWORDS: [
    "solar energy Nigeria",
    "solar installation",
    "solar panels",
    "renewable energy",
    "solar installers",
    "clean energy",
    "solar power",
    "electricity solution",
    "solar system",
    "green energy Nigeria",
  ] as string[],

  // Images
  DEFAULT_OG_IMAGE: "https://i.ibb.co/C32ffpbG/image.png", // Use direct image URL instead of dynamic generation
  TWITTER_OG_IMAGE: "https://i.ibb.co/whLWVWBn/Image.png",
  LOGO_URL: "../../../public/images/solar-verse-logo.png", // Your actual logo path

  // Business Type
  BUSINESS_TYPE: "LocalBusiness",
  INDUSTRY: "Solar Energy Installation",

  // App Information
  APP_VERSION: "1.0.0",
} as const;

export const PAGE_METADATA = {
  HOME: {
    title: "Solar Verse - Nigeria's Leading Solar Installation Platform",
    description:
      "Switch to solar energy with Solar Verse. Connect with certified solar installers across Nigeria, get competitive quotes, and power your future with clean, affordable solar solutions.",
    keywords: [
      "solar energy Nigeria",
      "solar installation platform",
      "solar panels Nigeria",
      "renewable energy",
      "solar installers",
      "clean energy solutions",
    ] as string[],
  },
  ABOUT: {
    title: "About Solar Verse - Powering Nigeria's Solar Revolution",
    description:
      "Learn about Solar Verse's mission to make solar energy accessible across Nigeria. Discover our story, values, and commitment to connecting homeowners with trusted solar installers.",
    keywords: [
      "about Solar Verse",
      "solar energy company",
      "Nigeria solar revolution",
      "renewable energy mission",
      "solar installation services",
    ] as string[],
  },
  INSTALLER: {
    title: "Join Solar Verse as a Solar Installer - Grow Your Business",
    description:
      "Become a certified solar installer partner with Solar Verse. Access verified leads, expand your business, and help power Nigeria's transition to clean energy.",
    keywords: [
      "solar installer jobs",
      "solar business opportunities",
      "installer certification",
      "solar contractor Nigeria",
      "renewable energy careers",
    ] as string[],
  },
  CONTACT: {
    title: "Contact Solar Verse - Get Solar Energy Solutions",
    description:
      "Get in touch with Solar Verse for solar installation services, partnership opportunities, or support. We're here to help you switch to clean, affordable solar energy.",
    keywords: [
      "contact solar company",
      "solar installation support",
      "Solar Verse contact",
      "solar energy consultation",
      "get solar quote",
    ] as string[],
  },
  FAQ: {
    title: "Solar Energy FAQs - Solar Verse Help Center",
    description:
      "Find answers to common questions about solar energy, installation process, costs, and benefits. Get expert guidance on switching to solar power in Nigeria.",
    keywords: [
      "solar energy FAQ",
      "solar installation questions",
      "solar power benefits",
      "solar energy guide",
      "solar system costs",
    ] as string[],
  },
  BLOG: {
    title: "Solar Energy Blog - Tips, News & Insights | Solar Verse",
    description:
      "Stay updated with the latest solar energy news, tips, and insights from Solar Verse. Learn about solar technology, benefits, and success stories from Nigeria.",
    keywords: [
      "solar energy blog",
      "solar news Nigeria",
      "renewable energy insights",
      "solar technology updates",
      "clean energy tips",
    ] as string[],
  },
} as const;
