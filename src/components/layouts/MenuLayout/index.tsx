import AppMenu from "@/components/features/menus/AppMenu";
import LogoIcon from "@/components/ui/LogoIcon";

export default function MenuLayout() {
  return (
    <aside className="hidden h-full w-16 bg-gray-50 dark:bg-black-100 md:block">
      <h1 className="mb-2 p-4">
        <LogoIcon />
      </h1>
      <AppMenu />
    </aside>
  );
}
