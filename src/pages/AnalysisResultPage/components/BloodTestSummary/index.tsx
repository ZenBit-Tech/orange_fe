import { useRef } from 'react';

import { MarkerTable } from '@/components/MarkerTable';
import { useMarkerTable } from '@/components/MarkerTable/useMarkerTable';
import type { BloodTestSummaryProps } from '@/pages/AnalysisResultPage/types';
import type { MarkerTableRef } from '@/types/marker';

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
