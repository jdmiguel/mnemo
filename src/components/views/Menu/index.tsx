import Link from "next/link";
import Image from "next/image";
import {
  GaugeCircle,
  StickyNote,
  List,
  KanbanSquare,
  Calendar,
} from "lucide-react";

export default function Menu() {
  return (
    <nav className="h-full bg-gray-50 p-5 dark:bg-black-100">
      <ul className="flex flex-col items-center gap-8">
        <li>
          <Link href="./">
            <Image
              src="./logo-icon.svg"
              alt="logo mnemo"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link href="./">
            <GaugeCircle
              className="stroke-gray-400 dark:stroke-gray-400"
              size={28}
            />
          </Link>
        </li>
        <li>
          <Link href="./">
            <StickyNote
              className="stroke-gray-400 dark:stroke-gray-400"
              size={28}
            />
          </Link>
        </li>
        <li>
          <Link href="./">
            <List className="stroke-gray-400 dark:stroke-gray-400" size={28} />
          </Link>
        </li>
        <li>
          <Link href="./">
            <KanbanSquare
              className="stroke-gray-400 dark:stroke-gray-400"
              size={28}
            />
          </Link>
        </li>
        <li>
          <Link href="./">
            <Calendar
              className="stroke-gray-400 dark:stroke-gray-400"
              size={28}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
