import { nextui } from "@nextui-org/theme";
import { type Config } from "tailwindcss";

interface GridStyles {
  gridColumn: Record<string, string>;
  gridTemplateColumns: Record<number, string>;
  gridRow: Record<string, string>;
  gridTemplateRows: Record<number, string>;
  gridRowStart: Record<number, string>;
  gridRowEnd: Record<number, string>;
  gridColumnStart: Record<number, string>;
  gridColumnEnd: Record<number, string>;
}

const generateGrid = (size: number): GridStyles => {
  const gridColumn: Record<string, string> = {};
  const gridTemplateColumns: Record<number, string> = {};
  const gridRow: Record<string, string> = {};
  const gridTemplateRows: Record<number, string> = {};
  const gridRowStart: Record<number, string> = {};
  const gridRowEnd: Record<number, string> = {};
  const gridColumnStart: Record<number, string> = {};
  const gridColumnEnd: Record<number, string> = {};

  for (let i = 1; i <= size; i++) {
    gridRow[`span-${i}`] = `span ${i} / span ${i}`;
    gridColumn[`span-${i}`] = `span ${i} / span ${i}`;
    gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridRowStart[i] = `${i}`;
    gridRowEnd[i] = `${i}`;
    gridColumnStart[i] = `${i}`;
    gridColumnEnd[i] = `${i}`;
  }

  return {
    gridColumn,
    gridTemplateColumns,
    gridRow,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
  };
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...generateGrid(24),
    fontSize: {
      sm: "0.85rem",
      base: "1rem",
      xl: "1.3rem",
      "2xl": "1.65rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      transparent: "transparent",
      red: {
        50: "#C72116",
        100: "#DB241C",
      },
      orange: "#C85616",
      yellow: "#E3A82B",
      green: {
        50: "#29B8AF",
        100: "#1DA098",
      },
      purple: {
        50: "#5B5FAE",
        100: "#656AC5",
        200: "#7B80E1",
      },
      white: {
        50: "#FFFFFF",
        100: "#F7F9FD",
        200: "#E3E7F0",
      },
      gray: {
        50: "#D4DAE6",
        100: "#CCD3E1",
        200: "#B7C0D1",
        300: "#989FB1",
        400: "#757F98",
        500: "#5A6581",
      },
      black: {
        50: "#353D51",
        100: "#2F3648",
        200: "#282F3F",
        300: "#242531",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      themes: {
        light: {
          colors: {
            background: "#F7F9FD",
            foreground: "#E3E7F0",
            primary: {
              50: "#656AC5",
              foreground: "#F7F9FD",
              DEFAULT: "#5B5FAE",
            },
            secondary: {
              50: "#989FB1",
              foreground: "#FFFFFF",
              DEFAULT: "#757F98",
            },
            success: {
              50: "#29B8AF",
              foreground: "#FFFFFF",
              DEFAULT: "#1DA098",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#C72116",
            },
          },
        },
        dark: {
          colors: {
            background: "#242531",
            foreground: "#5A6581",
            primary: {
              50: "#656AC5",
              foreground: "#F7F9FD",
              DEFAULT: "#5B5FAE",
            },
            secondary: {
              50: "#757F98",
              foreground: "#FFFFFF",
              DEFAULT: "#5A6581",
            },
            success: {
              50: "#29B8AF",
              foreground: "#FFFFFF",
              DEFAULT: "#1DA098",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#DB241C",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
