"use client";

import clsx from "clsx";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import Menu from "@/components/feature/Menu";
import UserSettings from "@/components/feature/UserSettings";

export default function MobileMenuWrapper() {
  const { isOpen } = useMobileMenuStatus();

  return (
    <aside
      className={clsx(
        "absolute left-0 top-0 flex h-full w-full flex-col items-center justify-evenly bg-gray-100 dark:bg-black-100 md:hidden",
        {
          invisible: !isOpen,
        },
      )}
    >
      <Menu isMobileMenu />
      <UserSettings />
    </aside>
  );
}
