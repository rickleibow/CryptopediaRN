import styled from 'styled-components/native';

import { PLATFORM } from '@constants/platform';
import { COLORS, FONT_SIZES } from '@styles/constants';

const verticalPadding = PLATFORM.isIOS ? '8px' : 0;

export const SearchFieldStyles = {
  Wrapper: styled.View`
    border-radius: 10px;
    padding: ${verticalPadding} 40px ${verticalPadding} 30px;
    background-color: ${COLORS.darkPaper};
  `,
  IconWrapper: styled.View<{ isRight?: boolean }>`
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ isRight }) => (isRight ? 'right' : 'left')}: 8px;
    justify-content: center;
  `,
  Input: styled.TextInput`
    font-size: ${FONT_SIZES.normal};
    paddingVertical: 0;
  `,
};
