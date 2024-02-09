import { useSession } from "next-auth/react";
import { ButtonProps } from "@nextui-org/button";
import clsx from "clsx";
import ThemeButton from "@/components/features/buttons/ThemeButton";
import UserAvatarTooltip from "@/components/features/UserAvatarTooltip";
import SignOutButton from "@/components/features/buttons/SignOutButton";

type UserSettingsMenuProps = {
  withUserAvatar?: boolean;
};

export default function UserSettingsMenuProps({
  withUserAvatar = false,
}: UserSettingsMenuProps) {
  const { data: session } = useSession();

  const hasUserImage = Boolean(session?.user?.image);
  const avatarImage = {
    ...(hasUserImage
      ? { src: session?.user?.image ?? "" }
      : { name: session?.user?.name?.substring(0, 2) ?? "" }),
  };

  const themeButtonProps = {
    color: "primary",
    ...(withUserAvatar && { variant: "light" }),
  } as ButtonProps;

  const renderUserContent = () => {
    if (withUserAvatar) {
      return (
        <UserAvatarTooltip
          userName={session?.user?.name ?? ""}
          avatarImage={avatarImage}
        />
      );
    }

    return <SignOutButton />;
  };

  return (
    <div
      className={clsx("flex gap-2", {
        "w-48 flex-col justify-center": !withUserAvatar,
      })}
    >
      <ThemeButton {...themeButtonProps} />
      {renderUserContent()}
    </div>
  );
}
