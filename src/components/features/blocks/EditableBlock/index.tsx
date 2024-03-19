import { ReactElement } from "react";
import { useEditableBlock } from "@/contexts/EditableBlockContext";

type EditableBlockProps = {
  displayView: ReactElement;
  editView: ReactElement;
};

export default function EditableBlock({
  displayView,
  editView,
}: EditableBlockProps) {
  const {
    state: { view },
  } = useEditableBlock();

  const renderView = () => (view === "edit" ? editView : displayView);

  return <article>{renderView()}</article>;
}
