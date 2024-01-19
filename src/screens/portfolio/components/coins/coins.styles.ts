import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const CoinsStyles = {
  Header: styled.View`
    padding: 10px;
    background-color: ${COLORS.paper};
    flex-direction: row;
  `,
  Value: styled.View`
    width: 25%;
  `,
  Text: styled(Theme.Text)`
    text-align: right;
    padding-right: 5px;
  `,
};
