import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Button } from '@components/button';
import { CoinPreview } from '../coin-preview';

import { getCap, getChange, getPrice, getVolume } from '@services/utils';
import { useCoinHeaderState } from './coin-header.state';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';

import { IRenderItemProps } from './coin-header.typings';

import { CoinHeaderStyles } from './coin-header.styles';

export const CoinHeader = () => {
  const { pairCoinInfo } = useCoinHeaderState();
  const { HOME } = STRINGS;
  const windowWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation();
  const handleLearnPress = () => navigate(ROUTES.learn);

  const renderItem = (props: IRenderItemProps) => {
    const [left, right] = props.item;

    return (
      <CoinHeaderStyles.CoinWrapper>
        <CoinPreview
          name={left.name}
          symbol={left.symbol}
          price={getPrice(left)}
          change={getChange(left)}
          image={left.image}
          cap={getCap(left)}
          volume={getVolume(left)}
        />
        <CoinPreview
          name={right.name}
          symbol={right.symbol}
          price={getPrice(right)}
          change={getChange(right)}
          image={right.image}
          cap={getCap(right)}
          volume={getVolume(right)}
        />
      </CoinHeaderStyles.CoinWrapper>
    );
  };

  return (
    <CoinHeaderStyles.Wrapper>
      <CoinHeaderStyles.ButtonWrapper>
        <Button
          title={HOME.tapToLearn}
          onPress={handleLearnPress}
          color="whiteTint"
          isRounded
        />
      </CoinHeaderStyles.ButtonWrapper>
      <CoinHeaderStyles.CarouselWrapper>
        <Carousel
          vertical={false}
          data={pairCoinInfo}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          enableSnap={false}
          autoplay={true}
          autoplayInterval={4000}
        />
      </CoinHeaderStyles.CarouselWrapper>
    </CoinHeaderStyles.Wrapper>
  );
};
