import type { LinkProps } from "next/link";
import Link from "next/link";
import { clsx } from "clsx";

type MnemoLinkProps = LinkProps & {
  children: string;
  size?: "small" | "normal";
};

export default function MnemoLink(props: MnemoLinkProps) {
  return (
    <Link
      className={clsx(
        "ml-1 font-normal text-purple-100 transition-colors hover:text-purple-200",
        {
          "text-sm": props.size === "small",
        },
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
}
