import { useTheme } from "next-themes";
import { ExternalToast, Toaster as Sonner, toast, ToasterProps } from "sonner";

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export const successToast = (
  message: string | React.ReactNode,
  data?: ExternalToast
) => {
  const { description, ...rest } = data || {};
  toast.success(message, {
    description,
    ...rest,
  });
};
export const errorToast = (
  message: string | React.ReactNode,
  data?: ExternalToast
) => {
  const { description, ...rest } = data || {};
  toast.error(message, {
    description,
    ...rest,
  });
};
export const warningToast = (
  message: string | React.ReactNode,
  data?: ExternalToast
) => {
  const { description, ...rest } = data || {};
  toast.warning(message, {
    description,
    ...rest,
  });
};
