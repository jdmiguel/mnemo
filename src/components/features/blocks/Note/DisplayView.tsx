import InteractiveBlockHeader from "@/components/features/headers/InteractiveBlockHeader";
import { InteractiveBlock } from "@/types/interactiveBlock";

type DisplayViewProps = Omit<InteractiveBlock, "id"> & {
  onEdit: () => void;
  onDelete: () => void;
};

export default function DisplayView({
  title,
  priority,
  date,
  content,
  onEdit,
  onDelete,
}: DisplayViewProps) {
  return (
    <>
      <InteractiveBlockHeader
        title={title}
        priority={priority}
        date={date}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <p className="text-medium">{content}</p>
    </>
  );
}
