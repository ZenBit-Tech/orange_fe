import { memo, useState } from 'react';

import { Collapse } from '@mui/material';

import { t } from 'i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { MARKER_STATUS_CLASSES } from '@/constants/marker';
import { calculateMarkerPosition } from '@/helpers/markerPositionCalculator';

import { HealthBar } from '../BloodTestSummary/healthBar';
import type { MarkerInterpretation as InterpretationType } from '../types';
import {
  CardContainer,
  CardContent,
  CardHeader,
  ExpandButton,
  HealthBarWrapper,
  ImportanceText,
  InterpretationSection,
  MarkerCircle,
  MarkerInfo,
  MarkerName,
  MarkerNameRow,
  StatusBadge,
  ValueLabel,
  ValueText,
} from './styles';

const getStatusClassName = (statusValue: string | undefined): string => {
  if (!statusValue) return '';
  return MARKER_STATUS_CLASSES[statusValue as keyof typeof MARKER_STATUS_CLASSES] || '';
};

interface MobileMarkerCardProps {
  id: number;
  name: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status?: string;
  interpretation?: InterpretationType;
}

export const MobileMarkerCard = memo<MobileMarkerCardProps>(
  ({ name, value, unit, referenceMin, referenceMax, status, interpretation }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const statusClassName = getStatusClassName(status);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <CardContainer className={isExpanded ? 'expanded' : ''}>
        <CardHeader onClick={toggleExpanded}>
          <MarkerInfo>
            <MarkerNameRow>
              <MarkerCircle className={statusClassName} />
              <MarkerName variant="body1">{name}</MarkerName>
            </MarkerNameRow>
          </MarkerInfo>
          <ExpandButton>
            <StatusBadge variant="body2" className={statusClassName}>
              {status}
            </StatusBadge>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </ExpandButton>
        </CardHeader>

        <Collapse in={isExpanded}>
          <CardContent>
            <ValueLabel className="top" variant="body1">
              {t('results.value')}
              <ValueText variant="body1">
                {value} {unit}
              </ValueText>
            </ValueLabel>

            <ValueLabel className="bottom" variant="body1">
              {t('results.normalRange')}
              <ValueText variant="body1">
                {referenceMin} - {referenceMax} {unit}
              </ValueText>
            </ValueLabel>

            <HealthBarWrapper>
              <HealthBar
                position={calculateMarkerPosition(+value, {
                  referenceMin: Number(referenceMin),
                  referenceMax: Number(referenceMax),
                })}
                status={status ?? ''}
                isSmallScreen={true}
              />
            </HealthBarWrapper>

            {interpretation && (
              <InterpretationSection>
                <ImportanceText variant="body2">{interpretation.whyImportant}</ImportanceText>
              </InterpretationSection>
            )}
          </CardContent>
        </Collapse>
      </CardContainer>
    );
  },
);

MobileMarkerCard.displayName = 'MobileMarkerCard';
