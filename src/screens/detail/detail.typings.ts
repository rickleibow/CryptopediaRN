import { RouteProp } from '@react-navigation/native';

import { ROUTES } from '@constants/routes';

type TParams = {
  detail: {
    name: string;
    price: string;
    cap: string;
    volume: string;
    change: number;
    symbol: string;
    router: keyof typeof ROUTES;
  };
};
type TDetailScreenRouteProp = RouteProp<TParams, 'detail'>;

export interface IDetailProps {
  route: TDetailScreenRouteProp;
}
