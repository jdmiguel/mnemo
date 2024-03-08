import { Priority } from "./priority";

export type InteractiveBlock = {
  id: number;
  title: string;
  priority?: Priority;
  date: string;
  content: string;
};
