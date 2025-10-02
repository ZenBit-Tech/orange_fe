import { useExampleWorkHeaderHook } from './useExampleWorkHeaderHook';
import { StyledLink, WrapperHeader } from './styles';
import { Button } from '@mui/material';

export const ExampleWorkHeader: React.FC = () => {
  
  const { t, links } = useExampleWorkHeaderHook();

  return (
    <WrapperHeader>
      <h1>{t('Header.title')}</h1>
      <div>
        {links.map((link) => (
          <StyledLink to={link.to} key={link.label}>
            {link.label}
          </StyledLink>
        ))}
      </div>

      <Button type="submit" variant="contained">
        {t('Header.button')}
      </Button>
    </WrapperHeader>
  );
};
