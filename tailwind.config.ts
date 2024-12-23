import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-dark': "#171717", // equivalent to tailwind neutral-900
        'accent':"#A39AF7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nohemi: ["var(--font-nohemi)"]
      },
      fontWeight: {
        'nohemi-thin': '100',
        'nohemi-extralight': '200',
        'nohemi-light': '300',
        'nohemi-regular': '400',
        'nohemi-medium': '500',
        'nohemi-semibold': '600',
        'nohemi-bold': '700',
        'nohemi-extrabold': '800',
        'nohemi-black': '900'
      }
    },
  },
  plugins: [],
} satisfies Config;
