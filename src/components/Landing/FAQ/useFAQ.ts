import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

export const useFAQ = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const faqData = [
    {
      id: 'faq1',
      question: t('FAQ.data.q1'),
      answer: t('FAQ.data.an1'),
    },
    {
      id: 'faq2',
      question: t('FAQ.data.q2'),
      answer: t('FAQ.data.an2'),
    },
    {
      id: 'faq3',
      question: t('FAQ.data.q3'),
      answer: t('FAQ.data.an3'),
    },
    {
      id: 'faq4',
      question: t('FAQ.data.q4'),
      answer: t('FAQ.data.an4'),
    },
  ];

  return { t, faqData, ref, inView };
};
