import { NavigationState, SceneRendererProps } from 'react-native-tab-view';

import { ROUTES } from '@constants/routes';

export interface IRouterRoute {
  key: keyof typeof ROUTES;
}

export interface ITabBarProps extends SceneRendererProps {
  navigationState: NavigationState<IRouterRoute>;
}

export interface ITabBarNavigationProps extends ITabBarProps {
  routes: IRouterRoute[];
}
