import { FileText, PenLine, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import step1 from '@/assets/step1.png';
import step1Dark from '@/assets/step1Dark.png';
import step2 from '@/assets/step2.png';
import step2Dark from '@/assets/step2Dark.png';
import step3 from '@/assets/step3.png';
import step3Dark from '@/assets/step3Dark.png';
import { useAppSelector } from '@/store';

export const useHowItWorks = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const isTheme = useAppSelector((state) => state.darkTheme.isBlackTheme);
  const steps = [
    {
      title: t('How-it-works.steps.upload'),
      description: t('How-it-works.steps.upload-description'),
      icon: <Upload />,
      webp: isTheme ? step1Dark : step1,
    },
    {
      title: t('How-it-works.steps.review'),
      description: t('How-it-works.steps.review-description'),
      icon: <PenLine />,
      webp: isTheme ? step2Dark : step2,
    },
    {
      title: t('How-it-works.steps.results'),
      description: t('How-it-works.steps.results-description'),
      icon: <FileText />,
      webp: isTheme ? step3Dark : step3,
    },
  ];

  return { steps, t, ref, inView };
};
