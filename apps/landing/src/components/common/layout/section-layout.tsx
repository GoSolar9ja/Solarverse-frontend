import React from "react";
import NetFrameIllustration from "@/assets/illustrations/net-frame-illustration";
<<<<<<< HEAD
import { DefaultLayout } from "@solar-verse/ui";
import { cn } from "@solar-verse/utils";
=======
import { DefaultLayout } from "@solarverse/ui";
import { cn } from "@solarverse/utils";
import React from "react";
>>>>>>> 9cae236af830779b991f43a8a57a7bd2c20378b8

const SectionLayout = ({
  header,
  children,
  sectionProps,
  defaultLayoutProps,
  headerProps,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  sectionProps?: React.ComponentProps<"section">;
  defaultLayoutProps?: React.ComponentProps<typeof DefaultLayout>;
  headerProps?: React.ComponentProps<"header">;
}) => {
  const { className: sectionClassName, ...restSectionProps } =
    sectionProps || {};
  const { className: defaultLayoutClassName, ...restDefaultLayoutProps } =
    defaultLayoutProps || {};
  const { className: headerClassName, ...restHeaderProps } = headerProps || {};
  return (
    <section
      className={cn("  overflow-hidden relative", sectionClassName)}
      {...restSectionProps}
    >
      <DefaultLayout
        className={cn("z-20 relative md:!py-20 py-10", defaultLayoutClassName)}
        {...restDefaultLayoutProps}
      >
        <header
          className={cn(
            "text-center max-w-[551px] relative mx-auto",
            headerClassName
          )}
          {...restHeaderProps}
        >
          <NetFrameIllustration className="absolute -top-[90%] left-0 w-full" />
          {header}
        </header>
        {children}
      </DefaultLayout>
    </section>
  );
};

export default SectionLayout;
