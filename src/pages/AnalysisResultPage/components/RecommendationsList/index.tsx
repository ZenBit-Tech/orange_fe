import { Box, Typography, useTheme } from '@mui/material';

import { Dumbbell, Pill, Salad, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { RecommendationsProps } from '@/pages/AnalysisResultPage/types';

import { RecommendationSection } from '../RecommendationCard';
import { RecommendationDescription, RecommendationInfo, RecommendationWrapper } from './styles';

export const Recommendations: React.FC<RecommendationsProps> = ({
  supplementsRecommendations,
  nutritionRecommendations,
  drugsRecommendations,
  exerciseRecommendations,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box>
      <RecommendationInfo>
        <Typography variant="h6">{t('Personalized.title')}</Typography>
        <RecommendationDescription variant="body1">
          {t('Personalized.description')}
        </RecommendationDescription>
      </RecommendationInfo>

      <RecommendationWrapper>
        {nutritionRecommendations && (
          <RecommendationSection
            icon={Salad}
            title={t('Personalized.recommendations.0')}
            items={nutritionRecommendations.descriptions}
            bgColor={theme.palette.surface.cardBackground.cardBgPastelGreen}
            iconColor={
              theme.palette.mode === 'dark'
                ? theme.palette.baseColors.green[100]
                : theme.palette.baseColors.pastel.green.green
            }
            bgIconColor={theme.palette.surface.cardIcon.cardIconGreen}
          />
        )}
        {exerciseRecommendations && (
          <RecommendationSection
            icon={Dumbbell}
            title={t('Personalized.recommendations.1')}
            items={exerciseRecommendations.descriptions}
            bgColor={theme.palette.surface.cardBackground.cardBgPastelBlue}
            iconColor={
              theme.palette.mode === 'dark'
                ? theme.palette.baseColors.pastel.blue[100]
                : theme.palette.baseColors.pastel.blue.blue
            }
            bgIconColor={theme.palette.surface.cardIcon.cardIconBlue}
          />
        )}
        {supplementsRecommendations && (
          <RecommendationSection
            icon={Pill}
            title={t('Personalized.recommendations.2')}
            items={supplementsRecommendations.descriptions}
            bgColor={theme.palette.surface.cardBackground.cardBgPastelCyan}
            iconColor={
              theme.palette.mode === 'dark'
                ? theme.palette.baseColors.pastel.cyan[100]
                : theme.palette.baseColors.pastel.cyan.cyan
            }
            bgIconColor={theme.palette.surface.cardIcon.cardIconCyan}
          />
        )}
        {drugsRecommendations && (
          <RecommendationSection
            icon={Stethoscope}
            title={t('Personalized.recommendations.3')}
            items={drugsRecommendations.descriptions}
            bgColor={theme.palette.surface.cardBackground.cardBgPastelTeal}
            iconColor={
              theme.palette.mode === 'dark'
                ? theme.palette.baseColors.green[100]
                : theme.palette.surface.primary.default
            }
            bgIconColor={theme.palette.surface.cardIcon.cardIconTeal}
          />
        )}
      </RecommendationWrapper>
    </Box>
  );
};
