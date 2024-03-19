import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@nextui-org/button";
import { VisibilityAction } from "@/types";

type TogglePasswordVisibilityButtonProps = {
  action: VisibilityAction;
  onClick: () => void;
};

export default function TogglePasswordVisibilityButton({
  action,
  onClick,
}: TogglePasswordVisibilityButtonProps) {
  const Icon = action === "show" ? EyeIcon : EyeOffIcon;

  return (
    <Button
      variant="light"
      radius="sm"
      isIconOnly
      className="h-auto w-auto min-w-0 hover:!bg-transparent"
      onClick={onClick}
    >
      {<Icon className="stroke-purple-100" size={15} />}
    </Button>
  );
}
