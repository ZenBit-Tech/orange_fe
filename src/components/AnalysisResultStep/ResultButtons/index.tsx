import { ArrowLeft, Download, Loader2, Printer, RotateCcw } from 'lucide-react';

import { ICON_SIZE_SMALL } from '../types';
import {
  BackButton,
  ButtonSection,
  ButtonWrapper,
  DownloadButton,
  LinkSection,
  PrintButton,
  StartButton,
} from './styles';
import { useResultButtons } from './useResultButtons';

interface ResultButtonProps {
  onBack?: () => void;
}

export const ResultButton: React.FC<ResultButtonProps> = ({ onBack }) => {
  const { handleNewAnalyze, handlePrint, handleDownloadPdf, isDownloading, isPrinting, t } =
    useResultButtons({ onBack });

  return (
    <ButtonWrapper>
      <LinkSection>
        <BackButton variant="outlined" onClick={onBack}>
          <ArrowLeft /> {t('ResultButtons.back')}
        </BackButton>
        <StartButton variant="outlined" onClick={handleNewAnalyze}>
          <RotateCcw />
          {t('ResultButtons.start')}
        </StartButton>
      </LinkSection>
      <ButtonSection>
        <PrintButton onClick={handlePrint} disabled={isPrinting || isDownloading}>
          {isPrinting ? (
            <>
              <Loader2 size={ICON_SIZE_SMALL} className="animate-spin" />
              {t('ResultButtons.printing')}
            </>
          ) : (
            <>
              <Printer />
              {t('ResultButtons.print')}
            </>
          )}
        </PrintButton>
        <DownloadButton
          variant="contained"
          onClick={handleDownloadPdf}
          disabled={isDownloading || isPrinting}
        >
          {isDownloading ? (
            <>
              <Loader2 size={ICON_SIZE_SMALL} className="animate-spin" />
              {t('ResultButtons.downloading')}
            </>
          ) : (
            <>
              <Download />
              {t('ResultButtons.download')}
            </>
          )}
        </DownloadButton>
      </ButtonSection>
    </ButtonWrapper>
  );
};
