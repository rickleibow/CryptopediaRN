import { RouteProp } from '@react-navigation/native';

type TParams = {
  dictionaryDetail: {
    definitions: string;
    term: string;
    youtubeLink: string;
  };
};
type TDictionaryDetailScreenRouteProp = RouteProp<TParams, 'dictionaryDetail'>;

export interface IDictionaryDetailProps {
  route: TDictionaryDetailScreenRouteProp;
}
