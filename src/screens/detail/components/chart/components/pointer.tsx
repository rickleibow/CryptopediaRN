import React, { FC, useEffect } from 'react';
import { Line } from 'react-native-svg';

import { DEFAULT_SNAPSHOT_DATA } from '../../sub-header/sub-header.constants';

import { ISnapshotData } from '@typings/api';

interface IPointerProps {
  x?: (number: number) => number;
  y?: (number: number) => number;
  userX: number;
  chartData?: ISnapshotData[];
  onSelect: (data: ISnapshotData) => void;
  color: string;
}
export const Pointer: FC<IPointerProps> = ({
  x,
  y,
  userX,
  chartData,
  onSelect,
  color,
}) => {
  useEffect(() => {
    onSelect(chartData ? chartData[point] : DEFAULT_SNAPSHOT_DATA);
  });

  if (!x || !y || !chartData) {
    return null;
  }

  const width = x(chartData.length - 1) / (chartData.length - 1);
  const point = Math.round(userX / width);

  const Y = y(chartData[point]?.high) || -2;
  const X = x(point);

  return (
    <>
      <Line
        key="x-pointer"
        x1="0%"
        x2="100%"
        y1={Y}
        y2={Y}
        stroke={color}
        strokeWidth={1}
      />
      <Line
        key="y-pointer"
        x1={X}
        x2={X}
        y1="0%"
        y2="100%"
        stroke={color}
        strokeWidth={1}
      />
    </>
  );
};
