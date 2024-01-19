import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SectionHeaderStyles } from './section-header.styles';

interface ISectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<ISectionHeaderProps> = ({ title }) => (
  <SectionHeaderStyles.Wrapper>
    <Theme.Text fontSize="title" color={COLORS.black} fontWeight="medium">
      {title}
    </Theme.Text>
  </SectionHeaderStyles.Wrapper>
);
