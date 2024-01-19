import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';

import { ROUTES } from '@constants/routes';

export const isMountedRef = React.createRef<{ current: boolean }>();
export const navigationRef = React.createRef<any>();

export const getCurrentRoute = () =>
  (isMountedRef.current &&
    navigationRef.current &&
    navigationRef.current.getCurrentRoute()?.name) ||
  ROUTES.home;

export const AppNavigator: FC = ({ children }) => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {children}
    </NavigationContainer>
  );
};
