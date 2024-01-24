import { Button, type ButtonProps } from "@nextui-org/button";

export type MnemoButtonVariant = "primary" | "secondary";

type MnemoButtonProps = ButtonProps & {
  children: string;
};

export default function MnemoButton(props: MnemoButtonProps) {
  return (
    <Button
      color={props.color ?? "primary"}
      className="!font-medium"
      {...props}
    >
      {props.children}
    </Button>
  );
}
