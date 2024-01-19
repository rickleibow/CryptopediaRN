import { TDefiChain } from '@typings/api';

export const getSymbolByChain = (chain: TDefiChain) => {
  switch (chain) {
    case 'Ethereum':
      return 'ETH';
    case 'Bitcoin':
      return 'BTC';
    default:
      return '';
  }
};
