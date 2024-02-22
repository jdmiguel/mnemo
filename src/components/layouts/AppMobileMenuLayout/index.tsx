"use client";

import clsx from "clsx";
import { XIcon } from "lucide-react";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import AppMenu from "@/components/features/menus/AppMenu";
import { Button } from "@nextui-org/button";

export default function AppMobileMenuLayout() {
  const { isOpen, updateStatus } = useMobileMenuStatus();

  return (
    <aside
      className={clsx(
        "absolute left-0 top-0 z-20 flex h-full w-full flex-col bg-gray-100 dark:bg-black-100 md:hidden",
        {
          invisible: !isOpen,
        },
      )}
    >
      <div className="flex w-full justify-end border-gray-300 px-3 py-2">
        <Button
          color="primary"
          variant="light"
          radius="sm"
          isIconOnly
          aria-label="menu mobile"
          onClick={updateStatus}
        >
          <XIcon size={28} />
        </Button>
      </div>
      <AppMenu isMobileMenu />
    </aside>
  );
}
