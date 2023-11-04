import { nextui } from "@nextui-org/theme";
import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      red: "#C72116",
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
      },
      gray: {
        50: "#E3E7F0",
        100: "#CCD3E1",
        200: "#B7C0D1",
        300: "#989FB1",
        400: "#757F98",
        500: "#5A6581",
      },
      black: {
        50: "#3E465C",
        100: "#353D51",
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
          },
        },
      },
    }),
  ],
} satisfies Config;
