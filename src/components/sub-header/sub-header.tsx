import React, { FC } from 'react';

import { SubHeaderItem } from './components';

import { ROUTES } from '@constants/routes';

import { ITabBarNavigationProps } from '@typings/router.d';

import { SubHeaderStyles } from './sub-header.styles';

export const SubHeader: FC<ITabBarNavigationProps> = ({ navigationState, jumpTo, routes }) => {
  const { index: activeRouteIndex } = navigationState;

  return (
    <SubHeaderStyles.Wrapper>
      {navigationState.routes.map(({ key }, index) => {
        const handlePress = () => jumpTo(routes[index].key);
        return (
          <SubHeaderItem
            key={key}
            title={ROUTES[key]}
            isActive={index === activeRouteIndex}
            onPress={handlePress}
          />
        );
      })}
    </SubHeaderStyles.Wrapper>
  );
};
