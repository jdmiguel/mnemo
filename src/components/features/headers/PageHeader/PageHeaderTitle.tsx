type PageHeaderTitle = {
  children: string;
};

export default function PageHeaderTitle({ children }: PageHeaderTitle) {
  return <h2 className="heading-2 col-span-12">{children}</h2>;
}
