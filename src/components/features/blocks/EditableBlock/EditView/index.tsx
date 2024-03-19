import { ReactElement } from "react";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import EditViewFooter from "./EditViewFooter";

type EditViewProps = {
  onSave: () => void;
  children?: ReactElement | ReactElement[];
};

export default function EditView({ children, onSave }: EditViewProps) {
  const { dispatch } = useEditableBlock();

  return (
    <div className="editable-box box-grid box-padding">
      {children}
      <EditViewFooter
        onSave={onSave}
        onCancel={() => dispatch({ type: "SET_VIEW", view: "display" })}
      />
    </div>
  );
}
