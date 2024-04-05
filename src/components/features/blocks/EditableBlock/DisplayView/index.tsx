import { ReactElement, useState } from "react";
import clsx from "clsx";
import DisplayViewDetails from "./DisplayViewDetails";
import ToggleArrowIcon from "./ToggleArrowIcon";
import { ToggleAction } from "@/types";

type DisplayViewProps = {
  children?: ReactElement | ReactElement[];
  onDelete: (_: number) => void;
};

export default function DisplayView({ children, onDelete }: DisplayViewProps) {
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
      <DisplayViewDetails onDelete={onDelete} />
      {toggleAction === "collapse" && <div className="mt-3">{children}</div>}
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
