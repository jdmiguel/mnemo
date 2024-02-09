import { Chip } from "@nextui-org/chip";

type NotePriority = "LOW" | "MWDIUM" | "HIGH" | "CRITICAL";

type NoteProps = {
  title: string;
  priority: NotePriority;
  date: string;
  text: string;
};

export default function Note({ title, priority, date, text }: NoteProps) {
  return (
    <article>
      <header>
        <div>
          <h3 className="heading-3">{title}</h3>
          <Chip radius="sm">{priority}</Chip>
        </div>
        <span>{date}</span>
      </header>
      <p>{text}</p>
    </article>
  );
}
