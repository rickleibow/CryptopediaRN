import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { Icon } from '@components/icon';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CourseItemStyles } from './course-item.styles';

interface ICourseItem {
  image: string;
  title: string;
  desc: string;
  onPress: () => void;
  isActive?: boolean;
}

export const CourseItem: FC<ICourseItem> = ({
  image,
  onPress,
  title,
  desc,
  isActive,
}) => (
  <TouchableHighlight underlayColor={COLORS.transparent} onPress={onPress}>
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
      <CourseItemStyles.IconWrapper>
        {isActive && <Icon type="videoBars" size={20} color="lightBlue" />}
      </CourseItemStyles.IconWrapper>
    </CourseItemStyles.Wrapper>
  </TouchableHighlight>
);
