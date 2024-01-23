import Menu from "@/components/feature/Menu";
import TopBar from "@/components/feature/TopBar";
import ContentWrapper from "./ContentWrapper";

export type AppLayoutProps = {
  section: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function AppLayout({ section, children }: AppLayoutProps) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-1 flex-col">
        <TopBar section={section} />
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </div>
  );
}
