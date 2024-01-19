import { trackPromise } from 'react-promise-tracker';

import { getCoinList, getCoins } from '@services/api';
import { usePromise, useReduxSelector } from '@services/hooks';
import { getCap, getChange, getPrice, getVolume } from '@services/utils';

import { MAX_COINS } from '@constants/currency';

export const useCoinsState = () => {
  const { transaction } = useReduxSelector((redux) => redux);
  const [coins] = usePromise(
    async () => await trackPromise(getCoins(MAX_COINS, 'USD'))
  );
  const [coinList] = usePromise(async () => await getCoinList());

  const coinInfo = Object.entries(transaction.transactions).map(
    ([symbol, number]) => {
      const coin = coins?.find((el) => symbol === el.symbol);
      const price = coin ? getPrice(coin, false) : '0.00';

      return {
        symbol,
        number,
        title: coin?.name || '',
        price: parseFloat(price),
        change: coin ? getChange(coin) : 0,
        cap: coin ? getCap(coin) : '$0.00',
        volume: coin ? getVolume(coin) : '$0.00',
      };
    }
  );

  return {
    coinInfo: coinInfo
      .filter(({ number }) => number > 0)
      .sort((a, b) => b.price * b.number - a.price * a.number),
    coinList,
  };
};
