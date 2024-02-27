"use client";

import { useMemo } from "react";
import { Chip } from "@nextui-org/chip";
import { EditIcon, TrashIcon } from "lucide-react";
import { type Note } from "@/types/notes";
import ActionsMenu from "@/components/features/menus/ActionsMenu";
import { PRIORITY_COLOR } from "@/utils";

type NoteProps = Note;

export default function Note({ title, priority, date, text }: NoteProps) {
  const actions = useMemo(
    () => [
      {
        key: "edit",
        label: "Edit",
        icon: <EditIcon className="stroke-gray-500" size={18} />,
        onClick: () => {},
      },
      {
        key: "delete",
        label: "Delete",
        icon: <TrashIcon className="stroke-gray-500" size={18} />,
        onClick: () => {},
      },
    ],
    [],
  );

  return (
    <article className="rounded-sm border-1 border-gray-50 bg-gradient-to-b from-white-300 to-white-100 p-7">
      <header className="mb-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <h3 className="heading-3">{title}</h3>
            <Chip
              className="uppercase"
              color={PRIORITY_COLOR[priority]}
              radius="sm"
              size="sm"
            >
              {priority}
            </Chip>
          </div>
          <ActionsMenu actions={actions} />
        </div>
        <time className="text-detail">{date}</time>
      </header>
      <p className="text-medium">{text}</p>
    </article>
  );
}
