import clsx from "clsx";
import Link from "@/components/ui/Link";
import { Tooltip } from "@nextui-org/tooltip";
import { ANIMATION } from "@/utils";

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
      <Tooltip
        content={text}
        color="primary"
        radius="sm"
        placement="right"
        offset={-3}
        showArrow
        motionProps={ANIMATION.scaleXInFromLeft}
      >
        <Link
          href={href}
          className={clsx(
            "flex !h-full !min-w-0 items-center justify-center gap-6 bg-transparent text-gray-600 hover:text-black-100",
            { "!text-black-100": active },
          )}
        >
          {icon}
        </Link>
      </Tooltip>
    </li>
  );
}
