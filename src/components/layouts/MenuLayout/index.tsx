import AppMenu from "@/components/features/menus/AppMenu";

export default function MenuLayout() {
  return (
    <aside className="hidden h-full w-16 flex-col items-center bg-white-300 p-4 dark:bg-black-100 md:fixed md:flex">
      <AppMenu />
    </aside>
  );
}
