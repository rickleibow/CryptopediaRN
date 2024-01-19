import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { Icon } from '@components/icon';

import { COLORS } from '@styles/constants';

import { SearchFieldStyles } from './search-field.styles';

interface ISearchFieldProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  isAutoFocus?: boolean;
}
export const SearchField: FC<ISearchFieldProps> = ({
  value,
  setValue,
  placeholder,
  isAutoFocus,
}) => {
  const handleClearPress = () => setValue('');

  return (
    <SearchFieldStyles.Wrapper>
      <SearchFieldStyles.IconWrapper>
        <Icon type="search" size={20} color="grayPlaceholder" />
      </SearchFieldStyles.IconWrapper>
      <SearchFieldStyles.Input
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={COLORS.grayPlaceholder}
        autoFocus={isAutoFocus}
      />
      {value !== '' && (
        <SearchFieldStyles.IconWrapper isRight>
          <TouchableHighlight
            onPress={handleClearPress}
            underlayColor={COLORS.transparent}
          >
            <Icon type="close" size={15} color="grayPlaceholder" />
          </TouchableHighlight>
        </SearchFieldStyles.IconWrapper>
      )}
    </SearchFieldStyles.Wrapper>
  );
};
