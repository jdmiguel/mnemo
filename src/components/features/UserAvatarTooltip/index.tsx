import { Tooltip } from "@nextui-org/tooltip";
import { Avatar, type AvatarProps } from "@nextui-org/avatar";
import SignOutButton from "@/components/features/buttons/SignOutButton";
import ThemeButton from "@/components/features/buttons/ThemeButton";

type UserAvatarMenuProps = {
  userName: string;
  avatarImage: AvatarProps;
};

export default function UserAvatarTooltip({
  userName,
  avatarImage,
}: UserAvatarMenuProps) {
  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-2 py-2">
          <ThemeButton />
          <SignOutButton />
        </div>
      }
      showArrow
      placement="top-start"
      offset={5}
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
