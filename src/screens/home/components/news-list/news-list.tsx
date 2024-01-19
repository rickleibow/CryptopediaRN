import React from 'react';
import { ScrollView } from 'react-native';

import { NewPreview } from '@components/new-preview';
import { CoinHeader } from '../coin-header';
import { NewsListHeader } from './components';

import { useNewsListState } from './news-list.state';

import { STRINGS } from '@constants/strings';

export const NewsList = () => {
  const { HOME } = STRINGS;
  const { news } = useNewsListState();

  return (
    <ScrollView stickyHeaderIndices={[1]} bounces={false}>
      <CoinHeader />
      <NewsListHeader title={HOME.news} />
      {news.map((item) => (
        <NewPreview key={item.id} {...item} web={item.source_info.name} />
      ))}
    </ScrollView>
  );
};
