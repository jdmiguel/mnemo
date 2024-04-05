import { ReactElement } from "react";
import EditViewActions from "./EditViewActions";

type EditViewProps = {
  children?: ReactElement | ReactElement[];
  onSave: () => void;
};

export default function EditView({ children, onSave }: EditViewProps) {
  return (
    <div className="editable-box box-grid box-padding">
      {children}
      <EditViewActions onSave={onSave} />
    </div>
  );
}
