import { FoldVerticalIcon, UnfoldVerticalIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type ToggleAllButtonProps = {
  type: "expand" | "collapse";
  onClick: () => void;
};

export default function ToggleAllButton({
  type,
  onClick,
}: ToggleAllButtonProps) {
  const isExpandType = type === "expand";
  const Icon = isExpandType ? UnfoldVerticalIcon : FoldVerticalIcon;
  const text = `${isExpandType ? "Expand" : "Collapse"} all`;

  return (
    <Button
      color="default"
      radius="sm"
      startContent={<Icon size={17} />}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
