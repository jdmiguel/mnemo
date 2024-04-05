import { type ReactNode, createContext, useContext } from "react";
import useFormBlock, {
  initialBlockFormState,
  type BlockFormAction,
} from "@/hooks/useBlockForm";
import { BlockDetails } from "@/types";

const EditableBlockContext = createContext({
  state: initialBlockFormState,
  dispatch: (_: BlockFormAction) => {},
});

const EditableBlockContextProvider = ({
  details,
  children,
}: {
  details?: BlockDetails;
  children: ReactNode;
}) => {
  const { state, dispatch } = useFormBlock(details);

  return (
    <EditableBlockContext.Provider value={{ state, dispatch }}>
      {children}
    </EditableBlockContext.Provider>
  );
};

const useEditableBlock = () => useContext(EditableBlockContext);

export { EditableBlockContextProvider, useEditableBlock };

export default EditableBlockContext;
