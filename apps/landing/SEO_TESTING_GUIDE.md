# SEO Testing Guide for SolarVerse

## CORS Error Resolution

The CORS error you encountered is common when testing localhost URLs with external tools. Here's how to handle it:

### Why This Happens

- External SEO testing tools expect live websites, not localhost
- CORS policies prevent external sites from accessing localhost

### Solutions Implemented

#### 1. Development CORS Headers ✅

Added development-only CORS headers in next.config.ts to allow external testing tools.

#### 2. Local SEO Inspector ✅

Added a floating SEO inspector that appears only in development mode.

#### 3. SEO Debug Page ✅

Created /seo-debug page to preview all SEO data locally.

## Local Testing Methods

### 1. SEO Inspector Widget

- Automatically appears in development mode (bottom-right corner)
- Shows real-time meta tags, Open Graph, Twitter Cards, and structured data
- No external dependencies required

### 2. SEO Debug Page

Visit http://localhost:3000/seo-debug to see:

- All page metadata
- SEO constants
- Structured data schemas
- Quick navigation links

### 3. Browser DevTools

Open DevTools → Elements → Head section
Look for meta tags and structured data

### 4. View Page Source

Right-click → View Page Source
Search for og:, twitter:, and application/ld+json

## Production Testing Tools

After deployment, use these tools:

- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

## Browser Extensions for Local Testing

1. SEO Meta in 1 Click (Chrome/Firefox)
2. MozBar (Chrome/Firefox)
3. SEOquake (Chrome/Firefox)
4. Web Developer (Chrome/Firefox)
