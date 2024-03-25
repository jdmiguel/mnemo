import { forwardRef } from "react";
import {
  type TextAreaProps,
  Textarea as DefaultTextArea,
} from "@nextui-org/input";

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(props, ref) {
    return (
      <DefaultTextArea
        {...props}
        ref={ref}
        radius="sm"
        classNames={{
          input: [
            "bg-transparent",
            "!text-black-50 dark:text-gray-100",
            "placeholder:text-gray-600 dark:placeholder:text-gray-400",
            "min-h-16",
          ],
          inputWrapper: [
            "bg-gray-200 dark:bg-black-100",
            "hover:opacity-75",
            "transition-opacity",
            "data-[hover=true]:bg-gray-200 data-[hover=true]:dark:bg-black-100",
            "group-data-[focus=true]:bg-gray-100 group-data-[focus=true]:dark:bg-black-100",
          ],
          errorMessage: "text-red-100 font-bold text-sm",
        }}
      />
    );
  },
);
