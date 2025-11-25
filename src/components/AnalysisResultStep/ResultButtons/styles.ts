import { Box, Button, styled } from '@mui/material';

import { theme } from '@/theme';

export const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin: 48px 0 0 0;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
  }

    @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
  }
`;

export const LinkSection = styled(Box)`
  display: flex;
  gap: 72px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: 16px;
  }
`;

export const ButtonSection = styled(Box)`
  display: flex;
  gap: 24px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

export const BackButton = styled(Button)`
  width: 108px;
  padding: 8px 22px;
  border-radius: 12px;
  height: 44px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  color: ${theme.palette.textIcons.textPrimary};
  text-transform: none;
  :hover {
    background: ${theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${theme.palette.textIcons.textSecondary};
    margin-right: 8px;
  }
`;

export const StartButton = styled(Button)`
  width: 233px;
  height: 44px;
  padding: 8px 22px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  color: ${theme.palette.textIcons.textPrimary};
  text-transform: none;
  :hover {
    background: ${theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${theme.palette.textIcons.textSecondary};
    margin-right: 8px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 201px;
  }
`;

export const PrintButton = styled(Button)`
  width: 191px;
  height: 44px;
  padding: 8px 22px;
  height: 44px;
  border-radius: 12px;
  color: ${theme.palette.textIcons.textPrimary};
  border: 1px solid ${theme.palette.baseColors.grey[200]};
  text-transform: none;
  :hover {
    background: ${theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${theme.palette.textIcons.textSecondary};
    margin-right: 8px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 326px;
  }
`;

export const DownloadButton = styled(Button)`
  width: 194px;
  padding: 8px 22px;
  height: 44px;
  border-radius: 12px;
  color: ${theme.palette.textIcons.contrast};
  background-color: ${theme.palette.surface.primary.default};
  text-transform: none;
  box-shadow: none;
  :hover {
    box-shadow: none;
    transition: none;
  }
  svg {
    margin-right: 8px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 326px;
  }
`;
