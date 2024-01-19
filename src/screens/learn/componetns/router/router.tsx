import React from 'react';
import { TabView } from 'react-native-tab-view';

import { SubHeader } from '@components/sub-header';

import { useLearnRouterState } from './router.state';

import { LEARN_ROUTES } from './router.constants';

import { ITabBarProps } from '@typings/router.d';

export const LearnRouter = () => {
  const { index, routes, renderScene, setIndex } = useLearnRouterState();

  const renderTabBar = (props: ITabBarProps) => <SubHeader {...props} routes={LEARN_ROUTES} />;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};
