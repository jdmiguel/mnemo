import BlockActions from "@/components/features/blocks/BlockActions";

type NewBlockActionsProps = {
  onSave: () => void;
  onCancel: () => void;
};

export default function EditViewActions({
  onSave,
  onCancel,
}: NewBlockActionsProps) {
  return <BlockActions onSave={onSave} onCancel={onCancel} />;
}
