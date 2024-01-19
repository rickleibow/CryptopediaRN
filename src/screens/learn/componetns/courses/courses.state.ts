import { trackPromise } from 'react-promise-tracker';

import { getCourses } from '@services/api';
import { usePromise } from '@services/hooks';

export const useCoursesState = () => {
  const [courses] = usePromise(async () => await trackPromise(getCourses()));

  return { courses: courses || [] };
};
