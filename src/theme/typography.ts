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
    h1: string;
    h1Mobile: string;
    h2: string;
    h2Mobile: string;
    h3: string;
    h3Mobile: string;
    h4: string;
    h4Mobile: string;
    h5: string;
    h5Mobile: string;
    h6: string;
    h6Mobile: string;
    body1: string;
    body1Mobile: string;
    body2: string;
    body2Mobile: string;
    body3: string;
    body3Mobile: string;
    button: string;
    terms: string;
  };
} = {
  sizes: {
    h1: '96px',
    h1Mobile: '34px',
    h2: '60px',
    h2Mobile: '34px',
    h3: '48px',
    h3Mobile: '24px',
    h4: '34px',
    h4Mobile: '20px',
    h5: '24px',
    h5Mobile: '18px',
    h6: '18px',
    h6Mobile: '16px',
    body1: '16px',
    body1Mobile: '16px',
    body2: '14px',
    body2Mobile: '14px',
    body3: '12px',
    body3Mobile: '12px',
    button: '16px',
    terms: '12px',
  },

  weights: {
    light: 400,
    regular: 500,
    medium: 600,
    bold: 700,
  },

  lineHeight: {
    h1: 1.17,
    h2: 1.2,
    h3: 1.17,
    h4: 1.24,
    h5: 1.33,
    h6: 1.6,
    subtitle1: 1.75,
    subtitle2: 1.57,
    body1: 1.5,
    body2: 1.43,
  },

  general: {
    fontInter: "'Inter', Helvetica, Arial, sans-serif",
    fontPoppins: "'Poppins', Helvetica, Arial, sans-serif",
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sizes: {
      h1: string;
      h1Mobile: string;
      h2: string;
      h2Mobile: string;
      h3: string;
      h3Mobile: string;
      h4: string;
      h4Mobile: string;
      h5: string;
      h5Mobile: string;
      h6: string;
      h6Mobile: string;
      body1: string;
      body1Mobile: string;
      body2: string;
      body2Mobile: string;
      body3: string;
      body3Mobile: string;
      button: string;
      terms: string;
    };

    weights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };

    lineHeight: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      subtitle1: number;
      subtitle2: number;
      body1: number;
      body2: number;
    };

    general: {
      fontInter: string;
      fontPoppins: string;
    };
  }

  interface TypographyVariantsOptions {
    sizes?: {
      h1: string;
      h1Mobile: string;
      h2: string;
      h2Mobile: string;
      h3: string;
      h3Mobile: string;
      h4: string;
      h4Mobile: string;
      h5: string;
      h5Mobile: string;
      h6: string;
      h6Mobile: string;
      body1: string;
      body1Mobile: string;
      body2: string;
      body2Mobile: string;
      body3: string;
      body3Mobile: string;
      button: string;
      terms: string;
    };

    lineHeight: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      subtitle1: number;
      subtitle2: number;
      body1: number;
      body2: number;
    };

    weights?: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };

    general?: {
      fontInter: string;
      fontPoppins: string;
    };
  }
}
