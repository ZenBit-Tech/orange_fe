import { useCallback, useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import type { MarkerData } from '@/constants/marker';
import type { RootState } from '@/store';

interface UseMarkerTableProps {
  onValidationChange?: (hasErrors: boolean) => void;
  initialMarkers?: MarkerData[];
}

export const useMarkerTable = ({ onValidationChange }: UseMarkerTableProps = {}) => {
  const extractedData = useSelector((state: RootState) => state.bloodTest.extractedData);
  const [markers, setMarkers] = useState<MarkerData[]>(() => {
    if (!extractedData || !Array.isArray(extractedData)) return [];

    return extractedData.map((marker) => ({
      id: marker.id,
      name: marker.name,
      value: String(marker.value),
      unit: marker.unit,
      referenceMin: marker.referenceMin,
      referenceMax: marker.referenceMax,
      hasError: false,
    }));
  });

  const onValidationChangeRef = useRef(onValidationChange);

  useEffect(() => {
    onValidationChangeRef.current = onValidationChange;
  }, [onValidationChange]);

  useEffect(() => {
    const hasErrors = markers.some((marker) => marker.hasError);
    onValidationChangeRef.current?.(hasErrors);
  }, [markers]);

  const validateAllMarkers = useCallback(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        hasError: !marker.name || !marker.value,
      })),
    );
  }, []);

  const handleNameChange = useCallback((id: number, name: string) => {
    setMarkers((prevMarkers) => {
      return prevMarkers.map((marker) => {
        if (marker.id !== id) return marker;

        return {
          ...marker,
          name,
          unit: marker.unit,
          normalRange: `${`${marker.referenceMin} - ${marker.referenceMax}`}`,
          hasError: !name || !marker.value,
        };
      });
    });
  }, []);

  const handleValueChange = useCallback((id: number, value: string) => {
    setMarkers((prevMarkers) => {
      return prevMarkers.map((marker) => {
        if (marker.id !== id) return marker;
        return { ...marker, value, hasError: !marker.name || !value };
      });
    });
  }, []);

  const handleUnitChange = useCallback((id: number, unit: string) => {
    setMarkers((prevMarkers) => {
      return prevMarkers.map((marker) => {
        if (marker.id !== id) return marker;
        return { ...marker, unit };
      });
    });
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
          referenceMin: '',
          referenceMax: '',
          hasError: false,
        },
      ];
    });
  }, []);

  const validateMarker = useCallback((id: number) => {
    setMarkers((prevMarkers) => {
      return prevMarkers.map((marker) => {
        if (marker.id !== id) return marker;
        return {
          ...marker,
          hasError: !marker.name || !marker.value,
        };
      });
    });
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
