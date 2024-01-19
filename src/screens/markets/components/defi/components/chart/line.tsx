import React, { FC } from 'react';
import { Path } from 'react-native-svg';

interface ILineProps {
  line?: string;
  color?: string;
}

export const Line: FC<ILineProps> = ({ line, color }) => (
  <Path key="line" d={line} stroke={color} fill="none" />
);
