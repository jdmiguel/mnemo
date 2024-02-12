"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import { useMobileMenuStatus } from "@/contexts/MobileMenuStatusContext";
import { User } from "@nextui-org/user";
import Button from "@/components/ui/Button";
import LogoIcon from "@/components/ui/LogoIcon";

export default function AppHeader() {
  const pathname = usePathname();
  const breadcrumbs = pathname.substring(1, pathname.length);

  const { data: session } = useSession();

  const hasUserImage = Boolean(session?.user?.image);
  const avatarImage = {
    ...(hasUserImage
      ? { src: session?.user?.image ?? "" }
      : { name: session?.user?.name?.substring(0, 2) ?? "" }),
  };

  const { updateStatus: updateMobileMenuStatus } = useMobileMenuStatus();

  return (
    <header className="bg-white-500 sticky flex min-h-14 w-full items-center justify-between border-b-1 border-gray-200 py-2 pl-5 pr-3 text-sm dark:border-black-50 md:pl-7 md:pr-7">
      <h1 className="w-8 md:hidden">
        <LogoIcon />
      </h1>
      <p className="text-small capitalize">{breadcrumbs}</p>
      <User
        name={session?.user?.name ?? ""}
        classNames={{
          base: "hidden md:flex",
          name: "text-small",
        }}
        avatarProps={{
          color: "default",
          showFallback: true,
          size: "sm",
          className: "text-small uppercase font-medium",
          ...avatarImage,
        }}
      />
      <div className="md:hidden">
        <Button
          color="primary"
          variant="light"
          isIconOnly
          aria-label="menu mobile"
          onClick={updateMobileMenuStatus}
        >
          <Menu />
        </Button>
      </div>
    </header>
  );
}
