import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

interface IActiveProp {
  isActive?: boolean;
}

export const TabBarItemStyles = {
  Wrapper: styled.View`
    flex: 1;
  `,
  Text: styled(Theme.Text)<IActiveProp>`
    ${({ isActive }) => isActive && `color: ${COLORS.primaryBlue};`}
  `,
  IconWrapper: styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
  `,
};
