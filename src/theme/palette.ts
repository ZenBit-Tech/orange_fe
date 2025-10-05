import type { PaletteOptions } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

export const palette: PaletteOptions = {
  primary: {
    main: "#1976D2",
  },
  secondary: {
    main: "#9C27B0",
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

  iconColors: {
    facebook: "#1976D2",
    linkedin: "#4C9BE0",
  },


  loginColors: {
    textDisabled: "rgba(0, 0, 0, 0.38)",
    socialButtonsColor: "rgba(0, 0, 0, 0.87)",
    titleColor: "#000000",
    subtitleColor: "#101828",
    // card background used in WrapperForm
    loginBg: "#ffffff",            // was #fff
    // border and divider shades
    border: "#e0e0e0",            // used for 1px borders
    divider: "#e6e6e6",           // divider line color
    // disabled states
    disabledBg: "#e0e0e0",        // submit disabled background
    disabledText: "#9e9e9e",      // disabled text color
    // button main color (submit)
    buttonMain: green[700],       // maps to green[700]
    // general gray used for small text       // fallback for text-gray usages
    termsText: "#4A5565",         // terms and conditions text color
    pageWrapperBg:"#f9f9f9"
  },

  globalColors: {
    textGray: grey[500],          
  }


};

declare module "@mui/material/styles" {
  interface Palette {
    iconColors: {
      facebook: string;
      linkedin: string;
    };

    loginColors: {
      textDisabled: string;
      socialButtonsColor: string;
      titleColor: string;
      subtitleColor: string;
      loginBg: string;
      border: string;
      divider: string;
      disabledBg: string;
      disabledText: string;
      buttonMain: string;
      termsText?: string;
      pageWrapperBg?: string;
    };

    globalColors: {
      textGray: string;
    };
  }
  interface PaletteOptions {
    iconColors?: {
      textGray?: string;
      facebook?: string;
      linkedin?: string;
    };

    loginColors: {
      textDisabled?: string;
      socialButtonsColor?: string;
      titleColor?: string;
      subtitleColor?: string;
      loginBg?: string;
      border?: string;
      divider?: string;
      disabledBg?: string;
      disabledText?: string;
      buttonMain?: string;
      termsText?: string;
      pageWrapperBg?: string;
    };

    globalColors?: {
      textGray?: string;
    };
  }



}
