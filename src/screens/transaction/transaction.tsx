import React, { FC } from 'react';

import { Button } from '@components/button';
import { Header } from '@components/header';
import { Row } from './components';

import { useTransactionState } from './transaction.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { ITransactionProps } from './transaction.typings';

import { Theme } from '@styles/theme';
import { TransactionStyles } from './transaction.styles';

export const Transaction: FC<ITransactionProps> = ({ route }) => {
  const { title, symbol } = route.params;

  const {
    index,
    setIndex,
    number,
    setNumber,
    price,
    setPrice,
    handleSubmit,
  } = useTransactionState(symbol);
  const total = parseFloat(number) * parseFloat(price);

  const handleChange = (e) => {
    setIndex(e.nativeEvent.selectedSegmentIndex);
  };
  const { MARKETS } = STRINGS;

  return (
    <Theme.Screen color={COLORS.white}>
      <Header color="white" background="black" isBack title={title} />
      <TransactionStyles.Wrapper>
        <TransactionStyles.SegmentedControl
          values={[MARKETS.buy, MARKETS.sell]}
          selectedIndex={index}
          onChange={handleChange}
        />
        <TransactionStyles.Desc color={COLORS.primaryBlue} fontSize="big">
          {MARKETS.transactionDesc}
        </TransactionStyles.Desc>
        <Row title={MARKETS.price} value={price} onChange={setPrice} keyboardType="decimal-pad" />
        <Row title={MARKETS.number} value={number} onChange={setNumber} keyboardType="number-pad" />
        <TransactionStyles.Separator />
        <TransactionStyles.Row>
          <Theme.Screen>
            <Theme.Text color={COLORS.black} fontSize="big">
              {MARKETS.total}
            </Theme.Text>
          </Theme.Screen>
          <TransactionStyles.Value>
            {total > 0 && (
              <TransactionStyles.Total>
                {total.toFixed(2)}
              </TransactionStyles.Total>
            )}
          </TransactionStyles.Value>
        </TransactionStyles.Row>
        <Button
          onPress={handleSubmit}
          title={MARKETS.addTransaction}
          color="primaryBlue"
        />
      </TransactionStyles.Wrapper>
    </Theme.Screen>
  );
};
