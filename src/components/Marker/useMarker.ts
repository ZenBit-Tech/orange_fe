import { useCallback, useMemo, useState } from 'react';

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

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (inputValue === '' || VALIDATION_PATTERNS.DECIMAL_NUMBER.test(inputValue)) {
        onValueChange(id, inputValue);
      }
    },
    [id, onValueChange],
  );

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
      if (newValue) {
        onNameChange(id, newValue);
      }
    },
    [id, onNameChange],
  );

  const handleUnitChange = useCallback(
    (_event: React.SyntheticEvent, newValue: string | null) => {
      if (newValue) {
        onUnitChange(id, newValue);
      }
    },
    [id, onUnitChange],
  );

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
    showNameError,
    showValueError,
  };
};
