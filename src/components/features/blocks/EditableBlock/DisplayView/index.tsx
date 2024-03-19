"use client";

import { ReactElement, useState } from "react";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import DisplayViewDetails from "./DisplayViewDetails";
import ToggleArrowIcon from "./ToggleArrowIcon";
import { ToggleStatus } from "@/types";

type DisplayViewProps = {
  children?: ReactElement | ReactElement[];
};

export default function DisplayView({ children }: DisplayViewProps) {
  const { state, dispatch } = useEditableBlock();

  const [toggleStatus, setToggleStatus] = useState<ToggleStatus>("collapsed");

  return (
    <div
      className="editable-box box-padding"
      role="button"
      onClick={() =>
        setToggleStatus((prevStatus) =>
          prevStatus === "expanded" ? "collapsed" : "expanded",
        )
      }
    >
      <DisplayViewDetails
        {...state}
        onEdit={() => dispatch({ type: "SET_VIEW", view: "edit" })}
        onDelete={() => {}}
      />
      {toggleStatus === "expanded" && <div className="my-3">{children}</div>}
      <div className="flex justify-center">
        <ToggleArrowIcon status={toggleStatus} />
      </div>
    </div>
  );
}
