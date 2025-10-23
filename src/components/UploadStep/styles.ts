import { Box, Button, LinearProgress, Stack, Typography, styled } from '@mui/material';

export const WrapperUpload = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  padding: theme.spacing(4, 2),
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderRadius: 20,
  borderWidth: 2,
  borderColor: theme.palette.uploadColors.borderColorPrimary,
  backgroundColor: theme.palette.uploadColors.backgroundColorPrimary,
  alignItems: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
  '& .MuiTypography-body1': {
    color: theme.palette.text.secondary,
    alignItems: 'center',
    marginBottom: 16,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '48px',
    paddingBottom: '5px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

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

export const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '15px',
  padding: theme.spacing(0, 2),
  boxSizing: 'border-box',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    margin: '15px',
    padding: 0,
  },
}));

export const Spacer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    flex: '1 1 auto',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.stepperColors.buttonColor,
  width: '192px',
  height: '42px',
  borderRadius: '12px',
  [theme.breakpoints.up('md')]: {
    width: '192px',
  },
}));
