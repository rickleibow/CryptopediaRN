import { ICoinData } from '@typings/api';

export interface IRenderItemProps {
  item: IData[];
}

export interface IData extends ICoinData {
  image?: string;
}
