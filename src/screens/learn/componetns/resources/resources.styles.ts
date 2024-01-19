import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const ResourcesStyles = {
  Separator: styled.View`
    height: 1px;
    width: 100%;
    background-color: ${COLORS.lightBorder};
  `,
  SeparatorWrapper: styled.View`
    width: 100%;
    padding-left: 10px;
    align-items: flex-end;
  `,
};
