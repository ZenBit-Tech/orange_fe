import Button from '@mui/material/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    justify-content: flex-center;
    text-transform: none;
    border-radius: 12px;
    padding: 10px 16px;
    min-height: 48px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: #fff;
    color: rgba(0, 0, 0, 0.87);
  }
`;


export const Emoji = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  border-radius: 6px;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;