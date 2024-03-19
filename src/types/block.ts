import { Priority } from "./priority";

export type BlockDetailListItem = {
  content: string;
  isChecked: boolean;
};

export type BlockDetails = {
  id: number;
  title: string;
  priority?: Priority;
  date: string;
  content: string | BlockDetailListItem[];
};
