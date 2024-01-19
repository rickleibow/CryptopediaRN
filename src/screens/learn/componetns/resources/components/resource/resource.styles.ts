import styled from 'styled-components/native';

export const ResourceStyles = {
  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  ImageWrapper: styled.View`
    height: 30px;
    width: 40px;
    margin-right: 5px;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
  Wrapper: styled.TouchableHighlight`
    padding: 10px;
  `,
};
