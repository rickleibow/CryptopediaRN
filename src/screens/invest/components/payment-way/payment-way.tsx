import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Input } from '@components/input';
import { Button } from '@components/button';

import { PaymentWayStyles } from '@screens/invest/components/payment-way/payment-way.styles';

import { Theme } from '@styles/theme';

import { ROUTES } from '@constants/routes';

export const PaymentWay = () => {
  const navigation = useNavigation();
  const [locationUser, setLocationUser] = useState('');

  const handlerCard = () => {
    const params = {
      location: locationUser ? locationUser : '',
      cardType: 'debit-card',
    };
    navigation.navigate(ROUTES.amount, params);
  };

  const handlerBack = () => {
    navigation.goBack();
  };

  return (
    <Theme.Screen isCentered>
      <PaymentWayStyles.Text>
        Country of residence
      </PaymentWayStyles.Text>
      <PaymentWayStyles.InputWrapper>
        <Input
          value={locationUser}
          setValue={setLocationUser}
          keyboardType={'default'}
        />
      </PaymentWayStyles.InputWrapper>

      <Button
        title={'pay by credit card'}
        textColor={'black'}
        onPress={handlerCard}/>
      <Button
        title={'goBack'}
        textColor={'black'}
        onPress={handlerBack}/>
    </Theme.Screen>
  );
};
