"use client";
import { IMAGE_URLS } from "@/assets/images";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import { Routes } from "@/lib/routes";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  const socialMediaLinks = [
    {
      id: "linkedin",
      src: IMAGE_URLS.linkedInLogo,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/solarverse-nigeria-154754384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      id: "gmail",
      src: IMAGE_URLS.gmailLogo,
      alt: "Gmail",
      link: "mailto:solarverse.ng@gmail.com",
    },
    {
      id: "x",
      src: IMAGE_URLS.xLogo,
      alt: "X (Twitter)",
      link: "https://x.com/SolarverseNg?t=9iAgZ1rqoObW96xzi480iw&s=08",
    },
    {
      id: "instagram",
      src: IMAGE_URLS.instagramLogo,
      alt: "Instagram",
      link: "https://www.instagram.com/solarverse.ng?igsh=MTQ5bTVhdHhyeGhuNA==",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      href: Routes.HOME,
    },
    {
      name: "About",
      href: Routes.ABOUT,
    },
    {
      name: "Blog",
      href: Routes.BLOG,
    },
    {
      name: "FAQ",
      href: Routes.FAQ,
    },
    {
      name: "Get Quote",
      href: "/",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      href: Routes.PRIVACY_POLICY,
    },
    {
      name: "Terms & Conditions",
      href: Routes.TERMS_CONDITIONS,
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer className="bg-black pt-20 mt-auto">
      <DefaultLayout>
        <div className="flex justify-between flex-wrap gap-y-10 sm:!gap-x-5 max-w-[1000px] text-white">
          <div className="sm:!w-auto w-full">
            <Image
              src={IMAGE_URLS.logo}
              objectFit="contain"
              containerClassName="h-[65px] scale-180 w-[192px]"
              alt="logo"
            />

            <div className="flex gap-5 mt-10">
              {socialMediaLinks.map((social) => (
                <Link href={social.link || ""} key={social.id} target="_blank">
                  <div
                    key={social.id}
                    className="bg-white size-[44px] p-3 rounded-full"
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      containerClassName=""
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <ul className="space-y-3 ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <Typography.h5>{link.name}</Typography.h5>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Typography.h4>Legal</Typography.h4>
            <ul className="space-y-3 mt-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <Typography.h5>{link.name}</Typography.h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography.h4>Contact Us</Typography.h4>

            <div className="space-y-3 mt-3">
              <div className="flex gap-3">
                <Phone />
                <Typography.h5>+2349054061660</Typography.h5>
              </div>
              <div className="flex gap-3">
                <Mail />
                <Typography.h5>solarverse@gmail.com</Typography.h5>
              </div>
              <div className="flex gap-3">
                <MapPin />
                <Typography.h5>
                  Address is 1 Current street, Agboyi estate, Alapere, Lagos
                </Typography.h5>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
      <div className="py-3 border-t text-center mt-10 text-white border-t-[#FFFFFF80]">
        <Typography.body1>
          © {year} Solarverse. All rights reserved.
        </Typography.body1>
      </div>
    </footer>
  );
}