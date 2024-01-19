import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getDictionary } from '@services/api';
import { usePromise } from '@services/hooks';

export const useDictionaryState = () => {
  const [filter, setFilter] = useState('');
  const [dictionary] = usePromise(
    async () => await trackPromise(getDictionary())
  );

  return {
    dictionary:
      dictionary?.filter(
        ({ term }) => term.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      ) || [],
    filter,
    setFilter,
  };
};
