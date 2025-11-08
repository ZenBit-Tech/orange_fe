import tablet from '@/assets/tablet.png';
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
  const { lists, t, handleNavigate } = useMainContent();
  return (
    <MainWrapper>
      <DescriptionWrapper>
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

      <TabletImageWrapper>
        <picture>
          <source type="image/webp" srcSet={tabletWebp} />
          <img src={tablet} alt="tablet" fetchPriority="high" />
        </picture>
      </TabletImageWrapper>
    </MainWrapper>
  );
};
