import styled from 'styled-components/native';

import { MIXINS } from '@styles/constants';

export const CourseItemStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 0 5px;
  `,
  ImageWrapper: styled.View`
    height: 70px;
    width: 100px;
    margin-right: 15px;
    ${MIXINS.shadow}
  `,
  ImageContent: styled.View`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
};
