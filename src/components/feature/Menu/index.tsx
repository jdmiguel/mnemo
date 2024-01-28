import Image from "next/image";
import MenuItems from "@/components/ui/MenuItems";

export default function Menu() {
  return (
    <aside className="hidden h-full w-16 bg-gray-100 dark:bg-black-100 md:block">
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src="./logo-icon.svg"
          alt="logo mnemo"
          width={256}
          height={239}
        />
      </div>
      <MenuItems />
    </aside>
  );
}
