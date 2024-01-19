import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import { Header } from '@components/header';
import { Video } from '@components/video';

import { COLORS } from '@styles/constants';

import { IDictionaryDetailProps } from './dictionary-detail.typings';

import { Theme } from '@styles/theme';
import { DictionaryDetailStyles } from './dictionary-detail.styles';

export const DictionaryDetail: FC<IDictionaryDetailProps> = ({ route }) => {
  const { term, definitions, youtubeLink } = route.params;

  return (
    <Theme.Screen color={COLORS.white}>
      <Header color="black" background="white" isBack title={term} />
      <Video url={youtubeLink} />
      <ScrollView>
        <DictionaryDetailStyles.Wrapper>
          <Theme.Text fontSize="title" color={COLORS.black}>
            {term}
          </Theme.Text>
          <DictionaryDetailStyles.Desc>
            {definitions}
          </DictionaryDetailStyles.Desc>
        </DictionaryDetailStyles.Wrapper>
      </ScrollView>
    </Theme.Screen>
  );
};
