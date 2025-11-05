import { green, grey } from '@mui/material/colors';
import type { PaletteOptions } from '@mui/material/styles';

import bgLandingSection from '@/assets/landing-herobackground.png';
import bgPrivacy from '@/assets/privacy-section-bg.png';

const GRADIENT_GREEN_1 = '#f1faf3';
const GRADIENT_GREEN_2 = '#edfbe4';
const GRADIENT_GREEN_3 = '#e3f8d8';
const GRADIENT_GREEN_4 = '#dbf2d6';

const baseColors = {
  green: {
    50: '#F2FAF8',
    100: '#D9F0E8',
    200: '#B2E0D1',
    300: '#99D6C2',
    400: '#66C2A3',
    500: '#33AD85',
    600: '#1AA375',
    700: '#009966',
    800: '#007A52',
    900: '#1A5E3A',
  },
  grey: {
    0: '#FFFFFF',
    50: '#FCFCFC',
    second50: '#FDFDFD',
    100: '#EFEFEF',
    200: '#DCDCDC',
    300: '#BDBDBD',
    400: '#989898',
    500: '#7C7C7C',
    600: '#656565',
    700: '#525252',
    800: '#1E1E1E',
    900: '#141414',
    950: '#080B08',
  },
  red: {
    50: '#FFF8F7',
    100: '#FEE4E2',
    200: '#FFCECB',
    300: '#FDAAA5',
    400: '#F97970',
    500: '#F04F43',
    600: '#D02C21',
    700: '#BA271C',
    800: '#9A231A',
    900: '#80231C',
    second900: '#450E0A',
  },
};

export const palette: PaletteOptions = {
  baseColors,
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

  backgrounds: {
    mainGradient: `linear-gradient(270deg, ${GRADIENT_GREEN_1} 26.68%, ${GRADIENT_GREEN_2} 52.54%, ${GRADIENT_GREEN_3} 74.16%, ${GRADIENT_GREEN_4} 103.78%)`,
    bgPrivacy: bgPrivacy,
    bgLandingSection: bgLandingSection,
    white: baseColors.grey[0],
    bgPrimary: baseColors.grey[50],
    bgSecondary: baseColors.grey.second50,
    bgTeriarty: baseColors.grey[100],
    bgError: baseColors.red[100],
    bgTransparent: 'transparent',
  },
  textIcons: {
    textPrimary: baseColors.grey[950],
    textSecondary: baseColors.grey[800],
    textTeriartry: baseColors.grey[700],
    textGrey: baseColors.grey[400],
    contrast: baseColors.grey[50],
    errorLight: baseColors.red[300],
    errorMain: baseColors.red[600],
    errorMainSecondary: baseColors.red[700],
    success: baseColors.green[600],
    primary: baseColors.green[900],
  },

  border: {
    default: baseColors.grey[200],
    defaultHover: baseColors.grey[300],
    error: baseColors.red[600],
    borderPrimary: baseColors.green[600],
    success: baseColors.green[600],
  },

  surface: {
    disabled: {
      disabledLight: baseColors.grey[100],
      disabledDark: baseColors.grey[200],
    },
    error: {
      hoverOutlinedButton: baseColors.red[50],
      light: baseColors.red[100],
      default: baseColors.red[600],
      hover: baseColors.red[700],
    },
    primary: {
      default: baseColors.green[700],
      hoverLight: baseColors.green[50],
      light: baseColors.green[100],
      hover: baseColors.green[800],
      press: baseColors.green[900],
    },
  },

  iconColors: {
    facebook: '#1976D2',
    linkedin: '#4C9BE0',
  },

  gradient1: GRADIENT_GREEN_1,
  gradient2: GRADIENT_GREEN_2,
  gradient3: GRADIENT_GREEN_3,
  gradient4: GRADIENT_GREEN_4,

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

    baseColors: {
      green: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      grey: {
        0: string;
        50: string;
        second50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      red: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        second900: string;
      };
    };

    backgrounds: {
      mainGradient: string;
      bgPrivacy: string;
      bgLandingSection: string;
      white: string;
      bgPrimary: string;
      bgSecondary: string;
      bgTeriarty: string;
      bgError: string;
      bgTransparent: string;
    };
    textIcons?: {
      textPrimary?: string;
      textSecondary?: string;
      textTeriartry?: string;
      textGrey?: string;
      contrast?: string;
      errorLight?: string;
      errorMain?: string;
      errorMainSecondary?: string;
      success?: string;
      primary?: string;
    };

    border?: {
      default?: string;
      defaultHover?: string;
      error?: string;
      borderPrimary?: string;
      success?: string;
    };

    surface: {
      disabled: {
        disabledLight: string;
        disabledDark: string;
      };
      error: {
        hoverOutlinedButton: string;
        light: string;
        default: string;
        hover: string;
      };
      primary: {
        default: string;
        hoverLight: string;
        light: string;
        hover: string;
        press: string;
      };
    };

    gradient1?: string;
    gradient2?: string;
    gradient3?: string;
    gradient4?: string;

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
    baseColors?: {
      green?: {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
      };
      grey?: {
        0?: string;
        50?: string;
        second50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
        950?: string;
      };
      red?: {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
        second900?: string;
      };
    };

    backgrounds?: {
      mainGradient?: string;
      bgPrivacy?: string;
      bgLandingSection?: string;
      white?: string;
      bgPrimary?: string;
      bgSecondary?: string;
      bgTeriarty?: string;
      bgError?: string;
      bgTransparent?: string;
    };

    textIcons?: {
      textPrimary?: string;
      textSecondary?: string;
      textTeriartry?: string;
      textGrey?: string;
      contrast?: string;
      errorLight?: string;
      errorMain?: string;
      errorMainSecondary?: string;
      success?: string;
      primary?: string;
    };

    border?: {
      default?: string;
      defaultHover?: string;
      error?: string;
      borderPrimary?: string;
      success?: string;
    };

    surface?: {
      disabled?: {
        disabledLight?: string;
        disabledDark?: string;
      };
      error?: {
        hoverOutlinedButton?: string;
        light?: string;
        default?: string;
        hover?: string;
      };
      primary?: {
        default?: string;
        hoverLight?: string;
        light?: string;
        hover?: string;
        press?: string;
      };
    };

    gradient1?: string;
    gradient2?: string;
    gradient3?: string;
    gradient4?: string;

    globalColors?: {
      primaryGreen?: string;
      textGray?: string;
    };
  }
}
