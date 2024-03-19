"use client";

import { EditableBlockContextProvider } from "@/contexts/EditableBlockContext";
import EditableBlock from "@/components/features/blocks/EditableBlock";
import NoteDisplayView from "@/components/features/blocks/Note/NoteDisplayView";
import NoteEditView from "@/components/features/blocks/Note/NoteEditView";
import { BlockDetails } from "@/types";

type NoteProps = BlockDetails;

export default function Note(props: NoteProps) {
  return (
    <EditableBlockContextProvider details={props}>
      <EditableBlock
        displayView={<NoteDisplayView />}
        editView={<NoteEditView />}
      />
    </EditableBlockContextProvider>
  );
}
