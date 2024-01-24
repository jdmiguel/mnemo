"use client";

import { usePathname } from "next/navigation";
import {
  GaugeCircle,
  StickyNote,
  List,
  KanbanSquare,
  Calendar,
} from "lucide-react";
import MenuItem from "./MenuItem";

const iconProps = {
  size: 26,
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

export default function MenuItems() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center gap-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            text={item.text}
            active={item.href === pathname}
          />
        ))}
      </ul>
    </nav>
  );
}
