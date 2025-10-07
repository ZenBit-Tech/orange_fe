import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import type { ThemeOptions } from "@mui/material/styles";
export const typography: ThemeOptions['typography'] & {
  sizes: {
    h1: string;
    h1Mobile: string;
    h4: string;
    h4Mobile: string;
    h5: string;
    h5Mobile: string;
    body1: string;
    body1Mobile: string;
    body2: string;
    body2Mobile: string;
    button: string;
    terms: string;
  };
} = {
  fontFamily: "'Inter', Helvetica, Arial, sans-serif",
  

  h5: {
    fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  body2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  button: {
    textTransform: 'none',
    fontSize: '16px',
  },

  sizes: {
    h1: '28px',
    h1Mobile: '22px',
    h4: '26px',
    h4Mobile: '20px',
    h5: '24px',
    h5Mobile: '20px', 
    body1: '16px',
    body1Mobile: '14px',
    body2: '14px',
    body2Mobile: '13px',
    button: '16px',
    terms: '12px',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sizes: {
      h1: string;
      h1Mobile: string;
      h4: string;
      h4Mobile: string;
      h5: string;
      h5Mobile: string;
      body1: string;
      body1Mobile: string;
      body2: string;
      body2Mobile: string;
      button: string;
      terms: string;
    };
  }
}