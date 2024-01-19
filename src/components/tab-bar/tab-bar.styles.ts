import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const TabBarStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    border-top-width: 1px;
    border-color: ${COLORS.border};
    background-color: ${COLORS.white};
  `,
};
