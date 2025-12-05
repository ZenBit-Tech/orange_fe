import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { RootState } from '@/store';

import { PDF_POLL_INTERVAL, PDF_STATUS, type PdfJobStatus } from '../../types';

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
  isPdfReady: boolean;
  isPdfPending: boolean;
  t: (key: string) => string;
}

export const useResultButtons = ({ onBack }: UseResultButtonsProps): UseResultButtonsReturn => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [pdfStatus, setPdfStatus] = useState<PdfJobStatus | null>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const pdfJobId = useSelector((state: RootState) => state.analysis.result?.pdfJobId);

  useEffect(() => {
    if (!pdfJobId) return;

    const checkStatus = async (): Promise<void> => {
      try {
        const response = await fetch(`${API_BASE_URL}/pdf-status/${pdfJobId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPdfStatus(data.status);

          if (data.status !== PDF_STATUS.PENDING && pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current);
            pollIntervalRef.current = null;
          }
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`PDF status check failed: ${errorMessage}`);
      }
    };

    checkStatus();
    pollIntervalRef.current = setInterval(checkStatus, PDF_POLL_INTERVAL);

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [pdfJobId]);

  const handleNewAnalyze = (): void => {
    if (onBack) {
      onBack();
      onBack();
    }
  };

  const handleDownloadPdf = async (): Promise<void> => {
    if (!pdfJobId || pdfStatus !== PDF_STATUS.COMPLETED) return;

    setIsDownloading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/download-pdf/${pdfJobId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
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
      throw new Error(`Download failed: ${errorMessage}`);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = async (): Promise<void> => {
    if (!pdfJobId || pdfStatus !== PDF_STATUS.COMPLETED) return;

    setIsPrinting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/download-pdf/${pdfJobId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Print failed');
      }

      const blob = await response.blob();
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
        }, PDF_POLL_INTERVAL / 2);
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Print failed: ${errorMessage}`);
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
    isPdfReady: pdfStatus === PDF_STATUS.COMPLETED,
    isPdfPending: pdfStatus === PDF_STATUS.PENDING,
    t,
  };
};
