import React, { FC } from 'react';

import { COLORS, FONT_SIZES } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ButtonStyles } from './button.styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
  color?: keyof typeof COLORS;
  textColor?: keyof typeof COLORS;
  isRounded?: boolean;
  isSmall?: boolean;
  fontSize?: keyof typeof FONT_SIZES;
  padding?: number;
}

export const Button: FC<IButtonProps> = ({
  title,
  onPress,
  color,
  isRounded,
  fontSize,
  textColor,
  isSmall,
  padding,
}) => (
  <ButtonStyles.Wrapper
    isRounded={isRounded}
    isSmall={isSmall}
    style={{ backgroundColor: COLORS[color || 'transparent'] }}
    padding={padding}
  >
    <ButtonStyles.Touchable
      onPress={onPress}
      activeOpacity={0.4}
      underlayColor={COLORS.transparent}
    >
      <Theme.Text
        fontWeight={isSmall ? 'normal' : 'medium'}
        fontSize={fontSize}
        color={COLORS[textColor || 'white']}
      >
        {title}
      </Theme.Text>
    </ButtonStyles.Touchable>
  </ButtonStyles.Wrapper>
);
