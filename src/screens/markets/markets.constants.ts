import { TCurrency } from '@typings/api';

export const CURRENCY_ACTION_OPTIONS = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'AUD',
  'CAD',
  'BRL',
];

export const MARKETS_ACTIONS = <const>{
  SET_CURRENCY: '@MARKETS/SET_CURRENCY',
};

export interface IMarketsRedux {
  currency: TCurrency;
}

export interface ISetCurrencyPayload {
  currency: TCurrency;
}

export const INIT_REDUX_MARKETS: IMarketsRedux = {
  currency: 'USD',
};
