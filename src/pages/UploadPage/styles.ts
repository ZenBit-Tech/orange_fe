import styled from 'styled-components';

import { theme } from '@/theme';

export const WrapperContent = styled.div`
  background-image: url(${theme.palette.backgrounds.bgLandingSection});
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
  padding: 24px 0;
`;
