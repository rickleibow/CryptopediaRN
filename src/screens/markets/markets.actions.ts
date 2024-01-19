import { action } from '@services/utils';

import { ISetCurrencyPayload, MARKETS_ACTIONS } from './markets.constants';

import { TActionCombiner } from '@typings/redux.d';

export const marketsActions = {
  setCurrency: (payload: ISetCurrencyPayload) =>
    action(MARKETS_ACTIONS.SET_CURRENCY, payload),
};

export type TMarketsActions = ReturnType<
  TActionCombiner<typeof marketsActions>
>;
