import { forwardRef } from "react";
import type { InputProps } from "@nextui-org/input";
import { Input } from "@nextui-org/input";

type MnemoInputProps = InputProps & {
  withShortHeight?: boolean;
};

const MnemoInput = forwardRef<HTMLInputElement, MnemoInputProps>(
  (props, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        color="default"
        radius="sm"
        classNames={{
          label: "text-purple-100 dark:text-purple-100 font-bold text-sm",
          input: [
            "bg-transparent",
            "!text-black-50 dark:text-gray-100",
            "placeholder:text-gray-500 dark:placeholder:text-gray-300",
          ],
          inputWrapper: [
            "static",
            "bg-gray-100 dark:bg-black-100",
            "hover:!bg-opacity-75 hover:!bg-gray-100",
            "focus-within:bg-opacity-75 dark:focus-within:!bg-black-50",
            "data-[hover=true]:bg-gray-100 data-[hover=true]:dark:bg-black-100",
            "group-data-[focus=true]:bg-gray-100 group-data-[focus=true]:dark:bg-black-100",
            `${props.withShortHeight ? "h-5" : "h-14"}`,
          ],
          errorMessage: "text-red-100 font-bold text-sm",
        }}
      />
    );
  },
);

MnemoInput.displayName = "MnemoInput";

export default MnemoInput;
