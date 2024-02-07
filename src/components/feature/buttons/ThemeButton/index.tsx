import { Button, type ButtonProps } from "@nextui-org/button";
import { Sun } from "lucide-react";

type ThemeButtonProps = ButtonProps;

export default function ThemeButton({ color, variant }: ThemeButtonProps) {
  return (
    <Button
      color={color}
      variant={variant}
      aria-label="light theme"
      radius="sm"
    >
      <Sun />
      <span className="text-small">Light</span>
    </Button>
  );
}
