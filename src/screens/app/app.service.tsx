import React, { FC, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { ModalContextProvider } from '@components/modal/modal-context';

export const AppService: FC = ({ children }) => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </SafeAreaProvider>
  );
};

