"use client";

import { InteractiveBlock } from "@/types";
import DisplayView from "./DisplayView";
import EditView from "./EditView";
import useView from "@/hooks/useView";

type NoteProps = InteractiveBlock;

export default function Note({ title, priority, date, content }: NoteProps) {
  const { view, updateView } = useView();

  const viewSharedData = {
    title,
    priority,
    content,
  };

  const renderView = () => {
    if (view === "display") {
      return (
        <DisplayView
          {...viewSharedData}
          date={date}
          onEdit={() => updateView("edit")}
          onDelete={() => {}}
        />
      );
    }

    return (
      <EditView
        {...viewSharedData}
        onSave={() => updateView("display")}
        onCancel={() => updateView("display")}
      />
    );
  };

  return (
    <article className="rounded-sm border-1 border-gray-50 bg-gradient-to-b from-white-300 to-white-100 p-7">
      {renderView()}
    </article>
  );
}
