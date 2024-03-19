import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";
import { ToggleStatus } from "@/types";

type ToggleArrowIconProps = {
  status: ToggleStatus;
};

export default function ToggleArrowIcon({ status }: ToggleArrowIconProps) {
  const Icon = status === "collapsed" ? ArrowDownCircleIcon : ArrowUpCircleIcon;

  return <Icon className="stroke-gray-100" size={20} />;
}
