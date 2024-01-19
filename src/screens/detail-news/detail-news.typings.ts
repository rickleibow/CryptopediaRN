import { RouteProp } from '@react-navigation/native';

type TParams = {
  detailNews: {
    symbol: string;
  };
};
type TDetailNewsScreenRouteProp = RouteProp<TParams, 'detailNews'>;

export interface IDetailNewsProps {
  route: TDetailNewsScreenRouteProp;
}
