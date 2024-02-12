import Button from "@/components/ui/Button";
import { MoonIcon } from "lucide-react";

export default function ThemeButton() {
  return (
    <Button color="primary" aria-label="dark theme">
      <MoonIcon />
      <span>Dark theme</span>
    </Button>
  );
}
