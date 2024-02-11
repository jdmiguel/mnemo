import { ReactElement } from "react";

type PageHeaderActionsProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderActions({
  children,
}: PageHeaderActionsProps) {
  return <div className="flex flex-col gap-2 sm:flex-row">{children}</div>;
}
