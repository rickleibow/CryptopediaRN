import React from 'react';

import { Button } from '@components/button';

import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';

export const PayButton = () => {
  const navigation = useNavigation();

  const handlePayPress = () => {
    navigation.navigate(ROUTES.paymentWay);
  };

  return (
    <Button
      title={'Pay'}
      onPress={handlePayPress}
      textColor={'black'}/>
  );
};

