import { AccordionSummary, Typography } from '@mui/material';

import { ChevronDown, CircleQuestionMark, Mail } from 'lucide-react';

import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAnswer,
  StyledQuestion,
  StyledTitle,
  WrapperAccordionContainer,
  WrapperFAQ,
  WrapperHelp,
  WrapperMail,
  WrapperTitle,
} from './styles';
import { useFAQ } from './useFAQ';

export const FAQ: React.FC = () => {
  const { t, faqData, ref, inView } = useFAQ();
  return (
    <WrapperFAQ id="faq" ref={ref}>
      <WrapperTitle>
        <CircleQuestionMark />
        <StyledTitle variant="h3">{t('FAQ.title')}</StyledTitle>
        <Typography variant="body1">{t('FAQ.description')} </Typography>
      </WrapperTitle>
      <WrapperAccordionContainer isVisible={inView}>
        {faqData.map((item) => (
          <StyledAccordion key={item.id} disableGutters elevation={0}>
            <AccordionSummary expandIcon={<ChevronDown size={20} />} id={item.id}>
              <StyledQuestion variant="h6">{item.question}</StyledQuestion>
            </AccordionSummary>
            <StyledAccordionDetails>
              <StyledAnswer variant="body1">{item.answer}</StyledAnswer>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </WrapperAccordionContainer>
      <WrapperHelp>
        <Typography variant="body1">Didn&apos;t find the answer to your question?</Typography>
        <WrapperMail to="mailto:plasma.ai.project@gmail.com">
          <Mail />
          <Typography variant="body1">plasma.ai.project@gmail.com</Typography>
        </WrapperMail>
      </WrapperHelp>
    </WrapperFAQ>
  );
};
