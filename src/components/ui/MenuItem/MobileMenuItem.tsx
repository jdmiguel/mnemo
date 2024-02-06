import clsx from "clsx";
import Link from "@/components/ui/Link";

type MobileMenuItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
};

export default function MobileMenuItem({
  href,
  icon,
  text,
  active,
}: MobileMenuItemProps) {
  return (
    <li
      className={clsx("group relative h-14 w-full items-center py-2", {
        "rounded-md bg-white-200": active,
      })}
    >
      <Link
        href={href}
        className={clsx(
          "flex !h-full !min-w-0 items-center justify-center gap-unit-md bg-transparent text-purple-100 ",
          {
            "pointer-events-none bg-white-200 !text-purple-200": active,
          },
        )}
      >
        {icon}
        <span
          className={clsx("text-xl text-purple-100", {
            "!text-purple-200": active,
          })}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
