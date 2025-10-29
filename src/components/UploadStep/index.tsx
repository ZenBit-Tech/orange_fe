import { Typography } from '@mui/material';

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

  const { validateBloodTestData, isValidating, error, clearValidationError } =
    useBloodTestValidation();

  const handleContinue = async () => {
    if (uploadStatus === UPLOAD_STATUS.Success && !isUploading && !isValidating) {
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
          visible={true}
          progress={0}
          titleKey="spinner.validatingTitle"
          descriptionKey="spinner.validatingDescription"
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
              disabled={uploadStatus !== UPLOAD_STATUS.Success || isValidating}
            >
              {isUploading ? t('Upload.button-uploading') : t('Upload.button-continue')}
            </StyledButton>
          </ButtonContainer>
        </>
      )}
    </WrapperUpload>
  );
};
