import styled from 'styled-components/native';

import { COLORS, FONT_FAMILY, FONT_SIZES } from './constants';

interface ICenteredProp {
  isCentered?: boolean;
}
interface IColorProp {
  color?: string;
}
interface IFontProps {
  fontSize?: keyof typeof FONT_SIZES;
  fontWeight?: 'normal' | 'bold' | 'medium';
  lineHeight?: number;
}

export const Theme = {
  Screen: styled.View<ICenteredProp & IColorProp>`
    flex: 1;
    ${({ isCentered }) =>
      isCentered &&
      `
      justify-content: center;
      align-items: center;
      padding: 20px;
    `}
    ${({ color }) => `
      background-color: ${color}
    `}
  `,

  Text: styled.Text<ICenteredProp & IColorProp & IFontProps>`
    font-size: ${({ fontSize }) => FONT_SIZES[fontSize || 'normal']};
    color: ${({ color }) => color || COLORS.primaryGray};
    ${({ isCentered }) => isCentered && 'text-align: center'};
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`}
    font-family: ${({ fontWeight }) => {
      switch (fontWeight) {
        case 'normal':
          return FONT_FAMILY.normal;
        case 'medium':
          return FONT_FAMILY.medium;
        case 'bold':
          return FONT_FAMILY.bold;
        default:
          return FONT_FAMILY.normal;
      }
    }}
  `,
};
