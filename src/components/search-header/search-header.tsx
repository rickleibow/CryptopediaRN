import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchField } from '@components/search-field';

import { DEFAULT_TOP } from '@components/header/header.constants';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SearchHeaderStyles } from './search-header.styles';

interface ISearchHeaderProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  setOpen: (isOpen: boolean) => void;
}

export const SearchHeader: FC<ISearchHeaderProps> = ({
  placeholder,
  value,
  setValue,
  setOpen,
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = Math.max(DEFAULT_TOP, top);

  const { HEADER } = STRINGS;

  const handleCancelPress = () => {
    setValue('');
    setOpen(false);
  };

  return (
    <SearchHeaderStyles.Wrapper
      style={{
        paddingTop: paddingTop,
      }}
    >
      <SearchHeaderStyles.Row>
        <Theme.Screen>
          <SearchField
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            isAutoFocus
          />
        </Theme.Screen>
        <SearchHeaderStyles.Cancel
          underlayColor={COLORS.transparent}
          onPress={handleCancelPress}
        >
          <Theme.Text color={COLORS.black}>{HEADER.cancel}</Theme.Text>
        </SearchHeaderStyles.Cancel>
      </SearchHeaderStyles.Row>
    </SearchHeaderStyles.Wrapper>
  );
};
