import { ReactElement } from "react";
import PageHeaderTopWrapper from "./PageHeaderTopWrapper";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderActions from "./PageHeaderActions";
import PageHeaderFilters from "./PageHeaderFilters";

type PageHeaderProps = {
  children?: ReactElement | ReactElement[];
};

function PageHeader({ children }: PageHeaderProps) {
  return <div className="bg-white-300 rounded-sm p-6">{children}</div>;
}

PageHeader.TopWrapper = PageHeaderTopWrapper;
PageHeader.Title = PageHeaderTitle;
PageHeader.Actions = PageHeaderActions;
PageHeader.Filters = PageHeaderFilters;

export default PageHeader;
