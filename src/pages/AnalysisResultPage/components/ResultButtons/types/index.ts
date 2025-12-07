import type { PDF_STATUS } from '../constants';

export interface ResultButtonProps {
  onBack?: () => void;
}
export interface UseResultButtonsReturn {
  handleNewAnalyze: () => void;
  handleDownloadPdf: () => Promise<void>;
  handlePrint: () => Promise<void>;
  isDownloading: boolean;
  isPrinting: boolean;
  isPdfReady: boolean;
  isPdfPending: boolean;
  t: (key: string) => string;
}

export type PdfJobStatus = (typeof PDF_STATUS)[keyof typeof PDF_STATUS];
