import { ReactElement } from "react";

type PageHeaderFiltersProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderFilters({
  children,
}: PageHeaderFiltersProps) {
  return (
    <div className="col-span-24 flex flex-col gap-2 sm:flex-row ">
      {children}
    </div>
  );
}
