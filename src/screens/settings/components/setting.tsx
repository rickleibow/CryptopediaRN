import React, { FC } from 'react';
import { View } from 'react-native';

import { Icon } from '@components/icon';

import { openLink } from '@services/utils';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SettingsStyles } from '../settings.styles';

interface ISettingProps {
  title: string;
  link: string;
  isLast?: boolean;
}
export const Setting: FC<ISettingProps> = ({ title, link, isLast }) => {
  const handlePress = () => openLink(link);

  return (
    <View>
      <SettingsStyles.Touchable
        onPress={handlePress}
        isBorder={isLast}
        underlayColor={COLORS.transparent}
      >
        <SettingsStyles.Row>
          <Theme.Text fontSize="big" color={COLORS.black} numberOfLines={1}>
            {title}
          </Theme.Text>
          <Icon size={15} type="forward" color="darkGray" />
        </SettingsStyles.Row>
      </SettingsStyles.Touchable>
      <SettingsStyles.Separator />
    </View>
  );
};
