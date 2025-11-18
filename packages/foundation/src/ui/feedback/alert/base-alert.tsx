import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

const baseAlertVariants = cva(
  "relative w-full rounded-lg border px-3 py-1.5 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current mx-auto w-fit mt-3",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-error/10 border-error [&>svg]:text-current *:data-[slot=alert-description]:text-error/90 *:data-[slot=alert-title]:text-error",
        success:
          "text-success bg-success/10 border-success [&>svg]:text-current *:data-[slot=alert-description]:text-black *:data-[slot=alert-title]:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function BaseAlert({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof motion.div> &
  VariantProps<typeof baseAlertVariants>) {
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, []);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -10 }}
          data-slot="alert"
          className={cn(baseAlertVariants({ variant }), className)}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

function BaseAlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function BaseAlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { BaseAlert, BaseAlertTitle, BaseAlertDescription };
