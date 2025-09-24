import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
import { CircleArrowOutUpRight } from "lucide-react";
import { Typography } from "@solar-verse/ui";
import { CenterLayout } from "@solar-verse/ui";
import Link from "next/link";

export default function BlogCard({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string | number;
}) {
  return (
    <Link
      href={`/blog/${id}`}
      className="bg-primary xl:!h-[400px] h-[350px] rounded-xl overflow-hidden text-white relative group "
    >
      <CenterLayout className="h-1/2 bg-black/20 absolute top-0 z-10  group-hover:opacity-100 opacity-0 left-0 w-full p-5 transition-all duration-700 ">
        <div className="bg-white p-3 rounded-full">
          <CircleArrowOutUpRight color="#F3910D" />
        </div>
      </CenterLayout>
      <Image
        src={IMAGE_URLS.blogImg}
        objectFit="contain"
        objectPosition="top"
        alt="home and business"
      />
      <div className="h-1/2 bg-primary absolute bottom-0 left-0 w-full p-5">
        <div className="flex items-center justify-between gap-2">
          <Typography.body2>12/05/2025</Typography.body2>
          <Typography.body2>09:30pm</Typography.body2>
        </div>

        <div>
          <Typography.h5 weight={"semibold"} className="my-3">
            {title}
          </Typography.h5>
          <Typography.body2>{description}</Typography.body2>
        </div>
      </div>
    </Link>
  );
}
