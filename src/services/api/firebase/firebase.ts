import database from '@react-native-firebase/database';

import {
  ICoinSnapshotData, ICourseData, IDictinaryItem, IResource, ISnapshotElement,
  ISponsors, IVideo
} from './firebase.typings';

export const getCoinSnapshotBySymbol = async (
  symbol: string
): Promise<ICoinSnapshotData | null> => {
  const snapshot = await database()
    .ref(`/coinsnapshot/${symbol.toLowerCase()}`)
    .once('value');

  return snapshot.val();
};

export const getCourses = async (): Promise<ICourseData[]> => {
  const snapshot = await database().ref('/courses').once('value');

  const couses = <ICourseData[]>[];

  snapshot.forEach((el: ISnapshotElement<ICourseData>) =>
    couses.push({ ...el.val(), key: el.key })
  );

  return couses;
};

export const getCourseVideos = async (course: string): Promise<IVideo[]> => {
  const snapshot = await database()
    .ref(`/courses/${course}/videos`)
    .once('value');

  const videos = <IVideo[]>[];

  snapshot.forEach((el: ISnapshotElement<IVideo>) => {
    videos.push(el.val());
  });

  return videos;
};

export const getDictionary = async (): Promise<IDictinaryItem[]> => {
  const snapshot = await database().ref('/dictionary').once('value');

  const dictionary = <IDictinaryItem[]>[];

  snapshot.forEach((el: ISnapshotElement<IDictinaryItem>) => {
    dictionary.push(el.val());
  });

  return dictionary;
};

export const getResources = async (): Promise<IResource[]> => {
  const snapshot = await database().ref('/resources').once('value');

  const resources = <IResource[]>[];

  snapshot.forEach((el: ISnapshotElement<IResource>) => {
    resources.push(el.val());
  });

  return resources;
};

export const getSponsors = async (): Promise<ISponsors> => {
  const snapshot = await database().ref('/monthlysponsors').once('value');

  return snapshot.val();
};
