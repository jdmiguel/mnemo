import { useEditableBlock } from "@/contexts/EditableBlockContext";
import DisplayView from "@/components/features/blocks/EditableBlock/DisplayView";

export default function NoteDisplayView() {
  const {
    state: { content },
  } = useEditableBlock();

  return (
    <DisplayView>
      <p className="text-medium">{content as string}</p>
    </DisplayView>
  );
}
