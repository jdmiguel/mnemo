import NotesPageHeader from "@/components/features/headers/NotesPageHeader";
import Note from "@/components/features/Note";
import { type Note as NoteType } from "@/types/notes";

type NotesPageWrapperProps = {
  notes: NoteType[];
};

export default function NotesPageWrapper({ notes }: NotesPageWrapperProps) {
  return (
    <>
      <NotesPageHeader />
      <div className="mt-7 flex flex-col gap-6">
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
    </>
  );
}
