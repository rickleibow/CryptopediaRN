import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const NewPreviewStyles = {
  Wrapper: styled.View`
    padding: 10px;
    flex-direction: row;
  `,
  Description: styled(Theme.Text)`
    padding: 10px 0;
  `,
  ImageWrapper: styled.View`
    height: 80px;
    width: 80px;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 10px;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  Border: styled.View`
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${COLORS.lightBorder};
  `,
};
