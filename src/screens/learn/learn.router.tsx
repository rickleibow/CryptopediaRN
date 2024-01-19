import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { CourseDetail } from '@screens/course-detail';
import { DictionaryDetail } from '@screens/dictionary-detail';
import { Learn } from './learn';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export const LearnScreenRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.learn} component={Learn}/>
    <Stack.Screen name={ROUTES.courseDetail} component={CourseDetail}/>
    <Stack.Screen name={ROUTES.dictionaryDetail} component={DictionaryDetail} />
  </Stack.Navigator>
);
