"use client";

import { useState } from "react";
import NotesPageHeader from "@/components/features/headers/NotesPageHeader";
import Note from "@/components/features/blocks/Note";
import NewNote from "@/components/features/blocks/Note/NewNote";
import { BlockDetails } from "@/types";

type NotesWrapperProps = {
  notes: BlockDetails[];
};

export default function NotesWrapper({ notes }: NotesWrapperProps) {
  const [isNewNoteDisplayed, setIsNewNoteDisplayed] = useState(false);

  return (
    <>
      <NotesPageHeader onAddNewNote={() => setIsNewNoteDisplayed(true)} />
      <div className="mt-7 flex flex-col gap-6">
        {isNewNoteDisplayed && (
          <NewNote onCancel={() => setIsNewNoteDisplayed(false)} />
        )}
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
    </>
  );
}
