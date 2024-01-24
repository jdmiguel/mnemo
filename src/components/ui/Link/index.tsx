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
    className?: string;
  };

export default function MnemoLink({
  isTextOnly = false,
  className = "",
  ...props
}: MnemoLinkProps) {
  const { styles: buttonStyles } = useButton(props);

  const defaultStyles = isTextOnly ? "linkTextOnly" : `${buttonStyles} link`;

  return (
    <Link
      className={clsx(defaultStyles, className, "font-medium")}
      {...(props as LinkProps)}
    >
      {props.children}
    </Link>
  );
}
