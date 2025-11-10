import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import { t } from 'i18next';
import { Plus } from 'lucide-react';

import { Marker } from '@/components/Marker';
import { BREAKPOINTS, MARKER_CONFIG } from '@/constants/marker';
import { theme } from '@/theme';

import {
  AddMarkerButton,
  AddMarkerButtonText,
  MarkerTableBody,
  MarkerTableContainer,
  MarkerTableContent,
  MarkerTableFooter,
  MarkerTableHeader,
  MarkerTableHeaderCell,
} from './styles';

interface MarkerData {
  id: number;
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  hasError: boolean;
}

interface MarkerTableProps {
  onValidationChange?: (hasErrors: boolean) => void;
  initialMarkers?: MarkerData[];
}

export interface MarkerTableRef {
  validateAllMarkers: () => void;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.MOBILE : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.MOBILE);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

interface AddMarkerBtnProps {
  onClick: () => void;
}

const AddMarkerBtn: React.FC<AddMarkerBtnProps> = ({ onClick }) => (
  <AddMarkerButton onClick={onClick}>
    <Plus color={theme.palette.baseColors.green[600]} />
    <AddMarkerButtonText>{t('review.add-marker')}</AddMarkerButtonText>
  </AddMarkerButton>
);

AddMarkerBtn.displayName = 'AddMarkerBtn';

export const MarkerTable = forwardRef<MarkerTableRef, MarkerTableProps>(
  ({ onValidationChange, initialMarkers }, ref) => {
    const [markers, setMarkers] = useState<MarkerData[]>(initialMarkers || []);

    const isMobile = useIsMobile();

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

    useImperativeHandle(ref, () => ({
      validateAllMarkers,
    }));

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

    return (
      <>
        <MarkerTableContainer>
          <MarkerTableBody>
            <MarkerTableContent>
              <MarkerTableHeader>
                <MarkerTableHeaderCell>{t('review.marker')}</MarkerTableHeaderCell>
                <MarkerTableHeaderCell>{t('review.value')}</MarkerTableHeaderCell>
                <MarkerTableHeaderCell>{t('review.unit')}</MarkerTableHeaderCell>
                <MarkerTableHeaderCell>{t('review.normal-range')}</MarkerTableHeaderCell>
                <MarkerTableHeaderCell></MarkerTableHeaderCell>
              </MarkerTableHeader>

              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  {...marker}
                  onNameChange={handleNameChange}
                  onValueChange={handleValueChange}
                  onUnitChange={handleUnitChange}
                  onDelete={handleDelete}
                  onValidate={validateMarker}
                />
              ))}
            </MarkerTableContent>
          </MarkerTableBody>

          {!isMobile && (
            <MarkerTableFooter>
              <AddMarkerBtn onClick={handleAddMarker} />
            </MarkerTableFooter>
          )}
        </MarkerTableContainer>

        {isMobile && <AddMarkerBtn onClick={handleAddMarker} />}
      </>
    );
  },
);

MarkerTable.displayName = 'MarkerTable';
