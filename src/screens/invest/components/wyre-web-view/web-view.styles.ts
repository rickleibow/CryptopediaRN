import { Dimensions, ViewStyle } from 'react-native';

const { height, width } = Dimensions.get('window');

export const WebViewStyles: ViewStyle = {
  height: height,
  width: width,
};

