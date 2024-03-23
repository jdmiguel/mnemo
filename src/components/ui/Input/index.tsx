import { forwardRef } from "react";
import type { InputProps as DefaultInputProps } from "@nextui-org/input";
import { Input as DefaultInput } from "@nextui-org/input";

type InputProps = DefaultInputProps & {
  isLowHeight?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <DefaultInput
      {...props}
      ref={ref}
      radius="sm"
      classNames={{
        base: "static",
        label: "text-purple-100 dark:text-purple-100 font-bold text-sm",
        input: [
          "bg-transparent",
          "!text-black-50 dark:text-gray-100",
          "placeholder:text-gray-500 dark:placeholder:text-gray-300",
        ],
        inputWrapper: [
          "static",
          "bg-gray-100 dark:bg-black-100",
          "hover:!bg-opacity-75",
          "data-[hover=true]:bg-gray-100 data-[hover=true]:dark:bg-black-100",
          "group-data-[focus=true]:bg-gray-100 group-data-[focus=true]:dark:bg-black-100",
          `${props.isLowHeight ? "h-5" : "h-14"}`,
        ],
        errorMessage: "text-red-100 font-bold text-sm",
      }}
    />
  );
});

Input.displayName = "Input";

export default Input;
