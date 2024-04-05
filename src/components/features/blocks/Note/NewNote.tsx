import { EditableBlockContextProvider } from "@/contexts/EditableBlockContext";
import NewNoteView from "./NewNoteView";

type NewNoteProps = {
  onCancel: () => void;
};

export default function NewNote({ onCancel }: NewNoteProps) {
  return (
    <EditableBlockContextProvider>
      <NewNoteView onCancel={onCancel} />
    </EditableBlockContextProvider>
  );
}
