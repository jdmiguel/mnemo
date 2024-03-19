import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";
import { ToggleAction } from "@/types";

type ToggleArrowIconProps = {
  action: ToggleAction;
};

export default function ToggleArrowIcon({ action }: ToggleArrowIconProps) {
  const Icon = action === "expand" ? ArrowDownCircleIcon : ArrowUpCircleIcon;

  return <Icon className="stroke-gray-100" size={20} />;
}
