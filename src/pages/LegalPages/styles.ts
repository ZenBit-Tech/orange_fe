import { theme } from '@theme';
import styled from 'styled-components';

export const LegalContent = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 40px;
  padding: 50px 80px;
  color: ${theme.palette.textIcons?.textPrimary};
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
    background: ${theme.palette.backgrounds.white};
    border-radius: 20px;
    border: 1px solid ${theme.palette.grey[200]};
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
    color: ${theme.palette.textIcons?.textSecondary};
    font-style: normal;
    max-width: 100%;
    text-align: justify;
    margin: 0 0 10px;
  }

  & div.markdown h1 {
    color: ${theme.palette.textIcons?.textPrimary};
    text-align: center;
    font-style: normal;
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }

  & div.markdown h2 {
    color: ${theme.palette.textIcons?.textPrimary};
    text-align: center;
    font-style: normal;
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }
  & div.markdown h3 {
    color: ${theme.palette.textIcons?.textPrimary};
    font-style: normal;
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
      font-size: ${theme.typography.sizes.size18};
    }

    p {
      font-size: ${theme.typography.sizes.size14};
      line-height: 22px;
    }
  }

  @media (max-width: 480px) {
    margin: 5px 0;
    & > div {
      margin: 0;
      padding: 20px 20px 32px;
      gap: 16px;
    }
  }
`;
