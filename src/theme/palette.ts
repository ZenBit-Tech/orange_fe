import type { PaletteOptions } from "@mui/material/styles";

export const palette: PaletteOptions = {
  primary: {
    main: "#1976D2", // default blue
  },
  secondary: {
    main: "#9C27B0", // purple
  },
  error: {
    main: "#D32F2F",
  },
  warning: {
    main: "#ED6C02",
  },
  info: {
    main: "#0288D1",
  },
  success: {
    main: "#2E7D32",
  },

  custom: {
    textGray: "#666666",
    facebook: "#1976D2",
    linkedin: "#4C9BE0",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      textGray: string;
      facebook: string;
      linkedin: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      textGray?: string;
      facebook?: string;
      linkedin?: string;
    };
  }
}
