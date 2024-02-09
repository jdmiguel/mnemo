import { ReactElement } from "react";

type PageHeaderActionsProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderActions({
  children,
}: PageHeaderActionsProps) {
  return <div className="flex gap-2">{children}</div>;
}
