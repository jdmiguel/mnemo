import SaveButton from "@/components/features/buttons/SaveButton";
import CancelButton from "@/components/features/buttons/CancelButton";

type EditViewFooterProps = {
  onSave: () => void;
  onCancel: () => void;
};

export default function EditViewFooter({
  onSave,
  onCancel,
}: EditViewFooterProps) {
  return (
    <footer className="col-span-24 flex gap-2 justify-self-end sm:col-span-5 sm:justify-self-start lg:col-span-12">
      <SaveButton onClick={onSave} />
      <CancelButton onClick={onCancel} />
    </footer>
  );
}
