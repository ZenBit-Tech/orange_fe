import { type Theme } from '@mui/material/styles';
import { type CSSObject } from '@mui/system';

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
  '.MuiTypography-root, .MuiTypography-body1, .MuiTypography-body2, .MuiTypography-subtitle1, .MuiTypography-subtitle2,.MuiTypography-button':
    {
      fontFamily: `${theme.typography.general.fontInter} !important`,
      fontWeight: `${theme.typography.weights.weight400} !important`,
    },
  '.MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6':
    {
      fontFamily: `${theme.typography.general.fontPoppins} !important`,
      fontWeight: `${theme.typography.weights.weight400} !important`,
    },
  '.MuiTypography-h1': {
    fontSize: `${theme.typography.sizes.size96} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size34} !important`,
    },
  },
  '.MuiTypography-h2': {
    fontSize: `${theme.typography.sizes.size60} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size34} !important`,
    },
  },
  '.MuiTypography-h3': {
    fontSize: `${theme.typography.sizes.size48} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size24} !important`,
    },
  },
  '.MuiTypography-h4': {
    fontSize: `${theme.typography.sizes.size34} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size20} !important`,
    },
  },
  '.MuiTypography-h5': {
    fontSize: `${theme.typography.sizes.size24} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size18} !important`,
    },
  },
  '.MuiTypography-h6': {
    fontSize: `${theme.typography.sizes.size18} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size16} !important`,
    },
  },
  '.MuiTypography-body1': {
    fontSize: `${theme.typography.sizes.size16} !important`,
  },
  '.MuiTypography-body2': {
    fontSize: `${theme.typography.sizes.size14} !important`,
  },
  '.MuiTypography-subtitle1': {
    fontSize: `${theme.typography.sizes.size18} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: `${theme.typography.sizes.size16} !important`,
    },
  },
  '.MuiTypography-subtitle2': {
    fontSize: `${theme.typography.sizes.size14} !important`,
  },
});
