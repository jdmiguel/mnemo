"use client";

import clsx from "clsx";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import AppMenu from "@/components/features/menus/AppMenu";
import UserSettings from "@/components/features/menus/UserSettingsMenu";

export default function MobileMenuLayout() {
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
      <AppMenu isMobileMenu />
      <UserSettings />
    </aside>
  );
}
