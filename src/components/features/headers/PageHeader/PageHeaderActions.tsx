import { ReactElement } from "react";

type PageHeaderActionsProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderActions({
  children,
}: PageHeaderActionsProps) {
  return (
    <div className="col-start-1 col-end-7 row-start-2 flex gap-2 sm:col-start-2 sm:row-start-1 sm:justify-self-end">
      {children}
    </div>
  );
}
