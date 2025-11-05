import { FileText, PenLine, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import step1 from '@/assets/img-block.png';
import step2 from '@/assets/step2.png';
import step3 from '@/assets/step3.png';

export const useHowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t('How-it-works.steps.upload'),
      description: t('How-it-works.steps.upload-description'),
      icon: <Upload />,
      image: step1,
    },
    {
      title: t('How-it-works.steps.review'),
      description: t('How-it-works.steps.review-description'),
      icon: <PenLine />,
      image: step2,
    },
    {
      title: t('How-it-works.steps.results'),
      description: t('How-it-works.steps.results-description'),
      icon: <FileText />,
      image: step3,
    },
  ];

  return { steps, t };
};
