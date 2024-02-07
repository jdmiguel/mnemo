import { useSession } from "next-auth/react";
import { ButtonProps } from "@nextui-org/button";
import clsx from "clsx";
import ThemeButton from "@/components/feature/buttons/ThemeButton";
import UserAvatarMenu from "@/components/feature/UserAvatarMenu";
import SignOutButton from "@/components/feature/buttons/SignOutButton";

type UserSettingsProps = {
  withUserAvatar?: boolean;
};

export default function UserSettings({
  withUserAvatar = false,
}: UserSettingsProps) {
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
        <UserAvatarMenu
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
