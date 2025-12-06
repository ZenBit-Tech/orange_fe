import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { VALIDATION_PATTERNS } from '@/constants';
import type { RootState } from '@/store';
import type { UseMarkerProps } from '@/types/marker';

export const useMarker = ({
  id,
  name,
  value,
  hasError,
  refMin: initialRefMin,
  refMax: initialRefMax,
  onNameChange,
  onValueChange,
  onUnitChange,
  onReferenceChange,
  onDelete,
  onValidate,
}: UseMarkerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refMin, setRefMin] = useState(initialRefMin || '');
  const [refMax, setRefMax] = useState(initialRefMax || '');

  const [tempName, setTempName] = useState(name);
  const [tempValue, setTempValue] = useState(value);
  const [tempUnit, setTempUnit] = useState('');
  const [tempRefMin, setTempRefMin] = useState(initialRefMin || '');
  const [tempRefMax, setTempRefMax] = useState(initialRefMax || '');

  const markers = useSelector((state: RootState) => state.markers.data);
  useEffect(() => {
    setTempName(name);
  }, [name]);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  useEffect(() => {
    if (initialRefMin) setRefMin(initialRefMin);
    if (initialRefMax) setRefMax(initialRefMax);
  }, [initialRefMin, initialRefMax]);

  useEffect(() => {
    setTempName(name);
    setTempValue(value);
  }, [name, value]);

  const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '' || VALIDATION_PATTERNS.DECIMAL_NUMBER.test(inputValue)) {
      setTempValue(inputValue);
    }
  }, []);

  const handleBlur = useCallback(() => {
    if (tempName !== name) {
      onNameChange(id, tempName);
    }
    if (tempValue !== value) {
      onValueChange(id, tempValue);
    }
    if (tempUnit && tempUnit !== '') {
      onUnitChange(id, tempUnit);
    }
    if (tempRefMin !== initialRefMin || tempRefMax !== initialRefMax) {
      onReferenceChange(id, tempRefMin, tempRefMax);
    }

    onValidate(id);
  }, [
    id,
    tempName,
    tempValue,
    tempUnit,
    tempRefMin,
    tempRefMax,
    name,
    value,
    initialRefMin,
    initialRefMax,
    onNameChange,
    onValueChange,
    onUnitChange,
    onReferenceChange,
    onValidate,
  ]);

  const handleDeleteClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  const handleNameChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string | null) => {
      if (newValue && markers) {
        setTempName(newValue);
        const selectedMarker = markers.find((marker) => marker.name === newValue);

        if (selectedMarker) {
          setTempUnit(selectedMarker.unit);
          setTempRefMin(selectedMarker.referenceMin);
          setTempRefMax(selectedMarker.referenceMax);
          setRefMin(selectedMarker.referenceMin);
          setRefMax(selectedMarker.referenceMax);

          onReferenceChange(id, selectedMarker.referenceMin, selectedMarker.referenceMax);
          onUnitChange(id, selectedMarker.unit);
        }
      }
    },
    [markers, id, onReferenceChange, onUnitChange],
  );

  const handleUnitChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string | null) => {
      if (newValue && markers && tempName) {
        setTempUnit(newValue);

        const markerWithNewUnit = markers.find(
          (marker) => marker.name === tempName && marker.unit === newValue,
        );

        if (markerWithNewUnit) {
          setTempRefMin(markerWithNewUnit.referenceMin);
          setTempRefMax(markerWithNewUnit.referenceMax);
          setRefMin(markerWithNewUnit.referenceMin);
          setRefMax(markerWithNewUnit.referenceMax);

          onReferenceChange(id, markerWithNewUnit.referenceMin, markerWithNewUnit.referenceMax);
        }
      }
    },
    [markers, tempName, id, onReferenceChange],
  );

  const handleSaveMarker = useCallback(() => {
    if (tempName !== name) {
      onNameChange(id, tempName);
    }
    if (tempValue !== value) {
      onValueChange(id, tempValue);
    }
    if (tempUnit && tempUnit !== '') {
      onUnitChange(id, tempUnit);
    }
    if (tempRefMin !== initialRefMin || tempRefMax !== initialRefMax) {
      onReferenceChange(id, tempRefMin, tempRefMax);
    }

    return true;
  }, [
    id,
    tempName,
    tempValue,
    tempUnit,
    tempRefMin,
    tempRefMax,
    name,
    value,
    initialRefMin,
    initialRefMax,
    onNameChange,
    onValueChange,
    onUnitChange,
    onReferenceChange,
  ]);

  const handleCancelMarker = useCallback(() => {
    setTempName(name);
    setTempValue(value);
    setTempUnit('');
    setTempRefMin(initialRefMin || '');
    setTempRefMax(initialRefMax || '');
    setRefMin(initialRefMin || '');
    setRefMax(initialRefMax || '');

    return true;
  }, [name, value, initialRefMin, initialRefMax]);

  const showNameError = useMemo(() => hasError && !name, [hasError, name]);
  const showValueError = useMemo(() => hasError && !value, [hasError, value]);

  return {
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
  };
};
