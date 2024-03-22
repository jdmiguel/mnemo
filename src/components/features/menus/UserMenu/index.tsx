import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import ThemeButton from "@/components/features/buttons/ThemeButton";
import SignOutButton from "@/components/features/buttons/SignOutButton";
import { ANIMATION, OFFSET_MENU } from "@/utils";

type UserMenuProps = {
  name: string;
  email: string;
  imageSrc: string;
};

export default function UserMenu({ name, email, imageSrc }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const userImage = {
    ...(imageSrc ? { src: imageSrc } : { name: name.substring(0, 2) }),
  };

  return (
    <Dropdown
      classNames={{ base: "max-w-56" }}
      placement="bottom-end"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      showArrow
      offset={OFFSET_MENU}
      motionProps={ANIMATION.speechBubble}
    >
      <DropdownTrigger>
        <Button
          className="min-w-0 px-0 data-[hover=true]:bg-transparent"
          variant="light"
          onClick={() => setIsOpen(true)}
        >
          <Avatar
            color="primary"
            className="text-small uppercase transition-transform"
            {...userImage}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        disabledKeys={["profile"]}
        classNames={{ base: "p-2" }}
      >
        <DropdownSection
          title="Signed in as"
          classNames={{ base: "mb-5", group: "data-[has-title=true]:pt-0" }}
        >
          <DropdownItem
            key="profile"
            className="py-0 opacity-hover"
            textValue={email}
          >
            <p className="truncate text-black-200">{email}</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="theme" className="mb-2 p-0" textValue="theme button">
          <ThemeButton />
        </DropdownItem>
        <DropdownItem key="signOut" className="p-0" textValue="sign out button">
          <SignOutButton />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
