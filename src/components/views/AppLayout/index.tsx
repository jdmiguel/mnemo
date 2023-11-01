import Menu from "@/components/views/Menu";
import TopBar from "@/components/views/TopBar";

export type AppLayoutProps = {
  section: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function AppLayout({ section, children }: AppLayoutProps) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-1 flex-col">
        <TopBar section={section} user="jdmiguel" />
        {children}
      </div>
    </div>
  );
}
