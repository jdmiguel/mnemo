import Menu from "@/components/feature/Menu";
import LogoIcon from "@/components/ui/LogoIcon";

export default function MenuWrapper() {
  return (
    <aside className="hidden h-full w-16 bg-gray-100 dark:bg-black-100 md:block">
      <h1 className="mb-2 p-4">
        <LogoIcon />
      </h1>
      <Menu />
    </aside>
  );
}
