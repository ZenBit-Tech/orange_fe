import { useAppSelector } from '@/store';

import { AnswerForUserQuestion } from './AnswerForUserQuestion';
import { Recommendations } from './Recommendations';
import { ResultButton } from './ResultButtons';
import { WrapperAnalysisResult } from './styles';

export const AnalysisResultStep = () => {
  const result = useAppSelector((state) => state.analysis.result);
  if (result) {
    const hasAnyRecommendations =
      result.drugsRecommendations ||
      result.exerciseRecommendations ||
      result.nutritionRecommendations ||
      result.supplementsRecommendations;

    return (
      <WrapperAnalysisResult>
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
  }
};
