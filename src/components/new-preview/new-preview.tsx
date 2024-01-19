import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { openLink } from '@services/utils';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { NewPreviewStyles } from './new-preview.styles';

interface INewPreviewProps {
  title?: string;
  body?: string;
  url?: string;
  imageurl?: string;
  web?: string;
}

export const NewPreview: FC<INewPreviewProps> = ({
  title,
  body,
  imageurl,
  web,
  url,
}) => {
  const handlePress = () => {
    if (url) {
      openLink(url);
    }
  };

  return (
    <TouchableHighlight
      underlayColor={COLORS.transparent}
      activeOpacity={1}
      onPress={handlePress}
    >
      <NewPreviewStyles.Wrapper>
        <Theme.Screen>
          <Theme.Text
            fontSize="big"
            color={COLORS.black}
            fontWeight="medium"
            lineHeight={20}
          >
            {title}
          </Theme.Text>
          <NewPreviewStyles.Description
            color={COLORS.lightGray}
            numberOfLines={2}
          >
            {body}
          </NewPreviewStyles.Description>
          <Theme.Text color={COLORS.lightGray}>{web}</Theme.Text>
        </Theme.Screen>
        <NewPreviewStyles.ImageWrapper>
          <NewPreviewStyles.Image source={{ uri: imageurl }} />
        </NewPreviewStyles.ImageWrapper>
        <NewPreviewStyles.Border />
      </NewPreviewStyles.Wrapper>
    </TouchableHighlight>
  );
};
