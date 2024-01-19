import React, { FC } from 'react';
import { TabView } from 'react-native-tab-view';

import { SubHeader } from '@components/sub-header';

import { useMarketsRouterState } from './router.state';

import { MARKETS_ROUTES } from './router.constants';

import { ITabBarProps } from '@typings/router.d';

interface IMarketsRouterProps {
  index: number;
  setIndex: (index: number) => void;
}

export const MarketsRouter: FC<IMarketsRouterProps> = ({ index, setIndex }) => {
  const { routes, renderScene } = useMarketsRouterState();

  const renderTabBar = (props: ITabBarProps) => <SubHeader {...props} routes={MARKETS_ROUTES} />;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};
