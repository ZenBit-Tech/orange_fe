import { useTranslation } from 'react-i18next';

import type { BloodTestData } from '@/constants/blood-test-data';
import { useAppDispatch, useAppSelector } from '@/store';
import { useValidateBloodTestMutation } from '@/store/bloodTestApi';
import {
  setError,
  setIsValidating,
  setValidationData,
} from '@/store/bloodTestSlice/bloodTestSlice';

export const useBloodTestValidation = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [validateBloodTest] = useValidateBloodTestMutation();

  const { extractedData, validationData, isValidating, error } = useAppSelector(
    (state) => state.bloodTest,
  );

  const validateBloodTestData = async (data?: BloodTestData) => {
    const dataToValidate = data || extractedData;

    if (!dataToValidate) {
      dispatch(setError(t('Upload.error-no-data')));
      return;
    }

    dispatch(setError(null));
    dispatch(setValidationData(null));
    dispatch(setIsValidating(true));

    try {
      const validationResult = await validateBloodTest(dataToValidate).unwrap();

      console.log(validationResult);
      dispatch(setValidationData(validationResult));
    } catch (error) {
      const message = error instanceof Error ? error.message : t('Upload.error-generic');
      dispatch(setError(message));
    } finally {
      dispatch(setIsValidating(false));
    }
  };

  return {
    extractedData,
    validationData,
    isValidating,
    error,
    validateBloodTestData,
  };
};
