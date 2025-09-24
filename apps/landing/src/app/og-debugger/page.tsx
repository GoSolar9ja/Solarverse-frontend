"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function OGDebuggerPage() {
  const [selectedUrl, setSelectedUrl] = useState("http://localhost:3000");

  const testUrls = [
    {
      name: "Homepage",
      url: "http://localhost:3000",
      title: "GoSolar9ja - Nigeria&apos;s Leading Solar Installation Platform",
    },
    {
      name: "About",
      url: "http://localhost:3000/about",
      title: "About GoSolar9ja - Powering Nigeria&apos;s Solar Revolution",
    },
    {
      name: "Installer",
      url: "http://localhost:3000/installer",
      title: "Join GoSolar9ja as a Solar Installer - Grow Your Business",
    },
    {
      name: "Contact",
      url: "http://localhost:3000/contact-us",
      title: "Contact GoSolar9ja - Get Solar Energy Solutions",
    },
    {
      name: "FAQ",
      url: "http://localhost:3000/faq",
      title: "Solar Energy FAQs - GoSolar9ja Help Center",
    },
    {
      name: "Blog",
      url: "http://localhost:3000/blog",
      title: "Solar Energy Blog - Tips, News & Insights | GoSolar9ja",
    },
  ];

  const currentPage =
    testUrls.find((page) => page.url === selectedUrl) || testUrls[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          🔍 Open Graph Debugger
        </h1>

        <div className="space-y-6">
          {/* URL Selector */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Select Page to Preview
            </h2>
            <div className="grid grid-cols-2 md:!grid-cols-3 gap-3">
              {testUrls.map((testUrl) => (
                <button
                  key={testUrl.name}
                  onClick={() => setSelectedUrl(testUrl.url)}
                  className={`px-4 py-2 text-sm rounded-lg text-left transition-colors ${
                    selectedUrl === testUrl.url
                      ? "bg-blue-100 border-blue-300 text-blue-800"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {testUrl.name}
                </button>
              ))}
            </div>
          </div>

          {/* Generated OG Image Preview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Generated OG Image Preview
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Dynamic OG image for: <strong>{currentPage.name}</strong>
              </p>
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src={`/api/og?title=${encodeURIComponent(
                    currentPage.title
                  )}&description=${encodeURIComponent(
                    currentPage.title.split("-")[1]?.trim() ||
                      "Solar Energy Solutions"
                  )}`}
                  alt={`OG Image for ${currentPage.name}`}
                  width={800}
                  height={420}
                  className="w-full max-w-2xl"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-sm break-all">
                  {`/api/og?title=${encodeURIComponent(
                    currentPage.title
                  )}&description=${encodeURIComponent(
                    currentPage.title.split("-")[1]?.trim() ||
                      "Solar Energy Solutions"
                  )}`}
                </code>
              </div>
            </div>
          </div>

          {/* Social Media Preview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Social Media Preview</h2>
            <div className="grid md:!grid-cols-2 gap-6">
              {/* Facebook/LinkedIn Style */}
              <div>
                <h3 className="font-medium mb-3 text-blue-600">
                  Facebook / LinkedIn
                </h3>
                <div className="border rounded-lg overflow-hidden max-w-md">
                  <Image
                    src={`/api/og?title=${encodeURIComponent(
                      currentPage.title
                    )}&description=Solar Energy Solutions`}
                    alt="OG Image"
                    width={400}
                    height={210}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">gosolar9ja.com</p>
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {currentPage.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Nigeria&apos;s trusted platform to connect homeowners with
                      certified solar installers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Twitter Style */}
              <div>
                <h3 className="font-medium mb-3 text-sky-500">Twitter / X</h3>
                <div className="border rounded-2xl overflow-hidden max-w-md">
                  <Image
                    src={`/api/og?title=${encodeURIComponent(
                      currentPage.title
                    )}&description=Solar Energy Solutions`}
                    alt="OG Image"
                    width={400}
                    height={210}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-gray-900 mb-1 text-sm line-clamp-2">
                      {currentPage.title}
                    </h4>
                    <p className="text-xs text-gray-500">gosolar9ja.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Metadata Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Current Page SEO Data
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {currentPage.title}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  URL
                </label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {currentPage.url}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  OG Image URL
                </label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded break-all">
                  {`${currentPage.url}/api/og?title=${encodeURIComponent(
                    currentPage.title
                  )}`}
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">
              🛠️ How to Test
            </h2>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                1. <strong>Social Media:</strong> Copy any page URL and paste it
                into Facebook, Twitter, or LinkedIn to see the preview.
              </p>
              <p>
                2. <strong>Facebook Debugger:</strong> Use{" "}
                <a
                  href="https://developers.facebook.com/tools/debug/"
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  Facebook&apos;s Sharing Debugger
                </a>
              </p>
              <p>
                3. <strong>Twitter Validator:</strong> Use{" "}
                <a
                  href="https://cards-dev.twitter.com/validator"
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  Twitter Card Validator
                </a>
              </p>
              <p>
                4. <strong>LinkedIn Inspector:</strong> Use{" "}
                <a
                  href="https://www.linkedin.com/post-inspector/"
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  LinkedIn Post Inspector
                </a>
              </p>
            </div>
          </div>

          {/* No CORS Issues Note */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="text-green-600 mr-3">✅</div>
              <div>
                <h3 className="font-medium text-green-900">
                  CORS Issue Resolved!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  This local debugger works without external API calls,
                  eliminating CORS issues. Your dynamic OG images are generated
                  server-side at <code>/api/og</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
