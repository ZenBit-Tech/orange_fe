import { FileText, PenLine, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import step1 from '@/assets/step1.png';
import step1_webp from '@/assets/step1_webp.webp';
import step2 from '@/assets/step2.png';
import step2_webp from '@/assets/step2_webp.webp';
import step3 from '@/assets/step3.png';
import step3_webp from '@/assets/step3_webp.webp';

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
      image: step1,
      webp: step1_webp,
    },
    {
      title: t('How-it-works.steps.review'),
      description: t('How-it-works.steps.review-description'),
      icon: <PenLine />,
      image: step2,
      webp: step2_webp,
    },
    {
      title: t('How-it-works.steps.results'),
      description: t('How-it-works.steps.results-description'),
      icon: <FileText />,
      image: step3,
      webp: step3_webp,
    },
  ];

  return { steps, t, ref, inView };
};
