import { trackPromise } from 'react-promise-tracker';

import { getCoins } from '@services/api';
import { usePromise, useReduxSelector } from '@services/hooks';
import { getPrice } from '@services/utils';

import { MAX_COINS } from '@constants/currency';

export const usePortfolioState = () => {
  const { transaction } = useReduxSelector((redux) => redux);

  const [userInfo] = usePromise(async () => {
    const coins = await trackPromise(getCoins(MAX_COINS, 'USD'));

    const spent = transaction.total;
    const prices = Object.entries(transaction.transactions).map(
      ([symbol, count]) => {
        const coin = coins.find((el) => el.symbol === symbol);

        if (coin) {
          return { [symbol]: parseFloat(getPrice(coin, false)) * count };
        }
        return {};
      }
    );

    return { spent, prices };
  }, [transaction]);

  const result = {
    spent: userInfo?.spent || 0,
    prices: userInfo?.prices || [],
  };
  const total = result.prices.reduce(
    (acc, val) => acc + (val ? Object.values(val)[0] : 0),
    0
  );

  return {
    ...result,
    total,
  };
};
