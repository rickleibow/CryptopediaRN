import { getSnapshot } from '@services/api';
import { usePromise } from '@services/hooks';

import { ISnapshotData } from '@typings/api';

export const useCoinPreviewState = (symbol: string) => {
  const [chartData] = usePromise<ISnapshotData[]>(
    async () => await getSnapshot(symbol, 'USD', 24)
  );

  return { chartData: chartData || [] };
};
