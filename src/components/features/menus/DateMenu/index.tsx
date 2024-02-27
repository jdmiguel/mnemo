import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { format } from "date-fns";
import {
  DayContent,
  DayContentProps,
  DateRange,
  DayPicker,
} from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./styles.css";
import { ANIMATION, OFFSET_MENU } from "@/utils";

const DEFAULT_DATE_TEXT = "Date range";

function DateTime(props: DayContentProps) {
  const dateTime = format(props.date, "yyyy-MM-dd");
  return (
    <time dateTime={dateTime}>
      <DayContent {...props} />
    </time>
  );
}

export default function DateMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>();
  const [selectedDateText, setSelectedDateText] = useState(DEFAULT_DATE_TEXT);

  const onApplyDate = () => {
    const startRange = range?.from;
    const endRange = range?.to;

    setIsOpen(false);

    if (!startRange || (!startRange && !endRange)) {
      setSelectedDateText(DEFAULT_DATE_TEXT);
      return;
    }

    const startDateText = format(startRange, "dd/MM/yyyy");
    const endDateText = format(endRange ?? startRange, "dd/MM/yyyy");
    const displayedDateText =
      startDateText === endDateText
        ? startDateText
        : `${startDateText} - ${endDateText}`;
    setSelectedDateText(displayedDateText);
  };

  const onResetDate = () => {
    setRange(undefined);
    setSelectedDateText(DEFAULT_DATE_TEXT);
    setIsOpen(false);
  };

  return (
    <Popover
      classNames={{ content: "bg-gray-100" }}
      radius="sm"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottom-start"
      offset={OFFSET_MENU}
      motionProps={ANIMATION.accordion}
      shouldBlockScroll
      shouldCloseOnBlur
    >
      <PopoverTrigger>
        <Button
          radius="sm"
          className="w-full items-center justify-between gap-3 bg-gray-100 text-gray-500 sm:w-56"
          endContent={<CalendarIcon size={18} className="stroke-gray-500" />}
          onClick={() => setIsOpen(true)}
        >
          {selectedDateText}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          components={{ DayContent: DateTime }}
          footer={
            <div className="mt-4 flex justify-end gap-2">
              <Button color="primary" radius="sm" onClick={onApplyDate}>
                Apply
              </Button>
              <Button color="default" radius="sm" onClick={onResetDate}>
                Reset
              </Button>
            </div>
          }
        />
      </PopoverContent>
    </Popover>
  );
}
