import { ReactElement } from "react";

type PageHeaderHeaderProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderTopWrapper({
  children,
}: PageHeaderHeaderProps) {
  return <div className="row-start-1 row-end-2">{children}</div>;
}
