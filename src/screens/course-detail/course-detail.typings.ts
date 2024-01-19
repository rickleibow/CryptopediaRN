import { RouteProp } from '@react-navigation/native';

type TParams = {
  courseDetail: {
    course: string;
    title: string;
  };
};
type TCourseDetailScreenRouteProp = RouteProp<TParams, 'courseDetail'>;

export interface ICourseDetailProps {
  route: TCourseDetailScreenRouteProp;
}
