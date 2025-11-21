import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react';

import { t } from 'i18next';
import { Plus } from 'lucide-react';

import { Marker } from '@/components/Marker';
import { BREAKPOINTS } from '@/constants/marker';
import type { MarkerData } from '@/constants/marker';
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

interface MarkerTableProps {
  markers: MarkerData[];
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onDelete: (id: number) => void;
  onAddMarker: () => void;
  onValidate: (id: number) => void;
  onValidateAll: () => void;
  isFinalStep: boolean;
}

export interface MarkerTableRef {
  validateAllMarkers: () => void;
}

export interface isFinalStep {
  isFinalStep: boolean;
}

const useIsSmallScreen = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.MD : false,
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < BREAKPOINTS.MD);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

interface AddMarkerBtnProps {
  onClick: () => void;
}

const AddMarkerBtn = memo<AddMarkerBtnProps>(({ onClick }) => (
  <AddMarkerButton onClick={onClick}>
    <Plus color={theme.palette.baseColors.green[600]} />
    <AddMarkerButtonText>{t('review.add-marker')}</AddMarkerButtonText>
  </AddMarkerButton>
));

AddMarkerBtn.displayName = 'AddMarkerBtn';

export const MarkerTable = forwardRef<MarkerTableRef, MarkerTableProps>(
  (
    {
      markers,
      onNameChange,
      onValueChange,
      onUnitChange,
      onDelete,
      onAddMarker,
      onValidate,
      onValidateAll,
      isFinalStep,
    },
    ref,
  ) => {
    const isSmallScreen = useIsSmallScreen();

    useImperativeHandle(
      ref,
      () => ({
        validateAllMarkers: onValidateAll,
      }),
      [onValidateAll],
    );

    return (
      <>
        <MarkerTableContainer>
          <MarkerTableBody>
            <MarkerTableContent>
              <MarkerTableHeader className={`${isFinalStep ? 'final-step' : ''}`}>
                <MarkerTableHeaderCell>{t('review.marker')}</MarkerTableHeaderCell>
                <MarkerTableHeaderCell>{t('review.value')}</MarkerTableHeaderCell>
                {!isFinalStep && <MarkerTableHeaderCell>{t('review.unit')}</MarkerTableHeaderCell>}
                <MarkerTableHeaderCell>{t('review.normal-range')}</MarkerTableHeaderCell>
                {isFinalStep && (
                  <MarkerTableHeaderCell>{t('review.interpretation')}</MarkerTableHeaderCell>
                )}
              </MarkerTableHeader>

              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  {...marker}
                  onNameChange={onNameChange}
                  onValueChange={onValueChange}
                  onUnitChange={onUnitChange}
                  onDelete={onDelete}
                  onValidate={onValidate}
                  isFinalStep={isFinalStep}
                />
              ))}
            </MarkerTableContent>
          </MarkerTableBody>

          {isFinalStep && !isSmallScreen ? <MarkerTableFooter></MarkerTableFooter> : ''}

          {!isSmallScreen && !isFinalStep && (
            <MarkerTableFooter>
              <AddMarkerBtn onClick={onAddMarker} />
            </MarkerTableFooter>
          )}
        </MarkerTableContainer>

        {isSmallScreen && !isFinalStep && <AddMarkerBtn onClick={onAddMarker} />}
      </>
    );
  },
);

MarkerTable.displayName = 'MarkerTable';
