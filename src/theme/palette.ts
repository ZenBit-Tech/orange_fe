import { green, grey } from '@mui/material/colors';
import type { PaletteOptions } from '@mui/material/styles';

import bgLandingSection from '@/assets/landing-herobackground.webp';
import bgPrivacy from '@/assets/privacy-section-bg.webp';

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
    1001: '#4E6D56',
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

  yellow: {
    50: '#FFF7E8',
    200: '#ffde99',
    300: '#FFCD66',
    400: '#FFBD33',
    500: '#FFAD00',
    600: '#DF9700',
    700: '#996700',
    800: '#664500',
    900: '#3f2b00',
  },

  pastel: {
    green: {
      100: '#F5FAF6',
      200: '#E2F3E5',
      300: '#CFEBD5',
      green: '#00ad4eff',
    },
    cyan: {
      100: '#F6FCFC',
      200: '#E5F7F7',
      300: '#C4EEEF',
      cyan: '#29C5CC',
    },
    blue: {
      100: '#F3F8FC',
      200: '#DCEAF8',
      300: '#C5DEF5',
      blue: '#0073D5',
    },
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

  donutGradients: {
    moreThan85: {
      startColor: '#32AC84',
      endColor: '#047E56',
    },
    moreThan65: {
      startColor: '#9BC74B',
      endColor: '#FE9901',
    },
    moreThan0: {
      startColor: '#FF9509',
      endColor: '#FF3B01',
    },
  },

  markerIndicatorColors: {
    marker: {
      red: '#EC647A',
      yellow: '#F8DA53',
      green: '#6DCC9B',
    },
    pointer: {
      red: baseColors.red[700],
      yellow: baseColors.yellow[500],
      green: baseColors.green[700],
    },
    text: {
      red: baseColors.red[700],
      yellow: baseColors.yellow[700],
      green: baseColors.green[800],
      darkMode: {
        red: baseColors.red[50],
        yellow: baseColors.yellow[50],
        green: baseColors.green[50],
      },
    },
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
    darkMode: {
      white: baseColors.grey[900],
      bgPrimary: baseColors.grey[950],
      bgSecondary: baseColors.grey[800],
      bgTeriarty: baseColors.grey[700],
      bgError: '#554545',
    },
  },

  textIcons: {
    textPrimary: baseColors.grey[950],
    textSecondary: baseColors.grey[800],
    textTeriartry: baseColors.grey[700],
    textGrey: baseColors.grey[400],
    contrast: baseColors.grey[50],
    errorLight: baseColors.red[300],
    errorMain: baseColors.red[600],
    errorDark: baseColors.red[700],
    success: baseColors.green[600],
    primary: baseColors.green[900],
    darkMode: {
      textPrimary: baseColors.grey[100],
      textSecondary: baseColors.grey[200],
      textTeriartry: baseColors.grey[300],
      textGrey: baseColors.grey[400],
      contrast: baseColors.grey[50],
      errorLight: baseColors.red[700],
      errorMain: baseColors.red[500],
      errorDark: baseColors.red[50],
      success: baseColors.green[400],
      primary: baseColors.green[100],
    },
  },

  border: {
    default: baseColors.grey[200],
    defaultHover: baseColors.grey[300],
    error: baseColors.red[600],
    borderPrimary: baseColors.green[600],
    success: baseColors.green[600],
    darkMode: {
      default: baseColors.grey[700],
      defaultHover: baseColors.grey[600],
      error: baseColors.red[500],
      borderPrimary: baseColors.green[800],
      success: baseColors.green[600],
    },
    markerInterpretation: {
      borderRed: baseColors.red[200],
      borderYellow: '#FFDE99',
      borderGreen: baseColors.green[100],
      darkMode: {
        borderRed: baseColors.red.second900,
        borderYellow: baseColors.yellow[900],
        borderGreen: baseColors.green[900],
      },
    },
  },

  surface: {
    disabled: {
      disabledLight: baseColors.grey[100],
      disabledDark: baseColors.grey[200],
      darkMode: {
        disabledLight: baseColors.grey[700],
        disabledDark: baseColors.grey[600],
      },
    },
    error: {
      hoverOutlinedButton: baseColors.red[50],
      light: baseColors.red[100],
      default: baseColors.red[600],
      hover: baseColors.red[700],
      darkMode: {
        light: baseColors.red.second900,
        hover: baseColors.red.second900,
      },
    },
    primary: {
      default: baseColors.green[700],
      hoverLight: baseColors.green[50],
      light: baseColors.green[100],
      hover: baseColors.green[800],
      press: baseColors.green[900],
      darkMode: {
        hoverLight: baseColors.green[800],
        light: baseColors.green[800],
        hover: baseColors.green[500],
      },
    },
    cardBackground: {
      cardBgPastelRed: baseColors.red[100],
      cardBgPastelYellow: baseColors.yellow[50],
      cardBgPastelGreen: baseColors.pastel.green[100],
      cardBgPastelBlue: baseColors.pastel.blue[100],
      cardBgPastelCyan: baseColors.pastel.cyan[100],
      cardBgPastelTeal: baseColors.green[50],
      darkMode: {
        cardBgPastelRed: '#7F4D4D',
        cardBgPastelYellow: '#655336',
        cardBgPastelGreen: baseColors.green[1001],
        cardBgPastelBlue: '#344654',
        cardBgPastelCyan: '#365256',
        cardBgPastelTeal: '#3D5645',
      },
    },
    cardBorder: {
      cardBorderPastelBlue: baseColors.pastel.blue[300],
      cardBorderPastelTeal: baseColors.green[200],
      cardBorderPastelGreen: baseColors.pastel.green[300],
      cardBorderPastelCyan: baseColors.pastel.cyan[300],
      darkMode: {
        cardBorderPastelBlue: '#5487AE',
        cardBorderPastelTeal: '#5C8C6B',
        cardBorderPastelGreen: '#6D9175',
        cardBorderPastelCyan: '#548289',
      },
    },
    cardIcon: {
      cardIconGreen: baseColors.pastel.green[200],
      cardIconBlue: baseColors.pastel.blue[200],
      cardIconCyan: baseColors.pastel.cyan[200],
      cardIconTeal: baseColors.green[100],
      darkMode: {
        cardIconGreen: baseColors.green[1001],
        cardIconBlue: '#85A6BF',
        cardIconCyan: '#59848A',
        cardIconTeal: '#74A682',
      },
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

      yellow: {
        50: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };

      pastel: {
        green: {
          100: string;
          200: string;
          300: string;
          green: string;
        };
        cyan: {
          100: string;
          200: string;
          300: string;
          cyan: string;
        };
        blue: {
          100: string;
          200: string;
          300: string;
          blue: string;
        };
      };
    };
    markerIndicatorColors: {
      marker: {
        red: string;
        yellow: string;
        green: string;
      };
      pointer: {
        red: string;
        yellow: string;
        green: string;
      };
      text: {
        red: string;
        yellow: string;
        green: string;
        darkMode: {
          red: string;
          yellow: string;
          green: string;
        };
      };
    };

    donutGradients: {
      moreThan85: {
        startColor: string;
        endColor: string;
      };
      moreThan65: {
        startColor: string;
        endColor: string;
      };
      moreThan0: {
        startColor: string;
        endColor: string;
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
      darkMode: {
        white: string;
        bgPrimary: string;
        bgSecondary: string;
        bgTeriarty: string;
        bgError: string;
        darkMode: {
          textPrimary: string;
          textSecondary: string;
          textTeriartry: string;
          textGrey: string;
          contrast: string;
          errorLight: string;
          errorMain: string;
          errorDark: string;
          success: string;
          primary: string;
        };
      };
    };
    textIcons: {
      textPrimary: string;
      textSecondary: string;
      textTeriartry: string;
      textGrey: string;
      contrast: string;
      errorLight: string;
      errorMain: string;
      errorDark: string;
      success: string;
      primary: string;
      darkMode: {
        textPrimary: string;
        textSecondary: string;
        textTeriartry: string;
        textGrey: string;
        contrast: string;
        errorLight: string;
        errorMain: string;
        errorDark: string;
        success: string;
        primary: string;
      };
    };

    border: {
      default: string;
      defaultHover: string;
      error: string;
      borderPrimary: string;
      success: string;
      darkMode: {
        default: string;
        defaultHover: string;
        error: string;
        borderPrimary: string;
        success: string;
      };
      markerInterpretation: {
        borderRed: string;
        borderYellow: string;
        borderGreen: string;
        darkMode: {
          borderRed: string;
          borderYellow: string;
          borderGreen: string;
        };
      };
    };

    surface: {
      disabled: {
        disabledLight: string;
        disabledDark: string;
        darkMode: {
          disabledLight: string;
          disabledDark: string;
        };
      };
      error: {
        hoverOutlinedButton: string;
        light: string;
        default: string;
        hover: string;
        darkMode: {
          light: string;
          hover: string;
        };
      };
      primary: {
        default: string;
        hoverLight: string;
        light: string;
        hover: string;
        press: string;
        darkMode: {
          hoverLight: string;
          light: string;
          hover: string;
        };
      };
      cardBackground: {
        cardBgPastelRed: string;
        cardBgPastelYellow: string;
        cardBgPastelGreen: string;
        cardBgPastelBlue: string;
        cardBgPastelCyan: string;
        cardBgPastelTeal: string;
        darkMode: {
          cardBgPastelRed: string;
          cardBgPastelYellow: string;
          cardBgPastelGreen: string;
          cardBgPastelBlue: string;
          cardBgPastelCyan: string;
          cardBgPastelTeal: string;
        };
      };

      cardBorder: {
        cardBorderPastelBlue: string;
        cardBorderPastelTeal: string;
        cardBorderPastelGreen: string;
        cardBorderPastelCyan: string;
        darkMode: {
          cardBorderPastelBlue: string;
          cardBorderPastelTeal: string;
          cardBorderPastelGreen: string;
          cardBorderPastelCyan: string;
        };
      };

      cardIcon: {
        cardIconGreen: string;
        cardIconBlue: string;
        cardIconCyan: string;
        cardIconTeal: string;
        darkMode: {
          cardIconGreen: string;
          cardIconBlue: string;
          cardIconCyan: string;
          cardIconTeal: string;
        };
      };
    };

    gradient1: string;
    gradient2: string;
    gradient3: string;
    gradient4: string;

    globalColors: {
      primaryGreen: string;
      textGray: string;
    };
  }
  interface PaletteOptions {
    iconColors: {
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

      yellow?: {
        50?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
      };

      pastel: {
        green: {
          100: string;
          200: string;
          300: string;
          green: string;
        };
        cyan: {
          100: string;
          200: string;
          300: string;
          cyan: string;
        };
        blue: {
          100: string;
          200: string;
          300: string;
          blue: string;
        };
      };
    };

    donutGradients: {
      moreThan85: {
        startColor?: string;
        endColor?: string;
      };
      moreThan65: {
        startColor?: string;
        endColor?: string;
      };
      moreThan0: {
        startColor?: string;
        endColor?: string;
      };
    };

    markerIndicatorColors?: {
      marker?: {
        red?: string;
        yellow?: string;
        green?: string;
      };
      pointer?: {
        red?: string;
        yellow?: string;
        green?: string;
      };
      text?: {
        red?: string;
        yellow?: string;
        green?: string;
        darkMode: {
          red?: string;
          yellow?: string;
          green?: string;
        };
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
      darkMode: {
        white?: string;
        bgPrimary?: string;
        bgSecondary?: string;
        bgTeriarty?: string;
        bgError?: string;
      };
    };

    textIcons?: {
      textPrimary?: string;
      textSecondary?: string;
      textTeriartry?: string;
      textGrey?: string;
      contrast?: string;
      errorLight?: string;
      errorMain?: string;
      errorDark?: string;
      success?: string;
      primary?: string;
      darkMode: {
        textPrimary?: string;
        textSecondary?: string;
        textTeriartry?: string;
        textGrey?: string;
        contrast?: string;
        errorLight?: string;
        errorMain?: string;
        errorDark?: string;
        success?: string;
        primary?: string;
      };
    };

    border?: {
      default?: string;
      defaultHover?: string;
      error?: string;
      borderPrimary?: string;
      success?: string;
      darkMode: {
        default?: string;
        defaultHover?: string;
        error?: string;
        borderPrimary?: string;
        success?: string;
      };
      markerInterpretation?: {
        borderRed?: string;
        borderYellow?: string;
        borderGreen?: string;
        darkMode: {
          borderRed?: string;
          borderYellow?: string;
          borderGreen?: string;
        };
      };
    };

    surface?: {
      disabled?: {
        disabledLight?: string;
        disabledDark?: string;
        darkMode?: {
          disabledLight?: string;
          disabledDark?: string;
        };
      };
      error?: {
        hoverOutlinedButton?: string;
        light?: string;
        default?: string;
        hover?: string;
        darkMode?: {
          light?: string;
          hover?: string;
        };
      };
      primary?: {
        default?: string;
        hoverLight?: string;
        light?: string;
        hover?: string;
        press?: string;
        darkMode?: {
          hoverLight?: string;
          light?: string;
          hover?: string;
        };
      };
      cardBackground?: {
        cardBgPastelRed?: string;
        cardBgPastelYellow?: string;
        cardBgPastelGreen?: string;
        cardBgPastelBlue?: string;
        cardBgPastelCyan?: string;
        cardBgPastelTeal?: string;
        darkMode?: {
          cardBgPastelRed?: string;
          cardBgPastelYellow?: string;
          cardBgPastelGreen?: string;
          cardBgPastelBlue?: string;
          cardBgPastelCyan?: string;
          cardBgPastelTeal?: string;
        };
      };

      cardBorder?: {
        cardBorderPastelBlue?: string;
        cardBorderPastelTeal?: string;
        cardBorderPastelGreen?: string;
        cardBorderPastelCyan?: string;
        darkMode?: {
          cardBorderPastelBlue?: string;
          cardBorderPastelTeal?: string;
          cardBorderPastelGreen?: string;
          cardBorderPastelCyan?: string;
        };
      };

      cardIcon?: {
        cardIconGreen?: string;
        cardIconBlue?: string;
        cardIconCyan?: string;
        cardIconTeal?: string;
        darkMode?: {
          cardIconGreen?: string;
          cardIconBlue?: string;
          cardIconCyan?: string;
          cardIconTeal?: string;
        };
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
