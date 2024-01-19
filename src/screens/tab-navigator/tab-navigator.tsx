import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ModalWrapper } from '@components/modal';
import { TabBar } from '@components/tab-bar';
import { HomeRouter } from '@screens/home';
import { LearnScreenRouter } from '@screens/learn';
import { MarketsScreenRouter } from '@screens/markets';

import { ROUTES } from '@constants/routes';

import { Theme } from '@styles/theme';
import { InvestRouter } from '@screens/invest/invest.router';

const Stack = createStackNavigator();

export const TabNavigator = () => (
  <Theme.Screen>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={ROUTES.home} component={HomeRouter} />
      <Stack.Screen name={ROUTES.markets} component={MarketsScreenRouter} />
      <Stack.Screen name={ROUTES.invest} component={InvestRouter} />
      <Stack.Screen name={ROUTES.learn} component={LearnScreenRouter} />
    </Stack.Navigator>
    <TabBar />
    <ModalWrapper />
  </Theme.Screen>
);
