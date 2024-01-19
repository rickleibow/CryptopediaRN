import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { useAction, useReduxSelector } from '@services/hooks';
import { transactionActions } from './transaction.actions';

import { STRINGS } from '@constants/strings';

export const useTransactionState = (symbol: string) => {
  const [index, setIndex] = useState(0);
  const [price, setPrice] = useState('');
  const [number, setNumber] = useState('');

  const sell = useAction(transactionActions.sell);
  const buy = useAction(transactionActions.buy);

  const numberUserCoins = useReduxSelector(
    (redux) => redux.transaction.transactions[symbol] || 0
  );

  const { goBack } = useNavigation();

  const handleSubmit = () => {
    if (number.trim().length === 0 || price.trim().length === 0) {
      return;
    }
    const count = parseInt(number, 10);

    switch (index) {
      case 0:
        buy({
          symbol,
          count,
          price: parseFloat(price),
        });
        break;
      case 1:
        if (numberUserCoins < count) {
          return Alert.alert(STRINGS.MARKETS.notEnough);
        }
        sell({
          symbol,
          count,
          price: parseFloat(price),
        });
        break;
      default:
        return Alert.alert(STRINGS.MARKETS.unhandled);
    }
    goBack();
  };

  return { index, setIndex, price, setPrice, number, setNumber, handleSubmit };
};
