import { Typography } from '@mui/material';

import { DropzoneFile } from '../DropzoneFile';
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

  const { validateBloodTestData } = useBloodTestValidation();

  const handleContinue = () => {
    if (uploadStatus === UPLOAD_STATUS.Success && !isUploading) {
      validateBloodTestData();
      onContinue();
    }
  };

  return (
    <WrapperUpload>
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
          disabled={uploadStatus !== UPLOAD_STATUS.Success}
        >
          {isUploading ? t('Upload.button-uploading') : t('Upload.button-continue')}
        </StyledButton>
      </ButtonContainer>
    </WrapperUpload>
  );
};
