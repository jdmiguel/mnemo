"use client";

import { ReactElement, useState } from "react";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import DisplayViewDetails from "./DisplayViewDetails";
import ToggleArrowIcon from "./ToggleArrowIcon";
import { ToggleAction } from "@/types";

type DisplayViewProps = {
  children?: ReactElement | ReactElement[];
};

export default function DisplayView({ children }: DisplayViewProps) {
  const { state, dispatch } = useEditableBlock();

  const [toggleAction, setToggleAction] = useState<ToggleAction>("expand");

  return (
    <div
      className="editable-box box-padding"
      role="button"
      onClick={() =>
        setToggleAction((prevAction) =>
          prevAction === "expand" ? "collapse" : "expand",
        )
      }
    >
      <DisplayViewDetails
        {...state}
        onEdit={() => dispatch({ type: "SET_VIEW", view: "edit" })}
        onDelete={() => {}}
      />
      {toggleAction === "collapse" && <div className="my-3">{children}</div>}
      <div className="flex justify-center">
        <ToggleArrowIcon action={toggleAction} />
      </div>
    </div>
  );
}
