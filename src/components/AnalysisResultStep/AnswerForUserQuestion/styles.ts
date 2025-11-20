import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 56px;
  margin-bottom: 48px;
`;

export const Title = styled(Typography)`
  color: ${theme.palette.textIcons.textPrimary};
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size18};
  font-weight: ${theme.typography.weights.weight400};
  margin-bottom: 16px;
`;

export const QuestionCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  border-radius: 4px 12px 12px 4px;
  border-top: 1px solid ${theme.palette.baseColors.grey[200]};
  border-right: 1px solid ${theme.palette.baseColors.grey[200]};
  border-bottom: 1px solid ${theme.palette.baseColors.grey[200]};
  border-left: 4px solid ${theme.palette.baseColors.green[700]};
  background-color: ${theme.palette.backgrounds.bgSecondary};
  gap: 24px;
`;

export const QuestionBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const QuestionBlockTitle = styled(Typography)`
  color: ${theme.palette.textIcons.textTeriartry};
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight400};
`;
export const QuestionBlockDescription = styled(Typography)`
  color: ${theme.palette.textIcons.textSecondary};
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size18};
  font-style: italic;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${theme.typography.sizes.size16};
  }
`;

export const QuestionBlockRecommendation = styled(Typography)`
  color: ${theme.palette.textIcons.textSecondary};
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight400};
`;
