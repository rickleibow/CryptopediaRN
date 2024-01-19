import { TIconTypes } from '@components/icon';

import { ROUTES } from '@constants/routes';

interface ITab {
  key: string;
  icon: TIconTypes;
  keyTabs: string[];
}

export const TABS = <ITab[]>[
  {
    key: ROUTES.home,
    icon: 'home',
    keyTabs: [
      ROUTES.home,
      ROUTES.settings,
      ROUTES.detailHome,
      ROUTES.detailNewsHome,
      ROUTES.transactionHome,
    ],
  },
  {
    key: ROUTES.markets,
    icon: 'markets',
    keyTabs: [
      ROUTES.markets,
      ROUTES.detail,
      ROUTES.detailNews,
      ROUTES.transaction,
      ROUTES.portfolioRouter,
      ROUTES.detailPortfolio,
      ROUTES.detailNewsPortfolio,
      ROUTES.transactionPortfolio,
    ],
  },
  {
    key: ROUTES.invest,
    icon: 'invest',
    keyTabs: [ROUTES.invest],
  },
  {
    key: ROUTES.learn,
    icon: 'learn',
    keyTabs: [ROUTES.learn, ROUTES.courseDetail, ROUTES.dictionaryDetail],
  },
];
