import { Providers } from "./Providers";
import MenuLayout from "@/components/layouts/MenuLayout";
import MobileMenuLayout from "@/components/layouts/MobileMenuLayout";
import AppHeader from "@/components/features/headers/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen">
        <MenuLayout />
        <MobileMenuLayout />
        <div className="flex flex-1 flex-col">
          <AppHeader />
          {children}
        </div>
      </div>
    </Providers>
  );
}
