import { FileText, PenLine, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import step1 from '@/assets/step1.png';
import step2 from '@/assets/step2.png';
import step3 from '@/assets/step3.png';

export const useHowItWorks = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const steps = [
    {
      title: t('How-it-works.steps.upload'),
      description: t('How-it-works.steps.upload-description'),
      icon: <Upload />,
      webp: step1,
    },
    {
      title: t('How-it-works.steps.review'),
      description: t('How-it-works.steps.review-description'),
      icon: <PenLine />,
      webp: step2,
    },
    {
      title: t('How-it-works.steps.results'),
      description: t('How-it-works.steps.results-description'),
      icon: <FileText />,
      webp: step3,
    },
  ];

  return { steps, t, ref, inView };
};
