import React, { FC } from 'react';
import { KeyboardTypeOptions, TouchableHighlight } from 'react-native';

import { Icon } from '@components/icon';

import { COLORS } from '@styles/constants';

import { InputStyles } from './input.styles';

interface ISearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  keyboardType: KeyboardTypeOptions;
}
export const Input: FC<ISearchFieldProps> = ({
  value,
  setValue,
  keyboardType,
}) => {
  const handleClearPress = () => setValue('');

  return (
    <InputStyles.Wrapper>
      <InputStyles.Input
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />
      {value !== '' && (
        <InputStyles.IconWrapper>
          <TouchableHighlight
            onPress={handleClearPress}
            underlayColor={COLORS.transparent}
          >
            <Icon type="close" size={15} color="grayPlaceholder" />
          </TouchableHighlight>
        </InputStyles.IconWrapper>
      )}
    </InputStyles.Wrapper>
  );
};
