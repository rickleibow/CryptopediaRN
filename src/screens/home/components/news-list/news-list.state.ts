import { getNews } from '@services/api';
import { usePromise } from '@services/hooks';

import { INewData } from '@typings/api';

export const useNewsListState = () => {
  const [news] = usePromise<INewData[]>(async () => await getNews()
  );

  return { news: news || [] };
};
