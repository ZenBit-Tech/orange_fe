import { ArrowLeft, Clock, Download, Printer, RotateCcw } from 'lucide-react';

import { ICON_SIZE_SMALL, type ResultButtonProps } from '@/pages/AnalysisResultPage/types';

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

export const ResultButton: React.FC<ResultButtonProps> = ({ onBack }) => {
  const {
    handleNewAnalyze,
    handlePrint,
    handleDownloadPdf,
    isDownloading,
    isPrinting,
    isPdfReady,
    isPdfPending,
    t,
  } = useResultButtons({ onBack });

  const isButtonDisabled = !isPdfReady || isDownloading || isPrinting;

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
        <PrintButton onClick={handlePrint} disabled={isButtonDisabled}>
          {isPdfPending ? (
            <>
              <Clock size={ICON_SIZE_SMALL} />
              {t('ResultButtons.preparing')}
            </>
          ) : (
            <>
              <Printer />
              {t('ResultButtons.print')}
            </>
          )}
        </PrintButton>
        <DownloadButton variant="contained" onClick={handleDownloadPdf} disabled={isButtonDisabled}>
          {isPdfPending ? (
            <>
              <Clock size={ICON_SIZE_SMALL} />
              {t('ResultButtons.preparing')}
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
