import { Providers } from "./Providers";
import Menu from "@/components/feature/Menu";
import MenuMobile from "@/components/feature/MobileMenu";
import TopBar from "@/components/feature/TopBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen">
        <Menu />
        <MenuMobile />
        <div className="flex flex-1 flex-col">
          <TopBar />
          {children}
        </div>
      </div>
    </Providers>
  );
}
