import React, { FC } from 'react';

import { openBrowser } from '@services/utils';

import { IMAGES } from '@constants/images';
import { COLORS } from '@styles/constants';

import { NetworksStyles } from './networks.styles';

interface INetworkItemProps {
  url: string;
  type: keyof typeof IMAGES;
}

export const NetworkItem: FC<INetworkItemProps> = ({ url, type }) => {
  const handlePress = () => openBrowser(url);

  return (
    <NetworksStyles.Touchable
      onPress={handlePress}
      underlayColor={COLORS.transparent}
    >
      <NetworksStyles.IconWrapper>
        <NetworksStyles.Icon source={IMAGES[type]} />
      </NetworksStyles.IconWrapper>
    </NetworksStyles.Touchable>
  );
};
