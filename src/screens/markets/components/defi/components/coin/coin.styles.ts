import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const CoinStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Col: styled.View`
    flex-direction: row;
    align-items: flex-end;
    padding: 10px 0;
    max-width: 50%;
  `,
  ImageWrapper: styled.View`
    height: 15px;
    width: 15px;
    margin-right: 5px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1px;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
  Value: styled(Theme.Text)`
    text-align: right;
  `,
  Separator: styled.View`
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    background-color: ${COLORS.paper};
  `,
};
