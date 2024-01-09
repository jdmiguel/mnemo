"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Sun } from "lucide-react";

type TopBarProps = {
  section: string;
};

export default function TopBar({ section }: TopBarProps) {
  const { data: session } = useSession();

  const hasUserImage = session?.user?.image;

  return (
    <aside className="flex items-center justify-between border-b-1 border-gray-200 px-7 py-3 text-sm dark:border-black-50">
      <p className="detail">{section}</p>
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
              {hasUserImage ? (
                <Image
                  src={session.user.image ?? ""}
                  alt={session.user.name ?? ""}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-500 text-md font-extrabold uppercase text-white-200">
                  {session.user.name?.substring(0, 2)}
                </span>
              )}
              <p className="detail-text">{session.user.name}</p>
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
