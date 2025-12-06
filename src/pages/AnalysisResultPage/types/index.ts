import type { RecommendationDescriptions } from '../components/RecommendationsList/types';

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

export interface AnalysisResultStepProps {
  onBack: () => void;
}
