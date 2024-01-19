import React, { FC } from 'react';

import { IMAGES } from '@constants/images';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinStyles } from './coin.styles';

interface ICoinProps {
  image?: string;
  title: string;
  percent: string;
  isWithoutImage?: boolean;
}

export const Coin: FC<ICoinProps> = ({
  image,
  title,
  percent,
  isWithoutImage,
}) => (
  <CoinStyles.Wrapper>
    <CoinStyles.Col>
      {!isWithoutImage && (
        <CoinStyles.ImageWrapper>
          <CoinStyles.Image source={image ? { uri: image } : IMAGES.coin} />
        </CoinStyles.ImageWrapper>
      )}
      <Theme.Text
        fontWeight="bold"
        color={COLORS.black}
        fontSize="big"
        numberOfLines={1}
      >
        {title}
      </Theme.Text>
    </CoinStyles.Col>
    <CoinStyles.Col>
      <CoinStyles.Value color={COLORS.black} fontWeight="bold" fontSize="big">
        {percent}
      </CoinStyles.Value>
      <CoinStyles.Value color={COLORS.black} fontSize="big">
        {percent === '-' ? '' : STRINGS.DEFI.value}
      </CoinStyles.Value>
    </CoinStyles.Col>
    <CoinStyles.Separator />
  </CoinStyles.Wrapper>
);
