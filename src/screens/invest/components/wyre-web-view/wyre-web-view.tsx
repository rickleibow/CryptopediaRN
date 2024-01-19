import React, { useState, useEffect } from 'react';

import { Button } from '@components/button';

import { useRoute } from '@react-navigation/core';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { WebView } from 'react-native-webview';
import { reserveWyreOrder } from '@screens/invest/components/wyre-web-view/wyre-api';

import { WebViewStyles } from '@screens/invest/components/wyre-web-view/web-view.styles';

import { NotSupportedCountries } from '@constants/countries';
import { Theme } from '@styles/theme';

type ParamList = {
  Params: {
    amount: string;
    location: string;
    cardType: string;
  };
};

export const WyreWebView = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'Params'>>();

  const [uri, setUri] = useState('');
  const accountAddress = '0x9E01E0E60dF079136a7a1d4ed97d709D5Fe3e341';

  const urlCryptopedia = 'https://www.cryptopedia.money/';

  useEffect(() => {
    console.log(params, 'PARAMS WEBVIEW');

    const getReservationId = async () => {
      const { url } = await reserveWyreOrder(
        params.amount,
        accountAddress,
        'ETH',
        params.cardType,
      );
      setUri(url);
    };

    const checkNoSupportedCountries = () => {
      console.log(NotSupportedCountries.includes(params.location), 'NEW YORK CHECK');
      return NotSupportedCountries.includes(params.location.toLowerCase());
    };
    checkNoSupportedCountries() ? setUri(urlCryptopedia) : getReservationId();

  }, [accountAddress, params]);

  const handlerBack = () => {
    navigation.goBack();
  };

  return (
    <Theme.Screen isCentered>
      {uri.length > 0 ? (
        <WebView
          style={WebViewStyles}
          injectedJavaScriptForMainFrameOnly={false}
          source={{ uri: uri }}
        />
      ) : (
        <Theme.Text>wait</Theme.Text>
      )}
      <Button
        title={'go back to Amount'}
        onPress={handlerBack}
        textColor={'black'}/>
    </Theme.Screen>
  );
};
