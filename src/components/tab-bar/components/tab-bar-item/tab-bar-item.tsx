import React, { FC } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon, TIconTypes } from '@components/icon';

import { COLORS } from '@styles/constants';

import { TabBarItemStyles } from './tab-bar-item.styles';

interface ITabBarItemProps {
  title: string;
  icon: TIconTypes;
  isActive?: boolean;
  onPress: () => void;
}

export const TabBarItem: FC<ITabBarItemProps> = ({
  title,
  icon,
  isActive,
  onPress,
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <TabBarItemStyles.Wrapper style={{ paddingBottom: bottom }}>
      <TouchableHighlight
        underlayColor={COLORS.transparent}
        activeOpacity={1}
        onPress={onPress}
      >
        <View>
          <TabBarItemStyles.IconWrapper>
            <Icon
              type={icon}
              size={25}
              color={isActive ? 'primaryBlue' : undefined}
            />
          </TabBarItemStyles.IconWrapper>
          <TabBarItemStyles.Text isCentered isActive={isActive}>
            {title}
          </TabBarItemStyles.Text>
        </View>
      </TouchableHighlight>
    </TabBarItemStyles.Wrapper>
  );
};
