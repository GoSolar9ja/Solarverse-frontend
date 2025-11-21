import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { BaseAlert, BaseAlertDescription, BaseAlertTitle } from "./base-alert";
import { ComponentVisibility } from "@/ui/visibility/component-visibility";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export interface IAlertProps {
  title?: string;
  description: string;
  vanish?: boolean;
  usePortal?: boolean;
}
const Alert = {
  success: (props: IAlertProps) =>
    handleAlert({ callback: successAlert, ...props }),

  error: (props: IAlertProps) =>
    handleAlert({ callback: errorAlert, ...props }),
};

const handleAlert = ({
  callback,
  usePortal,
  ...rest
}: {
  callback(arg: Omit<IAlertProps, "callback" | "usePortal">): ReactNode;
} & IAlertProps) => {
  return usePortal
    ? createPortal(
        callback({ ...rest }),
        document.getElementById("alert-portal") as HTMLElement
      )
    : callback({ ...rest });
};

const successAlert = ({ title, description, vanish }: IAlertProps) => {
  return (
    <BaseAlert variant={"success"} vanish={vanish}>
      <CheckCircle2Icon fill="green" />
      <ComponentVisibility visible={!!title}>
        <BaseAlertTitle>{title}</BaseAlertTitle>
      </ComponentVisibility>

      <ComponentVisibility visible={!!description}>
        <BaseAlertDescription>{description}</BaseAlertDescription>
      </ComponentVisibility>
    </BaseAlert>
  );
};

const errorAlert = ({ title, description, vanish }: IAlertProps) => {
  return (
    <BaseAlert variant={"destructive"} vanish={vanish}>
      <AlertCircleIcon color="red" />
      <BaseAlertTitle>{title}</BaseAlertTitle>
      <BaseAlertDescription>{description}</BaseAlertDescription>
    </BaseAlert>
  );
};

const AlertProvider = () => {
  useEffect(() => {
    if (!document.getElementById("alert-portal")) {
      const portal = document.createElement("div");
      portal.id = "alert-portal";
      const rootElement = document.getElementById("root");
      if (rootElement) {
        document.body.insertBefore(portal, rootElement);
      } else {
        document.body.appendChild(portal);
      }
    }
  }, []);

  return null;
};

export { Alert, AlertProvider };
