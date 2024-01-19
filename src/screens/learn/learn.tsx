import React from 'react';

import { Header } from '@components/header';
import { LearnRouter } from './componetns';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Learn = () => (
  <Theme.Screen>
    <Header title={STRINGS.LEARN.title} background="white" color="black" />
    <LearnRouter />
  </Theme.Screen>
);
