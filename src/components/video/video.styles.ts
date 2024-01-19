import { Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import styled from 'styled-components';

const videoProportion = 16 / 9;

export const VideoStyles = {
  Video: styled(YouTube)`
    align-self: stretch;
    height: ${Dimensions.get('window').width / videoProportion}px;
  `,
};
