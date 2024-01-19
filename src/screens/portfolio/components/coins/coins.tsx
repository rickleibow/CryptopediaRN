import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';

import { Coin } from './components';

import { getImage } from '@services/utils';
import { useCoinsState } from './coins.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinsStyles } from './coins.styles';

export const Coins = () => {
  const { coinInfo, coinList } = useCoinsState();

  const { PORTFOLIO } = STRINGS;

  const renderItem: SectionListRenderItem<{
    title: string;
    number: number;
    price: number;
    change: number;
    symbol: string;
    cap: string;
    volume: string;
  }> = ({ item }) => <Coin {...item} image={getImage(item.symbol, coinList)} />;

  const renderHeader = () => (
    <CoinsStyles.Header>
      <Theme.Screen>
        <Theme.Text color={COLORS.graySectionTitle} fontSize="big">
          {PORTFOLIO.coin}
        </Theme.Text>
      </Theme.Screen>
      <CoinsStyles.Value>
        <CoinsStyles.Text color={COLORS.graySectionTitle} fontSize="big">
          {PORTFOLIO.price}
        </CoinsStyles.Text>
      </CoinsStyles.Value>
      <CoinsStyles.Value>
        <CoinsStyles.Text color={COLORS.graySectionTitle} fontSize="big">
          {PORTFOLIO.total}
        </CoinsStyles.Text>
      </CoinsStyles.Value>
    </CoinsStyles.Header>
  );

  return (
    <Theme.Screen color={COLORS.paper}>
      <SectionList
        sections={[{ title: '', data: coinInfo }]}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={({ title }, index) => `${title}${index}`}
      />
    </Theme.Screen>
  );
};
