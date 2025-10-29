import { useState } from 'react';

import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import type { RootState } from '@/store';

import { DropzoneFile } from '../DropzoneFile';
import { OCRSpinner } from '../ProgressIndicator';
import { UploadErrorState } from '../UploadErrorState';
import { ButtonContainer, Spacer, StyledButton, WrapperUpload } from './styles';
import { useBloodTestValidation } from './useBloodTestValidation';
import { UPLOAD_STATUS, useUploadStep } from './useUploadStep';

interface UploadStepProps {
  onContinue: () => void;
}

export const UploadStep: React.FC<UploadStepProps> = ({ onContinue }) => {
  const { validateBloodTestData, isValidating, error, clearValidationError } =
    useBloodTestValidation();

  const extractedData = useSelector((state: RootState) => state.bloodTest.extractedData);

  const {
    files,
    isUploading,
    uploadStatus,
    uploadProgress,
    hasFiles,
    getRootProps,
    errorMessage,
    getInputProps,
    statusDisplay,
    handleRemoveFile,
    t,
  } = useUploadStep();

  const handleContinue = async () => {
    if (uploadStatus === UPLOAD_STATUS.Success && !isUploading && !isValidating && extractedData) {
      const isSuccess = await validateBloodTestData();

      if (isSuccess) {
        onContinue();
      }
    }
  };

  const handleRetryUpload = () => {
    clearValidationError();

    if (files.length > 0) {
      handleRemoveFile(files[0].name);
    }
  };

  return (
    <WrapperUpload>
      {error && <UploadErrorState onRetry={handleRetryUpload} />}
      {isValidating && (
        <OCRSpinner
           isLoading={true}
        />
      )}
      {!error && !isValidating && (
        <>
          <Typography variant="h5">{t('Upload.title')}</Typography>
          <Typography variant="body1">{t('Upload.description')}</Typography>
          <DropzoneFile
            files={files}
            uploadProgress={uploadProgress}
            hasFiles={hasFiles}
            isUploading={isUploading}
            uploadStatus={uploadStatus}
            getRootProps={getRootProps}
            errorMessage={errorMessage}
            getInputProps={getInputProps}
            statusDisplay={statusDisplay}
            handleRemoveFile={handleRemoveFile}
          />
          <ButtonContainer>
            <Spacer />
            <StyledButton
              variant="contained"
              onClick={handleContinue}
              size="large"
              disabled={extractedData ? uploadStatus !== UPLOAD_STATUS.Success : true}
            >
              {extractedData ? t('Upload.button-uploading') : t('Upload.button-continue')}
            </StyledButton>
          </ButtonContainer>
        </>
      )}
    </WrapperUpload>
  );
};
