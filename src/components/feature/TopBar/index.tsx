"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { Avatar, type AvatarProps } from "@nextui-org/avatar";
import { Sun } from "lucide-react";

type TopBarProps = {
  section: string;
};

export default function TopBar({ section }: TopBarProps) {
  const { data: session } = useSession();

  const hasUserImage = session?.user?.image;
  const avatarProps = {
    color: "primary" as AvatarProps["color"],
    showFallback: true,
    ...(hasUserImage
      ? { src: session?.user?.image ?? "" }
      : { name: session?.user?.name?.substring(0, 2) ?? "" }),
  };

  return (
    <aside className="flex items-center justify-between border-b-1 border-gray-200 px-7 py-2 text-sm dark:border-black-50">
      <p className="small-text">{section}</p>
      <div className="flex">
        <Button
          color="primary"
          variant="light"
          isIconOnly
          aria-label="light theme"
        >
          <Sun />
        </Button>
        {session?.user ? (
          <>
            <Button
              color="primary"
              variant="light"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
            <div className="ml-6 flex items-center gap-2">
              <Avatar
                {...avatarProps}
                classNames={{ base: "text-md uppercase" }}
              />
              <p className="small-text">{session.user.name}</p>
            </div>
          </>
        ) : (
          <Button color="primary" variant="light" onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </div>
    </aside>
  );
}
