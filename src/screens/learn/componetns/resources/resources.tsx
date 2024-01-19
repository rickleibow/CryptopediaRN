import React from 'react';
import { SectionList, SectionListData } from 'react-native';

import { Resource, SectionHeader } from './components';

import { IResourceLink } from '@services/api/firebase/firebase.typings';
import { useResourcesState } from './resources.state';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ResourcesStyles } from './resources.styles';

interface IRenderItemProps {
  item: IResourceLink;
}
interface IRenderSectionHeaderProps {
  section: SectionListData<IResourceLink>;
}

export const Resources = () => {
  const { resources } = useResourcesState();

  const renderItem = ({ item }: IRenderItemProps) => <Resource {...item} />;

  const renderSectionHeader = ({ section }: IRenderSectionHeaderProps) => (
    <SectionHeader title={section.title} />
  );

  const renderSeparator = () => (
    <ResourcesStyles.SeparatorWrapper>
      <ResourcesStyles.Separator />
    </ResourcesStyles.SeparatorWrapper>
  );

  return (
    <Theme.Screen color={COLORS.white}>
      <SectionList
        sections={resources.map(({ title, links }) => ({
          title,
          data: Object.values(links),
        }))}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </Theme.Screen>
  );
};
