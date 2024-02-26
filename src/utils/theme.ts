import { Priority, StatusColor } from "@/types";

export const PRIORITY_COLOR: Record<Priority, StatusColor> = {
  low: "success",
  medium: "secondary",
  high: "warning",
  critical: "danger",
};

export const enum COLORS {
  TRANSPARENT = "transparent",
  RED_50 = "#C72116",
  RED_100 = "#DB241C",
  ORANGE = "#C85616",
  YELLOW = "#E3A82B",
  BLUE = "#1D81A0",
  GREEN = "#1DA098",
  PURPLE_50 = "#5B5FAE",
  PURPLE_100 = "#656AC5",
  PURPLE_200 = "#7B80E1",
  WHITE_50 = "#FFFFFF",
  WHITE_100 = "#F7F9FD",
  WHITE_200 = "#E3E7F0",
  GRAY_50 = "#D4DAE6",
  GRAY_100 = "#CCD3E1",
  GRAY_200 = "#B7C0D1",
  GRAY_300 = "#989FB1",
  GRAY_400 = "#757F98",
  GRAY_500 = "#5A6581",
  BLACK_50 = "#353D51",
  BLACK_100 = "#2F3648",
  BLACK_200 = "#282F3F",
  BLACK_300 = "#242531",
}
