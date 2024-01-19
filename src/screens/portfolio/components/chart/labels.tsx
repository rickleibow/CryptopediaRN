import React, { FC } from 'react';
import { Text, TSpan } from 'react-native-svg';

import { COLORS, FONT_SIZES } from '@styles/constants';

interface ILabelsProps {
  slices: {
    pieCentroid: number[];
    data: {
      value: string;
      key: string;
    };
  }[];
}

export const Labels: FC<Partial<ILabelsProps>> = ({ slices }) => (
  <>
    {slices?.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          y={pieCentroid[1]}
          fill={COLORS.white}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={FONT_SIZES.normal}
          stroke={COLORS.white}
          strokeWidth={0.2}
        >
          <TSpan x={pieCentroid[0]} dy="-7">{`${data.value}%`}</TSpan>
          <TSpan x={pieCentroid[0]} dy="15">{`${data.key}`}</TSpan>
        </Text>
      );
    })}
  </>
);
