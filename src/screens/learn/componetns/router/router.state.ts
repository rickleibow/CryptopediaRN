import { useState } from 'react';
import { SceneMap } from 'react-native-tab-view';

import { LEARN_ROUTES, LEARN_SCENE_MAP } from './router.constants';

export const useLearnRouterState = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(LEARN_ROUTES);

  const renderScene = SceneMap(LEARN_SCENE_MAP);

  return { index, routes, setIndex, renderScene };
};
