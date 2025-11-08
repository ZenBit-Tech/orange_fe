import {
  StyledDescription,
  StyledInfoDescription,
  StyledInfoTitle,
  StyledTitle,
  WrapperImage,
  WrapperInfo,
  WrapperStep,
  WrapperSteps,
  WrapperTitle,
  WrapperWork,
} from './styles';
import { useHowItWorks } from './useHowItWorks';

export const HowItWorks: React.FC = () => {
  const { steps, t } = useHowItWorks();
  return (
    <WrapperWork id="how-it-works">
      <WrapperTitle>
        <StyledTitle variant="h3">{t('How-it-works.title')}</StyledTitle>
        <StyledDescription variant="body1">{t('How-it-works.description')}</StyledDescription>
        <WrapperSteps>
          {steps.map((step, index) => {
            return (
              <WrapperStep key={index}>
                <WrapperInfo>
                  {step.icon}
                  <StyledInfoTitle variant="h4">{step.title}</StyledInfoTitle>
                  <StyledInfoDescription variant="body1">{step.description}</StyledInfoDescription>
                </WrapperInfo>
                <WrapperImage>
                  <picture>
                    <source type="image/webp" srcSet={step.webp} />
                    <img src={step.image} alt={step.title} loading="lazy" />
                  </picture>
                </WrapperImage>
              </WrapperStep>
            );
          })}
        </WrapperSteps>
      </WrapperTitle>
    </WrapperWork>
  );
};
