import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getCourseVideos } from '@services/api';
import { IVideo } from '@services/api/firebase/firebase.typings';
import { usePromise } from '@services/hooks';

export const useCourseDetailState = (course: string) => {
  const [activeVideo, setActiveVideo] = useState<IVideo | undefined>(undefined);

  const [courses] = usePromise(async () => {
    const result = await trackPromise(getCourseVideos(course));

    setActiveVideo(result[0]);
    return result;
  });

  return { courses: courses || [], activeVideo, setActiveVideo };
};
