import styled from 'styled-components/native';

interface IRoundedProp {
  isRounded?: boolean;
}
interface ISmallProp {
  isSmall?: boolean;
}
interface IPaddingProp {
  padding?: number;
}

export const ButtonStyles = {
  Wrapper: styled.View<IRoundedProp & ISmallProp & IPaddingProp>`
    ${({ isRounded }) =>
      isRounded ? 'border-radius: 15px' : 'border-radius: 5px'};
    ${({ isSmall, padding }) =>
      isSmall
        ? 'height: 20px; width: auto; padding: 0 5px;'
        : `height: ${30 + (padding || 0)}px; width: 100%;`}
    overflow: hidden;
  `,
  Touchable: styled.TouchableHighlight`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
};
