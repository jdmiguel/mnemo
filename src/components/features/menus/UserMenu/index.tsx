import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import ThemeButton from "@/components/features/buttons/ThemeButton";
import SignOutButton from "@/components/features/buttons/SignOutButton";

type UserMenuProps = {
  name: string;
  email: string;
  imageSrc: string;
};

export default function UserMenu({ name, email, imageSrc }: UserMenuProps) {
  const userImage = {
    ...(imageSrc ? { src: imageSrc } : { name: name.substring(0, 2) }),
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          color="primary"
          className="text-small uppercase transition-transform"
          {...userImage}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        disabledKeys={["profile"]}
        classNames={{ base: "p-2 " }}
      >
        <DropdownSection
          title="Signed in as"
          classNames={{ base: "mb-3 ", group: "data-[has-title=true]:pt-0" }}
        >
          <DropdownItem key="profile" className="py-0 opacity-hover">
            <p className="text-black-200">{email}</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="theme" className="mb-1.5 p-0">
          <ThemeButton />
        </DropdownItem>
        <DropdownItem key="signOut" className="p-0">
          <SignOutButton />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
