import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { COLORS, MIXINS } from '@styles/constants';

export const TitleCourseStyles = {
  Wrapper: styled.TouchableHighlight`
    width: 100%;
    height: ${Dimensions.get('window').width * 0.5}px;
    ${MIXINS.shadow}
    margin: 20px 0;
  `,
  Content: styled.View`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  `,
  Description: styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${COLORS.blackTint};
    padding: 5px;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
};
