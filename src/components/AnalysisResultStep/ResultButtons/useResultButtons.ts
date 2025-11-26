import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { RootState } from '@/store';

const API_BASE_URL = import.meta.env.VITE_MARKERS_URL;

interface UseResultButtonsProps {
  onBack?: () => void;
}

interface UseResultButtonsReturn {
  handleNewAnalyze: () => void;
  handleDownloadPdf: () => Promise<void>;
  handlePrint: () => Promise<void>;
  isDownloading: boolean;
  isPrinting: boolean;
  t: (key: string) => string;
}

export const useResultButtons = ({ onBack }: UseResultButtonsProps): UseResultButtonsReturn => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

  // Get both analysis result and original form data from Redux
  const analysisResult = useSelector((state: RootState) => state.analysis.result);
  const testResults = useSelector((state: RootState) => state.bloodTest.extractedData);

  const handleNewAnalyze = (): void => {
    if (onBack) {
      onBack();
      onBack();
    }
  };

  const generatePdf = async (): Promise<Blob> => {
    const response = await fetch(`${API_BASE_URL}/download-pdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        testResults,
        analysisResult,
      }),
    });

    if (!response.ok) {
      throw new Error('PDF generation failed');
    }

    return await response.blob();
  };

  const handleDownloadPdf = async (): Promise<void> => {
    if (!analysisResult || !testResults) return;

    setIsDownloading(true);
    try {
      const blob = await generatePdf();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `health-report-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Download failed:', errorMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = async (): Promise<void> => {
    if (!analysisResult || !testResults) return;

    setIsPrinting(true);
    try {
      const blob = await generatePdf();
      const url = window.URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);

      iframe.onload = (): void => {
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
          window.URL.revokeObjectURL(url);
        }, 1000);
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Print failed:', errorMessage);
    } finally {
      setIsPrinting(false);
    }
  };

  return {
    handleNewAnalyze,
    handleDownloadPdf,
    handlePrint,
    isDownloading,
    isPrinting,
    t,
  };
};
