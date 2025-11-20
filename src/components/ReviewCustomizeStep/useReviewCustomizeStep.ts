import { useRef, useState } from 'react';

import type { MarkerTableRef } from '@/components/MarkerTable';
import { useMarkerTable } from '@/components/MarkerTable/useMarkerTable';
import { GENDER } from '@/constants/marker';
import { useAppDispatch } from '@/store';
import { setAnalysisResult } from '@/store/analysisSlice';
import { useSendDataToBackendMutation } from '@/store/reviewCustomizeApi';

type Gender = (typeof GENDER)[keyof typeof GENDER];
type PregnancyStatus = 'pregnant' | 'not-pregnant';

interface ValidationErrors {
  birthYear: boolean;
  gender: boolean;
  pregnancy: boolean;
}

interface UseReviewCustomizeStepProps {
  onContinue?: () => void;
}

export const useReviewCustomizeStep = ({ onContinue }: UseReviewCustomizeStepProps = {}) => {
  const dispatch = useAppDispatch();
  const markerTableRef = useRef<MarkerTableRef>(null);
  const [hasMarkerErrors, setHasMarkerErrors] = useState(false);

  const {
    markers,
    validateAllMarkers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleAddMarker,
    validateMarker,
  } = useMarkerTable({
    onValidationChange: setHasMarkerErrors,
  });

  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [gender, setGender] = useState<Gender | null>(null);
  const [pregnancy, setPregnancy] = useState<PregnancyStatus | null>(null);
  const [nutritionAdvice, setNutritionAdvice] = useState(false);
  const [exerciseGuidelines, setExerciseGuidelines] = useState(false);
  const [supplementRecommendations, setSupplementRecommendations] = useState(false);
  const [medicationGuidance, setMedicationRecommendations] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    birthYear: false,
    gender: false,
    pregnancy: false,
  });

  const [sendDataToBackend, { isLoading }] = useSendDataToBackendMutation();

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

      if (newValue === GENDER.MALE) {
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

    validateAllMarkers();

    const hasErrors = errors.birthYear || errors.gender || errors.pregnancy;

    return !hasErrors;
  };

  const handleContinue = async () => {
    const isValid = validateForm();

    if (isValid && !hasMarkerErrors) {
      const result = await sendDataToBackend({
        birthYear: birthYear,
        gender: gender,
        pregnancy: pregnancy,
        markersData: markers,
        nutritionAdvice: nutritionAdvice,
        supplementRecommendations: supplementRecommendations,
        exerciseGuidelines: exerciseGuidelines,
        medicationGuidance: medicationGuidance,
        additionalQuestions: additionalQuestions,
      }).unwrap();

      dispatch(setAnalysisResult(result));

      onContinue?.();
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
  const toggleMedicationGuidance = () => setMedicationRecommendations(!medicationGuidance);

  return {
    markerTableRef,
    markers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleAddMarker,
    validateMarker,
    validateAllMarkers,
    birthYear,
    gender,
    pregnancy,
    nutritionAdvice,
    exerciseGuidelines,
    supplementRecommendations,
    medicationGuidance,
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
    toggleMedicationGuidance,
    isLoading,
  };
};
