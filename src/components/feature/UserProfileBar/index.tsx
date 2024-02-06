import { useSession } from "next-auth/react";
import { ButtonProps } from "@nextui-org/button";
import ThemeButton from "@/components/feature/ThemeButton";
import UserAvatarMenu from "../UserAvatarMenu";
import clsx from "clsx";

type UserProfileBarProps = {
  withHover?: boolean;
};

export default function UserProfileBar({
  withHover = false,
}: UserProfileBarProps) {
  const { data: session } = useSession();

  const hasUserImage = Boolean(session?.user?.image);
  const avatarImage = {
    ...(hasUserImage
      ? { src: session?.user?.image ?? "" }
      : { name: session?.user?.name?.substring(0, 2) ?? "" }),
  };

  const themeButtonProps = {
    color: "primary",
    ...(withHover && { variant: "light" }),
  } as ButtonProps;

  return (
    <div
      className={clsx("flex gap-2", {
        "w-48 flex-col justify-center": !withHover,
      })}
    >
      <ThemeButton {...themeButtonProps} />
      <UserAvatarMenu
        userName={session?.user?.name ?? ""}
        avatarImage={avatarImage}
        withHover={withHover}
      />
    </div>
  );
}
