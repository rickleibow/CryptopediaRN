import { trackPromise } from 'react-promise-tracker';

import { getDefiPools, getDefiRates } from '@services/api';
import { usePromise } from '@services/hooks';
import { getSymbolByChain } from './defi.utils';

export const useDefiState = () => {
  const [pools] = usePromise(async () => await trackPromise(getDefiPools()));
  const [rates] = usePromise(async () => await trackPromise(getDefiRates()));

  return {
    pools:
      pools?.map(({ roi, assets, poolName }) => ({
        percent: roi * 100,
        symbols: assets.map(({ symbol }) => symbol),
        title: poolName,
      })) || [],

    rates:
      rates?.map(({ chain, name, relative_1d }) => ({
        percent: relative_1d + 100,
        symbols: [getSymbolByChain(chain)],
        title: name,
      })) || [],
  };
};
