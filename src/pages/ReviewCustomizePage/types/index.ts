import type { GENDER } from '@/constants';

export interface ValidationErrors {
  birthYear: boolean;
  gender: boolean;
  pregnancy: boolean;
}

export interface UseReviewCustomizeStepProps {
  onContinue: () => void;
  onBack?: () => void;
}

export type Gender = (typeof GENDER)[keyof typeof GENDER];
export type PregnancyStatus = 'pregnant' | 'not-pregnant';
