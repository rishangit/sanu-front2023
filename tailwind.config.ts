import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './safelist.txt',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-safelist-generator')({
      path: 'safelist.txt',
      patterns: [
        'text-{colors}',
        'bg-{colors}',
        'hover:text-{colors}',
        'hover:bg-{colors}',
        'py-{padding}',
        'px-{padding}',
        'pt-{padding}',
        'pb-{padding}',
        'pl-{padding}',
        'pr-{padding}',
      ],
    }),
  ],
}
export default config
