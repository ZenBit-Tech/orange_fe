import { Box, Typography, styled } from '@mui/material';

import { theme } from '@/theme';

export const PersonalizedInfo = styled(Box)``;

export const PersonalizedTitle = styled(Typography)`
  font-family: ${theme.typography.general.fontPoppins};
  font-size: ${theme.typography.sizes.size18};
  font-weight: ${theme.typography.weights.weight400};
`;

export const PersonalizedDescription = styled(Typography)`
  font-family: ${theme.typography.general.fontInter};
  font-size: ${theme.typography.sizes.size16};
  font-weight: ${theme.typography.weights.weight400};
  margin-bottom: 24px;
`;

export const RecommendationWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
