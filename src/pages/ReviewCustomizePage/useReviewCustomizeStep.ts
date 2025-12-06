import { useCallback, useRef, useState } from 'react';

import { useMarkerTable } from '@/components/MarkerTable/useMarkerTable';
import { GENDER } from '@/constants';
import { useAppDispatch } from '@/store';
import { setAnalysisResult } from '@/store/analysisSlice';
import { useSendDataToBackendMutation } from '@/store/reviewCustomizeApi';
import type { MarkerTableRef } from '@/types/marker';

import type {
  Gender,
  PregnancyStatus,
  UseReviewCustomizeStepProps,
  ValidationErrors,
} from './types';

export const useReviewCustomizeStep = ({ onContinue }: UseReviewCustomizeStepProps) => {
  const dispatch = useAppDispatch();
  const markerTableRef = useRef<MarkerTableRef>(null);
  const [hasMarkerErrors, setHasMarkerErrors] = useState(false);

  const [sendDataToBackend, { isLoading }] = useSendDataToBackendMutation();

  const {
    markers,
    validateAllMarkers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleReferenceChange,
    handleAddMarker,
    validateMarker,
  } = useMarkerTable({
    isFinalStep: false,
    onValidationChange: setHasMarkerErrors,
    isDisabled: isLoading,
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

  const handleBirthYear = (_event: React.SyntheticEvent, value: unknown) => {
    const newValue = value as number | null;
    if (newValue !== null) {
      setBirthYear(newValue);
      setValidationErrors((prev) => ({ ...prev, birthYear: false }));
    } else {
      setBirthYear(null);
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
    } else {
      setGender(null);
    }
  };

  const handlePregnancy = (_event: React.SyntheticEvent, value: unknown) => {
    const newValue = value as PregnancyStatus | null;
    if (newValue !== null) {
      setPregnancy(newValue);
      setValidationErrors((prev) => ({ ...prev, pregnancy: false }));
    } else {
      setPregnancy(null);
    }
  };

  const handleContinue = useCallback(async () => {
    const firstErrorId = validateAllMarkers();

    const errors: ValidationErrors = {
      birthYear: birthYear === null,
      gender: gender === null,
      pregnancy: gender === GENDER.FEMALE && pregnancy === null,
    };

    setValidationErrors(errors);

    const hasTopErrors = errors.birthYear || errors.gender || errors.pregnancy;
    const hasMarkerErrorsNow = markers.some((m) => !m.name || !m.value);

    if (!hasTopErrors && !hasMarkerErrorsNow) {
      try {
        const result = await sendDataToBackend({
          birthYear: birthYear,
          gender: gender,
          pregnancy: pregnancy,
          markersData: markers.map((m) => ({
            ...m,
            normalRange: `${m.referenceMin} - ${m.referenceMax} ${m.unit}`,
          })),
          nutritionAdvice: nutritionAdvice,
          supplementRecommendations: supplementRecommendations,
          exerciseGuidelines: exerciseGuidelines,
          medicationGuidance: medicationGuidance,
          additionalQuestions: additionalQuestions,
        }).unwrap();

        dispatch(setAnalysisResult(result));
        onContinue();
      } catch (err) {
        throw new Error(`Error sending data: ${err}`);
      }
    } else {
      if (hasTopErrors) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hasMarkerErrorsNow && firstErrorId !== null && markerTableRef.current) {
        requestAnimationFrame(() => {
          markerTableRef.current?.scrollToMarker(firstErrorId);
        });
      }
    }
  }, [
    validateAllMarkers,
    birthYear,
    gender,
    pregnancy,
    markers,
    dispatch,
    exerciseGuidelines,
    medicationGuidance,
    nutritionAdvice,
    supplementRecommendations,
    additionalQuestions,
    sendDataToBackend,
    onContinue,
  ]);

  const toggleNutritionAdvice = () => {
    if (!isLoading) {
      setNutritionAdvice(!nutritionAdvice);
    }
  };
  const toggleExerciseGuidelines = () => {
    if (!isLoading) {
      setExerciseGuidelines(!exerciseGuidelines);
    }
  };
  const toggleSupplementRecommendations = () => {
    if (!isLoading) {
      setSupplementRecommendations(!supplementRecommendations);
    }
  };
  const toggleMedicationGuidance = () => {
    if (!isLoading) {
      setMedicationRecommendations(!medicationGuidance);
    }
  };
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
    handleReferenceChange,
  };
};
