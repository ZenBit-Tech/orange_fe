import { useRef } from 'react';

import { MarkerTable, type MarkerTableRef } from '@/components/MarkerTable';
import { useMarkerTable } from '@/components/MarkerTable/useMarkerTable';

import type { BloodTestSummaryProps } from './types';

export const BloodTestSummary = ({ data }: BloodTestSummaryProps) => {
  const markerTableRef = useRef<MarkerTableRef>(null);
  const {
    markers,
    validateAllMarkers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleAddMarker,
    validateMarker,
    handleReferenceChange,
  } = useMarkerTable({
    isFinalStep: true,
    markersInterpretations: data?.markersInterpretations,
  });

  return (
    <>
      <MarkerTable
        ref={markerTableRef}
        markers={markers}
        onNameChange={handleNameChange}
        onValueChange={handleValueChange}
        onUnitChange={handleUnitChange}
        onDelete={handleDelete}
        onAddMarker={handleAddMarker}
        onValidate={validateMarker}
        onValidateAll={validateAllMarkers}
        onReferenceChange={handleReferenceChange}
        isFinalStep={true}
      />
    </>
  );
};
