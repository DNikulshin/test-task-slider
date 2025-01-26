import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { 'max': '767px' },
        'max-lg': { 'max': '1023px' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_color_text: "var(--main_color_text)",
        bg_slider_card: "var(--bg_slider_card)"
      },
    },
  },
  plugins: [],
} satisfies Config;
