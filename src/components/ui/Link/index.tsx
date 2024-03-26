import { ReactNode, ReactElement, forwardRef } from "react";
import clsx from "clsx";
import DefaultLink, { type LinkProps as DefaultLinkProps } from "next/link";
import { type ButtonProps, useButton } from "@nextui-org/button";

type LinkSize = "small" | "normal";

type LinkProps = DefaultLinkProps &
  ButtonProps & {
    isTextOnly?: boolean;
    textSize?: LinkSize;
    className?: string;
    children: ReactNode | ReactElement;
  };

export default forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { isTextOnly = false, className = "", children, ...props },
  ref,
) {
  const { styles: buttonStyles } = useButton(props);

  const defaultStyles = isTextOnly ? "link-textOnly" : `${buttonStyles} link`;

  return (
    <DefaultLink
      {...(props as DefaultLinkProps)}
      ref={ref}
      className={clsx(defaultStyles, className, "font-medium")}
    >
      {children}
    </DefaultLink>
  );
});
