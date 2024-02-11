import { ReactElement } from "react";

type PageHeaderFiltersProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderFilters({
  children,
}: PageHeaderFiltersProps) {
  return <div className="flex flex-col gap-2 md:flex-row">{children}</div>;
}
