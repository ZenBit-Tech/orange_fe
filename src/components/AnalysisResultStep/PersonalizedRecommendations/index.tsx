import { Box, Typography } from '@mui/material';

import { Dumbbell, Pill, Salad, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { theme } from '@/theme';

import { RecommendationSection } from '../RecommendationSection';
import type { RecommendationDescriptions } from '../types';
import { PersonalizedDescription, PersonalizedInfo, RecommendationWrapper } from './styles';

interface PersonalizedRecommendationsProps {
  supplementsRecommendations: RecommendationDescriptions;
  nutritionRecommendations: RecommendationDescriptions;
  drugsRecommendations: RecommendationDescriptions;
  exerciseRecommendations: RecommendationDescriptions;
}

export const PersonalizedRecommendations: React.FC<PersonalizedRecommendationsProps> = ({
  supplementsRecommendations,
  nutritionRecommendations,
  drugsRecommendations,
  exerciseRecommendations,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <PersonalizedInfo>
        <Typography variant="h6">{t('Personalized.title')}</Typography>
        <PersonalizedDescription variant="body1">
          {t('Personalized.description')}
        </PersonalizedDescription>
      </PersonalizedInfo>

      <RecommendationWrapper>
        {nutritionRecommendations && (
          <RecommendationSection
            icon={Salad}
            title={t('Personalized.recommendations.0')}
            items={nutritionRecommendations.descriptions}
            bgColor={theme.palette.baseColors.pastel.green[100]}
            iconColor={theme.palette.baseColors.pastel.green.green}
            bgIconColor={theme.palette.baseColors.pastel.green[200]}
          />
        )}
        {exerciseRecommendations && (
          <RecommendationSection
            icon={Dumbbell}
            title={t('Personalized.recommendations.1')}
            items={exerciseRecommendations.descriptions}
            bgColor={theme.palette.baseColors.pastel.blue[100]}
            iconColor={theme.palette.baseColors.pastel.blue.blue}
            bgIconColor={theme.palette.baseColors.pastel.blue[200]}
          />
        )}
        {supplementsRecommendations && (
          <RecommendationSection
            icon={Pill}
            title={t('Personalized.recommendations.2')}
            items={supplementsRecommendations.descriptions}
            bgColor={theme.palette.baseColors.pastel.cyan[100]}
            iconColor={theme.palette.baseColors.pastel.cyan.cyan}
            bgIconColor={theme.palette.baseColors.pastel.cyan[200]}
          />
        )}
        {drugsRecommendations && (
          <RecommendationSection
            icon={Stethoscope}
            title={t('Personalized.recommendations.3')}
            items={drugsRecommendations.descriptions}
            bgColor={theme.palette.baseColors.green[50]}
            iconColor={theme.palette.baseColors.green[500]}
            bgIconColor={theme.palette.baseColors.green[100]}
          />
        )}
      </RecommendationWrapper>
    </Box>
  );
};
