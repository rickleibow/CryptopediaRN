export const TRANSACTION_ACTIONS = <const>{
  BUY: '@TRANSACTION/BUY',
  SELL: '@TRANSACTION/SELL',
};

export interface ITransactionRedux {
  transactions: {
    [symbol: string]: number;
  };
  total: number;
}

export interface ITransactionPayload {
  symbol: string;
  count: number;
  price: number;
}

export const INIT_REDUX_TRANSACTION: ITransactionRedux = {
  transactions: {},
  total: 0,
};
