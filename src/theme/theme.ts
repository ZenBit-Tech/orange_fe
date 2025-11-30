import { createTheme } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

export const getThemeColors = (isDarkMode: boolean) => {
  return {
    backgrounds: {
      ...palette.backgrounds,
      white: isDarkMode ? palette.backgrounds?.darkMode?.white : palette.backgrounds?.white,
      bgPrimary: isDarkMode
        ? palette.backgrounds?.darkMode?.bgPrimary
        : palette.backgrounds?.bgPrimary,
      bgPrivacy: isDarkMode ? palette.backgrounds?.bgPrivacyDark : palette.backgrounds?.bgPrivacy,
      bgLandingSection: isDarkMode
        ? palette.backgrounds?.bgLandingSectionDark
        : palette.backgrounds?.bgLandingSection,
      bgSecondary: isDarkMode
        ? palette.backgrounds?.darkMode?.bgSecondary
        : palette.backgrounds?.bgSecondary,
      bgTeriarty: isDarkMode
        ? palette.backgrounds?.darkMode?.bgTeriarty
        : palette.backgrounds?.bgTeriarty,
      bgError: isDarkMode ? palette.backgrounds?.darkMode?.bgError : palette.backgrounds?.bgError,
      darkMode: {
        white: palette.backgrounds?.darkMode?.white,
        bgPrimary: palette.backgrounds?.darkMode?.bgPrimary,
        bgSecondary: palette.backgrounds?.darkMode?.bgSecondary,
        bgTeriarty: palette.backgrounds?.darkMode?.bgTeriarty,
        bgError: palette.backgrounds?.darkMode?.bgError,
      },
    },
    textIcons: {
      ...palette.textIcons,
      textPrimary: isDarkMode
        ? palette.textIcons?.darkMode?.textPrimary
        : palette.textIcons?.textPrimary,
      textSecondary: isDarkMode
        ? palette.textIcons?.darkMode?.textSecondary
        : palette.textIcons?.textSecondary,
      textTeriartry: isDarkMode
        ? palette.textIcons?.darkMode?.textTeriartry
        : palette.textIcons?.textTeriartry,
      textGrey: isDarkMode ? palette.textIcons?.darkMode?.textGrey : palette.textIcons?.textGrey,
      contrast: isDarkMode
        ? palette.textIcons?.darkMode?.contrast
        : palette.surface?.primary?.hoverLight,
      errorLight: isDarkMode
        ? palette.textIcons?.darkMode?.errorLight
        : palette.textIcons?.errorLight,
      errorMain: isDarkMode ? palette.textIcons?.darkMode?.errorMain : palette.textIcons?.errorMain,
      errorDark: isDarkMode ? palette.textIcons?.darkMode?.errorDark : palette.textIcons?.errorDark,
      success: isDarkMode ? palette.textIcons?.darkMode?.success : palette.textIcons?.success,
      primary: isDarkMode ? palette.textIcons?.darkMode?.primary : palette.textIcons?.primary,
      darkMode: {
        textPrimary: palette.textIcons?.darkMode?.textPrimary,
        textSecondary: palette.textIcons?.darkMode?.textSecondary,
        textTeriartry: palette.textIcons?.darkMode?.textTeriartry,
        textGrey: palette.textIcons?.darkMode?.textGrey,
        contrast: palette.textIcons?.darkMode?.contrast,
        errorLight: palette.textIcons?.darkMode?.errorLight,
        errorMain: palette.textIcons?.darkMode?.errorMain,
        errorDark: palette.textIcons?.darkMode?.errorDark,
        success: palette.textIcons?.darkMode?.success,
        primary: palette.textIcons?.darkMode?.primary,
      },
    },
    border: {
      ...palette.border,
      default: isDarkMode ? palette.border?.darkMode?.default : palette.border?.default,
      defaultHover: isDarkMode
        ? palette.border?.darkMode?.defaultHover
        : palette.border?.defaultHover,
      error: isDarkMode ? palette.border?.darkMode?.error : palette.border?.error,
      borderPrimary: isDarkMode
        ? palette.border?.darkMode?.borderPrimary
        : palette.border?.borderPrimary,
      success: isDarkMode ? palette.border?.darkMode?.success : palette.border?.success,
      darkMode: {
        default: palette.border?.darkMode?.default,
        defaultHover: palette.border?.darkMode?.defaultHover,
        error: palette.border?.darkMode?.error,
        borderPrimary: palette.border?.darkMode?.borderPrimary,
        success: palette.border?.darkMode?.success,
      },
      markerInterpretation: {
        borderRed: isDarkMode
          ? palette.border?.markerInterpretation?.darkMode?.borderRed
          : palette.border?.markerInterpretation?.borderRed,
        borderYellow: isDarkMode
          ? palette.border?.markerInterpretation?.darkMode?.borderYellow
          : palette.border?.markerInterpretation?.borderYellow,
        borderGreen: isDarkMode
          ? palette.border?.markerInterpretation?.darkMode?.borderGreen
          : palette.border?.markerInterpretation?.borderGreen,
        darkMode: {
          borderRed: palette.border?.markerInterpretation?.darkMode?.borderRed,
          borderYellow: palette.border?.markerInterpretation?.darkMode?.borderYellow,
          borderGreen: palette.border?.markerInterpretation?.darkMode?.borderGreen,
        },
      },
    },
    surface: {
      disabled: {
        disabledLight: isDarkMode
          ? palette.surface?.disabled?.darkMode?.disabledLight
          : palette.surface?.disabled?.disabledLight,
        disabledDark: isDarkMode
          ? palette.surface?.disabled?.darkMode?.disabledDark
          : palette.surface?.disabled?.disabledDark,
        darkMode: {
          disabledLight: palette.surface?.disabled?.darkMode?.disabledLight,
          disabledDark: palette.surface?.disabled?.darkMode?.disabledDark,
        },
      },
      error: {
        ...palette.surface?.error,
        light: isDarkMode ? palette.surface?.error?.darkMode?.light : palette.surface?.error?.light,
        hover: isDarkMode ? palette.surface?.error?.darkMode?.hover : palette.surface?.error?.hover,
        darkMode: {
          light: palette.surface?.error?.darkMode?.light,
          hover: palette.surface?.error?.darkMode?.hover,
        },
      },
      primary: {
        ...palette.surface?.primary,
        hoverLight: isDarkMode
          ? palette.surface?.primary?.darkMode?.hoverLight
          : palette.surface?.primary?.hoverLight,
        light: isDarkMode
          ? palette.surface?.primary?.darkMode?.light
          : palette.surface?.primary?.light,
        hover: isDarkMode
          ? palette.surface?.primary?.darkMode?.hover
          : palette.surface?.primary?.hover,
        darkMode: {
          hoverLight: palette.surface?.primary?.darkMode?.hoverLight,
          light: palette.surface?.primary?.darkMode?.light,
          hover: palette.surface?.primary?.darkMode?.hover,
        },
      },
      cardBackground: {
        cardBgPastelRed: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelRed
          : palette.surface?.cardBackground?.cardBgPastelRed,
        cardBgPastelYellow: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelYellow
          : palette.surface?.cardBackground?.cardBgPastelYellow,
        cardBgPastelGreen: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelGreen
          : palette.surface?.cardBackground?.cardBgPastelGreen,
        cardBgPastelBlue: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelBlue
          : palette.surface?.cardBackground?.cardBgPastelBlue,
        cardBgPastelCyan: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelCyan
          : palette.surface?.cardBackground?.cardBgPastelCyan,
        cardBgPastelTeal: isDarkMode
          ? palette.surface?.cardBackground?.darkMode?.cardBgPastelTeal
          : palette.surface?.cardBackground?.cardBgPastelTeal,
        darkMode: {
          cardBgPastelRed: palette.surface?.cardBackground?.darkMode?.cardBgPastelRed,
          cardBgPastelYellow: palette.surface?.cardBackground?.darkMode?.cardBgPastelYellow,
          cardBgPastelGreen: palette.surface?.cardBackground?.darkMode?.cardBgPastelGreen,
          cardBgPastelBlue: palette.surface?.cardBackground?.darkMode?.cardBgPastelBlue,
          cardBgPastelCyan: palette.surface?.cardBackground?.darkMode?.cardBgPastelCyan,
          cardBgPastelTeal: palette.surface?.cardBackground?.darkMode?.cardBgPastelTeal,
        },
      },
      cardBorder: {
        cardBorderPastelBlue: isDarkMode
          ? palette.surface?.cardBorder?.darkMode?.cardBorderPastelBlue
          : palette.surface?.cardBorder?.cardBorderPastelBlue,
        cardBorderPastelTeal: isDarkMode
          ? palette.surface?.cardBorder?.darkMode?.cardBorderPastelTeal
          : palette.surface?.cardBorder?.cardBorderPastelTeal,
        cardBorderPastelGreen: isDarkMode
          ? palette.surface?.cardBorder?.darkMode?.cardBorderPastelGreen
          : palette.surface?.cardBorder?.cardBorderPastelGreen,
        cardBorderPastelCyan: isDarkMode
          ? palette.surface?.cardBorder?.darkMode?.cardBorderPastelCyan
          : palette.surface?.cardBorder?.cardBorderPastelCyan,
        darkMode: {
          cardBorderPastelBlue: palette.surface?.cardBorder?.darkMode?.cardBorderPastelBlue,
          cardBorderPastelTeal: palette.surface?.cardBorder?.darkMode?.cardBorderPastelTeal,
          cardBorderPastelGreen: palette.surface?.cardBorder?.darkMode?.cardBorderPastelGreen,
          cardBorderPastelCyan: palette.surface?.cardBorder?.darkMode?.cardBorderPastelCyan,
        },
      },
      cardIcon: {
        cardIconGreen: isDarkMode
          ? palette.surface?.cardIcon?.darkMode?.cardIconGreen
          : palette.surface?.cardIcon?.cardIconGreen,
        cardIconBlue: isDarkMode
          ? palette.surface?.cardIcon?.darkMode?.cardIconBlue
          : palette.surface?.cardIcon?.cardIconBlue,
        cardIconCyan: isDarkMode
          ? palette.surface?.cardIcon?.darkMode?.cardIconCyan
          : palette.surface?.cardIcon?.cardIconCyan,
        cardIconTeal: isDarkMode
          ? palette.surface?.cardIcon?.darkMode?.cardIconTeal
          : palette.surface?.cardIcon?.cardIconTeal,
        darkMode: {
          cardIconGreen: palette.surface?.cardIcon?.darkMode?.cardIconGreen,
          cardIconBlue: palette.surface?.cardIcon?.darkMode?.cardIconBlue,
          cardIconCyan: palette.surface?.cardIcon?.darkMode?.cardIconCyan,
          cardIconTeal: palette.surface?.cardIcon?.darkMode?.cardIconTeal,
        },
      },
    },
    markerIndicatorColors: {
      ...palette.markerIndicatorColors,
      text: {
        red: isDarkMode
          ? palette.markerIndicatorColors?.text?.darkMode?.red
          : palette.markerIndicatorColors?.text?.red,
        yellow: isDarkMode
          ? palette.markerIndicatorColors?.text?.darkMode?.yellow
          : palette.markerIndicatorColors?.text?.yellow,
        green: isDarkMode
          ? palette.markerIndicatorColors?.text?.darkMode?.green
          : palette.markerIndicatorColors?.text?.green,
        darkMode: {
          red: palette.markerIndicatorColors?.text?.darkMode?.red,
          yellow: palette.markerIndicatorColors?.text?.darkMode?.yellow,
          green: palette.markerIndicatorColors?.text?.darkMode?.green,
        },
      },
    },
  };
};

export const createAppTheme = (isDarkMode: boolean) => {
  const themeColors = getThemeColors(isDarkMode);

  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...palette,
      backgrounds: themeColors.backgrounds,
      textIcons: themeColors.textIcons,
      border: themeColors.border,
      surface: themeColors.surface,
      markerIndicatorColors: themeColors.markerIndicatorColors,
    },
    typography: typography,
  });
};
