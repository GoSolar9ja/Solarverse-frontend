"use client";
import { IMAGE_URLS } from "@/assets/images";
import { RatingsDisplay } from "@solarverse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solarverse/ui";
import { cn } from "@solarverse/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Review {
  name: string;
  description: string;
  rating: number;
}

export default function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];

  if (!reviews.length) return null;
  return (
    <div>
      <AnimatePresence key={currentReviewIndex}>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="bg-[#F3910D0D] h-[367px] rounded-[10px] p-10"
        >
          <Image
            src={IMAGE_URLS.quoteImg}
            containerClassName="size-[60px] lg:!size-[97px] ml-auto"
            alt="quote"
          />
          <Typography.h5 weight={"semibold"}>
            — {currentReview.name}
          </Typography.h5>
          <Typography.h5 className="my-8">
            {currentReview.description}
          </Typography.h5>

          <RatingsDisplay count={currentReview.rating} />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-5 justify-center mt-6">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={cn(
              "bg-[#1112141A] size-[24px] rounded-full",
              index === currentReviewIndex && "bg-primary"
            )}
          />
        ))}
      </div>
    </div>
  );
}
