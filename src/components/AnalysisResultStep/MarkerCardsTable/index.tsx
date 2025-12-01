import { memo, useState } from 'react';

import { Collapse } from '@mui/material';

import { t } from 'i18next';
import { ChevronDown, ChevronUp, Trash } from 'lucide-react';

import { DeleteMarkerModal } from '@/components/DeleteMarkerModal';
import { ButtonContainer } from '@/components/DeleteMarkerModal/styles';
import type { MarkerProps } from '@/components/Marker';
import {
  DeleteButton,
  ErrorText,
  MarkerCell,
  MarkerRow,
  MobileLabel,
  StyledAutocomplete,
  StyledTextField,
} from '@/components/Marker/styles';
import { useMarker } from '@/components/Marker/useMarker';
import { ContinueButton } from '@/components/ReviewCustomizeStep/styles';
import { MARKER_OPTIONS, MARKER_STATUS_CLASSES, UNIT_OPTIONS } from '@/constants/marker';
import { calculateMarkerPosition } from '@/helpers/markerPositionCalculator';

import { HealthBar } from '../BloodTestSummary/healthBar';
import { BackButton } from '../ResultButtons/styles';
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

export const MobileMarkerCard = memo<MarkerProps>(
  ({
    id,
    name,
    value,
    unit,
    referenceMin,
    referenceMax,
    status,
    interpretation,
    isFinalStep,
    hasError,
    onNameChange,
    onValueChange,
    onUnitChange,
    onReferenceChange,
    onDelete,
    onValidate,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const {
      isModalOpen,
      setIsModalOpen,
      handleValueChange,
      handleBlur,
      handleDeleteClick,
      handleConfirmDelete,
      handleNameChange,
      handleUnitChange,
      handleSaveMarker,
      handleCancelMarker,
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

    const statusClassName = getStatusClassName(status);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    const displayRefMin = referenceMin || refMin;
    const displayRefMax = referenceMax || refMax;

    const handleSave = () => {
      handleSaveMarker();
      setIsExpanded(false);
    };

    const handleCancel = () => {
      handleCancelMarker();
      setIsExpanded(false);
    };

    return (
      <CardContainer className={isExpanded ? 'expanded' : ''}>
        <CardHeader onClick={toggleExpanded}>
          <MarkerInfo>
            <MarkerNameRow>
              {isFinalStep && <MarkerCircle className={statusClassName} />}
              <MarkerName variant="body1">{name || 'Blood marker'}</MarkerName>
            </MarkerNameRow>
          </MarkerInfo>
          <ExpandButton>
            {isFinalStep ? (
              <StatusBadge variant="body2" className={statusClassName}>
                {status}
              </StatusBadge>
            ) : (
              <StatusBadge variant="body2" className={statusClassName}>
                {value} {unit}
              </StatusBadge>
            )}

            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </ExpandButton>
        </CardHeader>

        <Collapse in={isExpanded}>
          <CardContent>
            {isFinalStep ? (
              <ValueLabel className="top" variant="body1">
                {t('results.value')}
                <ValueText variant="body1">
                  {value} {unit}
                </ValueText>
              </ValueLabel>
            ) : (
              <>
                <MarkerCell className="top bottom">
                  <MobileLabel>{t('review.blood-marker')}</MobileLabel>
                  <StyledAutocomplete
                    size="small"
                    disablePortal
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

                <MarkerRow className="step-2">
                  <MarkerCell>
                    <MobileLabel>{t('review.value')}</MobileLabel>
                    <StyledTextField
                      size="small"
                      label={t('review.value')}
                      value={tempValue}
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
                      value={tempUnit || unit}
                      onChange={handleUnitChange}
                      getOptionLabel={(option) => String(option)}
                      renderInput={(params) => (
                        <StyledTextField {...params} label={t('review.unit')} />
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
                  </MarkerCell>
                </MarkerRow>
              </>
            )}

            <ValueLabel className="bottom" variant="body1">
              {t('results.normalRange')}
              <ValueText variant="body1">
                {displayRefMin} - {displayRefMax} {tempUnit || unit}
              </ValueText>
            </ValueLabel>

            {!isFinalStep && (
              <MarkerRow className="step-2-buttons">
                <MarkerCell>
                  <DeleteButton onClick={handleDeleteClick}>
                    <Trash />
                  </DeleteButton>
                </MarkerCell>

                <ButtonContainer className="step-2">
                  <BackButton className="marker-table-step-2" onClick={handleCancel}>
                    {t('review.delete-marker-cancel')}
                  </BackButton>
                  <ContinueButton className="marker-table-step-2" onClick={handleSave}>
                    {t('review.save')}
                  </ContinueButton>
                </ButtonContainer>
              </MarkerRow>
            )}

            <DeleteMarkerModal
              open={isModalOpen}
              markerName={name}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmDelete}
            />

            {isFinalStep && (
              <HealthBarWrapper>
                <HealthBar
                  position={calculateMarkerPosition(+value, {
                    referenceMin: Number(displayRefMin),
                    referenceMax: Number(displayRefMax),
                  })}
                  status={status ?? ''}
                  isSmallScreen={true}
                />
              </HealthBarWrapper>
            )}

            {isFinalStep && interpretation && (
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
