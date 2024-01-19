import React from 'react';
import styled from 'styled-components/native';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinStyles } from './coin/coin.styles';

const Wrapper = styled(CoinStyles.Wrapper)`
  background-color: ${COLORS.paper};
`;

export const Header = () => {
  const { ALL_COINS } = STRINGS;

  return (
    <Wrapper>
      <CoinStyles.Col>
        <CoinStyles.Index isCentered color={COLORS.black} fontSize="small">
          {ALL_COINS.index}
        </CoinStyles.Index>
        <Theme.Text color={COLORS.black} fontSize="small">
          {ALL_COINS.name}
        </Theme.Text>
      </CoinStyles.Col>
      <CoinStyles.Col>
        <Theme.Text color={COLORS.black} fontSize="small">
          {ALL_COINS.price}
        </Theme.Text>
        <CoinStyles.Change color={COLORS.black} fontSize="small">
          {ALL_COINS.change}
        </CoinStyles.Change>
        <CoinStyles.Cap color={COLORS.black} fontSize="small">
          {ALL_COINS.cap}
        </CoinStyles.Cap>
      </CoinStyles.Col>
    </Wrapper>
  );
};
