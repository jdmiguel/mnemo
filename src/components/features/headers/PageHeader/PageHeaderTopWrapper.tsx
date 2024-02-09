import { ReactElement } from "react";

type PageHeaderHeaderProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderTopWrapper({
  children,
}: PageHeaderHeaderProps) {
  return <div className="mb-7 flex justify-between">{children}</div>;
}
