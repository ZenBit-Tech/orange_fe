import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useBloodTestValidation } from '../../pages/UploadPage/components/UploadStep/useBloodTestValidation';

export const useHorizontalLinearStepper = () => {
  const { t } = useTranslation();
  const { isError } = useBloodTestValidation();
  const steps = [t('Upload.steps.upload'), t('Upload.steps.review'), t('Upload.steps.results')];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return { steps, activeStep, handleNext, handleBack, isError };
};
