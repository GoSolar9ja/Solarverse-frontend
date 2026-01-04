import React, { useState } from "react";
import SectionLayout from "../common/layout/section-layout";
import { Button, ComponentVisibility, Typography } from "@solarverse/ui";
import BiscuitBgIllustration from "@/assets/illustrations/biscuit-bg-illustration";
import { IMAGE_URLS } from "@/assets/images";
import Image from "@/components/common/media/image";
import { cn } from "@solarverse/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Pin } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const bullets = [
  "Get matched with verified leads",
  "Build a credible online profile",
  "Earn faster with secure payments",
  "Grow your reputation and client base",
];

const steps = [
  {
    img: IMAGE_URLS.tellUsImg,
    title: "Tell Us about Your Home",
    description:
      "Submit a simple request:  location, energy needs, and property type.",
  },
  {
    img: IMAGE_URLS.compareQuotesImg,
    title: "Compare Quotes from Certified Installers",
    description:
      "Browse installer profiles, compare transparent bids, and check reviews.",
  },
  {
    img: IMAGE_URLS.bookYourInstallerImg,
    title: "Book Your Preferred Installer",
    description:
      "Choose a quote, schedule a date, and chat securely after payment.",
  },
  {
    img: IMAGE_URLS.trackYourProjectImg,
    title: "Track Your Project Online",
    description:
      "Monitor installation progress, milestones, and payment status from your dashboard.",
  },
  {
    img: IMAGE_URLS.celebrateEnergyIndependenceImg,
    title: "Celebrate Energy Independence",
    description: "Go solar, save on bills, and reduce your carbon footprint!",
  },
  {
    link: "https://solar-verse-saas.vercel.app/sign-up",
    img: IMAGE_URLS.rocketImg,
    title: "Start your Solarverse journey today",
    description: "",
  },
];

const tabs = [
  {
    item: Steps,
    tabIndex: 0,
    title: "Home / Business Owners",
  },
  {
    item: Bullets,
    tabIndex: 1,
    title: "Solar Installers",
  },
];

export default function HowGoSolarWorks() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            How Solarverse Works{" "}
          </Typography.h2>
          {/* <Typography.h6 className="text-[#11121499] mt-2">
            Steps that helps you navigate your way to good solar installation
            with affordable price bid
          </Typography.h6> */}
        </div>
      }
    >
      <div className="flex justify-between gap-4  md:mt-20 mt-10 relative z-20">
        {tabs.map((tab) => (
          <button
            key={tab.tabIndex}
            className={cn(
              " pb-2 hover:text-secondary/80 cursor-pointer relative",
              activeTab === tab.tabIndex
                ? "text-secondary"
                : "border-transparent "
            )}
            onClick={() => setActiveTab(tab.tabIndex)}
          >
            <Typography.h3
              className="!text-sm sm:!text-xl"
              inline
              weight={"medium"}
            >
              {tab.title}
            </Typography.h3>

            <span
              className={cn(
                "border-b-4 absolute bottom-0 border-secondary transition-all duration-700 left-0",
                activeTab === tab.tabIndex ? "w-full" : "w-0"
              )}
            />
          </button>
        ))}
      </div>
      <AnimatePresence key={activeTab}>
        {tabs[activeTab] && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].item()}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionLayout>
  );
}

function Steps() {
  const { push } = useRouter();

  return (
    <div className="grid grid-cols-1 justify-items-center xl:!grid-cols-3 sm:!grid-cols-2 gap-10 mt-20 text-white">
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "max-w-[376px] overflow-hidden hover:-translate-y-3 duration-500 rounded-2xl relative ",
            step.link && "cursor-pointer"
          )}
          onClick={step.link ? () => window.open(step.link) : undefined}
        >
          <BiscuitBgIllustration
            fill={step.link && "#FE8500"}
            className="absolute inset-0"
          />
          <div className="  relative z-10  h-full ">
            <div className="rounded-2xl px-6 pt-5 pb-10 h-full flex flex-col ">
              <div className="size-[51px] p-2 bg-white rounded-full ml-auto flex items-center justify-center text-2xl">
                <Image src={step.img} alt={step.title} />
              </div>

              <div className="mt-10 space-y-5">
                <Typography.h4 weight={"semibold"}>{step.title}</Typography.h4>

                <Typography.h5>{step.description}</Typography.h5>
              </div>
              <ComponentVisibility visible={!!step.link}>
                <Typography.body1 className="w-fit animate-pulse  ml-auto flex gap-2 items-center font-medium mt-auto">
                  Click here <ArrowRight />
                </Typography.body1>
              </ComponentVisibility>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Bullets() {
  const { push } = useRouter();
  return (
    <div className="flex justify-between items-center gap-10 flex-col lg:!flex-row  text-center lg:!text-start lg:!mt-20 mt-10">
      <div>
        <Typography.h4>Are you a certified solar installer?</Typography.h4>
        <Typography.h5 className="text-[#11121499]">
          Ready to power more homes and grow your business?
        </Typography.h5>

        <ul className="mt-10 space-y-5  w-fit mx-auto lg:!mx-0">
          {bullets.map((text) => (
            <li key={text} className="flex gap-4">
              <Pin className="rotate-45 text-primary" />
              <Typography.h5>{text}</Typography.h5>
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          <Button.SecondarySolid
            className="mt-10 max-w-[286px] mx-auto lg:!mx-0"
            onClick={() => push("/about")}
            fullWidth
          >
            Learn More
          </Button.SecondarySolid>
          <Button.PrimarySolid
            className="mt-10 max-w-[286px] mx-auto lg:!mx-0"
            onClick={() =>
              window.open(
                "https://solar-verse-saas.vercel.app/sign-up",
                "_blank"
              )
            }
            fullWidth
          >
            Join As Installer
          </Button.PrimarySolid>
        </div>
      </div>

      <div className="lg:!max-w-[648px] max-w-[700px] w-full lg:!flex-1 lg:!h-[496px] h-[350px] bg-gradient-to-b pl-2 overflow-hidden from-0% to-100% from-secondary-200 to-secondary-100 rounded-[100px]  flex-shrink-0 rounded-br-none">
        <Image
          src={IMAGE_URLS.installSolar}
          containerClassName="rounded-tl-[100px] rounded-bl-[100px] overflow-hidden"
          alt="hero"
        />
      </div>
    </div>
  );
}
