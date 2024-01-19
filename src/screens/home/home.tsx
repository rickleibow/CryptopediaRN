import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Header } from '@components/header';
import { NewsList, SponsorButton } from './components';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const Home = () => {
  const navigation = useNavigation();

  const { HOME } = STRINGS;

  const handlerSettingsPress = () => {
    navigation.navigate(ROUTES.settings);
  };

  return (
    <Theme.Screen>
      <Header
        title={HOME.title}
        rightIcon="settings"
        rightIconHandler={handlerSettingsPress}
        isLogo
      />
      <Theme.Screen style={{ backgroundColor: COLORS.white }}>
        <NewsList />
        <SponsorButton />
      </Theme.Screen>
    </Theme.Screen>
  );
};
