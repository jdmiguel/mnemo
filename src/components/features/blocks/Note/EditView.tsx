import { useState } from "react";
import PriorityMenu from "@/components/features/menus/PriorityMenu";
import SaveButton from "@/components/features/buttons/SaveButton";
import CancelButton from "@/components/features/buttons/CancelButton";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { InteractiveBlock, Priority } from "@/types";

type EditViewProps = Omit<InteractiveBlock, "id" | "date"> & {
  onSave: ({ title, priority, content }: Partial<InteractiveBlock>) => void;
  onCancel: () => void;
};

export default function EditView({
  title,
  priority,
  content,
  onSave,
  onCancel,
}: EditViewProps) {
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [selectedPriority, setSelectedPriority] = useState(priority);
  const [selectedContent, setSelectedContent] = useState(content);

  const onClickSave = () => {
    onSave({
      title: selectedTitle,
      priority: selectedPriority,
      content: selectedContent,
    });
  };

  return (
    <div className="grid grid-cols-6 gap-y-4">
      <div className="col-start-1 col-end-7 flex gap-2 sm:col-end-4">
        <Input
          type="text"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
          className="sm:w-fit"
          placeholder="Search note by title"
          isLowHeight
        />
        <PriorityMenu
          defaultPriority={selectedPriority}
          onClickPriority={(key) => setSelectedPriority(key as Priority)}
        />
      </div>
      <div className="col-start-5 col-end-7 flex justify-end gap-2">
        <SaveButton onClick={onClickSave} />
        <CancelButton onClick={onCancel} />
      </div>
      <TextArea
        value={selectedContent}
        className="col-start-1 col-end-7 bg-gray-200"
        onChange={(e) => setSelectedContent(e.target.value)}
      />
    </div>
  );
}
