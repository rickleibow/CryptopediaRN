import React, { FC } from 'react';
import { View } from 'react-native';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { MarketStyles } from './market.styles';

interface IMarketProps {
  cap: string;
  volume: string;
  change: number;
}

export const Market: FC<IMarketProps> = ({ cap, volume, change }) => {
  const { DETAIL } = STRINGS;

  return (
    <MarketStyles.Wrapper>
      <MarketStyles.Row>
        <Theme.Text fontSize="big" color={COLORS.black}>
          {DETAIL.cap}
        </Theme.Text>
        <Theme.Text fontSize="big" color={COLORS.black}>
          {cap}
        </Theme.Text>
      </MarketStyles.Row>
      <MarketStyles.Row>
        <View>
          <Theme.Text fontSize="big" color={COLORS.black}>
            {DETAIL.volume}
          </Theme.Text>
          <MarketStyles.SubText color={COLORS.primaryGray}>
            {DETAIL.change}
          </MarketStyles.SubText>
        </View>
        <View>
          <Theme.Text fontSize="big" color={COLORS.black}>
            {volume}
          </Theme.Text>
          <MarketStyles.SubText color={change < 0 ? COLORS.red : COLORS.green}>
            {change.toFixed(2)}%
          </MarketStyles.SubText>
        </View>
      </MarketStyles.Row>
    </MarketStyles.Wrapper>
  );
};
