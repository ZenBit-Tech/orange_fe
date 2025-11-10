import { useRef, useState } from 'react';

import type { MarkerTableRef } from '@/components/MarkerTable';
import { GENDER } from '@/constants/marker';

type Gender = (typeof GENDER)[keyof typeof GENDER];
type PregnancyStatus = 'pregnant' | 'not-pregnant';

interface ValidationErrors {
  birthYear: boolean;
  gender: boolean;
  pregnancy: boolean;
}

interface UseReviewCustomizeStepProps {
  onContinue: () => void;
}

export const useReviewCustomizeStep = ({ onContinue }: UseReviewCustomizeStepProps) => {
  const markerTableRef = useRef<MarkerTableRef>(null);

  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [pregnancy, setPregnancy] = useState<PregnancyStatus | null>(null);
  const [nutritionAdvice, setNutritionAdvice] = useState(false);
  const [exerciseGuidelines, setExerciseGuidelines] = useState(false);
  const [supplementRecommendations, setSupplementRecommendations] = useState(false);
  const [medicationRecommendations, setMedicationRecommendations] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    birthYear: false,
    gender: false,
    pregnancy: false,
  });
  const [hasMarkerErrors, setHasMarkerErrors] = useState(false);

  const handleBirthYear = (_event: React.SyntheticEvent, value: unknown) => {
    const newValue = value as number | null;
    if (newValue !== null) {
      setBirthYear(newValue);
      setValidationErrors((prev) => ({ ...prev, birthYear: false }));
    }
  };

  const handleGender = (_event: React.SyntheticEvent, value: unknown) => {
    const newValue = value as Gender | null;
    if (newValue !== null) {
      setGender(newValue);
      setValidationErrors((prev) => ({ ...prev, gender: false }));

      if (newValue === 'male') {
        setPregnancy(null);
        setValidationErrors((prev) => ({ ...prev, pregnancy: false }));
      }
    }
  };

  const handlePregnancy = (_event: React.SyntheticEvent, value: unknown) => {
    const newValue = value as PregnancyStatus | null;
    if (newValue !== null) {
      setPregnancy(newValue);
      setValidationErrors((prev) => ({ ...prev, pregnancy: false }));
    }
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {
      birthYear: birthYear === null,
      gender: gender === null,
      pregnancy: gender === GENDER.FEMALE && pregnancy === null,
    };

    setValidationErrors(errors);

    if (markerTableRef.current) {
      markerTableRef.current.validateAllMarkers();
    }

    const hasErrors = errors.birthYear || errors.gender || errors.pregnancy;

    return !hasErrors;
  };

  const handleContinue = () => {
    const isValid = validateForm();

    if (isValid && !hasMarkerErrors) {
      onContinue();
    } else {
      if (validationErrors.birthYear || validationErrors.gender || validationErrors.pregnancy) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const toggleNutritionAdvice = () => setNutritionAdvice(!nutritionAdvice);
  const toggleExerciseGuidelines = () => setExerciseGuidelines(!exerciseGuidelines);
  const toggleSupplementRecommendations = () =>
    setSupplementRecommendations(!supplementRecommendations);
  const toggleMedicationRecommendations = () =>
    setMedicationRecommendations(!medicationRecommendations);

  return {
    markerTableRef,
    birthYear,
    gender,
    pregnancy,
    nutritionAdvice,
    exerciseGuidelines,
    supplementRecommendations,
    medicationRecommendations,
    additionalQuestions,
    validationErrors,
    hasMarkerErrors,
    handleBirthYear,
    handleGender,
    handlePregnancy,
    handleContinue,
    setAdditionalQuestions,
    setHasMarkerErrors,
    toggleNutritionAdvice,
    toggleExerciseGuidelines,
    toggleSupplementRecommendations,
    toggleMedicationRecommendations,
  };
};
