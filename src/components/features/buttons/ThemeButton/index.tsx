import { Button } from "@nextui-org/button";
import { MoonIcon } from "lucide-react";

export default function ThemeButton() {
  return (
    <Button color="primary" radius="sm" aria-label="dark theme">
      <MoonIcon size={17} />
      <span>Dark theme</span>
    </Button>
  );
}
