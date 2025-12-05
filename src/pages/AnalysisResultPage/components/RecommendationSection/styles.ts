import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const RecommendationWrapper = styled(Box)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  height: 100%;
  ul {
    padding: 0 24px 0 24px;
  }
`;

export const RecommendationHeader = styled(Box)<{ bgIcon?: string }>`
  display: flex;
  gap: 16px;
  align-items: center;
  svg {
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.bgIcon};
  }
`;

export const RecommendationTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${theme.typography.weights.weight500};
`;

export const RecommendationDescription = styled('li')`
  color: ${({ theme }) => theme.palette.textIcons.textSecondary};
`;
