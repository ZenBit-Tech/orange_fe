import { Typography } from '@mui/material';

import {
  StyledCard,
  StyledIcon,
  StyledTitle,
  StyledTypographyDescription,
  WrapperCards,
  WrapperPrivacy,
  WrapperSection,
} from './styles';
import { usePrivacySection } from './usePrivacySection';

export const PrivacySection: React.FC = () => {
  const { t, cards } = usePrivacySection();
  return (
    <WrapperPrivacy id="privacy-section">
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
