import React, { FC } from 'react';

import { Button } from '@components/button';
import { Chart } from '../chart';
import { ChartControl } from '../chart-control';

import { useSubHeaderState } from './sub-header.state';
import { getChartBasedTime } from './sub-header.utils';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SubHeaderStyles } from './sub-header.styles';

interface ISubHeaderProps {
  price: string;
  name: string;
  route: keyof typeof ROUTES;
  symbol: string;
}

export const SubHeader: FC<ISubHeaderProps> = ({
  price,
  name,
  route,
  symbol,
}) => {
  const {
    time,
    setTime,
    type,
    setType,
    handleAddToPorfolioPress,
    activePoint,
    setActivePoint,
    touched,
    setTouched,
    chartData,
    currencySymbol,
  } = useSubHeaderState(name, route, symbol);

  const { DETAIL } = STRINGS;

  const date = activePoint ? new Date(activePoint.time * 1000) : new Date();

  return (
    <SubHeaderStyles.Wrapper>
      <Theme.Text fontSize="bigTitle" isCentered color={COLORS.white}>
        {touched && activePoint ? `${currencySymbol}${activePoint.high.toFixed(2)}` : price}
      </Theme.Text>
      <Theme.Text isCentered color={COLORS.white}>
        {touched ? getChartBasedTime(time, date) : time}
      </Theme.Text>
      <Chart
        type={type}
        onSelect={setActivePoint}
        onTouch={setTouched}
        touched={touched}
        chartData={chartData}
        selected={activePoint}
      />
      <ChartControl
        setTime={setTime}
        setType={setType}
        activeTime={time}
        activeType={type}
      />
      <SubHeaderStyles.ButtonWrapper>
        <Button
          title={DETAIL.addToPortfolio}
          color="primaryBlue"
          onPress={handleAddToPorfolioPress}
          fontSize="big"
        />
      </SubHeaderStyles.ButtonWrapper>
    </SubHeaderStyles.Wrapper>
  );
};
