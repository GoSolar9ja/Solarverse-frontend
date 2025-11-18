import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { BaseAlert, BaseAlertDescription, BaseAlertTitle } from "./base-alert";

export interface IAlertProps {
  title: string;
  description: string;
}
const Alert = {
  success: ({ title, description }: IAlertProps) => (
    <BaseAlert variant={"success"}>
      <CheckCircle2Icon fill="green" />
      <BaseAlertTitle>{title}</BaseAlertTitle>
      <BaseAlertDescription>{description}</BaseAlertDescription>
    </BaseAlert>
  ),
  error: ({ title, description }: IAlertProps) => (
    <BaseAlert variant={"destructive"}>
      <AlertCircleIcon color="red" />
      <BaseAlertTitle>{title}</BaseAlertTitle>
      <BaseAlertDescription>{description}</BaseAlertDescription>
    </BaseAlert>
  ),
};

export { Alert };
