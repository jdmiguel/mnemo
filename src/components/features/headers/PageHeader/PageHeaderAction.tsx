import { ReactElement } from "react";

type PageHeaderActionProps = {
  children: ReactElement;
};

export default function PageHeaderAction({ children }: PageHeaderActionProps) {
  return <div className="col-span-12 flex justify-self-end">{children}</div>;
}
