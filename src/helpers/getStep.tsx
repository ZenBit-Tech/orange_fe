import { ReviewCustomizeStep } from '@/components/ReviewCustomizeStep';
import { UploadStep } from '@/components/UploadStep/index';

export function getStepContent(step: number, handleNext: () => void, onBack: () => void) {
  switch (step) {
    case 0:
      return <UploadStep onContinue={handleNext} />;
    case 1:
      return <ReviewCustomizeStep onContinue={handleNext} onBack={onBack} />;

    default:
      return 'Unknown step';
  }
}
