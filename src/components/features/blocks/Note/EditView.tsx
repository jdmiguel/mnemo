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
    <>
      <div className="col-span-24 sm:col-span-10 lg:col-span-6">
        <Input
          type="text"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
          isLowHeight
        />
      </div>
      <div className="col-span-24 sm:col-span-7 lg:col-span-5">
        <PriorityMenu
          defaultPriority={selectedPriority}
          onClickPriority={(key) => setSelectedPriority(key as Priority)}
        />
      </div>
      <div className="col-span-24">
        <TextArea
          value={selectedContent}
          onChange={(e) => setSelectedContent(e.target.value)}
        />
      </div>
      <div className="col-span-24 flex gap-2 justify-self-end sm:col-span-5 sm:justify-self-start lg:col-span-12">
        <SaveButton onClick={onClickSave} />
        <CancelButton onClick={onCancel} />
      </div>
    </>
  );
}
