import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'btn-gradient': 'linear-gradient(45deg, #AC50EF, #7059FB 50%, #2ECFF6)',
        'pattern-lg': 'url("/bg-pattern-lg.png")',
      },
      colors: {
        primary: '#6248ff',
        secondary: '#AC50EF',
        tertiary: '#7059FB',
        cyan: '#2ECFF6',
        neutral: {
          '100': '#fff',
          '200': '#E7E7E9',
          '300': '#B5B6BB',
          '400': '#9C9DA4',
          '500': '#83848D',
          '600': '#92939B',
          '700': '#1A1C38',
          '800': '#07091B',
        },
        blue: {
          '400': '#086CD9',
          '300': '#1D88FE',
          '200': '#8FC3FF',
          '100': '#EAF4FF',
        },
        green: {
          '400': '#11845B',
          '300': '#05C168',
          '200': '#7FDCA4',
          '100': '#DEF2E6',
        },
        red: {
          '400': '#DC2B2B',
          '300': '#FF5A65',
          '200': '#FFBEC2',
          '100': '#FFEFF0',
        },
        orange: {
          '400': '#D5691B',
          '300': '#FF9E2C',
          '200': '#FFD19B',
          '100': '#FFF3E4',
        },
      },
      fontSize: {
        'display-1': '90px',
        'display-2': '64px',
        'display-3': '38px',
        'display-4': '28px',
        'heading-1': '54px',
        'heading-2': '38px',
        'heading-3': '24px',
        'heading-4': '22px',
        'heading-5': '18px',
        'heading-6': '16px',
        'body-lg': '24px',
        'body-md': '18px',
        'body-sm': '14px',
      },
      boxShadow: {
        'btn': '#6248ff 0px 4px 10px 0px',
        'btn-dark': '#6248ff 0px 10px 28px 0px',
        'btn-light': '#6248ff 0px 6px 20px 0px',
        'white': '#ffffff 0px 4px 10px 0px',
        'white-dark': '#ffffff 0px 10px 28px 0px',
        'white-light': '#ffffff 0px 6px 20px 0px',
      },
      container: {
        center: true,
        padding: '24px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
