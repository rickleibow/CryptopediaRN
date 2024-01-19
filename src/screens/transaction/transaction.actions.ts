import {
  ITransactionPayload, TRANSACTION_ACTIONS
} from './transaction.costants';

import { action } from '@services/utils';

import { TActionCombiner } from '@typings/redux.d';

export const transactionActions = {
  buy: (payload: ITransactionPayload) => action(TRANSACTION_ACTIONS.BUY, payload),
  sell: (payload: ITransactionPayload) =>
    action(TRANSACTION_ACTIONS.SELL, payload),
};

export type TTransactionActions = ReturnType<
  TActionCombiner<typeof transactionActions>
>;
