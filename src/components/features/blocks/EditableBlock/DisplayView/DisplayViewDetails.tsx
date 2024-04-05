import { useMemo, Key } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import { Chip } from "@nextui-org/chip";
import ActionsMenu from "@/components/features/menus/ActionsMenu";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import { PRIORITY_COLOR } from "@/utils";

type DisplayViewDetailsProps = {
  onDelete: (id: number) => void;
};

export default function DisplayViewDetails({
  onDelete,
}: DisplayViewDetailsProps) {
  const actions = useMemo(
    () => [
      {
        key: "edit",
        label: "Edit",
        icon: <EditIcon className="stroke-gray-600" size={18} />,
      },
      {
        key: "delete",
        label: "Delete",
        icon: <TrashIcon className="stroke-gray-600" size={18} />,
      },
    ],
    [],
  );

  const {
    state: { id, title, priority, date },
    dispatch,
  } = useEditableBlock();

  const onEdit = () => dispatch({ type: "SET_VIEW", view: "edit" });

  const onClickAction = (key: Key) =>
    key === "edit" ? onEdit() : onDelete(id);

  return (
    <div className="col-span-24 flex w-full items-start justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h3 className="heading-3">{title}</h3>
          {priority && (
            <Chip
              className="uppercase"
              color={PRIORITY_COLOR[priority]}
              radius="sm"
              size="sm"
            >
              {priority}
            </Chip>
          )}
        </div>
        <time className="text-detail">{date}</time>
      </div>
      <ActionsMenu actions={actions} onClickAction={onClickAction} />
    </div>
  );
}
