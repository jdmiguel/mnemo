"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import AppMenu from "@/components/features/menus/AppMenu";
import { Button } from "@nextui-org/button";

export default function AppMobileMenuLayout() {
  const { isOpen, updateStatus } = useMobileMenuStatus();

  return (
    <aside
      className={clsx(
        "absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center gap-12 bg-gray-100 dark:bg-black-100 md:hidden",
        {
          invisible: !isOpen,
        },
      )}
    >
      <div className="flex w-full justify-end px-3 py-2">
        <Button
          color="primary"
          variant="light"
          radius="sm"
          isIconOnly
          aria-label="menu mobile"
          onClick={updateStatus}
        >
          <X />
        </Button>
      </div>
      <AppMenu isMobileMenu />
    </aside>
  );
}
