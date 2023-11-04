import { forwardRef } from "react";
import type { InputProps } from "@nextui-org/input";
import { Input } from "@nextui-org/input";

const MnemoInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      color="default"
      classNames={{
        label: "text-purple-100 dark:text-purple-100 font-bold text-sm",
        input: [
          "bg-transparent",
          "text-black-100 dark:text-gray-100",
          "placeholder:text-gray-400 dark:placeholder:text-gray-300",
        ],
        inputWrapper: [
          "bg-gray-100 dark:bg-black-100",
          "hover:!bg-gray-50 dark:hover:!bg-black-50",
          "focus-within:!bg-gray-50 dark:focus-within:!bg-black-50",
        ],
        errorMessage: "text-red-100 font-bold text-sm",
      }}
    />
  );
});

MnemoInput.displayName = "MnemoInput";

export default MnemoInput;
