import React from 'react';

import { Theme } from '@styles/theme';

import { PayButton } from '@screens/invest/components/pay-button';

export const Invest = () => (
  <Theme.Screen isCentered>
    <Theme.Text fontSize="bigTitle">Invest</Theme.Text>
    <PayButton/>
  </Theme.Screen>
);
