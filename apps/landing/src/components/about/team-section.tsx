"use client";
import React from "react";
import { DefaultLayout } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";
import { Image } from "@solar-verse/ui";
import { IMAGE_URLS } from "@/assets/images";
import Link from "next/link";

// Team member data - in a real app this would come from a data source
const teamMembers = [
  {
    id: 1,
    name: "Josephine Ohaeri",
    role: "Co Founder",
    bio: "Tech innovator focused on making solar accessible to all communities.",
    imageUrl: IMAGE_URLS.coFounderOne, // Placeholder - replace with actual image paths
  },
  {
    id: 2,
    name: "Dr Ademola Adedasola",
    role: "Co Founder",
    bio: "Experience in renewable energy with a passion for sustainable solutions.",
    imageUrl: IMAGE_URLS.coFounderTwo, // Placeholder - replace with actual image paths
  },
];

// Social media icons component - using simple placeholders for now
// const SocialIcon = ({ platform }: { platform: string }) => (
//   <Link
//     href={"/"}
//     className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-white"
//   >
//     <span className="text-xs font-bold">{platform.charAt(0)}</span>
//   </Link>
// );

export default function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <DefaultLayout>
        <div className="text-center mb-16">
          <Typography.h2
            weight={"medium"}
            className="text-3xl md:text-4xl mb-4 text-foreground"
          >
            Meet Our Team
          </Typography.h2>
          <Typography.h5 className="text-lg max-w-2xl mx-auto text-foreground/80">
            Passionate professionals dedicated to revolutionizing solar energy
            adoption in Nigeria
          </Typography.h5>
        </div>

        <div className="flex md:!flex-row flex-col items-center justify-center gap-8   justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-faded-dark-200 max-w-[400px] w-full relative"
            >
              <div className="h-[500px] bg-gradient-to-r from-primary to-secondary relative">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6 absolute bottom-0 text-white">
                <Typography.h3 weight={"semibold"} className="text-xl   mb-1">
                  {member.name}
                </Typography.h3>
                <Typography.h5
                  weight={"semibold"}
                  className="text-primary-100  mb-3"
                >
                  {member.role}
                </Typography.h5>
                <Typography.body2 className="mb-4">
                  {member.bio}
                </Typography.body2>
                {/* <div className="flex gap-3">
                  <SocialIcon platform="LinkedIn" />
                  <SocialIcon platform="Twitter" />
                  <SocialIcon platform="Email" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* 
        <div className="mt-16 text-center">
          <Button.PrimarySolid className="px-8 py-3">
            Join Our Team
          </Button.PrimarySolid>
        </div> */}
      </DefaultLayout>
    </section>
  );
}
