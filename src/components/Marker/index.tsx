import { memo, useRef, useState } from 'react';

import { t } from 'i18next';
import { ChevronDown, Trash } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';

import { DeleteMarkerModal } from '@/components/DeleteMarkerModal';
import { MARKER_OPTIONS, MARKER_STATUS_CLASSES, UNIT_OPTIONS } from '@/constants/marker';
import { calculateMarkerPosition } from '@/helpers/markerPositionCalculator';

import { HealthBar } from '../AnalysisResultStep/BloodTestSummary/healthBar';
import type { MarkerInterpretation as InterpretationType } from '../AnalysisResultStep/types';
import {
  DeleteButton,
  ErrorText,
  MarkerCell,
  MarkerCircle,
  MarkerInterpretation,
  MarkerRow,
  MarkerText,
  MobileLabel,
  NormalRangeText,
  QuestionIconButton,
  StyledAutocomplete,
  StyledTextField,
  TooltipContainer,
  TooltipContent,
  TooltipDescription,
  TooltipImportance,
  TooltipTitle,
} from './styles';
import { useMarker } from './useMarker';

const getStatusClassName = (statusValue: string | undefined): string => {
  if (!statusValue) return '';
  return MARKER_STATUS_CLASSES[statusValue as keyof typeof MARKER_STATUS_CLASSES] || '';
};

export interface MarkerProps {
  id: number;
  name: string;
  value: string;
  unit: string;
  referenceMin: string;
  referenceMax: string;
  status?: string;
  interpretation?: InterpretationType;
  hasError: boolean;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onReferenceChange: (id: number, refMin: string, refMax: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
  isFinalStep: boolean;
}

export const Marker = memo<MarkerProps>(
  ({
    id,
    name,
    value,
    unit,
    referenceMin,
    referenceMax,
    status,
    interpretation,
    hasError,
    onNameChange,
    onValueChange,
    onUnitChange,
    onReferenceChange,
    onDelete,
    onValidate,
    isFinalStep,
  }) => {
    const {
      isModalOpen,
      setIsModalOpen,
      handleValueChange,
      handleBlur,
      handleDeleteClick,
      handleConfirmDelete,
      handleNameChange,
      handleUnitChange,
      showNameError,
      showValueError,
      refMin,
      refMax,
    } = useMarker({
      id,
      name,
      value,
      status,
      hasError,
      refMin: referenceMin,
      refMax: referenceMax,
      onNameChange,
      onValueChange,
      onUnitChange,
      onReferenceChange,
      onDelete,
      onValidate,
    });

    const buttonRef = useRef<HTMLButtonElement>(null);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

    const handleMouseEnter = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setTooltipStyle({
          top: `${rect.top + rect.height / 2}px`,
          left: `${rect.left - 352}px`,
          transform: 'translateY(-50%)',
        });
      }
    };

    const statusClassName = getStatusClassName(status);

    const displayRefMin = referenceMin || refMin;
    const displayRefMax = referenceMax || refMax;

