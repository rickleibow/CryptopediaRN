import * as shape from 'd3-shape';
import React from 'react';

import { Line } from './line';

import { getShortNumber } from '@services/utils';
import { useChartState } from './chart.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ChartStyles } from './chart.styles';

export const Chart = () => {
  const { chartData } = useChartState();

  const chartValues = chartData?.map(({ tvlUSD }) => tvlUSD) || [];
  const total = chartData ? chartData[0].tvlUSD : 0;
  const shortTotal = total !== 0 ? getShortNumber(total) : '';

  const { DEFI } = STRINGS;
  return (
    <ChartStyles.Wrapper>
      <ChartStyles.Content>
        <ChartStyles.Title>
          <Theme.Text fontSize="title" color={COLORS.black}>
            {DEFI.total}
          </Theme.Text>
          <Theme.Text fontSize="big" color={COLORS.black}>
            ({DEFI.currency})
          </Theme.Text>
          <Theme.Text
            fontSize="bigTitle"
            color={COLORS.primaryBlue}
            fontWeight="medium"
          >
            ${shortTotal}
          </Theme.Text>
        </ChartStyles.Title>
        <ChartStyles.Chart
          data={chartValues.reverse()}
          curve={shape.curveNatural}
          contentInset={{ top: 10 }}
          yMin={Math.min(...chartValues) * 0.5}
          svg={{ fill: COLORS.paper }}
        >
          <Line color={COLORS.primaryBlue} />
        </ChartStyles.Chart>
      </ChartStyles.Content>
    </ChartStyles.Wrapper>
  );
};
