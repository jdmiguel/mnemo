import { useEditableBlock } from "@/contexts/EditableBlockContext";
import BlockActions from "@/components/features/blocks/BlockActions";

type EditViewActionsProps = {
  onSave: () => void;
};

export default function EditViewActions({ onSave }: EditViewActionsProps) {
  const { dispatch } = useEditableBlock();

  const onCancel = () => {
    dispatch({ type: "SET_VIEW", view: "display" });
  };

  return <BlockActions onSave={onSave} onCancel={onCancel} />;
}
