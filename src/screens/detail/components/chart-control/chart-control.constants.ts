import { TIconTypes } from '@components/icon';

import {
  TChartTypes, TIME_INTERVALS
} from '../sub-header/sub-header.constants';

export const TIME_OPTIONS = [
  {
    title: '6H',
    interval: TIME_INTERVALS.hours6,
  },
  {
    title: '12H',
    interval: TIME_INTERVALS.hours12,
  },
  {
    title: '24H',
    interval: TIME_INTERVALS.hours24,
  },
  {
    title: '1W',
    interval: TIME_INTERVALS.week,
  },
  {
    title: '1M',
    interval: TIME_INTERVALS.month,
  },
  {
    title: '3M',
    interval: TIME_INTERVALS.months3,
  },
  {
    title: '1Y',
    interval: TIME_INTERVALS.year,
  },
];

interface ITypeOption {
  icon: TIconTypes;
  type: TChartTypes;
}

export const TYPE_OPTIONS = <ITypeOption[]>[
  {
    icon: 'lineChart',
    type: 'line',
  },
  {
    icon: 'barChart',
    type: 'bars',
  }
];
