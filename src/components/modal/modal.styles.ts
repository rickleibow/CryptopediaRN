import { BlurView } from '@react-native-community/blur';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { PLATFORM } from '@constants/platform';
import { COLORS } from '@styles/constants';

export const ModalStyles = {
  Wrapper: styled(PLATFORM.isIOS ? BlurView : View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    ${!PLATFORM.isIOS && `background-color: ${COLORS.blackTint}`}
  `,
  Content: styled.View`
    background-color: ${COLORS.white};
    width: 80%;
    padding-top: 10px;
    border-radius: 5px;
  `,
  Message: styled.View`
    padding: 10px;
  `,
  Image: styled.Image`
    height: 250px;
  `,
};
