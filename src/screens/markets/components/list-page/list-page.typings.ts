import { RouteProp } from '@react-navigation/native';

type TParams = {
  listPage: {
    list: {
      title: string;
      percent: number;
      symbols: string[];
    }[];
    title: string;
    isWithoutImage?: boolean;
  };
};
type TListPaegScreenRouteProp = RouteProp<TParams, 'listPage'>;

export interface IListPageProps {
  route: TListPaegScreenRouteProp;
}
