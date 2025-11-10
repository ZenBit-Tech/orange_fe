import { useCallback, useEffect, useState } from 'react';

import { MARKER_CONFIG } from '@/constants/marker';

const initialMarkers = [
  {
    id: 1,
    name: 'Bilirubin (Total)',
    value: '4.8',
    unit: 'mg/dL',
    normalRange: '0.1 - 1.2 mg/dL',
    hasError: false,
  },
  {
    id: 2,
    name: 'Amylase',
    value: '100',
    unit: 'U/L',
    normalRange: '30 - 110 U/L',
    hasError: false,
  },
  { id: 3, name: 'AST', value: '9.8', unit: 'U/L', normalRange: '5 - 40 U/L', hasError: false },
  {
    id: 4,
    name: 'Creatinine',
    value: '1.8',
    unit: 'mg/dL',
    normalRange: '0.6 - 1.2 mg/dL',
    hasError: false,
  },
  { id: 5, name: 'LDH', value: '180', unit: 'U/L', normalRange: '125 - 220 U/L', hasError: false },
];

interface MarkerData {
  id: number;
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  hasError: boolean;
}

interface UseMarkerTableProps {
  onValidationChange?: (hasErrors: boolean) => void;
  initialMarkers?: MarkerData[];
}

export const useMarkerTable = ({ onValidationChange }: UseMarkerTableProps = {}) => {
  const [markers, setMarkers] = useState<MarkerData[]>(initialMarkers);

  useEffect(() => {
    const hasErrors = markers.some((marker) => marker.hasError);
    onValidationChange?.(hasErrors);
  }, [markers, onValidationChange]);

  const validateAllMarkers = useCallback(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        hasError: !marker.name || !marker.value,
      })),
    );
  }, []);

  const handleNameChange = useCallback((id: number, name: string) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => {
        if (marker.id === id) {
          const config = MARKER_CONFIG[name];
          return {
            ...marker,
            name,
            unit: config?.unit || marker.unit,
            normalRange: config?.normalRange || '-',
            hasError: !name || !marker.value,
          };
        }
        return marker;
      }),
    );
  }, []);

  const handleValueChange = useCallback((id: number, value: string) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === id ? { ...marker, value, hasError: !marker.name || !value } : marker,
      ),
    );
  }, []);

  const handleUnitChange = useCallback((id: number, unit: string) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => (marker.id === id ? { ...marker, unit } : marker)),
    );
  }, []);

  const handleDelete = useCallback((id: number) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
  }, []);

  const handleAddMarker = useCallback(() => {
    setMarkers((prevMarkers) => {
      const newId = Math.max(...prevMarkers.map((m) => m.id), 0) + 1;
      return [
        ...prevMarkers,
        {
          id: newId,
          name: '',
          value: '',
          unit: '',
          normalRange: '-',
          hasError: false,
        },
      ];
    });
  }, []);

  const validateMarker = useCallback((id: number) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => {
        if (marker.id === id) {
          return {
            ...marker,
            hasError: !marker.name || !marker.value,
          };
        }
        return marker;
      }),
    );
  }, []);

  return {
    markers,
    validateAllMarkers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleAddMarker,
    validateMarker,
  };
};
