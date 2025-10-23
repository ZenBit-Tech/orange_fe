import { IconButton, Typography } from '@mui/material';

import { GrUpload } from 'react-icons/gr';
import { IoIosCloseCircleOutline as CloseIcon } from 'react-icons/io';
import { MdOutlineInsertDriveFile as FileIcon } from 'react-icons/md';

import type { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

import type { UploadStatus } from '../UploadStep/useUploadStep';
import {
  BoxProgress,
  BrowseButton,
  DropzoneArea,
  FileExtensionText,
  FileIconContainer,
  FileInfoContainer,
  FileItemContainer,
  FileTextSecondary,
  FileWrapper,
  ProgressContainer,
  RejectedText,
  StatusText,
  StyledLinearProgress,
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
  handleRemoveFile: (fileName: string, e: React.MouseEvent) => void;
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
          <GrUpload color="rgba(0, 153, 102, 1)" size={24} />
          <Typography variant="body2">{t('Upload.drag-and-drop')}</Typography>
          <Typography variant="body2">{t('Upload.supports')}</Typography>
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
                  <FileExtensionText>{fileExtension}</FileExtensionText>
                </FileIconContainer>
                <FileInfoContainer>
                  <Typography variant="body2">{file.name}</Typography>
                  <FileTextSecondary variant="body2">{formatBytes(file.size)}</FileTextSecondary>
                  {uploadStatus === 'rejected' ? (
                    <RejectedText variant="caption" color="error">
                      {errorMessage}
                    </RejectedText>
                  ) : (
                    <>
                      <ProgressContainer>
                        <BoxProgress>
                          <StyledLinearProgress
                            variant="determinate"
                            value={progress}
                            color={uploadStatus === 'error' ? 'error' : 'success'}
                          />
                        </BoxProgress>
                      </ProgressContainer>
                      <StatusText
                        variant="caption"
                        color={isUploading ? 'textSecondary' : statusDisplay.color}
                      >
                        {isUploading
                          ? `${t('Upload.button-uploading')} ${progress}%`
                          : statusDisplay.text}
                      </StatusText>
                    </>
                  )}
                </FileInfoContainer>
                <IconButton size="small" onClick={(e) => handleRemoveFile(file.name, e)}>
                  <CloseIcon size={24} />
                </IconButton>
              </FileItemContainer>
            );
          })}
        </FileWrapper>
      )}
    </DropzoneArea>
  );
};
