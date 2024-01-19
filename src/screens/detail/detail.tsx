import React, { FC } from 'react';

import { Header } from '@components/header';
import { About, Market, News, SubHeader } from './components';

import { useAction, useReduxSelector } from '@services/hooks';
import { detailActions } from './detail.actions';

import { IDetailProps } from './detail.typings';

import { Theme } from '@styles/theme';
import { DetailStyles } from './detail.styles';

export const Detail: FC<IDetailProps> = ({ route }) => {
  const { name, price, cap, volume, change, symbol, router } = route.params;

  const { favorites } = useReduxSelector((redux) => redux.detail);
  const toggleFavorites = useAction(detailActions.toggleFavorites);

  const handlePress = () => toggleFavorites({ symbol });

  return (
    <Theme.Screen>
      <Header
        title={name}
        isBack
        color="white"
        background="black"
        rightIcon={favorites.includes(symbol) ? 'starActive' : 'star'}
        rightIconHandler={handlePress}
      />
      <DetailStyles.Wrapper bounces={false}>
        <SubHeader price={price} name={name} route={router} symbol={symbol} />
        <Market cap={cap} volume={volume} change={change} />
        <News symbol={symbol} title={name} route={router} />
        <About symbol={symbol} />
        <DetailStyles.BottomSafeArea />
      </DetailStyles.Wrapper>
    </Theme.Screen>
  );
};
