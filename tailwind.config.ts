// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        navbar: '#04756F', // your color
      },
    },
  },
  plugins: [],
} satisfies Config;
