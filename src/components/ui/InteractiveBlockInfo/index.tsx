import { Chip } from "@nextui-org/chip";
import { PRIORITY_COLOR } from "@/utils";
import { InteractiveBlock } from "@/types";

type InteractiveBlockProps = Pick<
  InteractiveBlock,
  "title" | "priority" | "date"
>;

export default function InteractiveBlockInfo({
  title,
  priority,
  date,
}: InteractiveBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <h3 className="heading-3">{title}</h3>
        {priority && (
          <Chip
            className="uppercase"
            color={PRIORITY_COLOR[priority]}
            radius="sm"
            size="sm"
          >
            {priority}
          </Chip>
        )}
      </div>
      <time className="text-detail">{date}</time>
    </div>
  );
}
