import { IMAGE_URLS } from "@/assets/images";
import { Button } from "@solar-verse/ui";
import { CenterLayout } from "@solar-verse/ui";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function PoorElectricitySection() {
  return (
    <section className="md:!py-20 py-10">
      <DefaultLayout>
        <div className="text-center max-w-[551px] mx-auto">
          <Typography.h2 weight="semibold">
            Goodbye To Poor Electricity
          </Typography.h2>
          <Typography.h6 className="mt-3">
            Say Goodbye to Power Outages Switch to 24/7 Solar Power for Your
            Home or Business
          </Typography.h6>
        </div>

        <div className="md:!mt-16 mt-10 flex justify-between items-center gap-10 flex-col lg:!flex-row max-w-[1250px] mx-auto">
          <div className="lg:!max-w-[506px] max-w-[700px] w-full lg:!flex-1 lg:!h-[423px] h-[350px] bg-gradient-to-b pr-2 overflow-hidden from-0% to-100% from-secondary-200 to-secondary-100 rounded-[100px] rounded-bl-none flex-shrink-0">
            <Image
              src={IMAGE_URLS.poorElectricityImg}
              containerClassName="rounded-tr-[100px] rounded-br-[100px] overflow-hidden"
              alt="hero"
            />
          </div>

          <div className="max-w-[611px] flex-1">
            <Typography.h4 className="text-[#11121499]">
              Tired of unreliable power? With Solar Verse, you can power your
              home or commercial property with clean, affordable solar energy
              and enjoy round-the-clock electricity without the noise, smoke, or
              expense of a generator.{" "}
            </Typography.h4>

            <CenterLayout className="flex sm:!gap-8 gap-4 mt-10  mx-auto">
              <Button.PrimarySolid className="flex-1">
                Find Installers
              </Button.PrimarySolid>
              <Button.SecondarySolid className="flex-1">
                Join as Installer
              </Button.SecondarySolid>
            </CenterLayout>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
