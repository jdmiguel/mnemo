import { ReactElement } from "react";

type PageHeaderActionsProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderActions({
  children,
}: PageHeaderActionsProps) {
  return (
    <div className="col-span-24 flex gap-2 sm:col-span-12 sm:justify-self-end">
      {children}
    </div>
  );
}
