import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { t } from 'i18next';
import { Plus } from 'lucide-react';

import { Marker } from '@/components/Marker';
import { BREAKPOINTS } from '@/constants/marker';
import type { MarkerData } from '@/constants/marker';
import { theme } from '@/theme';

import { MobileMarkerCard } from '../AnalysisResultStep/MarkerCardsTable';
import { MobileMarkerCardWrapper } from '../AnalysisResultStep/MarkerCardsTable/styles';
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
  onReferenceChange: (id: number, refMin: string, refMax: string) => void;
  onDelete: (id: number) => void;
  onAddMarker: () => void;
  onValidate: (id: number) => void;
  onValidateAll: () => number | null;
  isFinalStep: boolean;
  isDisabled?: boolean;
}

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

export interface MarkerTableRef {
  validateAllMarkers: () => number | null;
  scrollToMarker: (markerId: number) => void;
}

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
      isDisabled = false,
    },
    ref,
  ) => {
    const isSmallScreen = useIsSmallScreen();
    const markerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    const setMarkerRef = useCallback((id: number) => {
      if (!markerRefCallbacks.current[id]) {
        markerRefCallbacks.current[id] = (el: HTMLDivElement | null) => {
          markerRefs.current[id] = el;
        };
      }
      return markerRefCallbacks.current[id];
    }, []);

    const markerRefCallbacks = useRef<{ [key: number]: (el: HTMLDivElement | null) => void }>({});

    const scrollToMarker = useCallback((markerId: number) => {
      const markerElement = markerRefs.current[markerId];
      if (markerElement) {
        requestAnimationFrame(() => {
          const elementRect = markerElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

          window.scrollTo({
            top: middle,
            behavior: 'smooth',
          });
        });
      }
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        validateAllMarkers: onValidateAll,
        scrollToMarker,
      }),
      [onValidateAll, scrollToMarker],
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
                  ref={setMarkerRef(marker.id)}
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
                  isDisabled={isDisabled}
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
                      ref={setMarkerRef(marker.id)}
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
                      isDisabled={isDisabled}
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
