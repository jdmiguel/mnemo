import { Key } from "react";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { Priority } from "@/types";

type EditableNoteFieldsProps = {
  withDefaultPriority?: boolean;
};

export default function EditableNoteFields({
  withDefaultPriority = false,
}: EditableNoteFieldsProps) {
  const {
    state: { title, priority, content },
    dispatch,
  } = useEditableBlock();

  const priorityProps = {
    onClickPriority: (key: Key) =>
      dispatch({ type: "SET_PRIORITY", priority: key as Priority }),
    ...(withDefaultPriority && { defaultPriority: priority }),
  };

  return (
    <>
      <div className="col-span-24 sm:col-span-16 md:col-span-8">
        <Input
          type="text"
          value={title}
          placeholder="set title"
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", title: e.target.value })
          }
          isLowHeight
        />
      </div>
      <div className="col-span-24 sm:col-span-7 lg:col-span-5">
        <PriorityMenu {...priorityProps} />
      </div>
      <div className="col-span-24">
        <TextArea
          value={content as string}
          placeholder="set content"
          onChange={(e) =>
            dispatch({ type: "SET_CONTENT", content: e.target.value })
          }
        />
      </div>
    </>
  );
}
