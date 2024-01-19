import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { AboutStyles } from '../about.styles';

interface IInfoRowProps {
  title: string;
  text: string;
}

export const InfoRow: FC<IInfoRowProps> = ({ title, text }) => (
  <AboutStyles.Row>
    <Theme.Text fontSize="big" color={COLORS.black}>
      {title}
    </Theme.Text>
    <Theme.Text fontSize="big" color={COLORS.black}>
      {text}
    </Theme.Text>
  </AboutStyles.Row>
);
