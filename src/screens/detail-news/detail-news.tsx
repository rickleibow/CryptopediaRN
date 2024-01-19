import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import { Header } from '@components/header';
import { NewPreview } from '@components/new-preview';

import { useDetailNewsState } from './detail-news.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { IDetailNewsProps } from './detail-news.typings';

import { Theme } from '@styles/theme';

export const DetailNews: FC<IDetailNewsProps> = ({ route }) => {
  const { DETAIL } = STRINGS;

  const { symbol } = route.params;

  const { news } = useDetailNewsState(symbol);
  return (
    <Theme.Screen color={COLORS.white}>
      <Header title={DETAIL.news} background="black" isBack />
      <ScrollView>
        {news.map((post) => (
          <NewPreview key={post.id} {...post} web={post.source_info.name} />
        ))}
      </ScrollView>
    </Theme.Screen>
  );
};
