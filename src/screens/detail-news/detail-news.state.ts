import { trackPromise } from 'react-promise-tracker';

import { getNews } from '@services/api';
import { usePromise } from '@services/hooks';

export const useDetailNewsState = (symbol: string) => {
  const [news] = usePromise(async () => {
    return await trackPromise(getNews({ categories: symbol }));
  });

  return { news: news || [] };
};
