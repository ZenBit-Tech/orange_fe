import type { MarkerData } from '@/components/Marker/types';
import type { MarkerDataInterpretation } from '@/pages/AnalysisResultPage/types';

export interface MarkerTableRef {
  validateAllMarkers: () => number | null;
  scrollToMarker: (markerId: number) => void;
}

export interface UseMarkerProps {
  id: number;
  name: string;
  value: string;
  status?: string;
  hasError: boolean;
  refMin?: string;
  refMax?: string;
  onNameChange: (id: number, name: string) => void;
  onValueChange: (id: number, value: string) => void;
  onUnitChange: (id: number, unit: string) => void;
  onReferenceChange: (id: number, refMin: string, refMax: string) => void;
  onDelete: (id: number) => void;
  onValidate: (id: number) => void;
}

export interface UseMarkerTableProps {
  onValidationChange?: (hasErrors: boolean) => void;
  initialMarkers?: MarkerData[];
  isFinalStep?: boolean;
  markersInterpretations?: MarkerDataInterpretation[];
  isDisabled?: boolean;
}

export interface MarkerTableProps {
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
