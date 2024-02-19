import { PlusIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type AddButtonProps = {
  itemText: string;
  onClick: () => void;
};

export default function AddButton({ itemText, onClick }: AddButtonProps) {
  const text = `Add ${itemText}`;

  return (
    <Button
      startContent={<PlusIcon size={17} />}
      color="primary"
      radius="sm"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
