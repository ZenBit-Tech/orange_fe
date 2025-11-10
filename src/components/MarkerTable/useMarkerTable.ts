import { useCallback, useEffect, useState } from 'react';

import { MARKER_CONFIG } from '@/constants/marker';

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

export const useMarkerTable = ({ onValidationChange, initialMarkers }: UseMarkerTableProps) => {
  const [markers, setMarkers] = useState<MarkerData[]>(initialMarkers || []);

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
