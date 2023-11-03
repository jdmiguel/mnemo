import { Button, type ButtonProps } from "@nextui-org/button";
import { clsx } from "clsx";

export type MnemoButtonVariant = "primary" | "secondary";

type MnemoButtonProps = ButtonProps & {
  children: string;
};

export default function MnemoButton(props: MnemoButtonProps) {
  return (
    <Button
      color={props.color ?? "primary"}
      className={clsx("hover:bg-primary-50", {
        "hover:bg-secondary-50": props.color === "secondary",
      })}
      {...props}
    >
      {props.children}
    </Button>
  );
}
