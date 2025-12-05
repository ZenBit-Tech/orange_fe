import type { MarkerInterpretation } from '@/pages/AnalysisResultPage/types';

export interface MarkerData {
  id: number;
  name: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status?: string;
  interpretation?: MarkerInterpretation;
  hasError: boolean;
}
export interface ReviewCustomizeData {
  birthYear: number | null;
  gender: string | null;
  pregnancy: string | null;
  markersData: MarkerData[];
  nutritionAdvice: boolean;
  supplementRecommendations: boolean;
  medicationGuidance: boolean;
  exerciseGuidelines: boolean;
  additionalQuestions: string;
}
