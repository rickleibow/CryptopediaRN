import React from 'react';
import ActionSheet from 'react-native-actionsheet';

import { Header } from '@components/header';
import { SearchHeader } from '@components/search-header';
import { MarketsRouter } from './components';

import { useMarketsState } from './markets.state';

import { STRINGS } from '@constants/strings';
import { CURRENCY_ACTION_OPTIONS } from './markets.constants';

import { Theme } from '@styles/theme';

export const Markets = () => {
  const {
    index,
    setIndex,
    setSearchOpen,
    setFilter,
    isSearchOpen,
    filter,
    actionSheet,
    onSelect,
    getFavoritesIcon,
    toggleFavoritesActive,
  } = useMarketsState();

  const { MARKETS } = STRINGS;

  const isFirstTab = index === 0;

  const handleSearchPress = () => setSearchOpen(true);

  return (
    <Theme.Screen>
      {isSearchOpen && setFilter ? (
        <SearchHeader
          value={filter || ''}
          setValue={setFilter}
          setOpen={setSearchOpen}
          placeholder={MARKETS.searchPlaceholder}
        />
      ) : (
        <Header
          title={MARKETS.title}
          background="white"
          color="black"
          rightIcon={isFirstTab ? 'search' : undefined}
          rightIconHandler={handleSearchPress}
          leftIcon={isFirstTab ? 'currency' : undefined}
          leftIconHandler={() => actionSheet.current?.show()}
          rightAdditionalIcon={isFirstTab ? getFavoritesIcon() : undefined}
          rightAdditionalIconHandler={toggleFavoritesActive}
        />
      )}
      <Theme.Screen>
        <MarketsRouter index={index} setIndex={setIndex} />
      </Theme.Screen>
      <ActionSheet
        ref={actionSheet}
        title={MARKETS.currency}
        options={[...CURRENCY_ACTION_OPTIONS, MARKETS.cancel]}
        cancelButtonIndex={CURRENCY_ACTION_OPTIONS.length}
        onPress={onSelect}
      />
    </Theme.Screen>
  );
};
