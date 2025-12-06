import { useEffect } from 'react';

import { t } from 'i18next';
import { LucideOctagonAlert } from 'lucide-react';
import { useSelector } from 'react-redux';

import { DescriptionText, TitleText } from '@/pages/ReviewCustomizePage/styles';
import type { RootState } from '@/store';

import { AnswerForUserQuestion } from './components/AnswerForUserQuestion';
import { BloodTestSummary } from './components/BloodTestSummary';
import { PersonalizedRecommendations } from './components/PersonalizedRecommendations';
import { Recommendations } from './components/RecommendationsList';
import { ResultButton } from './components/ResultButtons';
import { Disclaimer, WrapperAnalysisResult } from './styles';
import type { AnalysisResultStepProps } from './types/types';

export const AnalysisResultStep: React.FC<AnalysisResultStepProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        <strong>{t('results.disclaimer')}</strong> &nbsp;
        {t('results.disclaimer-text')}
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
      <ResultButton onBack={onBack} />
    </WrapperAnalysisResult>
  );
};
