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
      radius="sm"
      startContent={<Icon size={17} />}
      color="default"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
