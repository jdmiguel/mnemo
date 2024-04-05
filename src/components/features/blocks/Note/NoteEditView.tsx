import { useEditableBlock } from "@/contexts/EditableBlockContext";
import EditView from "@/components/features/blocks/EditableBlock/EditView";
import EditableNoteFields from "./EditableNoteFields";

export default function NoteEditView() {
  const {
    state: { title, priority, content },
  } = useEditableBlock();

  const onSave = () => {
    // server action to save edited note
  };

  return (
    <EditView onSave={onSave}>
      <EditableNoteFields withDefaultPriority />
    </EditView>
  );
}
