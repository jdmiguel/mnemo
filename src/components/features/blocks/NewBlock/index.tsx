import { ReactElement } from "react";
import NewBlockActions from "./NewBlockActions";

type NewBlockProps = {
  children?: ReactElement | ReactElement[];
  onSave: () => void;
  onCancel: () => void;
};

export default function NewBlock({
  children,
  onSave,
  onCancel,
}: NewBlockProps) {
  return (
    <div className="box-bg box-grid box-padding">
      {children}
      <NewBlockActions onSave={onSave} onCancel={onCancel} />
    </div>
  );
}
