import { Tooltip } from "@nextui-org/tooltip";
import { Avatar, type AvatarProps } from "@nextui-org/avatar";
import SignOutButton from "@/components/feature/buttons/SignOutButton";

type UserAvatarMenuProps = {
  userName: string;
  avatarImage: AvatarProps;
};

export default function UserAvatarMenu({
  userName,
  avatarImage,
}: UserAvatarMenuProps) {
  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-3 p-3">
          <p className="small-text text-center">{userName}</p>
          <SignOutButton />
        </div>
      }
      showArrow
      placement="bottom-end"
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
