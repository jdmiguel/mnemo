import { forwardRef } from "react";
import type { TextAreaProps } from "@nextui-org/input";
import { Textarea as DefaultTextArea } from "@nextui-org/input";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <DefaultTextArea
        {...props}
        ref={ref}
        radius="sm"
        classNames={{
          base: "!bg-transparent rounded-lg",
          input: [
            "!text-black-50 dark:text-gray-100",
            "placeholder:text-gray-500 dark:placeholder:text-gray-300",
            "min-h-16",
          ],
          inputWrapper: [
            "!bg-gray-100 dark:bg-black-100",
            "hover:!bg-opacity-75",
          ],
          errorMessage: "text-red-100 font-bold text-sm",
        }}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
