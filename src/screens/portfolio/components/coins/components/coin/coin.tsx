import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';

import { CURRENCY_SYMBOLS } from '@constants/currency';
import { IMAGES } from '@constants/images';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinStyles } from './coin.styles';

interface ICoin {
  title: string;
  price: number;
  number: number;
  change: number;
  image?: string;
  cap: string;
  volume: string;
  symbol: string;
}
export const Coin: FC<ICoin> = ({
  title,
  price,
  number,
  change,
  image,
  cap,
  volume,
  symbol,
}) => {
  const { navigate } = useNavigation();

  const handlePress = () =>
    navigate(ROUTES.detail, {
      name: title,
      price,
      cap,
      change,
      volume,
      symbol,
      router: 'portfolioRouter',
    });
  return (
    <CoinStyles.Touchable
      onPress={handlePress}
      underlayColor={COLORS.transparent}
    >
      <CoinStyles.Wrapper>
        <CoinStyles.ImageWrapper>
          <CoinStyles.Image source={image ? { uri: image } : IMAGES.coin} />
        </CoinStyles.ImageWrapper>
        <Theme.Screen>
          <Theme.Text color={COLORS.black} fontSize="big">
            {title}
          </Theme.Text>
          <Theme.Text>{number.toFixed(1)}</Theme.Text>
        </Theme.Screen>
        <CoinStyles.Value>
          <CoinStyles.ValueText
            color={change < 0 ? COLORS.red : COLORS.green}
            fontSize="big"
          >
            {CURRENCY_SYMBOLS.USD}
            {price.toFixed(2)}
          </CoinStyles.ValueText>
        </CoinStyles.Value>
        <CoinStyles.Value>
          <CoinStyles.ValueText color={COLORS.black} fontSize="big">
            {CURRENCY_SYMBOLS.USD}
            {(price * number).toFixed(2)}
          </CoinStyles.ValueText>
        </CoinStyles.Value>
      </CoinStyles.Wrapper>
    </CoinStyles.Touchable>
  );
};
