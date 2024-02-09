import { type ButtonProps } from "@nextui-org/button";
import Button from "@/components/ui/Button";
import { SunIcon } from "lucide-react";

export default function ThemeButton({ color, variant }: ButtonProps) {
  return (
    <Button color={color} variant={variant} aria-label="light theme">
      <SunIcon />
      <span className="text-small">Light</span>
    </Button>
  );
}
