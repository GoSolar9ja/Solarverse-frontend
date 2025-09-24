import { Star } from "lucide-react";
import React from "react";

export function RatingsDisplay({ count = 5 }: { count: number }) {
  return (
    <div className="flex  gap-2 ">
      {Array.from({ length: count }).map((item, index) => (
        <Star key={index} fill="#F8E83F" className="text-[#F8E83F]" />
      ))}
    </div>
  );
}
