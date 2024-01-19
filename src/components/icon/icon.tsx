import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { IconStyles } from './icon.styles';

import back from '@assets/back.svg';
import barChart from '@assets/bar-chart.svg';
import close from '@assets/close.svg';
import currency from '@assets/currency.svg';
import forward from '@assets/forward.svg';
import settings from '@assets/home/settings.svg';
import videoBars from '@assets/learn/video-bars.svg';
import lineChart from '@assets/line-chart.svg';
import home from '@assets/menu/home.svg';
import invest from '@assets/menu/invest.svg';
import learn from '@assets/menu/learn.svg';
import markets from '@assets/menu/markets.svg';
import portfolio from '@assets/menu/portfolio.svg';
import search from '@assets/search.svg';
import starActive from '@assets/star-active.svg';
import star from '@assets/star.svg';

const ICONS = {
  home,
  markets,
  portfolio,
  learn,
  invest,

  settings,

  back,
  forward,
  search,
  close,
  star,
  starActive,
  currency,

  lineChart,
  barChart,

  videoBars,
};

export type TIconTypes = keyof typeof ICONS;

interface IIconProps {
  type: TIconTypes;
  size: number;
  color?: keyof typeof COLORS;
}

export const Icon: FC<IIconProps> = ({ type, size, color }) => {
  const Svg = ICONS[type];

  return (
    <IconStyles.Wrapper>
      <Svg
        height={size}
        width={size}
        style={{ color: color ? COLORS[color] : COLORS.primaryGray }}
      />
    </IconStyles.Wrapper>
  );
};
