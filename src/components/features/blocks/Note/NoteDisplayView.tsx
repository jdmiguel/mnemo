import { useEditableBlock } from "@/contexts/EditableBlockContext";
import DisplayView from "@/components/features/blocks/EditableBlock/DisplayView";

export default function NoteDisplayView() {
  const {
    state: { content },
  } = useEditableBlock();

  const onDelete = (id: number) => {
    // server action to delete note by passing id
  };

  return (
    <DisplayView onDelete={onDelete}>
      <p className="text-medium">{content as string}</p>
    </DisplayView>
  );
}
