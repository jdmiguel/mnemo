import { Chip } from "@nextui-org/chip";
import { type Note } from "@/types/notes";
import { priorityColor } from "@/utils";

type NoteProps = Note;

export default function Note({ title, priority, date, text }: NoteProps) {
  return (
    <article className="from-white-300 rounded-sm border-1 border-gray-50 bg-gradient-to-b to-white-100 p-7">
      <header className="mb-4">
        <div className="flex items-center gap-3">
          <h3 className="heading-3">{title}</h3>
          <Chip
            className="uppercase"
            color={priorityColor[priority]}
            radius="sm"
            size="sm"
          >
            {priority}
          </Chip>
        </div>
        <time className="text-detail">{date}</time>
      </header>
      <p className="text-medium">{text}</p>
    </article>
  );
}
