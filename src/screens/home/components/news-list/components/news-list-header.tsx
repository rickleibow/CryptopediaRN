import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { NewsListStyles } from '../news-list.styles';

interface IHeaderProps {
  title: string;
}

export const NewsListHeader: FC<IHeaderProps> = ({ title }) => (
  <NewsListStyles.Header>
    <Theme.Text fontSize="big" color={COLORS.black} fontWeight="bold">
      {title}
    </Theme.Text>
  </NewsListStyles.Header>
);
