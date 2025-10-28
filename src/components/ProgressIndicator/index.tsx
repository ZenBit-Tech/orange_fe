import React from 'react';

import { t } from 'i18next';

import {
  DescriptionText,
  PercentText,
  SpinnerCircle,
  SpinnerContainer,
  SpinnerSvg,
  SpinnerWrapper,
  TextBlock,
  TitleText,
} from './styles';

interface OCRSpinnerProps {
  progress: number;
  visible?: boolean;
  titleKey?: string;
  descriptionKey?: string;
}

const radius = 30;
const circumference = 2 * Math.PI * radius;

export const OCRSpinner: React.FC<OCRSpinnerProps> = ({
  progress,
  visible = false,
  titleKey = 'spinner.analyzingTitle',
  descriptionKey = 'spinner.analyzingDescription',
}) => {
  if (!visible) return null;

  const offset = circumference - (progress / 100) * circumference;
  const isCompleted = progress >= 100;

  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        <SpinnerSvg>
          <SpinnerCircle r={radius} cx="75" cy="75" />
          <SpinnerCircle
            $isProgress
            r={radius}
            cx="75"
            cy="75"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            $isCompleted={isCompleted}
          />
        </SpinnerSvg>
        <PercentText $isCompleted={isCompleted}>{progress.toFixed(0)}%</PercentText>
      </SpinnerWrapper>

      <TextBlock>
        <TitleText>{t(titleKey)}</TitleText>
        <DescriptionText>{t(descriptionKey)}</DescriptionText>
      </TextBlock>
    </SpinnerContainer>
  );
};
