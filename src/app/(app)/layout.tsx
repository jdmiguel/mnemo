import { Providers } from "./Providers";
import AppMenuLayout from "@/components/layouts/AppMenuLayout";
import AppMobileMenuLayout from "@/components/layouts/AppMobileMenuLayout";
import AppHeader from "@/components/features/headers/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen overflow-hidden">
        <AppMenuLayout />
        <AppMobileMenuLayout />
        <div className="flex flex-1 flex-col md:ml-16">
          <AppHeader />
          <main className="overflow-scroll p-6 md:p-11">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
