import React, { FC } from 'react';

import { KEYS } from '@constants/keys';

import { VideoStyles } from './video.styles';

interface IVideo {
  url: string;
}

export const Video: FC<IVideo> = ({ url }) => (
  <VideoStyles.Video videoId={url} play apiKey={KEYS.googleApi} />
);
