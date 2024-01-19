import { apiCall } from './http';

import {
  API, IGetNewsParameters, TCurrency, TSnapshotStep
} from '@typings/api.d';

export const getNews = async (props: IGetNewsParameters = {}) => {
  const result = await apiCall(
    API.min,
    'get_news'
  )({ categories: props.categories });

  if (result) {
    return result.Data;
  }
  return [];
};

export const getCoinList = async () => {
  const result = await apiCall(API.min, 'get_coin_list')();

  return result;
};

export const getSnapshotRequest = (
  step?: TSnapshotStep
) => {
  switch (step) {
    case 'hour':
      return 'get_snapshot_hour';
    case 'minute':
      return 'get_snapshot_minute';
    case 'day':
      return 'get_snapshot_day';
    default:
      return 'get_snapshot_hour';
  }
};

export const getSnapshot = async (
  symbol: string,
  currency: TCurrency,
  limit?: number,
  step?: TSnapshotStep
) => {
  const request = getSnapshotRequest(step);

  const result = await apiCall(
    API.min,
    request
  )({
    fsym: symbol,
    tsym: currency,
    limit: limit,
  });

  if (result?.Data) {
    return result.Data;
  }
  return [];
};
