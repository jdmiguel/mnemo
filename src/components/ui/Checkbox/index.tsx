import type { CheckboxProps } from "@nextui-org/checkbox";
import { Checkbox } from "@nextui-org/checkbox";

export default function MnemoCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      {...props}
      color="success"
      size={props.size}
      classNames={{
        label:
          "text-gray-300 dark:text-gray-300 font-normal hover:text-gray-200 dark:hover:text-gray-200",
      }}
    />
  );
}
