import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ButtonStyles } from './button.styles';

interface IButton {
  text: string;
  onPress: () => void;
  color?: string;
}

export const Button: FC<IButton> = ({ text, color, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={COLORS.transparent}>
    <ButtonStyles.Wrapper>
      <Theme.Text
        color={color || COLORS.black}
        isCentered
        fontSize="big"
        fontWeight="medium"
      >
        {text}
      </Theme.Text>
    </ButtonStyles.Wrapper>
  </TouchableHighlight>
);
