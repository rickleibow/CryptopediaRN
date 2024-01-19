import React, { FC } from 'react';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

interface ISubHeaderItemProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
}

const Touchable = styled.TouchableHighlight`
  width: 30%;
`;

export const SubHeaderItem: FC<ISubHeaderItemProps> = ({
  title,
  isActive,
  onPress,
}) => (
  <Touchable underlayColor={COLORS.transparent} onPress={onPress}>
    <Theme.Text
      color={isActive ? COLORS.primaryBlue : COLORS.black}
      fontSize="big"
      isCentered
    >
      {title}
    </Theme.Text>
  </Touchable>
);
