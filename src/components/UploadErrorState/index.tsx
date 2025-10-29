import React from 'react';

import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import { StyledButton, StyledIcon, StyledTypography } from './styles';

interface UploadErrorStateProps {
  onRetry: () => void;
}

export const UploadErrorState: React.FC<UploadErrorStateProps> = ({ onRetry }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledIcon />
      <Typography variant="h5">
        {t('Upload.validationErrorTitle', "This doesn't seem to be a blood test report")}
      </Typography>
      <StyledTypography variant="body1">{t('Upload.upload-error-title')}</StyledTypography>
      <StyledButton variant="outlined" onClick={onRetry}>
        {t('Upload.button-upload-different', 'Upload a different file')}
      </StyledButton>
    </>
  );
};
