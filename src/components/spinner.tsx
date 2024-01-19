import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';

import { ANIMATIONS } from '@constants/images';

export const Spinner = () => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    animation.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      ref={animation}
      source={ANIMATIONS.loader}
    />
  );
};
