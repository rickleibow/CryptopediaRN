import React, { FC } from 'react';

import { openLink } from '@services/utils';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ResourceStyles } from './resource.styles';

interface IResource {
  title: string;
  url: string;
  imageurl: string;
}

export const Resource: FC<IResource> = ({ title, url, imageurl }) => {
  const handlePress = () => openLink(url);

  return (
    <ResourceStyles.Wrapper
      onPress={handlePress}
      underlayColor={COLORS.transparent}
    >
      <ResourceStyles.Row>
        <ResourceStyles.ImageWrapper>
          <ResourceStyles.Image source={{ uri: imageurl }} resizeMode="contain" />
        </ResourceStyles.ImageWrapper>
        <Theme.Screen>
          <Theme.Text fontSize="big" color={COLORS.black}>
            {title}
          </Theme.Text>
        </Theme.Screen>
      </ResourceStyles.Row>
    </ResourceStyles.Wrapper>
  );
};
