import NotesPageWrapper from "@/components/features/wrappers/NotesPageWrapper";
import { Priority } from "@/types";

export default function NotesPage() {
  const mockedNotes = [
    {
      id: 1,
      title: "My first note",
      priority: "low" as Priority,
      date: "12/12/2021",
      text: "This is my first note.",
    },
    {
      id: 2,
      title: "My second note",
      priority: "medium" as Priority,
      date: "14/12/2021",
      text: "This is my second note.",
    },
    {
      id: 3,
      title: "My third note",
      priority: "high" as Priority,
      date: "19/12/2021",
      text: "This is my third note.",
    },
    {
      id: 4,
      title: "My fourth note",
      priority: "critical" as Priority,
      date: "23/12/2021",
      text: "This is my fourth note.",
    },
  ];

  return <NotesPageWrapper notes={mockedNotes} />;
}
