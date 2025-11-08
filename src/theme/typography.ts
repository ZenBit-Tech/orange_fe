import type { ThemeOptions } from '@mui/material/styles';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const typography: ThemeOptions['typography'] & {
  sizes: {
    size96: string;
    size60: string;
    size48: string;
    size34: string;
    size24: string;
    size20: string;
    size18: string;
    size16: string;
    size14: string;
    size12: string;
  };
} = {
  sizes: {
    size96: '96px',
    size60: '60px',
    size48: '48px',
    size34: '34px',
    size24: '24px',
    size20: '20px',
    size18: '18px',
    size16: '16px',
    size14: '14px',
    size12: '12px',
  },

  weights: {
    weight400: 400,
    weight500: 500,
    weight600: 600,
    weight700: 700,
  },

  general: {
    fontInter: "'Inter', Helvetica, Arial, sans-serif",
    fontPoppins: "'Poppins', Helvetica, Arial, sans-serif",
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sizes: {
      size96: string;
      size60: string;
      size48: string;
      size34: string;
      size24: string;
      size20: string;
      size18: string;
      size16: string;
      size14: string;
      size12: string;
    };

    weights: {
      weight400: number;
      weight500: number;
      weight600: number;
      weight700: number;
    };

    general: {
      fontInter: string;
      fontPoppins: string;
    };
  }

  interface TypographyVariantsOptions {
    sizes?: {
      size96: string;
      size60: string;
      size48: string;
      size34: string;
      size24: string;
      size20: string;
      size18: string;
      size16: string;
      size14: string;
      size12: string;
    };

    weights?: {
      weight400: number;
      weight500: number;
      weight600: number;
      weight700: number;
    };

    general?: {
      fontInter: string;
      fontPoppins: string;
    };
  }
}
