import { useEditableBlock } from "@/contexts/EditableBlockContext";
import NewBlock from "@/components/features/blocks/NewBlock";
import EditableNoteFields from "./EditableNoteFields";

type NewNoteViewProps = {
  onCancel: () => void;
};

export default function NewNoteView({ onCancel }: NewNoteViewProps) {
  const {
    state: { title, priority, content },
  } = useEditableBlock();

  const onSave = () => {
    // server action to save edited note
    console.log({ title, priority, content });
  };

  return (
    <NewBlock onSave={onSave} onCancel={onCancel}>
      <EditableNoteFields />
    </NewBlock>
  );
}
