import { apiCall } from './http';

import { API } from '@typings/api.d';

const API_KEY = '9da1662a75f8b02864618c35122ca7034bc32c16e9292b60edd620e52bba';

export const getDefiHistory = async () => {
  const result = await apiCall(
    API.defi,
    'get_defi_history'
  )({ period: '3m', 'api-key': API_KEY });

  if (Array.isArray(result)) {
    return result;
  }
  return undefined;
};

export const getDefiPools = async () => {
  const result = await apiCall(
    API.defi,
    'get_defi_pools'
  )({ 'api-key': API_KEY });

  if (result?.results) {
    return result.results;
  }
  return undefined;
};

export const getDefiRates = async () => {
  const result = await apiCall(
    API.defi,
    'get_defi_rates'
  )({ 'api-key': API_KEY });

  if (Array.isArray(result)) {
    return result;
  }
  return undefined;
};
