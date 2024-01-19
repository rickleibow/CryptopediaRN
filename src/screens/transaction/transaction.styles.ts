import SegmentedControl from '@react-native-community/segmented-control';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const TransactionStyles = {
  Wrapper: styled.View`
    padding: 10px;
  `,
  SegmentedControl: styled(SegmentedControl)`
    margin-bottom: 10px;
  `,
  Desc: styled(Theme.Text)`
    margin-bottom: 10px;
  `,
  Row: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  `,
  Separator: styled.View`
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
    background-color: ${COLORS.lightBorder};
  `,
  Value: styled.View`
    width: 60%;
  `,
  Total: styled(Theme.Text)`
    text-align: right;
  `
};
