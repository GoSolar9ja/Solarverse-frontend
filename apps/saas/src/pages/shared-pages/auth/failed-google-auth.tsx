import ErrorStateTemplate from "@/components/common/templates/error-state-template";

export default function FailedGoogleAuth() {
  return (
    <ErrorStateTemplate
      title="Authentication Failed"
      message="We couldn't sign you in"
    />
  );
}
