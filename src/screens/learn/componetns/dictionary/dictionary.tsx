import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Keyboard, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { SearchField } from '@components/search-field';
import { DictionaryItem } from './components';

import { useDictionaryState } from './dictionary.state';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

const SearchWrapper = styled.View`
  padding: 5px 10px;
`;

export const Dictionary = () => {
  const { dictionary, filter, setFilter } = useDictionaryState();

  const { navigate } = useNavigation();

  return (
    <Theme.Screen color={COLORS.white}>
      <ScrollView keyboardShouldPersistTaps="always" onScroll={Keyboard.dismiss} scrollEventThrottle={1}>
        <SearchWrapper>
          <SearchField
            value={filter}
            setValue={setFilter}
            placeholder={STRINGS.LEARN.search}
          />
        </SearchWrapper>
        {dictionary
          .map((el) => {
            const handlePress = () => navigate(ROUTES.dictionaryDetail, el);
            return (
              <DictionaryItem
                term={el.term}
                key={el.term}
                onPress={handlePress}
              />
            );
          })}
      </ScrollView>
    </Theme.Screen>
  );
};
