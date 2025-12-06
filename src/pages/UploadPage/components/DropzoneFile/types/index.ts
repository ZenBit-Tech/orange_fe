import type { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

import type { UPLOAD_STATUS } from '../constants';

export type UploadStatus = (typeof UPLOAD_STATUS)[keyof typeof UPLOAD_STATUS];

export interface StatusDisplay {
  text: string;
  color: string;
}

export interface DropzoneFileProps {
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
