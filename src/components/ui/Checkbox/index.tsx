import { Checkbox, type CheckboxProps } from "@nextui-org/checkbox";

export default function MnemoCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      {...props}
      color="success"
      size={props.size}
      classNames={{
        label:
          "text-gray-500 dark:text-gray-400 font-normal hover:text-gray-300 dark:hover:text-gray-300",
      }}
    />
  );
}
