"use client";

import { type ReactNode, createContext, useReducer, useContext } from "react";
import { BlockDetailListItem, BlockDetails, Priority, View } from "@/types";

type Dispatch<T> = (action: T) => void;

export type EditableBlockState = {
  view: View;
  id: number;
  title: string;
  date: string;
  priority?: Priority;
  content: string | BlockDetailListItem[];
};

export type EditableBlockAction =
  | { type: "SET_VIEW"; view: View }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_PRIORITY"; priority: Priority }
  | { type: "SET_CONTENT"; content: string }
  | { type: "CLEAR_DETAILS" };

export const initialEditableBlockState: EditableBlockState = {
  view: "display",
  id: 0,
  date: "",
  title: "",
  priority: "low",
  content: "",
};

const editableBlockReducer = (
  state: EditableBlockState,
  action: EditableBlockAction,
) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        view: action.view,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.priority,
      };
    case "SET_CONTENT":
      return {
        ...state,
        content: action.content,
      };
    case "CLEAR_DETAILS":
      return initialEditableBlockState;
    default:
      return state;
  }
};

const EditableBlockContext = createContext({
  state: initialEditableBlockState,
  dispatch: (_: EditableBlockAction) => {},
});

const EditableBlockContextProvider = ({
  details,
  children,
}: {
  details: BlockDetails;
  children: ReactNode;
}) => {
  const initialState: EditableBlockState = {
    ...details,
    view: "display",
  };
  const [state, dispatch]: [EditableBlockState, Dispatch<EditableBlockAction>] =
    useReducer(editableBlockReducer, initialState);

  const contextValue = { state, dispatch };

  return (
    <EditableBlockContext.Provider value={contextValue}>
      {children}
    </EditableBlockContext.Provider>
  );
};

const useEditableBlock = () => useContext(EditableBlockContext);

export { EditableBlockContextProvider, useEditableBlock };

export default EditableBlockContext;
