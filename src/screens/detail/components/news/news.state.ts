import { getNews } from '@services/api';
import { usePromise } from '@services/hooks';

export const useNewsState = (symbol: string) => {
  const [news] = usePromise(async () => {
    return await getNews({ categories: symbol });
  });
  return { news: news?.slice(0, 5) || [] };
};
