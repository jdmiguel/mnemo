import { ReactElement } from "react";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderAction from "./PageHeaderAction";
import PageHeaderFilters from "./PageHeaderFilters";

type PageHeaderProps = {
  children?: ReactElement | ReactElement[];
};

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <header className="box-grid box-padding bg-white-300">{children}</header>
  );
}

PageHeader.Title = PageHeaderTitle;
PageHeader.Action = PageHeaderAction;
PageHeader.Filters = PageHeaderFilters;
