import { XIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type CancelButtonProps = {
  onClick: () => void;
};

export default function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <Button
      startContent={<XIcon size={17} />}
      color="default"
      radius="sm"
      onClick={onClick}
    >
      Cancel
    </Button>
  );
}
