import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { AlertCircleIcon } from "lucide-react";
import { Button } from "@nextui-org/button";
import { ANIMATION, OFFSET_MENU } from "@/utils";

const PRIORITY_PLACEHOLDER = "Priority";

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
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([PRIORITY_PLACEHOLDER]),
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown
      classNames={{
        content: "bg-gray-100 p-0 rounded-sm w-full sm:min-w-fit",
      }}
      placement="bottom-start"
      offset={OFFSET_MENU}
      motionProps={ANIMATION.filter}
    >
      <DropdownTrigger>
        <Button
          radius="sm"
          className="w-full items-center justify-between gap-3 bg-gray-100 text-gray-500 sm:w-44"
          endContent={<AlertCircleIcon size={18} className="stroke-gray-500" />}
        >
          {selectedKeys.has(PRIORITY_PLACEHOLDER)
            ? PRIORITY_PLACEHOLDER
            : `${selectedValue} priority`}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        items={items}
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
        classNames={{
          base: "p-0 min-w-full sm:min-w-44",
          list: "gap-0",
        }}
        aria-label="Priority options"
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            className="mb-0 p-2 after:bottom-0 after:bg-white-200 data-[focus-visible=true]:bg-gray-50 data-[selectable=true]:focus:rounded-none data-[selectable=true]:focus:bg-gray-50 data-[selectable=true]:focus:text-gray-500"
            classNames={{
              selectedIcon: "data-[selectable=true]:focus:opacity-0",
            }}
            startContent={
              <AlertCircleIcon
                className="data-[key=critical]:stroke-red-100 data-[key=high]:stroke-orange data-[key=low]:stroke-green-100 data-[key=medium]:stroke-yellow"
                data-key={item.key}
                color="primary"
                size={16}
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
