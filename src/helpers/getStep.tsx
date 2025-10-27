import { UploadStep } from '@/components/UploadStep/index';

export function getStepContent(step: number, handleNext: () => void) {
  switch (step) {
    case 0:
      return <UploadStep onContinue={handleNext} />;
    default:
      return 'Unknown step';
  }
}
