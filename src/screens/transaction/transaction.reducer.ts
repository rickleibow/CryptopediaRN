import {
  INIT_REDUX_TRANSACTION, ITransactionRedux, TRANSACTION_ACTIONS
} from './transaction.costants';

import { TTransactionActions } from './transaction.actions';

export const transactionReducer = (
  state = INIT_REDUX_TRANSACTION,
  action: TTransactionActions
): ITransactionRedux => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTION_ACTIONS.BUY:
      return {
        total: payload.price * payload.count + state.total,
        transactions: {
          ...state.transactions,
          [payload.symbol]:
            (state.transactions[payload.symbol] || 0) + payload.count,
        },
      };
    case TRANSACTION_ACTIONS.SELL:
      const result = {
        total: state.total - payload.price * payload.count,
        transactions: {
          ...state.transactions,
          [payload.symbol]:
            (state.transactions[payload.symbol] || 0) - payload.count,
        },
      };

      const totalCoins = Object.values(result.transactions).reduce((acc, val) => acc + val, 0);
      if (totalCoins > 0) {
        return result;
      }
      return INIT_REDUX_TRANSACTION;
    default:
      return state ?? INIT_REDUX_TRANSACTION;
  }
};
