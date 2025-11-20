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
  color: ${theme.palette.text.primary};
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight500};
`;

export const RecommentionDescription = styled('ul')`
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight400};
  color: ${theme.palette.text.secondary};
`;
