import { Metadata } from "next";
import { SEO_CONSTANTS, PAGE_METADATA } from "@/lib/seo/constants";
import { generateMetadata, generateStructuredData } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "SEO Debug - Solarverse",
  description: "Debug and preview SEO metadata for Solarverse website",
  noIndex: true, // Don't index this debug page
});

export default function SEODebugPage() {
  const pages = [
    { name: "Home", path: "/", metadata: PAGE_METADATA.HOME },
    { name: "About", path: "/about", metadata: PAGE_METADATA.ABOUT },
    {
      name: "Installer",
      path: "/installer",
      metadata: PAGE_METADATA.INSTALLER,
    },
    { name: "Contact", path: "/contact-us", metadata: PAGE_METADATA.CONTACT },
    { name: "FAQ", path: "/faq", metadata: PAGE_METADATA.FAQ },
    { name: "Blog", path: "/blog", metadata: PAGE_METADATA.BLOG },
  ];

  const organizationSchema = generateStructuredData("Organization");
  const websiteSchema = generateStructuredData("WebSite");
  const localBusinessSchema = generateStructuredData("LocalBusiness");

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">SEO Debug Information</h1>

      {/* SEO Constants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">SEO Constants</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:!grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Company Information</h3>
              <p>
                <strong>Name:</strong> {SEO_CONSTANTS.COMPANY_NAME}
              </p>
              <p>
                <strong>URL:</strong> {SEO_CONSTANTS.COMPANY_URL}
              </p>
              <p>
                <strong>Phone:</strong> {SEO_CONSTANTS.PHONE}
              </p>
              <p>
                <strong>Email:</strong> {SEO_CONSTANTS.EMAIL}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Assets</h3>
              <p>
                <strong>Logo:</strong> {SEO_CONSTANTS.LOGO_URL}
              </p>
              <p>
                <strong>OG Image:</strong> {SEO_CONSTANTS.DEFAULT_OG_IMAGE}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Description</h3>
            <p className="text-sm">{SEO_CONSTANTS.COMPANY_DESCRIPTION}</p>
          </div>
        </div>
      </section>

      {/* Page Metadata */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Page Metadata</h2>
        <div className="space-y-6">
          {pages.map((page) => (
            <div key={page.path} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                {page.name} ({page.path})
              </h3>
              <div className="grid grid-cols-1 lg:!grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Title</h4>
                  <p className="text-sm mb-3">{page.metadata.title}</p>

                  <h4 className="font-semibold">Description</h4>
                  <p className="text-sm mb-3">{page.metadata.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Keywords</h4>
                  <div className="flex flex-wrap gap-1">
                    {page.metadata.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Data Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Structured Data Schemas</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Organization Schema</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
              {JSON.stringify(organizationSchema, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Website Schema</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
              {JSON.stringify(websiteSchema, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">
              Local Business Schema
            </h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
              {JSON.stringify(localBusinessSchema, null, 2)}
            </pre>
          </div>
        </div>
      </section>

      {/* Testing Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">SEO Testing Tools</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Local Testing Limitations</h3>
          <p className="text-sm mb-4">
            External SEO tools cannot access localhost URLs. For proper testing,
            deploy your site first.
          </p>

          <h3 className="font-semibold mb-3">
            Recommended Testing Tools (after deployment):
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Facebook Sharing Debugger:</strong>{" "}
              https://developers.facebook.com/tools/debug/
            </li>
            <li>
              <strong>Twitter Card Validator:</strong>{" "}
              https://cards-dev.twitter.com/validator
            </li>
            <li>
              <strong>LinkedIn Post Inspector:</strong>{" "}
              https://www.linkedin.com/post-inspector/
            </li>
            <li>
              <strong>Google Rich Results Test:</strong>{" "}
              https://search.google.com/test/rich-results
            </li>
            <li>
              <strong>Schema.org Validator:</strong>{" "}
              https://validator.schema.org/
            </li>
          </ul>

          <h3 className="font-semibold mb-3 mt-6">Local Testing Methods:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Check browser DevTools → Head section for meta tags</li>
            <li>Use browser extensions like SEO Meta in 1 Click</li>
            <li>Inspect page source to verify structured data</li>
            <li>Use this debug page to preview metadata</li>
          </ul>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:!grid-cols-3 gap-4">
          {pages.map((page) => (
            <a
              key={page.path}
              href={page.path}
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              {page.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
