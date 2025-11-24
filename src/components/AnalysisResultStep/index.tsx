import { t } from 'i18next';
import { LucideOctagonAlert } from 'lucide-react';
import { useSelector } from 'react-redux';

import { DescriptionText, TitleText } from '@/components/ReviewCustomizeStep/styles';
import type { RootState } from '@/store';

import { AnswerForUserQuestion } from './AnswerForUserQuestion';
import { BloodTestSummary } from './BloodTestSummary';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';
import { Recommendations } from './Recommendations';
import { ResultButton } from './ResultButtons';
import { Disclaimer, WrapperAnalysisResult } from './styles';

export const AnalysisResultStep = () => {
  const result = useSelector((state: RootState) => state.analysis.result);

  if (!result) return null;

  const hasAnyRecommendations =
    result.drugsRecommendations ||
    result.exerciseRecommendations ||
    result.nutritionRecommendations ||
    result.supplementsRecommendations;

  return (
    <WrapperAnalysisResult>
      <TitleText>{t('results.title')}</TitleText>
      <DescriptionText>{t('results.description')}</DescriptionText>
      <Disclaimer>
        <LucideOctagonAlert className="octagon-alert" />
        {t('results.disclaimer')}
      </Disclaimer>

      <PersonalizedRecommendations bloodTestSummary={result.bloodTestSummary} />
      <BloodTestSummary data={result} />

      {hasAnyRecommendations && (
        <Recommendations
          supplementsRecommendations={result.supplementsRecommendations}
          nutritionRecommendations={result.nutritionRecommendations}
          drugsRecommendations={result.drugsRecommendations}
          exerciseRecommendations={result.exerciseRecommendations}
        />
      )}

      {result.userQuestionResponse && (
        <AnswerForUserQuestion questionResponse={result.userQuestionResponse} />
      )}
      <ResultButton />
    </WrapperAnalysisResult>
  );
};
