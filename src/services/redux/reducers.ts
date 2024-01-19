import { combineReducers } from 'redux';

import { detailReducer, IDetailRedux } from '@screens/detail';
import { IMarketsRedux, marketsReducer } from '@screens/markets';
import { ITransactionRedux, transactionReducer } from '@screens/transaction';

export const rootReducer = combineReducers({
  detail: detailReducer,
  transaction: transactionReducer,
  markets: marketsReducer,
}) as any;

export interface IReduxStore {
  detail: IDetailRedux;
  transaction: ITransactionRedux;
  markets: IMarketsRedux;
}
