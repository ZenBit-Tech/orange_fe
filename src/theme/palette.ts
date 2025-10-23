import { green, grey } from '@mui/material/colors';
import type { PaletteOptions } from '@mui/material/styles';

export const palette: PaletteOptions = {
  primary: {
    main: '#1976D2',
  },
  secondary: {
    main: '#9C27B0',
  },
  error: {
    main: '#D32F2F',
  },
  warning: {
    main: '#ED6C02',
  },
  info: {
    main: '#0288D1',
  },
  success: {
    main: '#2E7D32',
  },

  iconColors: {
    facebook: '#1976D2',
    linkedin: '#4C9BE0',
  },

  loginColors: {
    textDisabled: 'rgba(0, 0, 0, 0.38)',
    socialButtonsColor: 'rgba(0, 0, 0, 0.87)',
    titleColor: '#000000',
    subtitleColor: '#101828',
    subtitleColor1: '#4A5565',
    loginBg: '#ffffff',
    border: '#e0e0e0',
    divider: '#e6e6e6',
    disabledBg: '#e0e0e0',
    disabledText: '#9e9e9e',
    pageWrapperBg: '#f9f9f9',
    pageWrapperBgTransparent: 'transparent',
  },

  stepperColors: {
    disabledStep: 'rgba(239, 239, 239, 1)',
    activeStep: 'rgba(217, 240, 232, 1)',
    errorStep: 'rgba(254, 228, 226, 1)',
    activeText: 'rgba(26, 94, 58, 1)',
    nonActiveText: 'rgba(82, 82, 82, 1)',
    buttonColor: 'rgba(0, 153, 102, 1)',
  },

  uploadColors: {
    textClick: 'rgba(8, 11, 8, 1)',
    textSupport: 'rgba(82, 82, 82, 1)',
    borderColor: 'rgba(26, 163, 117, 1)',
    backgroundColorPrimary: 'rgba(255, 255, 255, 1)',
    borderColorPrimary: 'rgba(220, 220, 220, 1)',
    backgroundColorSecondary: 'rgba(253, 253, 253, 1)',
  },

  globalColors: {
    textGray: grey[500],
    primaryGreen: green[700],
  },
};

declare module '@mui/material/styles' {
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
      subtitleColor1: string;
      loginBg: string;
      border: string;
      divider: string;
      disabledBg: string;
      disabledText: string;
      pageWrapperBg?: string;
      pageWrapperBgTransparent?: string;
    };

    stepperColors: {
      disabledStep: string;
      activeStep: string;
      errorStep: string;
      buttonColor: string;
      activeText: string;
      nonActiveText: string;
    };

    uploadColors: {
      borderColor: string;
      backgroundColorPrimary: string;
      borderColorPrimary: string;
      backgroundColorSecondary: string;
      textClick: string;
      textSupport: string;
    };

    globalColors: {
      primaryGreen: string;
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
      subtitleColor1?: string;
      loginBg?: string;
      border?: string;
      divider?: string;
      disabledBg?: string;
      disabledText?: string;
      pageWrapperBg?: string;
      pageWrapperBgTransparent?: string;
    };

    stepperColors: {
      disabledStep?: string;
      activeStep?: string;
      errorStep?: string;
      buttonColor?: string;
      activeText?: string;
      nonActiveText?: string;
    };

    uploadColors: {
      borderColor: string;
      backgroundColorPrimary: string;
      borderColorPrimary: string;
      backgroundColorSecondary: string;
      textClick: string;
      textSupport: string;
    };

    globalColors?: {
      primaryGreen?: string;
      textGray?: string;
    };
  }
}
