import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';

import { Header } from '@components/header';
import { Video } from '@components/video';
import { CourseInfo, CourseItem } from './components';

import { useCourseDetailState } from './course-detail.state';

import { ICourseDetailProps } from './course-detail.typings';

import { Theme } from '@styles/theme';
import { CourseDetailStyles } from './course-detail.styles';

export const CourseDetail: FC<ICourseDetailProps> = ({ route }) => {
  const { course, title } = route.params;

  const scroll = useRef<ScrollView>(null);

  const { courses, activeVideo, setActiveVideo } = useCourseDetailState(course);

  return (
    <Theme.Screen>
      <Header title={title} isBack background="white" color="black" />
      <Video url={activeVideo?.videourl || ''} />
      <CourseDetailStyles.Wrapper ref={scroll}>
        <CourseInfo
          title={activeVideo?.title}
          desc={activeVideo?.description}
        />
        {courses.map((video) => {
          const handlePress = () => {
            setActiveVideo(video);
            scroll.current?.scrollTo({ y: 0, animated: true });
          };

          return (
            <CourseItem
              desc={video.description}
              image={video.imageurl}
              title={video.title}
              key={video.title}
              isActive={activeVideo?.title === video.title}
              onPress={handlePress}
            />
          );
        })}
      </CourseDetailStyles.Wrapper>
    </Theme.Screen>
  );
};
