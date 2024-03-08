import { SaveIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type SaveButtonProps = {
  onClick: () => void;
};

export default function saveButton({ onClick }: SaveButtonProps) {
  return (
    <Button
      startContent={<SaveIcon size={17} />}
      color="primary"
      radius="sm"
      onClick={onClick}
    >
      Save
    </Button>
  );
}
