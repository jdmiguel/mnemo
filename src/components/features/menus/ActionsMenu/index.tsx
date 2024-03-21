import { Key, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "@nextui-org/button";
import { ANIMATION } from "@/utils";

type Action = {
  key: string;
  label: string;
  icon: React.ReactNode;
};

type ActionsMenuProps = {
  actions: Action[];
  onClickAction: (key: Key) => void;
};

export default function ActionsMenu({
  actions,
  onClickAction,
}: ActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      classNames={{
        content: "bg-gray-100 p-0 rounded-sm w-full sm:min-w-fit",
      }}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottom-end"
      motionProps={ANIMATION.speechBubble}
      shouldBlockScroll
      shouldCloseOnBlur
    >
      <DropdownTrigger>
        <Button
          radius="sm"
          isIconOnly
          className="group h-auto w-auto min-w-0 bg-gray-50 p-2 hover:bg-white-100"
          onClick={() => setIsOpen(true)}
        >
          {
            <MoreVerticalIcon
              className="stroke-purple-100 group-hover:stroke-purple-200"
              size={18}
            />
          }
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        items={actions}
        classNames={{
          base: "p-0 min-w-full",
          list: "gap-0",
        }}
        aria-label="Actions"
        onAction={onClickAction}
      >
        {(action) => (
          <DropdownItem
            key={action.key}
            className="mb-0 p-3 after:bottom-0 after:bg-white-200 data-[hover=true]:rounded-none data-[hover=true]:bg-gray-50"
            classNames={{
              selectedIcon: "data-[selectable=true]:focus:opacity-0",
            }}
            startContent={action.icon}
            showDivider={action.key !== actions.at(-1)?.key}
          >
            {action.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
