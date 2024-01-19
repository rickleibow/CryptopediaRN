import axios from 'axios';

import {
  API, IMethodsHeaders, IMethodsParameters, IMethodsReturn, MethodsEndpoints
} from '@typings/api.d';

export const apiCall = <M extends keyof IMethodsReturn>(
  path: API,
  method: M
) => async (
  parameters?: IMethodsParameters[M],
  headers?: IMethodsHeaders[M]
): Promise<IMethodsReturn[M] | undefined> => {
  const endpoint = MethodsEndpoints[method];
  try {
    const data = await axios.get(`${path}/${endpoint}`, {
      params: parameters || {},
      headers: {
        ...(headers || {}),
        'Content-Type': 'application/json',
      },
    });

    return data.data;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
