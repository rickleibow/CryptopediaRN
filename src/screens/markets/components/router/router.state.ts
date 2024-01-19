import { useState } from 'react';
import { SceneMap } from 'react-native-tab-view';

import { MARKETS_ROUTES, MARKETS_SCENE_MAP } from './router.constants';

export const useMarketsRouterState = () => {
  const [routes] = useState(MARKETS_ROUTES);

  const renderScene = SceneMap(MARKETS_SCENE_MAP);

  return { routes, renderScene };
};
