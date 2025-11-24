import { AnalysisResultStep } from '@/components/AnalysisResultStep';
import { ReviewCustomizeStep } from '@/components/ReviewCustomizeStep';
import { UploadStep } from '@/components/UploadStep/index';

export function getStepContent(step: number, handleNext: () => void, onBack: () => void) {
  switch (step) {
    case 3:
      return <UploadStep onContinue={handleNext} />;
    case 1:
      return <ReviewCustomizeStep onContinue={handleNext} onBack={onBack} />;
    case 0:
      return <AnalysisResultStep />;

    default:
      return 'Unknown step';
  }
}
