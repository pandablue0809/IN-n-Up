import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import sfTypography from '@storefront-ui/typography';

export default <Config>{
  presets: [tailwindConfig],
  plugins: [sfTypography],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    fontFamily: {
      'sans': ['Lucida Sans Unicode', 'Verdana', 'sans-serif', 'system-ui'],
      'heading': ['Lucida Sans Unicode', 'Verdana', 'sans-serif', 'system-ui'],
    },
    extend: {
      colors: {        
        primary: {
          50: '#DDE9F5',
          100: '#BCD5EC',
          200: '#9EC1E2',
          300: '#82AED8',
          400: '#679DCF',
          500: '#4F8CC5',
          600: '#387CBB',
          700: '#236DB1',
          800: '#115FA8',
          900: '#00519F',
        }

      },
    },
  }
};