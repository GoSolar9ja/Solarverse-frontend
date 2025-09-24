import { MetadataRoute } from "next";
import { SEO_CONSTANTS } from "@/lib/seo/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONSTANTS.COMPANY_NAME,
    short_name: "GoSolar9ja",
    description: SEO_CONSTANTS.COMPANY_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#092D60",
    orientation: "portrait",
    categories: ["business", "utilities", "productivity"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/images/gosolar-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/gosolar-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/gosolar-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/gosolar-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/images/gosolar-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  };
}
