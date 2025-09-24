"use client";

import { useEffect, useState } from "react";

interface StructuredDataItem {
  "@type"?: string;
  name?: string;
  [key: string]: unknown;
}

interface MetaTag {
  name?: string;
  property?: string;
  content?: string;
  type?: string;
}

export default function SEOInspector() {
  const [metaTags, setMetaTags] = useState<MetaTag[]>([]);
  const [structuredData, setStructuredData] = useState<StructuredDataItem[]>(
    []
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Get all meta tags
    const metas = Array.from(document.querySelectorAll("meta")).map((meta) => ({
      name: meta.getAttribute("name") || undefined,
      property: meta.getAttribute("property") || undefined,
      content: meta.getAttribute("content") || undefined,
    }));

    // Get structured data
    const scripts = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    );
    const jsonLdData = scripts
      .map((script) => {
        try {
          return JSON.parse(script.textContent || "");
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    setMetaTags(metas);
    setStructuredData(jsonLdData);
  }, []);

  // Don't render on server
  if (!mounted) {
    return null;
  }

  const openGraphTags = metaTags.filter((tag) =>
    tag.property?.startsWith("og:")
  );
  const twitterTags = metaTags.filter((tag) =>
    tag.name?.startsWith("twitter:")
  );
  const basicTags = metaTags.filter(
    (tag) =>
      tag.name &&
      !tag.name.startsWith("twitter:") &&
      !tag.property?.startsWith("og:")
  );

  return (
    <div className="fixed bottom-4 right-4 w-96 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-xs z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">SEO Inspector</h3>
        <button
          onClick={() =>
            document.querySelector("[data-seo-inspector]")?.remove()
          }
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {/* Page Title */}
      <div className="mb-3">
        <h4 className="font-semibold text-green-600">Page Title</h4>
        <p className="text-gray-700">{document.title}</p>
      </div>

      {/* Basic Meta Tags */}
      <div className="mb-3">
        <h4 className="font-semibold text-blue-600">Basic Meta Tags</h4>
        {basicTags.map((tag, index) => (
          <div key={index} className="mb-1">
            <span className="font-medium">{tag.name}:</span> {tag.content}
          </div>
        ))}
      </div>

      {/* Open Graph Tags */}
      {openGraphTags.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-purple-600">Open Graph</h4>
          {openGraphTags.map((tag, index) => (
            <div key={index} className="mb-1">
              <span className="font-medium">{tag.property}:</span> {tag.content}
            </div>
          ))}
        </div>
      )}

      {/* Twitter Tags */}
      {twitterTags.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-blue-400">Twitter Cards</h4>
          {twitterTags.map((tag, index) => (
            <div key={index} className="mb-1">
              <span className="font-medium">{tag.name}:</span> {tag.content}
            </div>
          ))}
        </div>
      )}

      {/* Structured Data */}
      {structuredData.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-orange-600">Structured Data</h4>
          {structuredData.map((data, index) => (
            <div key={index} className="mb-2">
              <span className="font-medium">Type:</span> {data["@type"]}
              {data.name && (
                <div>
                  <span className="font-medium">Name:</span> {data.name}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
