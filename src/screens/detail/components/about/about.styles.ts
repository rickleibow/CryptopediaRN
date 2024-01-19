import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const AboutStyles = {
  Title: styled(Theme.Text)`
    padding: 10px 10px 0;
  `,
  About: styled(Theme.Text)`
    padding: 10px 10px 15px;
    line-height: 20px;
  `,
  Whitepaper: styled(Theme.Text)`
    padding: 10px;
  `,
  Row: styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-top-color: ${COLORS.lightBorder};
    border-top-width: 1px;
    margin: 0 10px;
    padding: 10px 0;
  `,
  Wrapper: styled.View`
    background-color: ${COLORS.white};
    margin-bottom: 5px;
  `,
};
