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
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    minHeight:{
      '0':'0px',
      '0.5':'20px',
      '1':'40px',
      '1.5':'60px',
      '2':'80px',
      '2.5':'100px',
      '3':'120px',
      '3.5':'140px',
      '4':'160px',
      '5':'200px',
      '6':'240px',
      '7':'280px',
      '8':'320px',
      '9':'360px',
      '10':'400px',
      '11':'440px',
      '12':'480px',
      '14':'560px',
      '16':'640px',
      '20':'800px',
      '24':'960px',
      '28':'1120px',
    }
  },
  plugins: [
    require('tailwind-safelist-generator')({
      path: 'safelist.txt',
      patterns: [
        'text-{colors}',
        'sm:text-{colors}',
        'md:text-{colors}',
        'bg-{colors}',
        'sm:bg-{colors}',
        'md:bg-{colors}',
        'hover:text-{colors}',
        'hover:bg-{colors}',
        'py-{padding}',
        'px-{padding}',
        'pt-{padding}',
        'pb-{padding}',
        'pl-{padding}',
        'pr-{padding}',
        'w-{width}',
        'sm:w-{width}',
        'md:w-{width}',
        'lg:w-{width}',
        'min-h-{height}',
        'sm:min-h-{height}',
        'md:min-h-{height}',
        'lg:min-h-{height}',
        'items-start',
        'items-end',
        'items-center',
        'justify-start',
        'justify-end',
        'justify-center'
      ],
    }),
  ],
}
export default config
