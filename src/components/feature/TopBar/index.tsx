"use client";

import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Menu, X } from "lucide-react";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import UserProfileBar from "@/components/feature/UserProfileBar";

export default function TopBar() {
  const pathname = usePathname();
  const breadcrumbs = pathname.substring(1, pathname.length);

  const { isOpen: isMobileMenuOpen, updateStatus: updateMobileMenuStatus } =
    useMobileMenuStatus();

  return (
    <aside className="flex min-h-14 items-center justify-between border-b-1 border-gray-200 py-2 pl-5 pr-3 text-sm dark:border-black-50 md:pl-7 md:pr-7">
      <p className="small-text capitalize">{breadcrumbs}</p>
      <div className="hidden md:block">
        <UserProfileBar withHover />
      </div>
      <div className="md:hidden">
        <Button
          color="primary"
          variant="light"
          isIconOnly
          aria-label="menu mobile"
          onClick={updateMobileMenuStatus}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </aside>
  );
}
