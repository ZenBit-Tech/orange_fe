import React from 'react';

import type { SocialLoginButtonProps } from '@/pages/LoginPage/types';

import { Emoji, StyledButton, StyledLink, StyledRouterLink } from './styles';

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  label,
  onClick,
  linkPath,
}) => {
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
