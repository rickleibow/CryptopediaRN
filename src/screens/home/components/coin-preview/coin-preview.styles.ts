import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const CoinPreviewStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.white};
    border-radius: 20px;
  `,
  ImageWrapper: styled.View`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 5px;
    overflow: hidden;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  Row: styled.View`
    padding: 10px 5px;
    flex-direction: row;
    align-items: center;
  `,
  Chart: styled.View`
    padding-bottom: 10px;
    flex: 1;
  `
};
