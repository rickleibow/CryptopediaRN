import { CHART_COLORS } from '@styles/constants';

export const getColorList = (length: number) =>
  new Array(length)
    .fill(1)
    .map((el, index) => CHART_COLORS[index] || randomColor());

export const randomColor = () =>
  ('#' + (Math.random() * 0xffffff).toString(16) + '000000').slice(0, 7);
