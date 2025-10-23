import { Box, Button, LinearProgress, Stack, Typography, styled } from '@mui/material';

export const BrowseButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textTransform: 'none',
  borderRadius: '8px',
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

export const FileExtensionText = styled(Typography)({
  fontWeight: 'bold',
});

export const FileInfoContainer = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
});

export const FileTextSecondary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
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
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.uploadColors.borderColor,
    borderStyle: 'dashed',
    backgroundColor: theme.palette.uploadColors.backgroundColorSecondary,
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
    }),
    ...($isUploading && {
      height: '94px',
      minHeight: '94px',
      cursor: 'progress',
    }),
    [theme.breakpoints.up('md')]: {
      width: '846px',
      height: '228px',
      minHeight: 200,

      ...($hasFiles && {
        height: '94px',
        minHeight: '94px',
      }),
      ...($isUploading && {
        height: '94px',
        minHeight: '94px',
        cursor: 'progress',
      }),
    },
  }),
);
