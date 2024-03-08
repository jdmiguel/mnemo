import { useMemo, Key } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import ActionsMenu from "@/components/features/menus/ActionsMenu";
import InteractiveBlockInfo from "@/components/ui/InteractiveBlockInfo";
import { InteractiveBlock } from "@/types";

type InteractiveBlockHeaderProps = Omit<InteractiveBlock, "id" | "content"> & {
  onEdit: () => void;
  onDelete: () => void;
};

export default function InteractiveBlockHeader({
  title,
  priority,
  date,
  onEdit,
  onDelete,
}: InteractiveBlockHeaderProps) {
  const actions = useMemo(
    () => [
      {
        key: "edit",
        label: "Edit",
        icon: <EditIcon className="stroke-gray-500" size={18} />,
      },
      {
        key: "delete",
        label: "Delete",
        icon: <TrashIcon className="stroke-gray-500" size={18} />,
      },
    ],
    [],
  );

  const onClickAction = (key: Key) => {
    if (key === "edit") {
      onEdit();
      return;
    }
    onDelete();
  };

  return (
    <header className="mb-4 flex items-start justify-between">
      <InteractiveBlockInfo title={title} priority={priority} date={date} />
      <ActionsMenu actions={actions} onClickAction={onClickAction} />
    </header>
  );
}
