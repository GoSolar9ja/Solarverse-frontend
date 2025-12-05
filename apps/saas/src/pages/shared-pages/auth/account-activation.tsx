import ActivityStateTemplate from "@/components/common/templates/activity-state-template";

import { useQueryParams } from "@solarverse/hooks";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import useActivateAccountMutation from "@/lib/services/api/auth/activate-account.api";
import { Button, Typography } from "@solarverse/ui";
import { Check, X } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountActivation() {
  const { getParam } = useQueryParams();

  const {
    mutateAsync: activateAccountMutation,
    isPending: isActivatingUser,
    isSuccess,
    isError,
  } = useActivateAccountMutation();
  const verificationToken = getParam("token") || "";

  useEffect(() => {
    if (verificationToken) {
      activateAccountMutation({ token: verificationToken });
    }
  }, [verificationToken]);

  if (!verificationToken)
    return (
      <ErrorMessage message="Oops, seems you must have clicked the wrong link.ensure you clicked the link sent to your email" />
    );

  if (isActivatingUser)
    return (
      <ActivityStateTemplate
        show={isActivatingUser}
        children="Please wait while we activate your account"
      />
    );

  if (!isActivatingUser && isSuccess) return <SuccessMessage />;
  if (!isActivatingUser && isError)
    return (
      <ErrorMessage message=" We were unable to verify your account, please try again." />
    );
}

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="text-center mt-10">
      <div className="bg-red-500 size-14  rounded-full flex mx-auto  mt-2">
        <X size={40} fill="red" stroke="white" className="m-auto" />
      </div>

      <Typography.h4 className="mt-5">User Verification failed.</Typography.h4>
      <Typography.body1 className="mt-5 ">{message}</Typography.body1>
    </div>
  );
};

const SuccessMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10">
      <div className="bg-success size-14  rounded-full flex mx-auto  mt-2">
        <Check size={40} color="white" stroke="white" className="m-auto" />
      </div>

      <Typography.h4 className="mt-5">Verification Successful</Typography.h4>
      <Typography.body1 className="mt-5 ">
        Your Account has been Verified and activated Successfully. You can now
        procced to login
      </Typography.body1>

      <Button.PrimarySolid
        onClick={() => navigate(ROUTE_KEYS.SIGN_IN)}
        className="mx-auto mt-10"
        fullWidth
      >
        Login
      </Button.PrimarySolid>
    </div>
  );
};
