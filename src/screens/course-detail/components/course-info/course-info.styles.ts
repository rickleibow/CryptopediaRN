import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const CourseInfoStyles = {
  Wrapper: styled.View`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.lightBorder};
  `,
  Title: styled(Theme.Text)`
    margin-bottom: 15px;
  `,
  Desc: styled(Theme.Text)`
    line-height: 20px;
  `,
};
