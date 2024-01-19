import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { Text, TextInput } from 'react-native';

import { Loader } from '@components/loader';
import { AppNavigator } from './app.navigator';
import { AppRouter } from './app.router';

import { ReduxProvider } from '@services/redux';

import { Theme } from '@styles/theme';

import { AppService } from './app.service';

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

export const App: FC = () => (
  <ReduxProvider>
    <Theme.Screen>
      <AppNavigator>
        <AppService>
          <Loader />
          <AppRouter />
        </AppService>
      </AppNavigator>
    </Theme.Screen>
  </ReduxProvider>
);
