import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";
import { ReactNode } from "react";

export default function AuthContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto flex flex-1 justify-center items-center bg-white">
      <div className="flex flex-col md:!flex-row w-full max-w-6xl h-[1004px] p-6 md:!p-10 gap-8 md:!gap-[93px]">
        {/* Left side - form */}
        <div className="flex flex-col w-full max-w-[320px] mx-auto items-center">
          <div className=" mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[250px] h-[90px] md:!h-[115] md:!max-w-[295px]"
            />
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            {children}
          </div>
        </div>
        <div className="hidden lg:block!  w-full max-w-[875px] h-[1000px]">
          <Image
            containerClassName="w-full h-[850px]"
            className="rounded-[20px]"
            src={IMAGE_PATHS.installerImg}
            alt="installer-image"
          />
        </div>
      </div>
    </div>
  );
}
