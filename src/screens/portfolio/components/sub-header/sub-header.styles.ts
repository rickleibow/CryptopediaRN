import { PieChart } from 'react-native-svg-charts';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const SubHeaderStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.primaryBlue};
    padding: 10px;
  `,
  Row: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  `,
  Returns: styled.View`
    flex-direction: row;
  `,
  Value: styled(Theme.Text)`
    margin-left: 10px;
  `,
  Chart: styled(PieChart)`
    height: 200px;
  `
};
