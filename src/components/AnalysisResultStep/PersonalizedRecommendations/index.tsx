import { t } from 'i18next';

import DonutChart from './donut';
import {
  BloodTestSummaryTitle,
  ConclusionText,
  Diagram,
  MarkerItem,
  MarkersList,
  StyledBloodTestSummary,
  SummaryText,
  WrapperBloodTestSummary,
} from './styles';

interface BloodTestSummaryProps {
  overallWellnessScore: number;
  overallSummary: string;
  detailedFindings: string[];
  conclusionStatement: string;
}

interface PersonalizedRecommendationsProps {
  bloodTestSummary: BloodTestSummaryProps;
}

export const PersonalizedRecommendations = ({
  bloodTestSummary,
}: PersonalizedRecommendationsProps) => {
  console.log(bloodTestSummary);
  return (
    <WrapperBloodTestSummary>
      <Diagram>
        <BloodTestSummaryTitle variant="h6">{t('results.wellness-score')}</BloodTestSummaryTitle>
        <DonutChart valueInsideChart={bloodTestSummary.overallWellnessScore} />
      </Diagram>

      <StyledBloodTestSummary>
        <BloodTestSummaryTitle variant="h6">{t('results.summary-title')}</BloodTestSummaryTitle>

        <SummaryText variant="body1">{bloodTestSummary.overallSummary}</SummaryText>

        <MarkersList>
          {bloodTestSummary.detailedFindings.map((finding, index) => (
            <MarkerItem key={index}>{finding}</MarkerItem>
          ))}
        </MarkersList>

        <ConclusionText variant="body1">{bloodTestSummary.conclusionStatement}</ConclusionText>
      </StyledBloodTestSummary>
    </WrapperBloodTestSummary>
  );
};
