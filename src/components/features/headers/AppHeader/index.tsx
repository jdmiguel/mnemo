"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import { Button } from "@nextui-org/button";
import UserMenu from "@/components/features/menus/UserMenu";
import LogoIcon from "@/components/ui/LogoIcon";

export default function AppHeader() {
  const pathname = usePathname();
  const breadcrumbs = pathname.substring(1, pathname.length);

  const { data: session } = useSession();

  const { updateStatus: updateMobileMenuStatus } = useMobileMenuStatus();

  return (
    <header className="bg-white-500 sticky flex min-h-14 w-full items-center justify-between border-b-1 border-gray-50 py-2 pl-5 pr-3 text-sm dark:border-black-50 lg:pl-7 lg:pr-5">
      <div className="flex items-center gap-4">
        <h1 className="w-8 lg:hidden">
          <LogoIcon />
        </h1>
        <p className="text-small capitalize">{breadcrumbs}</p>
      </div>
      <div className="flex items-center gap-2">
        <UserMenu
          name={session?.user?.name ?? ""}
          email={session?.user?.email ?? ""}
          imageSrc={session?.user?.image ?? ""}
        />
        <div className="lg:hidden">
          <Button
            color="primary"
            variant="light"
            isIconOnly
            aria-label="menu mobile"
            onClick={updateMobileMenuStatus}
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
