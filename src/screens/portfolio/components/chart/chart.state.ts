import { useEffect, useState } from 'react';

import { getColorList } from './chart.utils';

export const useChartState = (length: number) => {
  const [active, setActive] = useState(-1);
  const [colors, setColors] = useState(getColorList(length));

  useEffect(() => {
    setColors(getColorList(length));
  }, [length]);

  return { active, setActive, colors };
};
