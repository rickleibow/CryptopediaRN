import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const NewsStyles = {
  Title: styled(Theme.Text)`
    padding: 10px 10px 0;
  `,
  Separator: styled.View`
    height: 1px;
    background-color: ${COLORS.lightBorder}
    margin-top: -1px;
  `,
  Button: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
  `,
  Wrapper: styled.View`
    background-color: ${COLORS.white};
    margin-bottom: 5px;
    margin-top: 5px;
  `,
};
