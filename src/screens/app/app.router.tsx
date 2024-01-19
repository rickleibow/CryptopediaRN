import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Detail } from '@screens/detail';
import { DetailNews } from '@screens/detail-news';
import { Settings } from '@screens/settings';
import { TabNavigator } from '@screens/tab-navigator';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export const AppRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.main} component={TabNavigator} />
    <Stack.Screen name={ROUTES.detail} component={Detail} />
    <Stack.Screen name={ROUTES.settings} component={Settings} />
    <Stack.Screen name={ROUTES.detailNews} component={DetailNews} />
  </Stack.Navigator>
);
