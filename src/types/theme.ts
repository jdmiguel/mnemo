import { ThemeColors } from "@nextui-org/theme";

export type ExtendedThemeColors = ThemeColors & { attention: string };

export type StatusColor = keyof Pick<
  ExtendedThemeColors,
  "success" | "secondary" | "warning" | "danger"
>;
