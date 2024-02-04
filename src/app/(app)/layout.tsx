import { Providers } from "./Providers";
import MenuWrapper from "@/components/layouts/MenuWrapper";
import MobileMenuWrapper from "@/components/layouts/MobileMenuWrapper";
import TopBar from "@/components/feature/TopBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen">
        <MenuWrapper />
        <MobileMenuWrapper />
        <div className="flex flex-1 flex-col">
          <TopBar />
          {children}
        </div>
      </div>
    </Providers>
  );
}
