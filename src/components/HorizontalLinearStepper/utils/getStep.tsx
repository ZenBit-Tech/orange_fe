import { AnalysisResultStep } from '@/pages/AnalysisResultPage';
import { ReviewCustomizeStep } from '@/pages/ReviewCustomizePage';
import { UploadStep } from '@/pages/UploadPage/components/UploadStep/index';

export function getStepContent(step: number, handleNext: () => void, onBack: () => void) {
  switch (step) {
    case 0:
      return <UploadStep onContinue={handleNext} />;
    case 1:
      return <ReviewCustomizeStep onContinue={handleNext} onBack={onBack} />;
    case 2:
      return <AnalysisResultStep onBack={onBack} />;

    default:
      return 'Unknown step';
  }
}
