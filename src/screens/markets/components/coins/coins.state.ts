import { useCallback, useContext, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { FavoritesContext } from '../favorites';
import { SearchContext } from '../search-context';

import { getCoinList, getCoins } from '@services/api';
import { usePromise, useReduxSelector } from '@services/hooks';

import { MAX_COINS } from '@constants/currency';
import { COINS_PER_PAGE } from './coins.constants';

import { ICoinData, IGetCoinListReturn } from '@typings/api';

export const useCoinsState = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { currency, favorites } = useReduxSelector((redux) => ({
    currency: redux.markets.currency,
    favorites: redux.detail.favorites,
  }));

  const onRefresh = async () => {
    setRefreshing(true);
    await trackPromise(loadData());
    setRefreshing(false);
  };

  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState<ICoinData[]>([]);
  const [coinList, setCoinList] = useState<IGetCoinListReturn | undefined>();

  const loadData = useCallback(async () => {
    setCoins(await getCoins(MAX_COINS, currency));
    setCoinList(await getCoinList());
  }, [currency]);

  usePromise(async () => await trackPromise(loadData()), [currency]);

  const { filter } = useContext(SearchContext);
  const { isFavoritesActive } = useContext(FavoritesContext);

  const filteredPagedCoins = coins
    ?.filter(
      ({ name, symbol }) =>
        name.toLowerCase().indexOf(filter?.toLowerCase() || '') !== -1 ||
        symbol.toLowerCase().indexOf(filter?.toLowerCase() || '') !== -1
    )
    .filter(({ symbol }) =>
      isFavoritesActive ? favorites.includes(symbol) : true
    )
    .slice(0, page * COINS_PER_PAGE);

  return {
    coins: filteredPagedCoins,
    page,
    setPage,
    coinList,
    refreshing,
    onRefresh,
  };
};
