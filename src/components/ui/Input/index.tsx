import type { InputProps } from "@nextui-org/input";
import { Input } from "@nextui-org/input";

export default function MnemoInput(props: InputProps) {
  return (
    <Input
      {...props}
      color="default"
      classNames={{
        label: "text-purple-100 dark:text-green-100 font-bold text-sm",
        input: [
          "bg-transparent",
          "text-black-100 dark:text-gray-100",
          "placeholder:text-gray-400 dark:placeholder:text-gray-300",
        ],
        inputWrapper: [
          "bg-gray-100 dark:bg-black-100",
          "hover:!bg-gray-100 dark:hover:!bg-black-50",
          "focus-within:!bg-gray-100 dark:focus-within:!bg-black-50",
        ],
      }}
    />
  );
}
