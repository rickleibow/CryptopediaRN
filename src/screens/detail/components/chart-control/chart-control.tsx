import React, { FC } from 'react';

import { Icon } from '@components/icon';

import { COLORS } from '@styles/constants';
import { TChartTypes } from '../sub-header/sub-header.constants';
import { TIME_OPTIONS, TYPE_OPTIONS } from './chart-control.constants';

import { Theme } from '@styles/theme';
import { ChartControlStyles } from './chart-control.styles';

interface IChartControl {
  activeTime: string;
  activeType: TChartTypes;
  setTime: (time: string) => void;
  setType: (type: TChartTypes) => void;
}

export const ChartControl: FC<IChartControl> = ({
  setTime,
  setType,
  activeTime,
  activeType,
}) => (
  <ChartControlStyles.Wrapper>
    <ChartControlStyles.Time>
      {TIME_OPTIONS.map(({ title, interval }) => {
        const handlePress = () => setTime(interval);
        return (
          <ChartControlStyles.Item
            key={title}
            underlayColor={COLORS.transparent}
            onPress={handlePress}
          >
            <Theme.Text
              fontSize="big"
              color={
                activeTime === interval
                  ? COLORS.primaryBlue
                  : COLORS.grayChartControls
              }
            >
              {title}
            </Theme.Text>
          </ChartControlStyles.Item>
        );
      })}
    </ChartControlStyles.Time>
    <ChartControlStyles.Type>
      {TYPE_OPTIONS.map(({ icon, type }) => {
        const handlePress = () => setType(type);
        return (
          <ChartControlStyles.Item
            underlayColor={COLORS.transparent}
            key={icon}
            onPress={handlePress}
          >
            <Icon
              type={icon}
              color={activeType === type ? 'primaryBlue' : 'grayChartControls'}
              size={20}
            />
          </ChartControlStyles.Item>
        );
      })}
    </ChartControlStyles.Type>
  </ChartControlStyles.Wrapper>
);
