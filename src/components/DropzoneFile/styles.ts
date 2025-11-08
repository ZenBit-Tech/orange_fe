import { Box, Button, LinearProgress, Stack, Typography, styled } from '@mui/material';

import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Upload } from 'lucide-react';

export const TextClick = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons?.textPrimary,
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size14,
}));

export const TextSupport = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons?.textTeriartry,
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size14,
}));

export const BrowseButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontFamily: theme.typography.general.fontInter,
  fontSize: theme.typography.sizes.size14,
  textTransform: 'none',
  padding: '4px 10px',
  borderRadius: '8px',
}));

export const StyledUploadIcon = styled(Upload)(({ theme }) => ({
  color: theme.palette.baseColors.green[700],
  fontSize: theme.spacing(3),
  marginBottom: theme.spacing(1),
}));

export const StyledCloseIcon = styled(IoIosCloseCircleOutline)(({ theme }) => ({
  fontSize: theme.spacing(3),
}));

export const FileWrapper = styled(Box)`
  width: 100%;
`;

export const FileItemContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(2),
  overflow: 'hidden',
}));

export const FileIconContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.2),
  minWidth: '40px',
}));

export const FileInfoContainer = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  textAlign: 'left',
});

export const FileTextSecondary = styled(Typography)(({ theme }) => ({
  color: theme.palette.textIcons?.textTeriartry,
  fontFamily: theme.typography.general.fontInter,
}));

export const RejectedText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

export const ProgressContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const BoxProgress = styled(Box)(({ theme }) => ({
  width: '100%',
  marginRight: theme.spacing(1),
}));

export const StyledLinearProgress = styled(LinearProgress)({
  height: 6,
  borderRadius: 5,
});

export const StatusText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontSize: theme.typography.sizes.size14,
}));

export const DropzoneArea = styled(Box)<{ $isUploading: boolean; $hasFiles: boolean }>(
  ({ theme, $isUploading, $hasFiles }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: theme.palette.baseColors.green[600],
    borderStyle: 'dashed',
    backgroundColor: theme.palette.backgrounds.bgSecondary,
    color: theme.palette.text.secondary,
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
    minHeight: 180,
    textAlign: 'center',
    boxSizing: 'border-box',
    ...($hasFiles && {
      height: '94px',
      minHeight: '94px',
      borderColor: theme.palette.baseColors.grey[200],
      borderStyle: 'solid',
    }),
    ...($isUploading && {
      height: '94px',
      minHeight: '94px',
      cursor: 'progress',
      borderColor: theme.palette.baseColors.grey[200],
      borderStyle: 'solid',
    }),
    [theme.breakpoints.up('md')]: {
      width: '846px',
      height: '228px',
      minHeight: 200,

      ...($hasFiles && {
        height: '94px',
        minHeight: '94px',
        borderColor: theme.palette.baseColors.grey[200],
        borderStyle: 'solid',
      }),
      ...($isUploading && {
        height: '94px',
        minHeight: '94px',
        cursor: 'progress',
        borderColor: theme.palette.baseColors.grey[200],
        borderStyle: 'solid',
      }),
    },
  }),
);
