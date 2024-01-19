import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { ROUTES } from '@constants/routes';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CourseItemStyles } from './course-item.styles';

interface ICourseItemProps {
  image: string;
  title: string;
  desc: string;
  course: string;
}

export const CourseItem: FC<ICourseItemProps> = ({
  image,
  title,
  desc,
  course,
}) => {
  const { navigate } = useNavigation();
  const handlePress = () => navigate(ROUTES.courseDetail, { course, title });

  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor={COLORS.transparent}
    >
      <CourseItemStyles.Wrapper>
        <CourseItemStyles.ImageWrapper>
          <CourseItemStyles.ImageContent>
            <CourseItemStyles.Image
              source={{
                uri: image,
              }}
            />
          </CourseItemStyles.ImageContent>
        </CourseItemStyles.ImageWrapper>
        <Theme.Screen>
          <Theme.Text
            color={COLORS.black}
            fontSize="big"
            fontWeight="medium"
            numberOfLines={1}
          >
            {title}
          </Theme.Text>
          <Theme.Text fontSize="big" numberOfLines={2}>
            {desc}
          </Theme.Text>
        </Theme.Screen>
      </CourseItemStyles.Wrapper>
    </TouchableHighlight>
  );
};
