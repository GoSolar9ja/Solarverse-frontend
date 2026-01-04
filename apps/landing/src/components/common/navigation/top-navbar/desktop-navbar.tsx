"use client";
import { IMAGE_URLS } from "@/assets/images";
import { Button } from "@solarverse/ui";
import { DefaultLayout } from "@solarverse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solarverse/ui";
import { navLinks } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNavBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div>
      <DefaultLayout>
        <div className="flex items-center justify-between py-4">
          <Link href={"/"}>
            <Image
              src={IMAGE_URLS.logo}
              objectFit="contain"
              containerClassName="h-[60px] w-[150px] scale-100"
              alt="logo"
            />
          </Link>

          <div className="flex items-center gap-14 ml-auto ">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Typography.h5
                      variant={isActive(link.href) ? "primary" : "fadedDark"}
                      weight={isActive(link.href) ? "medium" : undefined}
                    >
                      {link.label}
                    </Typography.h5>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Button.PrimaryOutline
                rounded={"full"}
                onClick={() =>
                  window.open("https://solar-verse-saas.vercel.app/", "_blank")
                }
              >
                Sign in
              </Button.PrimaryOutline>
              <Button.SecondarySolid rounded={"full"}>
                Get Quote
              </Button.SecondarySolid>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default DesktopNavBar;
