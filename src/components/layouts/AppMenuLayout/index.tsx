import AppMenu from "@/components/features/menus/AppMenu";

export default function AppMenuLayout() {
  return (
    <aside className="hidden h-full w-16 flex-col items-center bg-white-300 p-4 dark:bg-black-100 lg:fixed lg:flex">
      <AppMenu />
    </aside>
  );
}
