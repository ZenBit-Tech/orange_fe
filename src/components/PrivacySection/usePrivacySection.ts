import { useTranslation } from 'react-i18next';

export const usePrivacySection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t('PrivacySection.cards.zero'),
      description: t('PrivacySection.cards.dontStore'),
    },
    {
      title: t('PrivacySection.cards.processing'),
      description: t('PrivacySection.cards.ecrypted'),
    },
    {
      title: t('PrivacySection.cards.design'),
      description: t('PrivacySection.cards.minimizing'),
    },
  ];
  return { t, cards };
};
