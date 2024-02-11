import { ReactElement } from "react";

type PageHeaderHeaderProps = {
  children: ReactElement | ReactElement[];
};

export default function PageHeaderTopWrapper({
  children,
}: PageHeaderHeaderProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-7 md:flex-row md:justify-between md:gap-0">
      {children}
    </div>
  );
}
