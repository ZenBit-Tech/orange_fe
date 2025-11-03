import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import {
  StyledCard,
  StyledIcon,
  StyledTitle,
  StyledTypographyDescription,
  WrapperCards,
  WrapperPrivacy,
  WrapperSection,
} from './styles';

export const PrivacySection: React.FC = () => {
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
  return (
    <WrapperPrivacy>
      <WrapperSection>
        <StyledIcon />
        <StyledTitle variant="h3">{t('PrivacySection.title')}</StyledTitle>
        <StyledTypographyDescription variant="body1">
          {t('PrivacySection.description')}
        </StyledTypographyDescription>
        <WrapperCards>
          {cards.map((card, index) => {
            return (
              <StyledCard key={index}>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body1">{card.description}</Typography>
              </StyledCard>
            );
          })}
        </WrapperCards>
      </WrapperSection>
    </WrapperPrivacy>
  );
};
