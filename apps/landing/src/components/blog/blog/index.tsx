"use client";
import React from "react";
import ExploreSection from "./explore-section";
import AllBlogsSection from "./all-blogs-section";

export default function BlogTemplate() {
  return (
    <article>
      <ExploreSection />
      <AllBlogsSection />
    </article>
  );
}
