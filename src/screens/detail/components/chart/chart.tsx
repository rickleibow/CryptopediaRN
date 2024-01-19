import * as shape from 'd3-shape';
import React, { FC, useRef, useState } from 'react';
import { Dimensions, PanResponder, View } from 'react-native';

import { Pointer } from './components';

import { COLORS } from '@styles/constants';
import { TChartTypes } from '../sub-header/sub-header.constants';

import { ISnapshotData } from '@typings/api';

import { ChartStyles } from './chart.styles';

interface IChartProps {
  onSelect: (data: ISnapshotData) => void;
  onTouch: (data: boolean) => void;
  type: TChartTypes;
  selected: ISnapshotData;
  touched: boolean;
  chartData?: ISnapshotData[];
}

export const Chart: FC<IChartProps> = ({
  selected,
  onSelect,
  onTouch,
  touched,
  chartData,
  type,
}) => {
  const [x, setX] = useState(Dimensions.get('window').width);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (props) => {
        onTouch(true);
        setX(props.nativeEvent.locationX);
      },
    })
  ).current;

  const chartValues = chartData ? chartData.map(({ high }) => high) : [];

  switch (type) {
    case 'line':
      return (
        <View {...panResponder.panHandlers}>
          <ChartStyles.LineChart
            data={chartValues}
            svg={{
              stroke: 'rgb(134, 65, 244)',
              strokeWidth: 2,
            }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveMonotoneX}
          >
            {touched && (
              <Pointer
                userX={x}
                chartData={chartData}
                onSelect={onSelect}
                color={COLORS.paper}
              />
            )}
          </ChartStyles.LineChart>
        </View>
      );
    case 'bars':
      return (
        <View {...panResponder.panHandlers}>
          <ChartStyles.BarChart
            data={
              chartData?.map(({ high, time }) => ({
                value: high,
                svg: {
                  fill:
                    selected?.time === time ? COLORS.white : COLORS.grayChartControls,
                },
              })) || []
            }
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 20, bottom: 20 }}
          >
            {touched && (
              <Pointer
                userX={x}
                chartData={chartData}
                onSelect={onSelect}
                color={COLORS.transparent}
              />
            )}
          </ChartStyles.BarChart>
        </View>
      );
  }
};
