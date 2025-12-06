import { forwardRef, memo, useRef, useState } from 'react';

import { t } from 'i18next';
import { ChevronDown, CircleQuestionMark, Trash } from 'lucide-react';

import { MARKER_OPTIONS, MARKER_STATUS_CLASSES, UNIT_OPTIONS } from '@/constants';
import { DeleteMarkerModal } from '@/pages/AnalysisResultPage/components/DeleteMarkerModal';
import { HealthBar } from '@/pages/AnalysisResultPage/components/HealthBar';
import { calculateMarkerPosition } from '@/pages/AnalysisResultPage/utils/markerPositionCalculator';

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
import type { MarkerProps } from './types';
import { useMarker } from './useMarker';

const getStatusClassName = (statusValue: string | undefined): string => {
  if (!statusValue) return '';
  return MARKER_STATUS_CLASSES[statusValue as keyof typeof MARKER_STATUS_CLASSES] || '';
};

const MarkerComponent = forwardRef<HTMLDivElement, MarkerProps>(
  (
    {
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
      isDisabled = false,
    },
    ref,
  ) => {
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
      tempName,
      tempValue,
      tempUnit,
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

    if (isFinalStep) {
      return (
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
      );
    }

    return (
      <>
        <MarkerRow ref={ref}>
          <MarkerCell>
            <MobileLabel>{t('review.blood-marker')}</MobileLabel>
            <StyledAutocomplete
              disabled={isDisabled}
              size="small"
              options={MARKER_OPTIONS}
              value={tempName || null}
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
              disabled={isDisabled}
              size="small"
              label={t('review.value')}
              value={tempValue || null}
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
              disabled={isDisabled}
              size="small"
              options={UNIT_OPTIONS}
              value={tempUnit || unit}
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
              {displayRefMin} - {displayRefMax} {tempUnit || unit}
            </NormalRangeText>
          </MarkerCell>

          <MarkerCell>
            <DeleteButton onClick={handleDeleteClick} disabled={isDisabled}>
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
      </>
    );
  },
);
MarkerComponent.displayName = 'MarkerComponent';

export const Marker = memo(MarkerComponent, (prevProps: MarkerProps, nextProps: MarkerProps) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.name === nextProps.name &&
    prevProps.value === nextProps.value &&
    prevProps.unit === nextProps.unit &&
    prevProps.referenceMin === nextProps.referenceMin &&
    prevProps.referenceMax === nextProps.referenceMax &&
    prevProps.hasError === nextProps.hasError &&
    prevProps.status === nextProps.status &&
    prevProps.isFinalStep === nextProps.isFinalStep &&
    prevProps.isDisabled === nextProps.isDisabled &&
    (prevProps.isFinalStep ? prevProps.interpretation === nextProps.interpretation : true)
  );
});

Marker.displayName = 'Marker';
