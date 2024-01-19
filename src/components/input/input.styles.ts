import styled from 'styled-components/native';

import { PLATFORM } from '@constants/platform';
import { COLORS, FONT_SIZES } from '@styles/constants';

const verticalPadding = PLATFORM.isIOS ? '8px' : 0;

export const InputStyles = {
  Wrapper: styled.View`
    border-radius: 2px;
    padding: ${verticalPadding} 40px ${verticalPadding} 8px;
    background-color: ${COLORS.white};
    border-color: ${COLORS.lightBorder};
    border-width: 1px;
  `,
  IconWrapper: styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 8px;
    justify-content: center;
  `,
  Input: styled.TextInput`
    width: 100%;
    font-size: ${FONT_SIZES.normal};
    padding-vertical: 0;
  `,
};
