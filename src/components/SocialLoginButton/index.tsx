import React from 'react';
import { StyledButton, Emoji } from './styles';

type Props = {
  icon: React.ReactNode
  label: string;
  onClick?: () => void;
};

export const SocialLoginButton: React.FC<Props> = ({ icon, label, onClick }) => {
  return (
    <StyledButton variant="outlined" onClick={onClick} >
      <Emoji aria-hidden>{icon}</Emoji>
      {label}
    </StyledButton>
  );
};

export default SocialLoginButton;