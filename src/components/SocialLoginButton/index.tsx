import React from 'react';

import { Emoji, StyledButton, StyledLink, StyledRouterLink } from './styles';

type Props = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  linkPath?: string;
};

export const SocialLoginButton: React.FC<Props> = ({ icon, label, onClick, linkPath }) => {
  const buttonContent = (
    <StyledButton variant="outlined" onClick={onClick}>
      <Emoji aria-hidden>{icon}</Emoji>
      {label}
    </StyledButton>
  );

  return (
    <StyledLink>
      {linkPath ? (
        <StyledRouterLink to={linkPath}>{buttonContent}</StyledRouterLink>
      ) : (
        buttonContent
      )}
    </StyledLink>
  );
};
export default SocialLoginButton;
