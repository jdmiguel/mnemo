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
          "hover:!bg-opacity-75 hover:!bg-gray-100",
          "focus-within:bg-opacity-75 dark:focus-within:!bg-black-50",
          "data-[hover=true]:bg-gray-100 data-[hover=true]:dark:bg-black-100",
          "group-data-[focus=true]:bg-gray-100 group-data-[focus=true]:dark:bg-black-100",
        ],
        errorMessage: "text-red-100 font-bold text-sm",
      }}
    />
  );
});

MnemoInput.displayName = "MnemoInput";

export default MnemoInput;
