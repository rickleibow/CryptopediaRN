import { Courses } from '../courses';
import { Dictionary } from '../dictionary';
import { Resources } from '../resources';

import { IRouterRoute } from '@typings/router';

export const LEARN_ROUTES = <IRouterRoute[]>[
  { key: 'courses' },
  { key: 'dictionary' },
  { key: 'resources' },
];

export const LEARN_SCENE_MAP = {
  courses: Courses,
  dictionary: Dictionary,
  resources: Resources,
};
