import { t } from 'i18next';
import { LucideOctagonAlert } from 'lucide-react';
import { useSelector } from 'react-redux';

import { DescriptionText, TitleText } from '@/components/ReviewCustomizeStep/styles';
import type { RootState } from '@/store';

import { BloodTestSummary } from './BloodTestSummary';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';
import { Disclaimer, WrapperAnalysisResult } from './styles';

export const AnalysisResultStep = () => {
  const props = useSelector((state: RootState) => state.analysis.result);

  console.log(props);
  if (!props) return null;

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
    </WrapperAnalysisResult>
  );
};
