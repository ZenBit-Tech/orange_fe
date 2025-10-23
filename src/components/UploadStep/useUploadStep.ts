import { useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error' | 'rejected';

export const useUploadStep = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { t } = useTranslation();

  const hasFiles = files.length > 0;

  const isUploading = uploadStatus === 'uploading';

  const simulateUpload = (file: File) => {
    setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
    setUploadStatus('uploading');
    setErrorMessage('');

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = (prev[file.name] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          return { ...prev, [file.name]: 100 };
        }
        return { ...prev, [file.name]: newProgress };
      });
    }, 200);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      setUploadProgress({});
      acceptedFiles.forEach(simulateUpload);
    },
    onDropRejected: (fileRejections) => {
      setFiles(fileRejections.map((r) => r.file));

      setUploadProgress({});
      setUploadStatus('rejected');
      setErrorMessage(t('Upload.invalid-types'));
    },
    accept: {
      'application/pdf': ['.pdf'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
    maxFiles: 1,
  });

  const handleRemoveFile = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFiles([]);
    setUploadProgress({});
    setUploadStatus('idle');
    setErrorMessage('');
  };

  const getStatusDisplay = () => {
    switch (uploadStatus) {
      case 'success':
        return { text: t('Upload.file-uploaded'), color: 'success.main' };
      case 'error':
        return { text: errorMessage, color: 'error' };
      case 'rejected':
        return { text: errorMessage, color: 'error' };
      default:
        return { text: '', color: 'textSecondary' };
    }
  };

  const statusDisplay = getStatusDisplay();

  return {
    files,
    uploadProgress,
    hasFiles,
    isUploading,
    getRootProps,
    errorMessage,
    uploadStatus,
    getInputProps,
    statusDisplay,
    handleRemoveFile,
    t,
  };
};
