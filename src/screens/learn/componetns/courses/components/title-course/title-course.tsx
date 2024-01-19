import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { TitleCourseStyles } from './title-course.styles';

interface ITitleCourseProps {
  image: string;
  course: string;
  title: string;
}

export const TitleCourse: FC<ITitleCourseProps> = ({ image, course, title }) => {
  const { navigate } = useNavigation();

  const handlePress = () => navigate(ROUTES.courseDetail, { course, title });

  return (
    <TitleCourseStyles.Wrapper
      underlayColor={COLORS.transparent}
      onPress={handlePress}
    >
      <TitleCourseStyles.Content>
        <TitleCourseStyles.Image
          resizeMode="stretch"
          source={{
            uri: image,
          }}
        />
        <TitleCourseStyles.Description>
          <Theme.Text isCentered color={COLORS.white}>
            {STRINGS.LEARN.titleEducation}
          </Theme.Text>
        </TitleCourseStyles.Description>
      </TitleCourseStyles.Content>
    </TitleCourseStyles.Wrapper>
  );
};
