import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Invest } from './invest';

import { ROUTES } from '@constants/routes';
import { PaymentWay } from '@screens/invest/components/payment-way/payment-way';
import { Amount } from '@screens/invest/components/amount/amount';
import { WyreWebView } from '@screens/invest/components/wyre-web-view';

const Stack = createStackNavigator();

export const InvestRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.invest} component={Invest} />
    <Stack.Screen name={ROUTES.paymentWay} component={PaymentWay} />
    <Stack.Screen name={ROUTES.amount} component={Amount} />
    <Stack.Screen name={ROUTES.confirmation} component={WyreWebView} />
  </Stack.Navigator>
);
