"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";
import { useEditableBlock } from "@/contexts/EditableBlockContext";
import DisplayViewDetails from "./DisplayViewDetails";
import ToggleArrowIcon from "./ToggleArrowIcon";
import { ToggleAction } from "@/types";

type DisplayViewProps = {
  children?: ReactElement | ReactElement[];
};

export default function DisplayView({ children }: DisplayViewProps) {
  const { state, dispatch } = useEditableBlock();

  const [isHovered, setIsHovered] = useState(false);
  const [toggleAction, setToggleAction] = useState<ToggleAction>("collapse");

  return (
    <div
      className="editable-box box-padding"
      role="button"
      onClick={() =>
        setToggleAction((prevAction) =>
          prevAction === "expand" ? "collapse" : "expand",
        )
      }
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <DisplayViewDetails
        {...state}
        onEdit={() => dispatch({ type: "SET_VIEW", view: "edit" })}
        onDelete={() => {}}
      />
      {toggleAction === "collapse" && <div className="my-3">{children}</div>}
      <div
        className={clsx("flex justify-center opacity-0 transition-opacity", {
          "opacity-100": isHovered,
        })}
      >
        <ToggleArrowIcon action={toggleAction} />
      </div>
    </div>
  );
}
