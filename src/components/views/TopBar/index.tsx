import { Button } from "@nextui-org/button";
import { Sun, UserCircle2 } from "lucide-react";

type TopBarProps = {
  section: string;
  user: string;
};

export default function TopBar({ section, user }: TopBarProps) {
  return (
    <aside className="flex items-center justify-between border-b-1 border-gray-50 px-7 py-3 text-sm dark:border-black-50">
      <p className="font-normal text-gray-400 dark:text-gray-200">{section}</p>
      <div className="flex gap-2">
        <Button
          color="primary"
          variant="light"
          isIconOnly
          aria-label="light theme"
        >
          <Sun />
        </Button>
        <Button color="primary" variant="light" startContent={<UserCircle2 />}>
          {user}
        </Button>
      </div>
    </aside>
  );
}
