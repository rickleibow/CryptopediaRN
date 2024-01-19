import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const ChartControlStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${COLORS.grayChartControls};
  `,
  Time: styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px 5px;
    border-right-width: 1px;
    border-color: ${COLORS.grayChartControls};
    flex: 1;
  `,
  Type: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
  `,
  Item: styled.TouchableHighlight`
    padding: 5px 10px;
  `,
};
