import { Tooltip } from "@nextui-org/tooltip";
import { signOut } from "next-auth/react";
import { Avatar, type AvatarProps } from "@nextui-org/avatar";
import Button from "@/components/ui/Button";

type UserAvatarMenuProps = {
  userName: string;
  avatarImage: AvatarProps;
  withHover?: boolean;
};

export default function UserAvatarMenu({
  userName,
  avatarImage,
  withHover = false,
}: UserAvatarMenuProps) {
  const signOutButton = (
    <Button
      className="order-2 md:order-1"
      color="primary"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );

  if (withHover) {
    return (
      <Tooltip
        content={
          <div className="flex flex-col gap-3 p-3">
            <p className="small-text text-center">{userName}</p>
            {signOutButton}
          </div>
        }
      >
        <Avatar
          color="primary"
          showFallback
          classNames={{ base: "text-md uppercase cursor-pointer" }}
          {...avatarImage}
        />
      </Tooltip>
    );
  }

  return signOutButton;
}
