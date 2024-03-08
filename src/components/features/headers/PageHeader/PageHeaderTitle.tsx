type PageHeaderTitle = {
  children: string;
};

export default function PageHeaderTitle({ children }: PageHeaderTitle) {
  return (
    <h2 className="heading-2 col-start-1 col-end-7 sm:col-end-2">{children}</h2>
  );
}
