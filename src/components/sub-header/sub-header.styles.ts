import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const SubHeaderStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${COLORS.white}
    padding-bottom: 10px;
  `,
};
