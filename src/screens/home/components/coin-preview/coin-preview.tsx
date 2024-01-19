import { useNavigation } from '@react-navigation/native';
import * as shape from 'd3-shape';
import React, { FC } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

import { useCoinPreviewState } from './coin-preview.state';

import { IMAGES } from '@constants/images';
import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinPreviewStyles } from './coin-preview.styles';

interface ICoinPeviewProps {
  name: string;
  symbol: string;
  price: string;
  change: number;
  image?: string;
  cap: string;
  volume: string;
}

const COIN_PREVIEW_WRAPPER_PROPORTIONS = 16 / 9;

export const CoinPreview: FC<ICoinPeviewProps> = ({
  name,
  symbol,
  price,
  change,
  image,
  cap,
  volume,
}) => {
  const width = Dimensions.get('window').width * 0.46;
  const { chartData } = useCoinPreviewState(symbol);
  const { HOME } = STRINGS;

  const { navigate } = useNavigation();
  const handlePress = () =>
    navigate(ROUTES.detailHome, {
      name,
      price,
      cap,
      change,
      volume,
      symbol,
      router: 'homeRouter',
    });

  return (
    <TouchableHighlight onPress={handlePress}>
      <CoinPreviewStyles.Wrapper
        style={{
          width,
          height: width / COIN_PREVIEW_WRAPPER_PROPORTIONS,
        }}
      >
        <CoinPreviewStyles.Row>
          <CoinPreviewStyles.ImageWrapper>
            <CoinPreviewStyles.Image
              source={image ? { uri: image } : IMAGES.logo}
            />
          </CoinPreviewStyles.ImageWrapper>
          <Theme.Screen>
            <Theme.Text fontSize="big" color={COLORS.black}>
              {name}
            </Theme.Text>
            <Theme.Text fontSize="small" color={COLORS.black}>
              1 {symbol} = {price}
            </Theme.Text>
            <Theme.Text
              fontSize="small"
              color={change < 0 ? COLORS.red : COLORS.green}
            >
              {HOME.change} - ({change.toFixed(2)}%)
            </Theme.Text>
            <Theme.Text fontSize="small" color={COLORS.darkGray}>
              {HOME.change24H}
            </Theme.Text>
          </Theme.Screen>
        </CoinPreviewStyles.Row>
        <CoinPreviewStyles.Chart>
          <LineChart
            data={
              Array.isArray(chartData) ? chartData.map(({ high }) => high) : []
            }
            style={{
              height: width / (COIN_PREVIEW_WRAPPER_PROPORTIONS * 3),
              width,
            }}
            svg={{ stroke: COLORS.primaryBlue }}
            contentInset={{ bottom: 10, top: 5 }}
            curve={shape.curveMonotoneX}
          />
        </CoinPreviewStyles.Chart>
      </CoinPreviewStyles.Wrapper>
    </TouchableHighlight>
  );
};
