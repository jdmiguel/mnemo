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
      className={clsx(
        "group relative flex w-full flex-1 items-center border-t-1 p-8",
        {
          "bg-white-200": active,
        },
      )}
    >
      <Link
        href={href}
        className={clsx(
          "flex-1 !justify-start bg-transparent text-purple-100",
          {
            "pointer-events-none": active,
          },
        )}
      >
        {icon}
        <span
          className={clsx("ml-2 text-2xl", {
            "!text-purple-200": active,
          })}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
