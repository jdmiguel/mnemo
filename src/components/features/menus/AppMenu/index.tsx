"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  GaugeCircle,
  StickyNote,
  List,
  KanbanSquare,
  Calendar,
} from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";
import MenuItem from "@/components/ui/MenuItem";
import MobileMenuItem from "@/components/ui/MenuItem/MobileMenuItem";

const iconProps = {
  size: 28,
};

const menuItems = [
  {
    href: "/dashboard",
    icon: <GaugeCircle {...iconProps} />,
    text: "Dashboard",
  },
  {
    href: "/notes",
    icon: <StickyNote {...iconProps} />,
    text: "Notes",
  },
  {
    href: "/tasks",
    icon: <List {...iconProps} />,
    text: "Tasks",
  },
  {
    href: "/kanban",
    icon: <KanbanSquare {...iconProps} />,
    text: "Kanban",
  },
  {
    href: "/calendar",
    icon: <Calendar {...iconProps} />,
    text: "Calendar",
  },
];

type MenuItemsProps = {
  isMobileMenu?: boolean;
};

export default function AppMenu({ isMobileMenu = false }: MenuItemsProps) {
  const pathname = usePathname();

  const Item = isMobileMenu ? MobileMenuItem : MenuItem;

  return (
    <>
      <h1
        className={clsx("mb-5", {
          hidden: isMobileMenu,
        })}
      >
        <LogoIcon />
      </h1>
      <nav
        className={clsx({
          "h-[calc(100vh-57px)] w-full": isMobileMenu,
        })}
      >
        <ul
          className={clsx("flex w-48 flex-col items-center", {
            "h-full w-full": isMobileMenu,
          })}
        >
          {menuItems.map((item) => (
            <Item
              key={item.href}
              href={item.href}
              icon={item.icon}
              text={item.text}
              active={item.href === pathname}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}
