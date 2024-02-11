import { Priority } from ".";

export type Note = {
  id: number;
  title: string;
  priority: Priority;
  date: string;
  text: string;
};
