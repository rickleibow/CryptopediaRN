import { PieChart } from 'react-native-svg-charts';
import styled from 'styled-components/native';

export const ChartStyles = {
  Wrapper: styled.View`
    width: 100%;
  `,
  Touchable: styled.TouchableHighlight`
    width: 100%;
  `,
  Chart: styled(PieChart)`
    height: 250px;
  `,
};
