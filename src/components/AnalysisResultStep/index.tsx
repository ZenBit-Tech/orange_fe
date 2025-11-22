import { t } from 'i18next';
import { LucideOctagonAlert } from 'lucide-react';
import { useSelector } from 'react-redux';

import { DescriptionText, TitleText } from '@/components/ReviewCustomizeStep/styles';
  
import type { RootState } from '@/store';

import { BloodTestSummary } from './BloodTestSummary';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';
import { AnswerForUserQuestion } from './AnswerForUserQuestion';
import { Recommendations } from './Recommendations';
import { ResultButton } from './ResultButtons';
  
import { Disclaimer, WrapperAnalysisResult } from './styles';

export const AnalysisResultStep = () => {
  const props = useSelector((state: RootState) => state.analysis.result);

  if (!props) return null;
  
  const hasAnyRecommendations =
      props.drugsRecommendations ||
      props.exerciseRecommendations ||
      props.nutritionRecommendations ||
      props.supplementsRecommendations;

  return (
    <WrapperAnalysisResult>
      <TitleText>{t('results.title')}</TitleText>
      <DescriptionText>{t('results.description')}</DescriptionText>
      <Disclaimer>
        <LucideOctagonAlert className="octagon-alert" />
        {t('results.disclaimer')}
      </Disclaimer>

      <PersonalizedRecommendations bloodTestSummary={props.bloodTestSummary} />
      <BloodTestSummary data={props} />
      
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
      
    </WrapperAnalysisResult>
  );
};
