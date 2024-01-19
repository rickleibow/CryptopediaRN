import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { IMAGES } from '@constants/images';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinStyles } from './coin.styles';

interface ICoinProps {
  index: number;
  title: string;
  price: string;
  change: number;
  volume: string;
  cap: string;
  image?: string;
  symbol: string;
}

export const Coin: FC<ICoinProps> = ({
  index,
  title,
  price,
  change,
  cap,
  image,
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
      router: 'marketsRouter',
    });

  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor={COLORS.transparent}
    >
      <CoinStyles.Wrapper>
        <CoinStyles.Col>
          <CoinStyles.Index isCentered color={COLORS.primaryGray} fontSize="big">
            {index}
          </CoinStyles.Index>
          <CoinStyles.ImageWrapper>
            <CoinStyles.Image source={image ? { uri: image } : IMAGES.coin} />
          </CoinStyles.ImageWrapper>
          <Theme.Text color={COLORS.black} fontSize="big">
            {title}
          </Theme.Text>
        </CoinStyles.Col>
        <CoinStyles.Col>
          <Theme.Text color={COLORS.black} fontSize="big">{price}</Theme.Text>
          <CoinStyles.Change
            isCentered
            color={change < 0 ? COLORS.red : COLORS.green}
            fontSize="big"
          >
            {change.toFixed(2)}%
          </CoinStyles.Change>
          <CoinStyles.Cap color={COLORS.black} fontSize="big">{cap}</CoinStyles.Cap>
        </CoinStyles.Col>
        <CoinStyles.Separator />
      </CoinStyles.Wrapper>
    </TouchableHighlight>
  );
};
