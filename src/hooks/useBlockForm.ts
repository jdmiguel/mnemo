import { useReducer } from "react";
import { BlockDetails, BlockDetailListItem, Priority, View } from "@/types";

type Dispatch<T> = (action: T) => void;

export type BlockFormState = {
  id: number;
  view: View;
  title: string;
  date: string;
  priority?: Priority;
  content: string | BlockDetailListItem[];
};

export type BlockFormAction =
  | { type: "SET_VIEW"; view: View }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_PRIORITY"; priority: Priority }
  | { type: "SET_CONTENT"; content: string }
  | { type: "CLEAR_DETAILS" };

export const initialBlockFormState: BlockFormState = {
  id: 0,
  view: "display",
  date: "",
  title: "",
  priority: "low",
  content: "",
};

const blockReducer = (state: BlockFormState, action: BlockFormAction) => {
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
      return initialBlockFormState;
    default:
      return state;
  }
};

export default function useBlockForm(details?: BlockDetails) {
  const initialState: BlockFormState = {
    ...(details ? details : initialBlockFormState),
    view: "display",
  };

  const [state, dispatch]: [BlockFormState, Dispatch<BlockFormAction>] =
    useReducer(blockReducer, initialState);

  return { state, dispatch };
}
