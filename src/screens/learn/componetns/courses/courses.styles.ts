import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const CoursesStyles = {
  Content: styled.View`
    padding: 10px;
    background-color: ${COLORS.white};
    margin-bottom: 20px;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
  TitleRow: styled.View`
    flex-direction: row;
    justify-content: space-between;
  `,
};
