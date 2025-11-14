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
