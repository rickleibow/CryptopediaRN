import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const DictionaryItemStyles = {
  Text: styled(Theme.Text)`
    padding: 10px 0;
  `,
  Separator: styled.View`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.lightBorder};
  `,
  Wrapper: styled.View`
    padding-left: 10px;
  `,
};
