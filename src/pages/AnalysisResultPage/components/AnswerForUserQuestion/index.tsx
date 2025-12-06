import { useTranslation } from 'react-i18next';

import type { AnswerForUserQuestionProps } from '@/pages/AnalysisResultPage/types/types';

import {
  QuestionBlock,
  QuestionBlockDescription,
  QuestionBlockRecommendation,
  QuestionBlockTitle,
  QuestionCard,
  Title,
  Wrapper,
} from './styles';

export const AnswerForUserQuestion: React.FC<AnswerForUserQuestionProps> = ({
  questionResponse,
}) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title variant="h6">{t('AnswerForUserQuestion.title')}</Title>
      <QuestionCard>
        <QuestionBlock>
          <QuestionBlockTitle variant="body1">
            {t('AnswerForUserQuestion.ur-question')}
          </QuestionBlockTitle>
          <QuestionBlockDescription variant="h6">
            {questionResponse.question}
          </QuestionBlockDescription>
        </QuestionBlock>
        <QuestionBlock>
          <QuestionBlockTitle variant="body1">
            {t('AnswerForUserQuestion.ai-rec')}
          </QuestionBlockTitle>
          <QuestionBlockRecommendation variant="body1">
            {questionResponse.answer}
          </QuestionBlockRecommendation>
        </QuestionBlock>
      </QuestionCard>
    </Wrapper>
  );
};
