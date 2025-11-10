import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { t } from 'i18next';
import { Plus } from 'lucide-react';

import { Marker } from '@/components/Marker';
import { BREAKPOINTS } from '@/constants/marker';
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
import { useMarkerTable } from './useMarkerTable';

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

const useIsSmallScreen = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.MD : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.MD);
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
    const {
      markers,
      validateAllMarkers,
      handleNameChange,
      handleValueChange,
      handleUnitChange,
      handleDelete,
      handleAddMarker,
      validateMarker,
    } = useMarkerTable({ onValidationChange, initialMarkers });

    const isSmallScreen = useIsSmallScreen();

    useImperativeHandle(ref, () => ({
      validateAllMarkers,
    }));

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

          {!isSmallScreen && (
            <MarkerTableFooter>
              <AddMarkerBtn onClick={handleAddMarker} />
            </MarkerTableFooter>
          )}
        </MarkerTableContainer>

        {isSmallScreen && <AddMarkerBtn onClick={handleAddMarker} />}
      </>
    );
  },
);

MarkerTable.displayName = 'MarkerTable';
