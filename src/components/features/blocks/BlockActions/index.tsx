import SaveButton from "@/components/features/buttons/SaveButton";
import CancelButton from "@/components/features/buttons/CancelButton";

type BlockActionsProps = {
  onSave: () => void;
  onCancel: () => void;
};

export default function BlockActions({ onSave, onCancel }: BlockActionsProps) {
  return (
    <div className="col-span-24 row-start-4 flex gap-2 justify-self-end sm:row-start-3 sm:justify-self-start md:col-span-8 md:col-start-17 md:row-start-1 md:justify-self-end">
      <SaveButton onClick={onSave} />
      <CancelButton onClick={onCancel} />
    </div>
  );
}
