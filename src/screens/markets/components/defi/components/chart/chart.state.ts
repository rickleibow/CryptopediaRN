import { getDefiHistory } from '@services/api';
import { usePromise } from '@services/hooks';

export const useChartState = () => {
  const [chartData] = usePromise(async () => await getDefiHistory());

  return { chartData };
};
