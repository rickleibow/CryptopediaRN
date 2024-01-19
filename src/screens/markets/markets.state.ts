import { useContext, useEffect, useRef, useState } from 'react';
import ActionSheet from 'react-native-actionsheet';

import { FavoritesContext, SearchContext } from './components';

import { useAction, useReduxSelector } from '@services/hooks';
import { marketsActions } from './markets.actions';

import { CURRENCY_ACTION_OPTIONS } from './markets.constants';

import { TCurrency } from '@typings/api';

export const useMarketsState = () => {
  const [index, setIndex] = useState(0);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { setFilter, filter } = useContext(SearchContext);
  const actionSheet = useRef<ActionSheet>();
  const setCurrency = useAction(marketsActions.setCurrency);
  const { currency } = useReduxSelector((redux) => redux.markets);
  const { isFavoritesActive, setFavoritesActive } = useContext(
    FavoritesContext
  );

  const toggleFavoritesActive = () => {
    setFavoritesActive && setFavoritesActive(!isFavoritesActive);
  };

  const getFavoritesIcon = () => (isFavoritesActive ? 'starActive' : 'star');

  const onSelect = (option: number) =>
    setCurrency({
      currency: (CURRENCY_ACTION_OPTIONS[option] as TCurrency) || currency,
    });

  useEffect(() => {
    if (index !== 0) {
      setSearchOpen(false);
    }
  }, [index]);

  return {
    index,
    filter,
    isSearchOpen,
    setSearchOpen,
    setIndex,
    setFilter,
    actionSheet,
    onSelect,
    getFavoritesIcon,
    toggleFavoritesActive,
  };
};
