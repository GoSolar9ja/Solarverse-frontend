import ActivityStateTemplate from "@/components/common/templates/activity-state-template";
import useQueryParams from "@/lib/hooks/use-query-params";
import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { useEffect } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ErrorStateTemplate from "@/components/common/templates/error-state-template";

export default function SuccessfulGoogleAuth() {
  const { getParam } = useQueryParams();
  const { login } = useAuthContext();
  const googleAuthToken = getParam("code");

  useEffect(() => {
    if (googleAuthToken) {
      const decodedToken: JwtPayload & { access: string } =
        jwtDecode(googleAuthToken);
      const token = decodedToken.access;
      login({ token });
    }
  }, [googleAuthToken]);

  if (!googleAuthToken)
    return (
      <ErrorStateTemplate
        title="Authentication Failed"
        message="We couldn't sign you in"
      />
    );

  return <ActivityStateTemplate children="Please wait while we log you in" />;
}
