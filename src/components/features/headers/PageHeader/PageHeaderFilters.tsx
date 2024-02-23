import { ReactElement } from "react";

type PageHeaderFiltersProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderFilters({
  children,
}: PageHeaderFiltersProps) {
  return (
    <div className="col-span-6 row-start-3 flex flex-col gap-2 sm:row-start-2 sm:flex-row">
      {children}
    </div>
  );
}
