import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { Icon } from '@components/icon';
import { NewPreview } from '@components/new-preview';
import { NewsStyles } from './news.style';

import { useNewsState } from './news.state';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

interface INews {
  symbol: string;
  title: string;
  route: keyof typeof ROUTES;
}

export const News: FC<INews> = ({ symbol, title, route }) => {
  const { DETAIL } = STRINGS;
  const { navigate } = useNavigation();

  const { news } = useNewsState(symbol);

  const newsRoute =
    route === 'homeRouter' ? ROUTES.detailNewsHome : ROUTES.detailNews;
  const handlePress = () => navigate(newsRoute, { symbol });

  return (
    <NewsStyles.Wrapper>
      <NewsStyles.Title fontSize="bigTitle" color={COLORS.black}>
        {DETAIL.news}
      </NewsStyles.Title>
      {news.map((post) => (
        <NewPreview key={post.id} {...post} web={post.source_info.name} />
      ))}
      <NewsStyles.Separator />
      <TouchableHighlight
        underlayColor={COLORS.transparent}
        onPress={handlePress}
      >
        <NewsStyles.Button>
          <Theme.Text color={COLORS.primaryBlue}>
            {`${DETAIL.more} ${title.toUpperCase()} ${DETAIL.more_news}`}
          </Theme.Text>
          <Icon type="forward" size={10} />
        </NewsStyles.Button>
      </TouchableHighlight>
    </NewsStyles.Wrapper>
  );
};
