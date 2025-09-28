import { useTranslation } from 'react-i18next';

export const useExampleWorkHeaderHook = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('Header.links.our-solution') },
    { to: '/', label: t('Header.links.use-cases') },
    { to: '/', label: t('Header.links.about-us') },
  ];

  return { t, links };
};
