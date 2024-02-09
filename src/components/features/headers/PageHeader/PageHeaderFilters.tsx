import { ReactElement } from "react";

type PageHeaderFiltersProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderFilters({
  children,
}: PageHeaderFiltersProps) {
  return <div className="flex gap-2">{children}</div>;
}
