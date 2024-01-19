import { useEffect, useState } from 'react';

export const usePromise = <T extends any>(
  promice: () => Promise<T>,
  dependency?: any[]
) => {
  const [response, setResponse] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await promice();
          setResponse(result);
          setIsLoading(false);
        } catch (e) {
          console.error(e);
          setIsLoading(false);
        }
      };
      fetchData();
    },
    dependency ? [...dependency] : []
  );

  return <const>[response, isLoading];
};