    return (
      <>
        {!isFinalStep ? (
          <MarkerRow>
            <MarkerCell>
              <MobileLabel>{t('review.blood-marker')}</MobileLabel>
              <StyledAutocomplete
                size="small"
                disablePortal
                options={MARKER_OPTIONS}
                value={name || null}
                onChange={handleNameChange}
                onBlur={handleBlur}
                getOptionLabel={(option) => String(option)}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    label={t('review.blood-marker')}
                    error={showNameError}
                  />
                )}
                popupIcon={<ChevronDown />}
                slotProps={{
                  paper: {
                    sx: (theme) => ({
                      borderRadius: '12px',
                      border: `1px solid ${theme.palette.border.default}`,
                      marginTop: theme.spacing(0.5),
                      '& .MuiAutocomplete-option[aria-selected="true"]': {
                        backgroundColor: `${theme.palette.surface.primary.default} !important`,
                      },
                    }),
                  },
                }}
              />
              {showNameError && <ErrorText>{t('review.value-required')}</ErrorText>}
            </MarkerCell>

            <MarkerCell>
              <MobileLabel>{t('review.value')}</MobileLabel>
              <StyledTextField
                size="small"
                label={t('review.value')}
                value={value}
                onChange={handleValueChange}
                onBlur={handleBlur}
                error={showValueError}
                fullWidth
                inputProps={{
                  inputMode: 'decimal',
                  pattern: '[0-9]*\\.?[0-9]*',
                }}
              />
              {showValueError && <ErrorText>{t('review.value-required')}</ErrorText>}
            </MarkerCell>

            <MarkerCell>
              <MobileLabel>{t('review.unit')}</MobileLabel>
              <StyledAutocomplete
                size="small"
                disablePortal
                options={UNIT_OPTIONS}
                value={unit}
                onChange={handleUnitChange}
                getOptionLabel={(option) => String(option)}
                renderInput={(params) => <StyledTextField {...params} label={t('review.unit')} />}
                popupIcon={<ChevronDown />}
                slotProps={{
                  paper: {
                    sx: (theme) => ({
                      borderRadius: '12px',
                      border: `1px solid ${theme.palette.border.default}`,
                      marginTop: theme.spacing(0.5),
                      '& .MuiAutocomplete-option[aria-selected="true"]': {
                        backgroundColor: `${theme.palette.surface.primary.default} !important`,
                      },
                    }),
                  },
                }}
              />
            </MarkerCell>

            <MarkerCell>
              <MobileLabel>{t('review.normal-range')}</MobileLabel>
              <NormalRangeText>
                {displayRefMin} - {displayRefMax} {unit}
              </NormalRangeText>
            </MarkerCell>

            <MarkerCell>
              <DeleteButton onClick={handleDeleteClick}>
                <Trash />
              </DeleteButton>
            </MarkerCell>

            <DeleteMarkerModal
              open={isModalOpen}
              markerName={name}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmDelete}
            />
          </MarkerRow>
        ) : (
          <MarkerRow className="last-step">
            <MarkerCell className="cell-markers">
              <MarkerCircle className={statusClassName}></MarkerCircle>
              <MarkerText>{name}</MarkerText>
            </MarkerCell>

            <MarkerCell className="cell-markers">
              <MarkerText>{value}</MarkerText>
            </MarkerCell>

            <MarkerCell className="cell-markers">
              <HealthBar
                position={calculateMarkerPosition(+value, {
                  referenceMin: Number(displayRefMin),
                  referenceMax: Number(displayRefMax),
                })}
                status={status ?? ''}
                isSmallScreen={false}
              />
              <MarkerText className="normal-range">
                {displayRefMin} - {displayRefMax} {unit}
              </MarkerText>
            </MarkerCell>

            <MarkerCell className="cell-markers">
              <MarkerInterpretation className={statusClassName}>{status}</MarkerInterpretation>
              <TooltipContainer onMouseEnter={handleMouseEnter}>
                <QuestionIconButton ref={buttonRef}>
                  <CircleQuestionMark />
                </QuestionIconButton>
                <TooltipContent className="tooltip-content" style={tooltipStyle}>
                  <TooltipTitle>
                    {t('results.about')} {name}
                  </TooltipTitle>
                  <TooltipDescription>{interpretation?.about}</TooltipDescription>
                  <TooltipImportance>
                    <strong>{t('results.importance')}</strong> {interpretation?.whyImportant}
                  </TooltipImportance>
                </TooltipContent>
              </TooltipContainer>
            </MarkerCell>
          </MarkerRow>
        )}
      </>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.id === nextProps.id &&
      prevProps.name === nextProps.name &&
      prevProps.value === nextProps.value &&
      prevProps.unit === nextProps.unit &&
      prevProps.referenceMin === nextProps.referenceMin &&
      prevProps.referenceMax === nextProps.referenceMax &&
      prevProps.hasError === nextProps.hasError &&
      prevProps.interpretation === nextProps.interpretation
    );
  },
);

Marker.displayName = 'Marker';
