import { useState } from 'react';

import { type FileRejection, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/store';
import { setExtractedData } from '@/store/bloodTestSlice/bloodTestSlice';
import { useExtractDataFromImageMutation } from '@/store/ocrApi';

export const UPLOAD_STATUS = {
  Idle: 'idle',
  Uploading: 'uploading',
  Success: 'success',
  Error: 'error',
  Rejected: 'rejected',
} as const;

export type UploadStatus = (typeof UPLOAD_STATUS)[keyof typeof UPLOAD_STATUS];

export const useUploadStep = () => {
  const MAX_FILE_SIZE_BYTES = 30 * 1024 * 1024;

  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>(UPLOAD_STATUS.Idle);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [extractData] = useExtractDataFromImageMutation();

  const hasFiles = files.length > 0;
  const isUploading = uploadStatus === UPLOAD_STATUS.Uploading;

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadAndExtractData = async (file: File) => {
    setErrorMessage('');
    dispatch(setExtractedData(null));

    try {
      const base64Data = await fileToBase64(file);
      const extractedResult = await extractData({ data: base64Data }).unwrap();

      dispatch(setExtractedData(extractedResult));
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : t('Upload.error-generic');

      setErrorMessage(message);
      setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
      setUploadStatus(UPLOAD_STATUS.Error);
      return false;
    }
  };

  const simulateUpload = (file: File, onComplete: () => void) => {
    setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
    setErrorMessage('');

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = (prev[file.name] || 0) + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete();
          return { ...prev, [file.name]: 100 };
        }
        return { ...prev, [file.name]: newProgress };
      });
    }, 200);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;
      const file = acceptedFiles[0];

      setFiles([file]);
      setUploadProgress({});
      setUploadStatus(UPLOAD_STATUS.Uploading);

      const fakeUploadPromise = new Promise<void>((resolve) => {
        simulateUpload(file, resolve);
      });

      const realExtractPromise = uploadAndExtractData(file);

      const [, extractSuccessful] = await Promise.all([fakeUploadPromise, realExtractPromise]);
      if (extractSuccessful) {
        setUploadStatus(UPLOAD_STATUS.Success);
      }
    },
    onDropRejected: (fileRejections: FileRejection[]) => {
      setFiles(fileRejections.map((r) => r.file));

      setUploadProgress({});
      setUploadStatus(UPLOAD_STATUS.Rejected);
      if (fileRejections.length > 0 && fileRejections[0].errors.length > 0) {
        const firstError = fileRejections[0].errors[0];

        if (firstError.code === 'file-too-large') {
          setErrorMessage(t('Upload.file-too-large'));
        } else if (firstError.code === 'file-invalid-type') {
          setErrorMessage(t('Upload.invalid-types'));
        } else {
          setErrorMessage(firstError.message);
        }
      }
    },
    accept: {
      'application/pdf': ['.pdf'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE_BYTES,
  });

  const handleRemoveFile = (_fileName: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFiles([]);
    setUploadProgress({});
    setUploadStatus(UPLOAD_STATUS.Idle);
    setErrorMessage('');
    dispatch(setExtractedData(null));
  };

  const getStatusDisplay = () => {
    switch (uploadStatus) {
      case UPLOAD_STATUS.Success:
        return { text: t('Upload.file-uploaded'), color: 'success.main' };
      case UPLOAD_STATUS.Error:
        return { text: errorMessage, color: 'error' };
      case UPLOAD_STATUS.Rejected:
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
