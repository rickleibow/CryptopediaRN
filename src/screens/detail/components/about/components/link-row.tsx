import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { openBrowser } from '@services/utils';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { AboutStyles } from '../about.styles';

interface ILinkRowProps {
  title: string;
  text: string;
  link: string;
}

export const LinkRow: FC<ILinkRowProps> = ({ title, text, link }) => {
  const handlePress = () => openBrowser(link);

  return (
    <AboutStyles.Row>
      <Theme.Text fontSize="big" color={COLORS.black}>
        {title}
      </Theme.Text>
      <TouchableHighlight
        onPress={handlePress}
        underlayColor={COLORS.transparent}
      >
        <Theme.Text fontSize="big" color={COLORS.primaryBlue}>
          {text}
        </Theme.Text>
      </TouchableHighlight>
    </AboutStyles.Row>
  );
};
