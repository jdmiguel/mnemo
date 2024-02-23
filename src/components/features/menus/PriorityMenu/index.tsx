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
        content: "bg-gray-100 p-0 min-w-40 sm:min-w-32 rounded-sm",
      }}
      triggerScaleOnOpen={false}
      placement="bottom-start"
      motionProps={{
        initial: { opacity: 0, scaleY: 0, y: -20 },
        animate: { opacity: 1, scaleY: 1, y: 0 },
        exit: { opacity: 0 },
      }}
    >
      <DropdownTrigger>
        <Button
          radius="sm"
          className="w-1/2 items-center justify-between gap-0 bg-gray-100 text-gray-500 sm:w-32"
          endContent={<ChevronDownIcon size={18} className="stroke-gray-400" />}
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
          base: "p-0 w-full",
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
