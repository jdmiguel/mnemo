import clsx from "clsx";
import Link from "@/components/ui/Link";
import { Chip } from "@nextui-org/chip";

type MenuItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
};

export default function MenuItem({ href, icon, text, active }: MenuItemProps) {
  return (
    <li className="group relative h-14 items-center justify-center py-2">
      <Link
        href={href}
        className={clsx(
          "flex !h-full !min-w-0 items-center justify-center gap-6 bg-transparent !px-unit-2 text-purple-100 hover:bg-white-200 hover:text-purple-200",
          {
            "pointer-events-none bg-white-200 !text-purple-200": active,
          },
        )}
      >
        {icon}
      </Link>
      <Chip
        color="primary"
        className={clsx(
          "pointer-events-none absolute left-16 top-3.5 origin-left scale-x-0 transition-transform ease-soft-spring",
          {
            "group-hover:scale-x-100": !active,
          },
        )}
      >
        {text}
      </Chip>
    </li>
  );
}
