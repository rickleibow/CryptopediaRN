import { DateTime } from 'luxon';

import { TIME_INTERVALS } from './sub-header.constants';

import { ISnapshotData, TSnapshotStep } from '@typings/api';

export const normilizeSnapshot = (
  snapshot: ISnapshotData[],
  step: TSnapshotStep,
  accuracy: number
) => {
  const result = <ISnapshotData[]>[];

  snapshot.forEach((el) => {
    const date = new Date(el.time * 1000);
    switch (step) {
      case 'minute':
        if (date.getMinutes() % accuracy === 0) {
          result.push(el);
        }
        break;
      case 'hour':
        if (date.getHours() % accuracy === 0) {
          result.push(el);
        }
        break;
      case 'day':
        if (date.getDate() % accuracy === 0) {
          result.push(el);
        }
        break;
    }
  });

  return result;
};

export const getChartBasedTime = (step: string, date: Date) => {
  const luxonDT = DateTime.fromJSDate(date);

  const time = luxonDT.toFormat('hh:mma');
  const week = luxonDT.toFormat('hh:mm a LLL d');
  const year = luxonDT.toFormat('LLL d, yyyy');

  switch (step) {
    case TIME_INTERVALS.hours6:
    case TIME_INTERVALS.hours12:
    case TIME_INTERVALS.hours24:
      return time;
    case TIME_INTERVALS.week:
      return week;
    case TIME_INTERVALS.month:
    case TIME_INTERVALS.months3:
    case TIME_INTERVALS.year:
      return year;
    default:
      return time;
  }
};
