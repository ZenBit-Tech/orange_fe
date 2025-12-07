export interface DeleteMarkerModalProps {
  open: boolean;
  markerName: string;
  onClose: () => void;
  onConfirm: () => void;
}
