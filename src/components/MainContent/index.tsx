import { useTranslation } from 'react-i18next';

import tablet from '@/assets/tablet.png';

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

export const MainContent: React.FC = () => {
  const { t } = useTranslation();
  const lists = [
    t('Main-Content.feature-list.instant-analysis'),
    t('Main-Content.feature-list.private'),
    t('Main-Content.feature-list.available'),
  ];
  return (
    <MainWrapper>
      <DescriptionWrapper>
        <StyledBody variant="body2">{t('Main-Content.power-analysis')}</StyledBody>
        <TitleStyled variant="h2">
          {t('Main-Content.understand-your')}
          <StyledInstantly>{t('Main-Content.instantly')}</StyledInstantly>
        </TitleStyled>
        <DescriptionStyled variant="h6">{t('Main-Content.description')}</DescriptionStyled>
        <ButtonStyled variant="contained">{t('Header.button')}</ButtonStyled>
        <ListsWrapper>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ListsWrapper>
      </DescriptionWrapper>

      <TabletImageWrapper>
        <img src={tablet} alt="tablet" />
      </TabletImageWrapper>
    </MainWrapper>
  );
};
