import React, { useState } from 'react';
import { Switch } from 'react-native';

import { Header } from '@components/header';
import { Setting } from './components';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';
import { SETTINGS } from './settings.constants';

import { Theme } from '@styles/theme';
import { SettingsStyles } from './settings.styles';

export const Settings = () => {
  const { SETTINGS: SETTINGS_STRINGS } = STRINGS;
  const [isPushNotification, setPushNotification] = useState(false);

  return (
    <Theme.Screen>
      <Header isBack title={SETTINGS_STRINGS.title} />
      <SettingsStyles.Wrapper>
        <SettingsStyles.TitleWrapper>
          <SettingsStyles.Title fontSize="big" color={COLORS.darkGray}>
            {SETTINGS_STRINGS.notifications}
          </SettingsStyles.Title>
        </SettingsStyles.TitleWrapper>
        <SettingsStyles.Touchable isBorder>
          <SettingsStyles.Row>
            <Theme.Text fontSize="big" color={COLORS.black}>
              {SETTINGS_STRINGS.toggle}
            </Theme.Text>
            <Switch value={isPushNotification} onValueChange={setPushNotification} />
          </SettingsStyles.Row>
        </SettingsStyles.Touchable>
        <SettingsStyles.TitleWrapper>
          <SettingsStyles.Title fontSize="big" color={COLORS.darkGray}>
            {SETTINGS_STRINGS.settings}
          </SettingsStyles.Title>
        </SettingsStyles.TitleWrapper>
        {SETTINGS.map((props, index) => (
          <Setting
            key={props.title}
            {...props}
            isLast={index === SETTINGS.length - 1}
          />
        ))}
      </SettingsStyles.Wrapper>
    </Theme.Screen>
  );
};
