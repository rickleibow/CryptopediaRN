import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { CourseInfoStyles } from './course-info.styles';

interface ICourseInfoProps {
  title?: string;
  desc?: string;
}

export const CourseInfo: FC<ICourseInfoProps> = ({ title, desc }) => (
  <CourseInfoStyles.Wrapper>
    <CourseInfoStyles.Title fontSize="big" color={COLORS.black}>
      {title}
    </CourseInfoStyles.Title>
    <CourseInfoStyles.Desc color={COLORS.lightGray}>
      {desc}
    </CourseInfoStyles.Desc>
  </CourseInfoStyles.Wrapper>
);
