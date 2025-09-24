import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbStructuredData } from "@/lib/seo/metadata";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({
  items,
  className = "",
}: BreadcrumbsProps) {
  const structuredData = generateBreadcrumbStructuredData(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav
        className={`flex items-center space-x-2 text-sm ${className}`}
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-600 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
