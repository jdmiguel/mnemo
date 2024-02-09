import { EyeIcon, EyeOffIcon } from "lucide-react";
import Button from "@/components/ui/Button";

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
      className="h-auto w-auto min-w-0 hover:!bg-transparent"
      isIconOnly
      variant="light"
      onClick={onClick}
    >
      {<Icon className="stroke-purple-100" size={15} />}
    </Button>
  );
}
