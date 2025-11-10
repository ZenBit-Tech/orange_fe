import React, { useState } from 'react';

import { t } from 'i18next';
import { ChevronDown, Trash } from 'lucide-react';

import { DeleteMarkerModal } from '@/components/DeleteMarkerModal';
import { MARKER_OPTIONS, UNIT_OPTIONS, VALIDATION_PATTERNS } from '@/constants/marker';

import {
  DeleteButton,
  ErrorText,
  MarkerCell,
  MarkerRow,
  MobileLabel,
  NormalRangeText,
  StyledAutocomplete,
  StyledTextField,
} from './styles';

interface MarkerProps {
  id: number;
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  hasError: boolean;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
}

export const Marker: React.FC<MarkerProps> = ({
  id,
  name,
  value,
  unit,
  normalRange,
  hasError,
  onNameChange,
  onValueChange,
  onUnitChange,
  onDelete,
  onValidate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '' || VALIDATION_PATTERNS.DECIMAL_NUMBER.test(inputValue)) {
      onValueChange(id, inputValue);
    }
  };

  const handleBlur = () => {
    onValidate(id);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
  };

  const showNameError = hasError && !name;
  const showValueError = hasError && !value;

  return (
    <>
      <MarkerRow>
        <MarkerCell>
          <MobileLabel>{t('review.blood-marker')}</MobileLabel>
          <StyledAutocomplete
            size="small"
            disablePortal
            options={[...MARKER_OPTIONS]}
            value={name || null}
            onChange={(_event: React.SyntheticEvent, newValue: string | null) => {
              if (newValue) {
                onNameChange(id, newValue);
              }
            }}
            onBlur={handleBlur}
            getOptionLabel={(option) => String(option)}
            renderInput={(params) => (
              <StyledTextField {...params} label={t('review.blood-marker')} error={showNameError} />
            )}
            popupIcon={<ChevronDown />}
            slotProps={{
              paper: {
                sx: (theme) => ({
                  borderRadius: '12px',
                  border: `1px solid ${theme.palette.border.default}`,
                  marginTop: theme.spacing(0.5),
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
            options={[...UNIT_OPTIONS]}
            value={unit}
            onChange={(_event: React.SyntheticEvent, newValue: string | null) => {
              if (newValue) {
                onUnitChange(id, newValue);
              }
            }}
            getOptionLabel={(option) => String(option)}
            renderInput={(params) => <StyledTextField {...params} label={t('review.unit')} />}
            popupIcon={<ChevronDown />}
            slotProps={{
              paper: {
                sx: (theme) => ({
                  borderRadius: '12px',
                  border: `1px solid ${theme.palette.border.default}`,
                  marginTop: theme.spacing(0.5),
                }),
              },
            }}
          />
        </MarkerCell>

        <MarkerCell>
          <MobileLabel>{t('review.normal-range')}</MobileLabel>
          <NormalRangeText>{normalRange}</NormalRangeText>
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
    </>
  );
};
