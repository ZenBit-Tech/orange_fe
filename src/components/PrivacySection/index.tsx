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
  const { t, cards, ref, inView } = usePrivacySection();
  return (
    <WrapperPrivacy id="privacy-section" ref={ref}>
      <WrapperSection>
        <StyledIcon isVisible={inView} />
        <StyledTitle variant="h3" isVisible={inView}>
          {t('PrivacySection.title')}
        </StyledTitle>
        <StyledTypographyDescription variant="body1" isVisible={inView}>
          {t('PrivacySection.description')}
        </StyledTypographyDescription>
        <WrapperCards isVisible={inView}>
          {cards.map((card, index) => {
            return (
              <StyledCard key={index}>
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="body1">{card.description}</Typography>
              </StyledCard>
            );
          })}
        </WrapperCards>
      </WrapperSection>
    </WrapperPrivacy>
  );
};
