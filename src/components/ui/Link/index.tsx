"use client";

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
    ? "font-normal text-purple-100 transition-colors"
    : `${buttonStyles} hover:bg-green-100`;

  return (
    <Link
      className={clsx(styles, {
        "hover:text-purple-200": isTextOnly,
        "text-sm": textSize === "small",
      })}
      {...(props as LinkProps)}
    >
      {props.children}
    </Link>
  );
}
