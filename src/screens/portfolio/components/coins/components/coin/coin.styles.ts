import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const CoinStyles = {
  Touchable: styled.TouchableHighlight`
    margin: 0 10px 10px;
  `,
  Wrapper: styled.View`
    background-color: ${COLORS.white};
    padding: 10px 5px;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${COLORS.lightBorder};
  `,
  Value: styled.View`
    width: 25%;
  `,
  ImageWrapper: styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 5px;
    overflow: hidden;
  `,
  ValueText: styled(Theme.Text)`
    text-align: right;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
};
