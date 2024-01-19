import { TMarketsActions } from './markets.actions';

import {
  IMarketsRedux, INIT_REDUX_MARKETS, MARKETS_ACTIONS
} from './markets.constants';

export const marketsReducer = (
  state = INIT_REDUX_MARKETS,
  action: TMarketsActions
): IMarketsRedux => {
  const { type, payload } = action;

  switch (type) {
    case MARKETS_ACTIONS.SET_CURRENCY:
      return {
        currency: payload.currency,
      };
    default:
      return state ?? INIT_REDUX_MARKETS;
  }
};
