import { cn } from "@/lib/utils";

const Image = (
  props: React.ComponentProps<"img"> & {
    containerClassName?: string;
    imageClassName?: string;
  }
) => {
  const { containerClassName, imageClassName, ...rest } = props;
  return (
    <div className={cn("w-full h-full relative ", containerClassName)}>
      <img
        className={cn("w-full h-full  object-cover", imageClassName)}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...rest}
      />
    </div>
  );
};

export { Image };
