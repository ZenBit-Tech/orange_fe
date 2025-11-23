import { ArrowLeft, Download, Printer, RotateCcw } from 'lucide-react';

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

export const ResultButton: React.FC = () => {
  const { handleBack, t } = useResultButtons();
  return (
    <ButtonWrapper>
      <LinkSection>
        <BackButton variant="outlined" onClick={handleBack}>
          <ArrowLeft /> {t('ResultButtons.back')}
        </BackButton>
        <StartButton variant="outlined">
          <RotateCcw />
          {t('ResultButtons.start')}
        </StartButton>
      </LinkSection>
      <ButtonSection>
        <PrintButton>
          <Printer />
          {t('ResultButtons.print')}
        </PrintButton>
        <DownloadButton variant="contained">
          <Download />
          {t('ResultButtons.download')}
        </DownloadButton>
      </ButtonSection>
    </ButtonWrapper>
  );
};
