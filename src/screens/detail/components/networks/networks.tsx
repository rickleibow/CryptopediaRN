import React, { FC } from 'react';

import { NetworkItem } from './network-item';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { NetworksStyles } from './networks.styles';

interface INetworksProps {
  reddit?: string;
  twitter?: string;
  facebook?: string;
}

export const Networks: FC<INetworksProps> = ({ reddit, twitter, facebook }) => {
  const { DETAIL } = STRINGS;

  return (
    <NetworksStyles.Wrapper>
      <Theme.Text fontSize="bigTitle" color={COLORS.black}>
        {DETAIL.networks}
      </Theme.Text>
      <NetworksStyles.Row>
        {facebook && <NetworkItem url={facebook} type="facebook" />}
        {twitter && <NetworkItem url={twitter} type="twitter" />}
        {reddit && <NetworkItem url={reddit} type="reddit" />}
      </NetworksStyles.Row>
    </NetworksStyles.Wrapper>
  );
};
