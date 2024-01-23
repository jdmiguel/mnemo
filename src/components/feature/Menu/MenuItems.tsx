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
    active: true,
  },
  {
    href: "/notes",
    icon: <StickyNote {...iconProps} />,
    text: "Notes",
    active: false,
  },
  {
    href: "/tasks",
    icon: <List {...iconProps} />,
    text: "Tasks",
    active: false,
  },
  {
    href: "/kanban",
    icon: <KanbanSquare {...iconProps} />,
    text: "Kanban",
    active: false,
  },
  {
    href: "/calendar",
    icon: <Calendar {...iconProps} />,
    text: "Calendar",
    active: false,
  },
];

export default function MenuItems() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center gap-2">
        {menuItems.map((link) => (
          <MenuItem
            key={link.href}
            href={link.href}
            icon={link.icon}
            text={link.text}
            active={link.href === pathname}
          />
        ))}
      </ul>
    </nav>
  );
}
