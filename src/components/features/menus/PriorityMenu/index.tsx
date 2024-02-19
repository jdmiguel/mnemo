import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { ChevronDownIcon, CircleIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

type PriorityKey = "low" | "medium" | "high" | "critical";

export default function PriorityMenu() {
  const items = useMemo(
    () => [
      {
        key: "low",
        label: "Low",
      },
      {
        key: "medium",
        label: "Medium",
      },
      {
        key: "high",
        label: "High",
      },
      {
        key: "critical",
        label: "Critical",
      },
    ],
    [],
  );

  const [selectedKey, setSelectedKey] = useState<PriorityKey>();

  return (
    <Dropdown
      classNames={{
        content: "bg-gray-100 p-0 min-w-[124px] rounded-sm",
      }}
      radius="sm"
    >
      <DropdownTrigger>
        <Button
          variant="flat"
          radius="sm"
          className="w-32 items-center justify-between gap-0 bg-gray-100 text-black-50"
          endContent={<ChevronDownIcon size={17} className="stroke-black-50" />}
        >
          Priority
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        items={items}
        selectionMode="single"
        selectedKeys={selectedKey}
        onSelectionChange={(key) => setSelectedKey(key as PriorityKey)}
        classNames={{
          base: "p-0",
          list: "gap-0",
        }}
        aria-label="Priority options"
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            className="mb-0 p-2 after:bottom-0 after:bg-white-200 data-[focus-visible=true]:bg-gray-50 data-[selectable=true]:focus:bg-gray-50 data-[selectable=true]:focus:text-gray-500"
            classNames={{
              selectedIcon: "data-[selectable=true]:focus:opacity-0",
            }}
            startContent={
              <CircleIcon
                className="data-[key=critical]:fill-red-100 data-[key=high]:fill-orange data-[key=low]:fill-green-100 data-[key=medium]:fill-yellow"
                data-key={item.key}
                color="primary"
                size={10}
              />
            }
            showDivider={item.key !== items.at(-1)?.key}
          >
            {item.key}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
