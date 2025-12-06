import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react';

import { t } from 'i18next';
import { Plus } from 'lucide-react';

import { Marker } from '@/components/Marker';
import { BREAKPOINTS } from '@/constants';
import { MobileMarkerCard } from '@/pages/AnalysisResultPage/components/MarkerCardsTable';
import { MobileMarkerCardWrapper } from '@/pages/AnalysisResultPage/components/MarkerCardsTable/styles';
import { theme } from '@/theme';
import type { MarkerTableProps, MarkerTableRef } from '@/types/marker';

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

const useIsSmallScreen = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.LG : false,
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < BREAKPOINTS.LG);
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
      onReferenceChange,
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

    if (isFinalStep && isSmallScreen) {
      return (
        <MobileMarkerCardWrapper>
          {markers.map((marker) => (
            <MobileMarkerCard
              key={marker.id}
              id={marker.id}
              name={marker.name}
              value={marker.value}
              unit={marker.unit}
              referenceMin={marker.referenceMin}
              referenceMax={marker.referenceMax}
              status={marker.status}
              interpretation={marker.interpretation}
              hasError={marker.hasError}
              onNameChange={onNameChange}
              onValueChange={onValueChange}
              onUnitChange={onUnitChange}
              onReferenceChange={onReferenceChange}
              onDelete={onDelete}
              onValidate={onValidate}
              isFinalStep={isFinalStep}
            />
          ))}
        </MobileMarkerCardWrapper>
      );
    }

    return (
      <>
        {isSmallScreen && !isFinalStep ? (
          <>
            <MobileMarkerCardWrapper>
              {markers.map((marker) => (
                <MobileMarkerCard
                  key={marker.id}
                  id={marker.id}
                  name={marker.name}
                  value={marker.value}
                  unit={marker.unit}
                  referenceMin={marker.referenceMin}
                  referenceMax={marker.referenceMax}
                  status={marker.status}
                  interpretation={marker.interpretation}
                  hasError={marker.hasError}
                  onNameChange={onNameChange}
                  onValueChange={onValueChange}
                  onUnitChange={onUnitChange}
                  onReferenceChange={onReferenceChange}
                  onDelete={onDelete}
                  onValidate={onValidate}
                  isFinalStep={isFinalStep}
                />
              ))}
            </MobileMarkerCardWrapper>
            <AddMarkerBtn onClick={onAddMarker} />
          </>
        ) : (
          <>
            <MarkerTableContainer>
              <MarkerTableBody className={`${isFinalStep ? 'final-step' : ''}`}>
                <MarkerTableContent>
                  <MarkerTableHeader className={`${isFinalStep ? 'final-step' : ''}`}>
                    <MarkerTableHeaderCell>{t('review.marker')}</MarkerTableHeaderCell>
                    <MarkerTableHeaderCell>{t('review.value')}</MarkerTableHeaderCell>
                    {!isFinalStep && (
                      <MarkerTableHeaderCell>{t('review.unit')}</MarkerTableHeaderCell>
                    )}
                    <MarkerTableHeaderCell>{t('review.normal-range')}</MarkerTableHeaderCell>
                    {isFinalStep && (
                      <MarkerTableHeaderCell>{t('review.interpretation')}</MarkerTableHeaderCell>
                    )}
                  </MarkerTableHeader>

                  {markers.map((marker) => (
                    <Marker
                      key={marker.id}
                      id={marker.id}
                      name={marker.name}
                      value={marker.value}
                      unit={marker.unit}
                      referenceMin={marker.referenceMin}
                      referenceMax={marker.referenceMax}
                      status={marker.status}
                      interpretation={marker.interpretation}
                      hasError={marker.hasError}
                      onNameChange={onNameChange}
                      onValueChange={onValueChange}
                      onUnitChange={onUnitChange}
                      onReferenceChange={onReferenceChange}
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
          </>
        )}
      </>
    );
  },
);

MarkerTable.displayName = 'MarkerTable';
