import { AreaChart } from 'react-native-svg-charts';
import styled from 'styled-components/native';

import { COLORS, MIXINS } from '@styles/constants';

export const ChartStyles = {
  Wrapper: styled.View`
    margin: 10px 0;
    ${MIXINS.shadow}
  `,
  Content: styled.View`
    background-color: ${COLORS.white};
    overflow: hidden;
    border-radius: 10px;
  `,
  Chart: styled(AreaChart)`
    height: 100px;
  `,
  Title: styled.View`'
    padding: 10px;
  `
};
