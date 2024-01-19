import React, { FC } from 'react';

import { Labels } from './labels';

import { useChartState } from './chart.state';

import { COLORS } from '@styles/constants';

import { ChartStyles } from './chart.styles';

interface IChartProps {
  prices: {
    [key: string]: number;
  }[];
  total: number;
}

export const Chart: FC<IChartProps> = ({ prices, total }) => {
  const { active, setActive, colors } = useChartState(prices.length);

  const chartData = prices.map((price, index) => {
    const handlePress = () => setActive(index);

    const chartSection = Object.entries(price).map(([key, value]) => ({
      key,
      value: parseFloat(((value * 100) / total).toFixed(2)),
      svg: {
        fill: colors[index],
      },
      arc: {
        outerRadius: index === active ? '110%' : '100%',
      },
      onPress: handlePress,
    }));

    return chartSection[0] || {};
  });

  const handleResetPress = () => setActive(-1);

  return (
    <ChartStyles.Touchable
      underlayColor={COLORS.transparent}
      onPress={handleResetPress}
    >
      <ChartStyles.Wrapper>
        <ChartStyles.Chart
          data={chartData}
          outerRadius="90%"
          innerRadius="50%"
          padAngle={Math.PI / 180}
        >
          <Labels />
        </ChartStyles.Chart>
      </ChartStyles.Wrapper>
    </ChartStyles.Touchable>
  );
};
