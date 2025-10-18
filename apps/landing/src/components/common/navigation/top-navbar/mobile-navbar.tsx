"use client";

import HamburgerIcon from "@/assets/icons/hamburger-icon";
import { IMAGE_URLS } from "@/assets/images";
import { Button } from "@solar-verse/ui";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { navLinks } from "@/lib/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <DefaultLayout>
        <div className="flex items-center justify-between py-4">
          <Image
            src={IMAGE_URLS.logo}
            objectFit="contain"
            containerClassName="h-[50px] w-[120px] scale-120"
            alt="logo"
          />

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {createPortal(
          <>
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-80 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={toggleMenu}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close menu"
                  >
                    <HamburgerIcon />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Action Buttons */}
                <div className="space-y-4 pt-8 border-t border-gray-200">
                  <Button.PrimaryOutline
                    rounded="full"
                    className="w-full justify-center"
                    onClick={toggleMenu}
                  >
                    Sign in
                  </Button.PrimaryOutline>
                  <Button.SecondarySolid
                    rounded="full"
                    className="w-full justify-center"
                    onClick={toggleMenu}
                  >
                    Contact us
                  </Button.SecondarySolid>
                </div>
              </div>
            </div>
          </>,
          document.getElementById("portal") as Element
        )}
      </DefaultLayout>
    </div>
  );
};

export default MobileNavBar;
