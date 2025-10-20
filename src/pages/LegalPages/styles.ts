import { theme } from '@theme';
import styled from 'styled-components';

export const LegalPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background: linear-gradient(
    180deg,
    ${theme.palette.background.default} 0%,
    ${theme.palette.loginColors?.pageWrapperBg || '#f9fafb'} 100%
  );
`;

export const LegalContent = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 80px;
  color: ${theme.palette.text.primary};
  line-height: 1.6;

  hr {
    display: none;
    margin: 0;
    padding: 0;
    border: none;
    height: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1062px;
    padding: 32px 64px 64px 64px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid ${theme.palette.loginColors?.border ?? theme.palette.divider};
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
    gap: 24px;
  }

  & div.markdown {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 16px;
  }

  & div.markdown p,
  li {
    color: var(--text-default-text-secondary, #1e1e1e);
    font-family: ${theme.typography.fontFamily || "'Inter', sans-serif"};
    font-size: ${theme.typography.body1?.fontSize || '16px'};
    font-style: normal;
    font-weight: ${theme.typography.body1?.fontWeight || 400};
    line-height: ${theme.typography.body1?.lineHeight || '24px'};
    max-width: 100%;
    text-align: justify;
    margin: 0 0 10px;
  }

  & div.markdown h1 {
    color: var(--text-default-text-primary, #080808);
    text-align: center;
    font-family: ${theme.typography.h5?.fontFamily || "'Poppins', sans-serif"};
    font-size: ${theme.typography.h5?.fontSize || '24px'};
    font-style: normal;
    font-weight: ${theme.typography.h5?.fontWeight || 400};
    line-height: ${theme.typography.h5?.lineHeight || '133.4%'};
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }

  & div.markdown h2 {
    color: var(--text-default-text-primary, #080808);
    text-align: center;
    font-family: ${theme.typography.h6?.fontFamily || "'Poppins', sans-serif"};
    font-size: ${theme.typography.h6?.fontSize || '20px'};
    font-style: normal;
    font-weight: ${theme.typography.h6?.fontWeight || 400};
    line-height: ${theme.typography.h6?.lineHeight || '133.4%'};
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }
  & div.markdown h3 {
    color: var(--text-default-text-primary, #080808);
    font-family: ${theme.typography.h6?.fontFamily || "'Poppins', sans-serif"};
    font-size: ${theme.typography.h6?.fontSize || '20px'};
    font-style: normal;
    font-weight: ${theme.typography.h6?.fontWeight || 400};
    line-height: ${theme.typography.h6?.lineHeight || '160%'};
    margin-top: 24px;
    margin-bottom: 2px;
  }

  @media (max-width: 1024px) {
    padding: 60px 16px;

    & > div {
      padding: 24px 32px;
      border-radius: 16px;
      gap: 20px;
    }

    h2 {
      font-size: ${theme.typography.sizes.h5Mobile || '20px'};
    }

    p {
      font-size: ${theme.typography.sizes.body1Mobile || '14px'};
      line-height: 22px;
    }
  }

  @media (max-width: 480px) {
    & > div {
      padding: 20px 20px 32px;
      gap: 16px;
    }
  }
`;
