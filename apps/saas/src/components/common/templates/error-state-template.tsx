import { ReactNode } from "react";
import { Typography } from "@solarverse/ui";
import { Button } from "@solarverse/ui";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ErrorStateTemplateProps {
  title?: string;
  message?: string | ReactNode;
  onRetry?: () => void;
  children?: ReactNode;
}

export default function ErrorStateTemplate({
  title = "Something went wrong",
  message = "We're having trouble loading this content. Please try again.",
  children,
}: ErrorStateTemplateProps) {
  // Convert message to string for the Alert component
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-secondary/50 flex flex-col items-center justify-center p-6 text-center space-y-5">
      <div className="bg-red-500 size-14  rounded-full flex">
        <X size={40} fill="red" stroke="white" className="m-auto" />
      </div>

      {!children && (
        <>
          <Typography.h5>{title}</Typography.h5>
          <Typography.body1>{message}</Typography.body1>
        </>
      )}

      {children && <div className="mt-8">{children}</div>}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center max-w-[400px]">
        <Button.SecondarySolid fullWidth onClick={() => navigate(-1)}>
          Go Back
        </Button.SecondarySolid>
        <Button.PrimarySolid fullWidth onClick={() => window.location.reload()}>
          Refresh Page
        </Button.PrimarySolid>
      </div>

      {/* Children Content */}
    </div>
  );
}
