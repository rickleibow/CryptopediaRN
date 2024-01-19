import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const SearchHeaderStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.white};
    padding: 0 10px 10px;
  `,
  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Cancel: styled.TouchableHighlight`
    padding: 0 10px;
  `,
};
