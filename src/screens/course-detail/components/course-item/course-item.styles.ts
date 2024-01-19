import styled from 'styled-components/native';

import { COLORS, MIXINS } from '@styles/constants';

export const CourseItemStyles = {
  Wrapper: styled.View`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.lightBorder};
    flex-direction: row;
    align-items: center;
  `,
  ImageWrapper: styled.View`
    height: 60px;
    width: 80px;
    margin-right: 15px;
    ${MIXINS.shadow}
  `,
  ImageContent: styled.View`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${COLORS.white};
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
  IconWrapper: styled.View`
    width: 20px;
    height: 100%;
    margin-left: 5px;
    flex-direction: column-reverse;
  `,
};
