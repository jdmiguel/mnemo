"use client";

import clsx from "clsx";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import Menu from "@/components/layouts/Menu";

export default function MobileMenuWrapper() {
  const { isOpen } = useMobileMenuStatus();

  return (
    <aside
      className={clsx(
        "absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gray-100 opacity-0 transition-opacity dark:bg-black-100 md:hidden",
        {
          "opacity-100": isOpen,
        },
      )}
    >
      <Menu isMobileMenu />
    </aside>
  );
}
