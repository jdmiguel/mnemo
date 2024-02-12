import { Tooltip } from "@nextui-org/tooltip";
import { SettingsIcon } from "lucide-react";
import ThemeButton from "@/components/features/buttons/ThemeButton";
import SignOutButton from "@/components/features/buttons/SignOutButton";

type UserSettingsMenuProps = {
  withTooltip: boolean;
};

export default function UserSettingsMenu({
  withTooltip,
}: UserSettingsMenuProps) {
  const userSettingsActions = (
    <div className="flex flex-col gap-2 py-2">
      <ThemeButton />
      <SignOutButton />
    </div>
  );

  if (withTooltip) {
    return (
      <Tooltip
        content={userSettingsActions}
        showArrow
        placement="top-start"
        offset={12}
      >
        <button type="button">
          <SettingsIcon className="stroke-purple-100" size={24} />
        </button>
      </Tooltip>
    );
  }

  return userSettingsActions;
}
