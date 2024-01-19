import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { COLORS } from '@styles/constants';

import { DictionaryItemStyles } from './dictionary-item.styles';

interface IDictionaryItemProps {
  term: string;
  onPress: () => void;
}

export const DictionaryItem: FC<IDictionaryItemProps> = ({ term, onPress }) => (
  <TouchableHighlight underlayColor={COLORS.transparent} onPress={onPress}>
    <DictionaryItemStyles.Wrapper>
      <DictionaryItemStyles.Text color={COLORS.black} fontSize="big">{term}</DictionaryItemStyles.Text>
      <DictionaryItemStyles.Separator />
    </DictionaryItemStyles.Wrapper>
  </TouchableHighlight>
);
