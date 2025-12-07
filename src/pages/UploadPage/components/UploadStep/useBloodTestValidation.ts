import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/store';
import { useValidateBloodTestMutation } from '@/store/bloodTestApi';
import {
  setError,
  setIsValidating,
  setValidationData,
} from '@/store/bloodTestSlice/bloodTestSlice';
import type { BloodTestData } from '@/types/blood-test-data';

export const useBloodTestValidation = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [validateBloodTest] = useValidateBloodTestMutation();
  const { extractedData, validationData, isValidating, error, isError } = useAppSelector(
    (state) => state.bloodTest,
  );

  const validateBloodTestData = async (data?: BloodTestData) => {
    const dataToValidate = data || extractedData;

    if (!dataToValidate) {
      dispatch(setError(t('Upload.error-no-data')));
      return false;
    }

    if (!Array.isArray(dataToValidate)) {
      dispatch(setError(t('Upload.error-invalid-data-format')));
      return false;
    }

    dispatch(setError(null));
    dispatch(setValidationData(null));
    dispatch(setIsValidating(true));

    try {
      const validationResult = await validateBloodTest(dataToValidate).unwrap();
      dispatch(setValidationData(validationResult));
      dispatch(setIsValidating(false));

      if (validationResult.isBloodTest) {
        dispatch(setValidationData(validationResult));
        return true;
      } else {
        const message = t('Upload.error-not-blood-test');
        dispatch(setError(message));
        return false;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : t('Upload.error-generic');
      dispatch(setError(message));
      dispatch(setIsValidating(false));
      return false;
    }
  };

  const clearValidationError = () => {
    dispatch(setError(null));
  };

  return {
    extractedData,
    validationData,
    isValidating,
    error,
    isError,
    validateBloodTestData,
    clearValidationError,
  };
};
