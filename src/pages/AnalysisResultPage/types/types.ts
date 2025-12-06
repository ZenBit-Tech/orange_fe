import type { ChartData } from 'chart.js';

export interface RecommendationDescriptions {
  descriptions: string[];
}

export interface MarkerInterpretation {
  about: string;
  whyImportant: string;
  contextualNote: string;
}

export interface MarkerDataInterpretation {
  markerId: number;
  markerName: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status: string;
  interpretation: MarkerInterpretation;
}

export interface BloodTestSummary {
  overallWellnessScore: number;
  overallSummary: string;
  detailedFindings: string[];
  conclusionStatement: string;
}

export interface UserQuestionResponse {
  question: string;
  answer: string;
}

export interface FullBloodTestAnalysisResult {
  bloodTestSummary: BloodTestSummary;
  markersInterpretations: MarkerDataInterpretation[];
  supplementsRecommendations?: RecommendationDescriptions;
  nutritionRecommendations?: RecommendationDescriptions;
  drugsRecommendations?: RecommendationDescriptions;
  exerciseRecommendations?: RecommendationDescriptions;
  userQuestionResponse?: UserQuestionResponse;
  pdfJobId: string;
}

export const PDF_POLL_INTERVAL = 2000;
export const ICON_SIZE_SMALL = 20;

export const PDF_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

export type PdfJobStatus = (typeof PDF_STATUS)[keyof typeof PDF_STATUS];

export interface AnswerForUserQuestionProps {
  questionResponse: { question: string; answer: string };
}

export interface BloodTestSummaryProps {
  data?: FullBloodTestAnalysisResult;
}

export interface DeleteMarkerModalProps {
  open: boolean;
  markerName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export interface HealthBarProps {
  position: number;
  status: string;
  isSmallScreen: boolean;
}

export interface GradientColors {
  startColor: string;
  endColor: string;
  donutChartFilling: number;
}

export interface DonutProps {
  valueInsideChart: number;
}

export type DoughnutChartData = ChartData<'doughnut', number[], string>;

export interface RecommendationSectionProps {
  title: string;
  icon: React.ElementType;
  items: string[];
  bgColor: string;
  iconColor: string;
  bgIconColor: string;
}

export interface RecommendationsProps {
  supplementsRecommendations?: RecommendationDescriptions;
  nutritionRecommendations?: RecommendationDescriptions;
  drugsRecommendations?: RecommendationDescriptions;
  exerciseRecommendations?: RecommendationDescriptions;
}

export interface ResultButtonProps {
  onBack?: () => void;
}

export interface UseResultButtonsProps {
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

export interface AnalysisResultStepProps {
  onBack: () => void;
}
