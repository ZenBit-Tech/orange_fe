import { IconButton, Typography } from '@mui/material';

import { MdOutlineInsertDriveFile as FileIcon } from 'react-icons/md';

import type { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

import { UPLOAD_STATUS, type UploadStatus } from '../UploadStep/useUploadStep';
import {
  BoxProgress,
  BrowseButton,
  DropzoneArea,
  FileIconContainer,
  FileInfoContainer,
  FileItemContainer,
  FileTextSecondary,
  FileWrapper,
  ProgressContainer,
  RejectedText,
  StatusText,
  StyledCloseIcon,
  StyledLinearProgress,
  StyledUploadIcon,
  TextClick,
  TextSupport,
} from './styles';
import { useDropzoneFile } from './useDropzoneFile';

interface StatusDisplay {
  text: string;
  color: string;
}

interface DropzoneFileProps {
  getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
  getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
  hasFiles: boolean;
  isUploading: boolean;
  files: File[];
  uploadProgress: Record<string, number>;
  uploadStatus: UploadStatus;
  errorMessage: string;
  statusDisplay: StatusDisplay;
  handleRemoveFile: (fileName?: string, e?: React.MouseEvent) => void;
}

export const DropzoneFile: React.FC<DropzoneFileProps> = ({
  getRootProps,
  getInputProps,
  hasFiles,
  isUploading,
  files,
  uploadProgress,
  uploadStatus,
  errorMessage,
  statusDisplay,
  handleRemoveFile,
}) => {
  const { formatBytes, t } = useDropzoneFile();
  return (
    <DropzoneArea {...getRootProps()} $hasFiles={hasFiles} $isUploading={isUploading}>
      <input {...getInputProps()} />

      {!hasFiles ? (
        <>
          <StyledUploadIcon />
          <TextClick variant="body2">{t('Upload.drag-and-drop')}</TextClick>
          <TextSupport variant="body2">{t('Upload.supports')}</TextSupport>
          <BrowseButton variant="outlined" color="success">
            {t('Upload.button')}
          </BrowseButton>
        </>
      ) : (
        <FileWrapper onClick={(e) => e.stopPropagation()}>
          {files.map((file) => {
            const progress = uploadProgress[file.name] || 0;
            const fileExtension = file.name.split('.').pop()?.toUpperCase() || 'FILE';
            return (
              <FileItemContainer key={file.name}>
                <FileIconContainer>
                  <FileIcon color="action" fontSize="large" />
                  <Typography variant="subtitle2">{fileExtension}</Typography>
                </FileIconContainer>
                <FileInfoContainer>
                  <Typography variant="body2">{file.name}</Typography>
                  <FileTextSecondary variant="body2">{formatBytes(file.size)}</FileTextSecondary>
                  {uploadStatus === UPLOAD_STATUS.Rejected ? (
                    <RejectedText variant="caption" color="error">
                      {errorMessage}
                    </RejectedText>
                  ) : (
                    <>
                      {isUploading && (
                        <ProgressContainer>
                          <BoxProgress>
                            <StyledLinearProgress
                              variant="determinate"
                              value={progress}
                              color={
                                uploadStatus === UPLOAD_STATUS.Error
                                  ? UPLOAD_STATUS.Error
                                  : UPLOAD_STATUS.Success
                              }
                            />
                          </BoxProgress>
                        </ProgressContainer>
                      )}
                      <StatusText
                        variant="caption"
                        sx={{ color: isUploading ? 'textSecondary' : statusDisplay.color }}
                      >
                        {isUploading
                          ? `${t('Upload.button-uploading')} ${progress}%`
                          : statusDisplay.text}
                      </StatusText>
                    </>
                  )}
                </FileInfoContainer>
                <IconButton size="small" onClick={(e) => handleRemoveFile(file.name, e)}>
                  <StyledCloseIcon />
                </IconButton>
              </FileItemContainer>
            );
          })}
        </FileWrapper>
      )}
    </DropzoneArea>
  );
};
