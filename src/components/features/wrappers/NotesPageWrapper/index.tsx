import NotesPageHeader from "@/components/features/headers/NotesPageHeader";
import Note from "@/components/features/blocks/Note";
import { BlockDetails } from "@/types/block";

type NotesPageWrapperProps = {
  notes: BlockDetails[];
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
