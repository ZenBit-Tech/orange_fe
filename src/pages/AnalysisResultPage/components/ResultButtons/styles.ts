import { Box, Button, styled } from '@mui/material';

export const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin: 48px 0 0 0;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
  }
`;

export const LinkSection = styled(Box)`
  display: flex;
  gap: 160px;
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
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  color: ${({ theme }) => theme.palette.textIcons.textPrimary};
  text-transform: none;
  :hover {
    background: ${({ theme }) => theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${({ theme }) => theme.palette.textIcons.textSecondary};
    margin-right: 8px;
  }

  &.marker-table-step-2 {
    width: 100px;
    margin-right: 8px;
  }
`;

export const StartButton = styled(Button)`
  width: 233px;
  height: 44px;
  padding: 8px 22px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  color: ${({ theme }) => theme.palette.textIcons.textPrimary};
  text-transform: none;
  :hover {
    background: ${({ theme }) => theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${({ theme }) => theme.palette.textIcons.textSecondary};
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
  color: ${({ theme }) => theme.palette.textIcons.textPrimary};
  border: 1px solid ${({ theme }) => theme.palette.border.default};
  text-transform: none;
  :hover {
    background: ${({ theme }) => theme.palette.surface.primary.hoverLight};
  }
  svg {
    color: ${({ theme }) => theme.palette.textIcons.textSecondary};
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
  color: ${({ theme }) => theme.palette.baseColors.grey[50]};
  background-color: ${({ theme }) => theme.palette.surface.primary.default};
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
