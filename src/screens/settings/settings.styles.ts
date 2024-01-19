import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

interface IBorderProp {
  isBorder?: boolean;
}

export const SettingsStyles = {
  Wrapper: styled.ScrollView`
    padding: 5px 0;
  `,
  TitleWrapper: styled.View`
    border-bottom-width: 1px;
    border-color: ${COLORS.lightBorder};
  `,
  Title: styled(Theme.Text)`
    padding: 15px 15px 5px;
  `,
  Touchable: styled.TouchableHighlight<IBorderProp>`
    width: 100%;
    padding: 0 10px;
    height: 50px;
    justify-content: center;
    ${({ isBorder }) => isBorder && 'border-bottom-width: 1px;'}
    border-color: ${COLORS.lightBorder};
  `,
  Row: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Separator: styled.View`
    height: 1px;
    width: 95%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${COLORS.lightBorder};
  `,
};
