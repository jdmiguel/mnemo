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
    <li
      className={clsx(
        "group relative z-50 h-14 items-center justify-center py-2",
        {
          "pointer-events-none relative before:absolute before:-left-0.5 before:top-0 before:h-full before:w-1 before:bg-purple-200":
            active,
        },
      )}
    >
      <Link
        href={href}
        className={clsx(
          "flex !h-full !min-w-0 items-center justify-center gap-6 bg-transparent text-gray-600 hover:text-black-50",
          { "text-black-100": active },
        )}
      >
        {icon}
      </Link>
      <Chip
        color="default"
        radius="sm"
        className={clsx(
          "pointer-events-none absolute left-14 top-3.5 z-10 origin-left scale-x-0 transition-transform ease-soft-spring",
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
