import tabletWebp from '@/assets/tablet.webp';

import {
  ButtonStyled,
  DescriptionStyled,
  DescriptionWrapper,
  ListsWrapper,
  MainWrapper,
  StyledBody,
  StyledInstantly,
  TabletImageWrapper,
  TitleStyled,
} from './styles';
import { useMainContent } from './useMainContent';

export const MainContent: React.FC = () => {
  const { lists, t, handleNavigate, ref, inView } = useMainContent();

  return (
    <MainWrapper ref={ref}>
      <DescriptionWrapper isVisible={inView}>
        <StyledBody variant="body2">{t('Main-Content.power-analysis')}</StyledBody>
        <TitleStyled variant="h2">
          {t('Main-Content.understand-your')}
          <StyledInstantly>{t('Main-Content.instantly')}</StyledInstantly>
        </TitleStyled>
        <DescriptionStyled variant="h6">{t('Main-Content.description')}</DescriptionStyled>
        <ButtonStyled variant="contained" onClick={handleNavigate}>
          {t('Header.button')}
        </ButtonStyled>
        <ListsWrapper>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ListsWrapper>
      </DescriptionWrapper>

      <TabletImageWrapper isVisible={inView}>
        <img src={tabletWebp} alt="tablet" />
      </TabletImageWrapper>
    </MainWrapper>
  );
};
