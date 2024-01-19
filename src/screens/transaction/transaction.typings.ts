import { RouteProp } from '@react-navigation/native';

import { ROUTES } from '@constants/routes';

type TParams = {
  transaction: {
    symbol: string;
    title: string;
    router: keyof typeof ROUTES;
  };
};
type TTransactionScreenRouteProp = RouteProp<TParams, 'transaction'>;

export interface ITransactionProps {
  route: TTransactionScreenRouteProp;
}
