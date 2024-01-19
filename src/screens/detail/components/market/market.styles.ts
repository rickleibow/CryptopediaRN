import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const MarketStyles = {
  Wrapper: styled.View`
    border-bottom-color: ${COLORS.lightBorder};
    border-bottom-width: 1px;
    background-color: ${COLORS.white};
  `,
  Row: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
  `,
  SubText: styled(Theme.Text)`
    margin-top: 5px;
    text-align: right;
  `,
};
