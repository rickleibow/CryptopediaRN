import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const NetworksStyles = {
  Wrapper: styled.View`
    padding: 20px 10px;
    background-color: ${COLORS.white};
    margin-bottom: 5px;
  `,
  Row: styled.View`
    flex-direction: row;
    margin-top: 10px;
  `,
  Touchable: styled.TouchableHighlight`
    margin-right: 10px;
  `,
  IconWrapper: styled.View`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    overflow: hidden;
  `,
  Icon: styled.Image`
    height: 100%;
    width: 100%;
  `,
};
