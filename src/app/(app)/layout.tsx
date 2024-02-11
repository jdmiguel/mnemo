import { Providers } from "./Providers";
import MenuLayout from "@/components/layouts/MenuLayout";
import MobileMenuLayout from "@/components/layouts/MobileMenuLayout";
import AppHeader from "@/components/features/headers/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen overflow-hidden">
        <MenuLayout />
        <MobileMenuLayout />
        <div className="flex flex-1 flex-col md:ml-16">
          <AppHeader />
          <main className="overflow-scroll p-6 md:p-11">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
