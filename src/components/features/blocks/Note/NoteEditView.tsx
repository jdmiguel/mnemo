import { useEditableBlock } from "@/contexts/EditableBlockContext";
import EditView from "@/components/features/blocks/EditableBlock/EditView";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { Priority } from "@/types";

export default function NoteEditView() {
  const {
    state: { title, priority, content },
    dispatch,
  } = useEditableBlock();

  return (
    <EditView onSave={() => {}}>
      <div className="col-span-24 sm:col-span-10 lg:col-span-6">
        <Input
          type="text"
          value={title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", title: e.target.value })
          }
          isLowHeight
        />
      </div>
      <div className="col-span-24 sm:col-span-7 lg:col-span-5">
        <PriorityMenu
          defaultPriority={priority}
          onClickPriority={(key) =>
            dispatch({ type: "SET_PRIORITY", priority: key as Priority })
          }
        />
      </div>
      <div className="col-span-24">
        <TextArea
          value={content as string}
          onChange={(e) =>
            dispatch({ type: "SET_CONTENT", content: e.target.value })
          }
        />
      </div>
    </EditView>
  );
}
