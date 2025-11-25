import { type Theme } from '@mui/material/styles';
import type { CSSObject } from '@mui/system';

export const globalStyle = (theme: Theme): Record<string, CSSObject> => ({
  html: {
    scrollBehavior: 'smooth',
  },
  'html, body, #root': {
    height: '100%',
    margin: 0,
    padding: 0,
  },
  body: {
    fontWeight: theme.typography.weights.weight400,
    color: theme.palette.textIcons.textPrimary,
    lineHeight: 1.5,
    backgroundColor: theme.palette.backgrounds.white,
    minWidth: '320px',
  },
  a: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  li: {
    fontFamily: theme.typography.general.fontInter,
    fontWeight: theme.typography.weights.weight400,
  },
  '.MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6':
    {
      fontFamily: theme.typography.general.fontPoppins,
      fontWeight: theme.typography.weights.weight400,
    },
  '.MuiTypography-root, .MuiTypography-body1, .MuiTypography-body2, .MuiTypography-subtitle1, .MuiTypography-subtitle2,.MuiTypography-button':
    {
      fontFamily: theme.typography.general.fontInter,
      fontWeight: theme.typography.weights.weight400,
    },
  '.MuiTypography-h1': {
    fontSize: theme.typography.sizes.size96,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size34,
    },
  },
  '.MuiTypography-h2': {
    fontSize: theme.typography.sizes.size60,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size34,
    },
  },
  '.MuiTypography-h3': {
    fontSize: theme.typography.sizes.size48,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size24,
    },
  },
  '.MuiTypography-h4': {
    fontSize: theme.typography.sizes.size34,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size20,
    },
  },
  '.MuiTypography-h5': {
    fontSize: theme.typography.sizes.size24,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size18,
    },
  },
  '.MuiTypography-h6': {
    fontSize: theme.typography.sizes.size18,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size16,
    },
  },
  '.MuiTypography-body1': {
    fontSize: theme.typography.sizes.size16,
  },
  '.MuiTypography-body2': {
    fontSize: theme.typography.sizes.size14,
  },
  '.MuiTypography-subtitle1': {
    fontSize: theme.typography.sizes.size18,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.sizes.size16,
    },
  },
  '.MuiTypography-subtitle2': {
    fontSize: theme.typography.sizes.size14,
  },
});
