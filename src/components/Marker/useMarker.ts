import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { VALIDATION_PATTERNS } from '@/constants/marker';
import type { RootState } from '@/store';

interface UseMarkerProps {
  id: number;
  name: string;
  value: string;
  status?: string;
  hasError: boolean;
  refMin?: string;
  refMax?: string;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onReferenceChange: (id: number, refMin: string, refMax: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
}

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
    setTempValue(value);
  }, [name, value]);

  const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '' || VALIDATION_PATTERNS.DECIMAL_NUMBER.test(inputValue)) {
      setTempValue(inputValue);
    }
  }, []);

  const handleBlur = useCallback(() => {
    onValidate(id);
  }, [id, onValidate]);

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
        }
      }
    },
    [markers],
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
        }
      }
    },
    [markers, tempName],
  );

  const showNameError = useMemo(() => hasError && !tempName, [hasError, tempName]);
  const showValueError = useMemo(() => hasError && !tempValue, [hasError, tempValue]);

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
