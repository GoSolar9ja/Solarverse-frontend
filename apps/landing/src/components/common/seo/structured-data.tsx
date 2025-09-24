import { generateStructuredData } from "@/lib/seo/metadata";

interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "LocalBusiness" | "Service";
  data?: Record<string, unknown>;
}

export default function StructuredData({
  type = "Organization",
  data,
}: StructuredDataProps) {
  const structuredData = data || generateStructuredData(type);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
