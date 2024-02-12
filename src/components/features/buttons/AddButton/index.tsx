import { PlusIcon } from "lucide-react";
import Button from "@/components/ui/Button";

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
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
