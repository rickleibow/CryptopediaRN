import { FlatList } from 'react-native-gesture-handler';

import React from 'react';
import { ListRenderItem, RefreshControl } from 'react-native';

import { Coin, Header } from './components';

import {
  getCap, getChange, getImage, getPrice, getVolume
} from '@services/utils';
import { useCoinsState } from './coins.state';

import { MAX_COINS } from '@constants/currency';
import { COLORS } from '@styles/constants';
import { COINS_PER_PAGE } from './coins.constants';

import { ICoinData } from '@typings/api';

import { Theme } from '@styles/theme';

export const Coins = () => {
  const {
    coins,
    page,
    setPage,
    coinList,
    refreshing,
    onRefresh,
  } = useCoinsState();

  const handleReachEnd = () => {
    if (page < MAX_COINS / COINS_PER_PAGE) {
      setPage(page + 1);
    }
  };

  const renderItem: ListRenderItem<ICoinData & { index: number }> = ({
    item: coin,
  }) => (
    <Coin
      title={coin.name}
      index={coin.index + 1}
      price={getPrice(coin)}
      change={getChange(coin)}
      cap={getCap(coin)}
      volume={getVolume(coin)}
      image={getImage(coin.symbol, coinList)}
      symbol={coin.symbol}
    />
  );

  const renderHeader = () => <Header />;

  return (
    <Theme.Screen color={COLORS.white}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        data={coins?.map((el, index) => ({ ...el, index }))}
        renderItem={renderItem}
        keyExtractor={({ id }) => id.toString()}
        onEndReached={handleReachEnd}
        onEndReachedThreshold={0.5}
      />
    </Theme.Screen>
  );
};
