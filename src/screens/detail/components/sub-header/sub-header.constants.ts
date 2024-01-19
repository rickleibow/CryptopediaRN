import { TSnapshotStep } from '@typings/api';

export const TIME_INTERVALS = {
  hours6: 'Past 6 hours',
  hours12: 'Past 12 hours',
  hours24: 'Past 24 hours',
  week: 'Past Week',
  month: 'Past Month',
  months3: 'Past 3 Months',
  year: 'Past Year',
};

export type TChartTypes = 'line' | 'bars';

interface IChartOptions {
  [key: string]: {
    step: TSnapshotStep;
    accuracy: number;
    count: number;
  };
}

export const CHART_OPTIONS = <IChartOptions>{
  [TIME_INTERVALS.hours6]: {
    step: 'minute',
    accuracy: 5,
    count: 360,
  },
  [TIME_INTERVALS.hours12]: {
    step: 'minute',
    accuracy: 10,
    count: 720,
  },
  [TIME_INTERVALS.hours24]: {
    step: 'minute',
    accuracy: 30,
    count: 1440,
  },
  [TIME_INTERVALS.week]: {
    step: 'hour',
    accuracy: 3,
    count: 24 * 7,
  },
  [TIME_INTERVALS.month]: {
    step: 'day',
    accuracy: 1,
    count: 30,
  },
  [TIME_INTERVALS.months3]: {
    step: 'day',
    accuracy: 1,
    count: 90,
  },
  [TIME_INTERVALS.year]: {
    step: 'day',
    accuracy: 7,
    count: 365,
  },
};

export const DEFAULT_SNAPSHOT_DATA = {
  high: 0,
  time: 0,
};
