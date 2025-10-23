import { theme } from '@theme';
import styled from 'styled-components';

export const LegalContent = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 40px;
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
  & div.markdown strong {
    font-weight: 500;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1062px;
    padding: 32px 64px 64px 64px;
    background: ${theme.palette.loginColors?.loginBg};
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
    color: color: ${theme.palette.loginColors?.subtitleColor};
    font-size: ${theme.typography.body1?.fontSize};
    font-family: ${theme.typography.h5?.fontFamily};
    font-style: normal;
    max-width: 100%;
    text-align: justify;
    margin: 0 0 10px;
  }

  & div.markdown h1 {
    color: ${theme.palette.loginColors?.titleColor};
    text-align: center;
    font-family: ${theme.typography.h5?.fontFamily};
    font-size: ${theme.typography.h5?.fontSize};
    font-style: normal;
    font-weight: ${theme.typography.h5?.fontWeight};
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }

  & div.markdown h2 {
    color: ${theme.palette.loginColors?.titleColor};
    text-align: center;
    font-family: ${theme.typography.h5?.fontFamily};
    font-size: ${theme.typography.body1?.fontSize};
    font-style: normal;
    font-weight: ${theme.typography.body2?.fontWeight};
    align-self: stretch;
    margin-bottom: 24px;
    width: 100%;
  }
  & div.markdown h3 {
    color: ${theme.palette.loginColors?.titleColor};
    font-family: ${theme.typography.h5?.fontFamily};
    font-size: ${theme.typography.body1?.fontSize};
    font-style: normal;
    font-weight: ${theme.typography.body1?.fontWeight};
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
      font-size: ${theme.typography.sizes.h5Mobile};
    }

    p {
      font-size: ${theme.typography.sizes.body2};
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
