import NextImage from "next/image";
import { cn } from "@solarverse/utils";

const Image = (
  props: React.ComponentProps<typeof NextImage> & {
    containerClassName?: string;
    imageClassName?: string;
  }
) => {
  const {
    containerClassName,
    imageClassName,
    objectFit = "cover",
    fill = true,
    ...rest
  } = props;
  return (
    <div
      className={cn(
        "w-full h-full relative overflow-hidden",
        containerClassName
      )}
    >
      <NextImage
        className={cn("w-full h-full  object-cover", imageClassName)}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        objectFit={objectFit}
        fill={fill}
        {...rest}
      />
    </div>
  );
};

export default Image;
