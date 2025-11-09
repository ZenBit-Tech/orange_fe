import { Typography } from '@mui/material';

import { HeartHandshake, ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import {
  StyledCard,
  StyledDescription,
  StyledDescriptionCard,
  StyledTitle,
  StyledTitleCard,
  WrapperAbout,
  WrapperCards,
  WrapperDescription,
} from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <WrapperAbout id="about-us" ref={ref}>
      <WrapperDescription>
        <StyledTitle variant="h3" isVisible={inView}>
          {t('About.title')}
        </StyledTitle>
        <StyledDescription variant="body1" isVisible={inView}>
          {t('About.description')}
        </StyledDescription>
        <WrapperCards isVisible={inView}>
          <StyledCard>
            <StyledTitleCard>
              <ScrollText />
              <Typography variant="h5">{t('About.our-story')}</Typography>
            </StyledTitleCard>
            <StyledDescriptionCard variant="body1">
              {t('About.story-description')}
            </StyledDescriptionCard>
          </StyledCard>
          <StyledCard>
            <StyledTitleCard>
              <HeartHandshake />
              <Typography variant="h5">{t('About.our-mission')}</Typography>
            </StyledTitleCard>
            <StyledDescriptionCard variant="body1">
              {t('About.mission-description')}
            </StyledDescriptionCard>
          </StyledCard>
        </WrapperCards>
      </WrapperDescription>
    </WrapperAbout>
  );
};
