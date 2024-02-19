import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type TogglePasswordVisibilityButtonProps = {
  type: "show" | "hide";
  onClick: () => void;
};

export default function TogglePasswordVisibilityButton({
  type,
  onClick,
}: TogglePasswordVisibilityButtonProps) {
  const Icon = type === "show" ? EyeIcon : EyeOffIcon;

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
