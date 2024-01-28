import Menu from "@/components/feature/Menu";
import MenuMobile from "@/components/feature/MobileMenu";
import TopBar from "@/components/feature/TopBar";

export type AppLayoutProps = {
  section: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function AppLayout({ section, children }: AppLayoutProps) {
  return (
    <div className="flex h-screen">
      <Menu />
      <MenuMobile />
      <div className="flex flex-1 flex-col">
        <TopBar section={section} />
        {children}
      </div>
    </div>
  );
}
