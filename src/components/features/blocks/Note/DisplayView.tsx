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
      <div className="col-span-24">
        <InteractiveBlockHeader
          title={title}
          priority={priority}
          date={date}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
      <p className="col-span-24 text-medium">{content}</p>
    </>
  );
}
