import { getCoinSnapshotBySymbol } from '@services/api';
import { usePromise } from '@services/hooks';

export const useAboutState = (symbol: string) => {
  const [coinInfo] = usePromise(async () => {
    return await getCoinSnapshotBySymbol(symbol);
  });

  return { coinInfo };
};
