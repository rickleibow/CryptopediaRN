import { Portfolio } from '@screens/portfolio';
import { Coins } from '../coins';
import { DeFi } from '../defi';

import { IRouterRoute } from '@typings/router.d';

export const MARKETS_ROUTES = <IRouterRoute[]>[
  { key: 'coins' },
  { key: 'defi' },
  { key: 'portfolio' },
];

export const MARKETS_SCENE_MAP = {
  coins: Coins,
  defi: DeFi,
  portfolio: Portfolio,
};
