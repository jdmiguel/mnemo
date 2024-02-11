import AppMenu from "@/components/features/menus/AppMenu";
import LogoIcon from "@/components/ui/LogoIcon";

export default function MenuLayout() {
  return (
    <aside className="bg-white-300 hidden h-full w-16 dark:bg-black-100 md:fixed md:block">
      <h1 className="mb-2 p-4">
        <LogoIcon />
      </h1>
      <AppMenu />
    </aside>
  );
}
