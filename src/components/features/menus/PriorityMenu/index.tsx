import { Key, useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { AlertCircleIcon } from "lucide-react";
import { ANIMATION, OFFSET_MENU } from "@/utils";
import { Priority } from "@/types";

const PRIORITY_PLACEHOLDER = "priority";

type PriorityMenuProps = {
  defaultPriority?: Priority;
  onClickPriority: (key: Key) => void;
};

export default function PriorityMenu({
  defaultPriority,
  onClickPriority,
}: PriorityMenuProps) {
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
    new Set([defaultPriority ?? PRIORITY_PLACEHOLDER]),
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown
      classNames={{
        content: "bg-gray-100 p-0 sm:min-w-40",
      }}
      radius="sm"
      placement="bottom-start"
      offset={OFFSET_MENU}
      motionProps={ANIMATION.accordion}
    >
      <DropdownTrigger>
        <Button
          radius="sm"
          className="items-center justify-between gap-3 bg-gray-100 capitalize text-gray-500 sm:w-fit sm:min-w-40"
          fullWidth
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
        onAction={onClickPriority}
        classNames={{
          base: "p-0",
          list: "gap-0",
        }}
        aria-label="Priority options"
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            className="mb-0 p-3 after:bottom-0 after:bg-white-200 data-[selectable=true]:focus:rounded-none data-[selectable=true]:focus:bg-gray-50 data-[selectable=true]:focus:text-gray-500"
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
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
