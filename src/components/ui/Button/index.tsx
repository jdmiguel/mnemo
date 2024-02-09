import { ReactElement } from "react";
import { Button, type ButtonProps } from "@nextui-org/button";

export type MnemoButtonVariant = "primary" | "secondary";

type MnemoButtonProps = ButtonProps & {
  children: ReactElement | ReactElement[] | string;
};

export default function MnemoButton(props: MnemoButtonProps) {
  return (
    <Button
      color={props.color ?? "primary"}
      className="!font-medium"
      radius="sm"
      {...props}
    >
      {props.children}
    </Button>
  );
}
