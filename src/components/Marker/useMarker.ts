import { useState } from 'react';

import { VALIDATION_PATTERNS } from '@/constants/marker';

interface UseMarkerProps {
  id: number;
  name: string;
  value: string;
  hasError: boolean;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
}

export const useMarker = ({
  id,
  name,
  value,
  hasError,
  onNameChange,
  onValueChange,
  onUnitChange,
  onDelete,
  onValidate,
}: UseMarkerProps) => {
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

  const handleNameChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    if (newValue) {
      onNameChange(id, newValue);
    }
  };

  const handleUnitChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    if (newValue) {
      onUnitChange(id, newValue);
    }
  };

  const showNameError = hasError && !name;
  const showValueError = hasError && !value;

  return {
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
  };
};
