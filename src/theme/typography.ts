import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions['typography'] = {
  fontFamily: "'Inter', Helvetica, Arial, sans-serif",
  fontSize: 16,

  h5: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  button: {
    textTransform: 'none',
    fontSize: '16px',
  },
};