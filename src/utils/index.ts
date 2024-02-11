import { Priority, StatusColor } from "@/types";

export const priorityColor: Record<Priority, StatusColor> = {
  low: "success",
  medium: "secondary",
  high: "warning",
  critical: "danger",
};
