import { ReactElement } from "react";
import PageHeaderTopWrapper from "./PageHeaderTopWrapper";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderActions from "./PageHeaderActions";
import PageHeaderFilters from "./PageHeaderFilters";

type PageHeaderProps = {
  children?: ReactElement | ReactElement[];
};

function PageHeader({ children }: PageHeaderProps) {
  return <div className="rounded-sm bg-gray-50 p-6">{children}</div>;
}

PageHeader.TopWrapper = PageHeaderTopWrapper;
PageHeader.Title = PageHeaderTitle;
PageHeader.Actions = PageHeaderActions;
PageHeader.Filters = PageHeaderFilters;

export default PageHeader;
