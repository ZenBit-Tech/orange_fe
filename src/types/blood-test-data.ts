import { Marker } from '@/components/Marker';

export interface MarkerValue {
  id: number;
  name: string;
  value: number;
  unit: string;
  referenceMin: string;
  referenceMax: string;
}

export type BloodTestData = MarkerValue[];

export interface BloodTestValidation {
  isBloodTest: boolean;
  reason: string;
  confidence: 'low' | 'medium' | 'high';
}

export interface BloodTestSummaryData {
  bloodTestSummary: {
    overallWellnessScore: number;
    summary: string;
  };
  markersInterpretations: Array<{
    id: number;
    name: string;
    value: string;
    unit: string;
    referenceMin: number;
    referenceMax: number;
    status: string;
    interpretation: {
      about: string;
      whyImportant: string;
      contextualNote: string;
    };
  }>;
}

export interface MarkersInterpretations {
  id: number;
  name: string;
  value: string;
  unit: string;
  referenceMin: number;
  referenceMax: number;
  status: string;
  interpretation: {
    about: string;
    whyImportant: string;
    contextualNote: string;
  };
}
export interface Marker {
  id: string;
  name: string;
  language: string;
  pattern: string;
  category: string;
  alternativeNames: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  isActive: string;
  createdAt: string;
  updatedAt: string;
}

export type MarkersArr = Marker[];
