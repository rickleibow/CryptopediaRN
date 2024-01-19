import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const DetailStyles = {
  Wrapper: styled.ScrollView`
    background-color: ${COLORS.paper};
  `,
  BottomSafeArea: styled.View`
    height: 10px;
  `,
};
