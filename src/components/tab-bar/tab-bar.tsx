import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { getCurrentRoute } from '@screens/app/app.navigator';
import { TabBarItem } from './components';

import { TABS } from './tab-bar.constants';

import { TabBarStyles } from './tab-bar.styles';

export const TabBar = () => {
  const { navigate } = useNavigation();
  const currentRoute = getCurrentRoute();

  return (
    <TabBarStyles.Wrapper>
      {TABS.map(({ key, icon, keyTabs }) => (
        <TabBarItem
          key={key}
          title={key}
          icon={icon}
          isActive={keyTabs.includes(currentRoute)}
          onPress={() => navigate(key)}
        />
      ))}
    </TabBarStyles.Wrapper>
  );
};
