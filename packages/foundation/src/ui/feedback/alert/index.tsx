import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { BaseAlert, BaseAlertDescription, BaseAlertTitle } from "./base-alert";
import { ComponentVisibility } from "@/ui/visibility/component-visibility";

export interface IAlertProps {
  title?: string;
  description: string;
}
const Alert = {
  success: ({ title, description }: IAlertProps) => (
    <BaseAlert variant={"success"}>
      <CheckCircle2Icon fill="green" />
      <ComponentVisibility visible={!!title}>
        <BaseAlertTitle>{title}</BaseAlertTitle>
      </ComponentVisibility>

      <ComponentVisibility visible={!!description}>
        <BaseAlertDescription>{description}</BaseAlertDescription>
      </ComponentVisibility>
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
