import { ReactElement } from "react";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderActions from "./PageHeaderActions";
import PageHeaderFilters from "./PageHeaderFilters";

type PageHeaderProps = {
  children?: ReactElement | ReactElement[];
};

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <header className="grid grid-cols-6 gap-y-4 rounded-sm bg-white-300 p-6">
      {children}
    </header>
  );
}

PageHeader.Title = PageHeaderTitle;
PageHeader.Actions = PageHeaderActions;
PageHeader.Filters = PageHeaderFilters;
