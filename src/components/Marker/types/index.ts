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

export interface MarkerProps {
  id: number;
  name: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status?: string;
  interpretation?: MarkerInterpretation;
  hasError: boolean;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onReferenceChange: (id: number, refMin: string, refMax: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
  isFinalStep: boolean;
  isDisabled?: boolean;
}
