import { FlatList } from 'react-native-gesture-handler';

import React, { FC } from 'react';

import { Header } from '@components/header';
import { Coin } from '../defi/components/coin';

import { getCoinList } from '@services/api';
import { usePromise } from '@services/hooks';
import { getImageFromArray } from '@services/utils';

import { COLORS } from '@styles/constants';

import { IListPageProps } from './list-page.typings';

import { Theme } from '@styles/theme';
import { inlineStyles } from './list-page.styles';

export const ListPage: FC<IListPageProps> = ({ route }) => {
  const { list, title, isWithoutImage } = route.params;

  const [coinList] = usePromise(async () => await getCoinList());

  return (
    <Theme.Screen>
      <Header isBack title={title} background="white" color="black" />
      <Theme.Screen color={COLORS.white}>
        <FlatList
          style={inlineStyles.flatList}
          data={list}
          renderItem={({ item }) => {
            const percentDiffecence = item.percent - 100;
            return (
              <Coin
                image={getImageFromArray(item.symbols, coinList)}
                percent={item.percent > 0 ? percentDiffecence.toFixed(2) : '-'}
                title={item.title}
                isWithoutImage={isWithoutImage}
              />
            );
          }}
          keyExtractor={({ title: lineTilte }, index) =>
            `${lineTilte}-${index}`
          }
        />
      </Theme.Screen>
    </Theme.Screen>
  );
};
