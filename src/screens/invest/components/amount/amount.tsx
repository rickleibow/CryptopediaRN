import React, { useState } from 'react';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';

import { Button } from '@components/button';
import { Input } from '@components/input';

import { AmountStyles } from '@screens/invest/components/amount/amount.styles';

import { ROUTES } from '@constants/routes';

import { Theme } from '@styles/theme';

type ParamList = {
  Params: {
    location: string;
    cardType: string;
  };
};

export const Amount = () => {
  const { params } = useRoute<RouteProp<ParamList, 'Params'>>();

  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const handlerReview = () => {
    const paramsWebView = {
      ...params,
      amount: amount,
    };
    navigation.navigate(ROUTES.confirmation, paramsWebView);
  };

  const handlerBack = () => {
    navigation.goBack();
  };

  return (
    <Theme.Screen isCentered>
      <Theme.Text>Type your amount </Theme.Text>
      <AmountStyles.InputWrapper>
        <Input
          value={amount}
          setValue={setAmount}
          keyboardType={'numeric'}/>
      </AmountStyles.InputWrapper>
      <Button
        title={'Review'}
        textColor={'black'}
        onPress={handlerReview}/>
      <Button
        title={'go back'}
        textColor={'black'}
        onPress={handlerBack}/>
    </Theme.Screen>
  );
};
