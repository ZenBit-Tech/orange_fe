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
