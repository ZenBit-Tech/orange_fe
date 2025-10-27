import { green, grey } from '@mui/material/colors';
import type { PaletteOptions } from '@mui/material/styles';

const GRADIENT_GREEN_1 = '#f1faf3';
const GRADIENT_GREEN_2 = '#edfbe4';
const GRADIENT_GREEN_3 = '#e3f8d8';
const GRADIENT_GREEN_4 = '#dbf2d6';

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

  gradient1: GRADIENT_GREEN_1,
  gradient2: GRADIENT_GREEN_2,
  gradient3: GRADIENT_GREEN_3,
  gradient4: GRADIENT_GREEN_4,

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

  backgrounds: {
    mainGradient: `linear-gradient(270deg, ${GRADIENT_GREEN_1} 26.68%, ${GRADIENT_GREEN_2} 52.54%, ${GRADIENT_GREEN_3} 74.16%, ${GRADIENT_GREEN_4} 103.78%)`,
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

    gradient1?: string;
    gradient2?: string;
    gradient3?: string;
    gradient4?: string;

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

    backgrounds: {
      mainGradient: string;
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

    gradient1?: string;
    gradient2?: string;
    gradient3?: string;
    gradient4?: string;

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

    backgrounds?: {
      mainGradient?: string;
    };

    globalColors?: {
      primaryGreen?: string;
      textGray?: string;
    };
  }
}
