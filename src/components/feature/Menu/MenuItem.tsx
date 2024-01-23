import clsx from "clsx";
import Link from "@/components/ui/Link";

type MenuLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
};

export default function MenuItem({ href, icon, text, active }: MenuLinkProps) {
  return (
    <li className="h-14 py-2">
      <Link
        href={href}
        className={clsx(
          "flex !h-full !min-w-0 items-center justify-center bg-transparent !px-unit-2 text-purple-100 hover:bg-white-200 hover:text-purple-200",
          {
            "pointer-events-none bg-white-200 !text-purple-200": active,
          },
        )}
      >
        {icon}
      </Link>
    </li>
  );
}
