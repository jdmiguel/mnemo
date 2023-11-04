import type { LinkProps } from "next/link";
import { type ButtonProps, useButton } from "@nextui-org/button";
import Link from "next/link";
import clsx from "clsx";

type MnemoLinkSize = "small" | "normal";

type MnemoLinkProps = LinkProps &
  ButtonProps & {
    isTextOnly?: boolean;
    textSize?: MnemoLinkSize;
  };

export default function MnemoLink({
  isTextOnly = false,
  textSize = "normal",
  ...props
}: MnemoLinkProps) {
  const { styles: buttonStyles } = useButton(props);

  const styles = isTextOnly
    ? "font-normal text-purple-100 transition-colors hover:text-purple-200"
    : buttonStyles;

  return (
    <Link
      className={clsx(styles, {
        "hover:bg-primary-50": props.color === "primary",
        "hover:bg-secondary-50": props.color === "secondary",
        "text-sm": textSize === "small",
      })}
      {...(props as LinkProps)}
    >
      {props.children}
    </Link>
  );
}
