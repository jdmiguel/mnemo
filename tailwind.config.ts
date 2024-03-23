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
    colors: {
      transparent: "transparent",
      red: {
        50: "#C72116",
        100: "#DB241C",
      },
      orange: "#E95E10",
      yellow: "#E3A82B",
      green: {
        50: "#1DA098",
        100: "#159890",
      },
      purple: {
        100: "#656AC5",
        200: "#5B5FAE",
      },
      white: {
        50: "#FFFFFF",
        100: "#F7F9FD",
        200: "#EDEFFC",
        300: "#E2E6F9",
        400: "#E0E3F4",
      },
      gray: {
        50: "#DDE0F1",
        100: "#DADDEF",
        200: "#CED1E7",
        300: "#B9BCD6",
        400: "#9EA1BB",
        500: "#A0A3C1",
        600: "#777CA1",
        700: "#6B7094",
      },
      black: {
        50: "#4B5878",
        100: "#3D4760",
        200: "#232A39",
        300: "#181924",
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
            default: {
              foreground: "#FFFFFF",
              DEFAULT: "#777CA1",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#5B5FAE",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#E3A82B",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#159890",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#E95E10",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#DB241C",
            },
          },
        },
        dark: {
          colors: {
            background: "#242531",
            foreground: "#5A6581",
            default: {
              foreground: "#FFFFFF",
              DEFAULT: "#777CA1",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#5B5FAE",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#E3A82B",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#159890",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#C85616",
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
