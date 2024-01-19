import React, { FC } from 'react';

import { Chart } from '../chart';

import { CURRENCY_SYMBOLS } from '@constants/currency';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SubHeaderStyles } from './sub-header.styles';

interface ISubHeaderProps {
  total: number;
  spent: number;
  prices: {
    [key: string]: number;
  }[];
}

export const SubHeader: FC<ISubHeaderProps> = ({ total, spent, prices }) => {
  const returns = total - spent;

  const color = returns < 0 ? COLORS.red : COLORS.green;

  return (
    <SubHeaderStyles.Wrapper>
      <SubHeaderStyles.Row>
        <Theme.Text fontWeight="bold" color={COLORS.white} fontSize="big">
          Total Value
        </Theme.Text>
        <Theme.Text fontWeight="bold" color={COLORS.white} fontSize="big">
          {CURRENCY_SYMBOLS.USD}
          {total.toFixed(2)}
        </Theme.Text>
      </SubHeaderStyles.Row>
      <SubHeaderStyles.Row>
        <Theme.Text fontWeight="bold" color={COLORS.white} fontSize="big">
          Returns
        </Theme.Text>
        <SubHeaderStyles.Returns>
          <Theme.Text fontWeight="bold" color={color} fontSize="big">{`${(
            (returns * 100) /
            total
          ).toFixed(2)}%`}</Theme.Text>
          <SubHeaderStyles.Value fontWeight="bold" color={color} fontSize="big">
            {returns < 0 && '-'}
            {CURRENCY_SYMBOLS.USD}
            {Math.abs(returns).toFixed(2)}
          </SubHeaderStyles.Value>
        </SubHeaderStyles.Returns>
      </SubHeaderStyles.Row>
      <Chart prices={prices} total={total} />
    </SubHeaderStyles.Wrapper>
  );
};
