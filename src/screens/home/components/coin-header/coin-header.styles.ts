import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const CoinHeaderStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.primaryBlue};
    padding-bottom: 10px;
  `,
  ButtonWrapper: styled.View`
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 10px;
  `,
  CoinWrapper: styled.View`
    flex-direction: row;
    justify-content: space-evenly;
  `,
  CarouselWrapper: styled.View`
    height: ${Dimensions.get('window').width * 0.26}px;
  `
};
