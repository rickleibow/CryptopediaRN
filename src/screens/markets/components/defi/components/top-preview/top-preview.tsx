import React, { FC } from 'react';

import { Coin } from '../coin';

import { getCoinList } from '@services/api';
import { usePromise } from '@services/hooks';
import { getImageFromArray } from '@services/utils';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { TopPreviewStyles } from './top-preview.styles';

interface ITopPreviewProps {
  title: string;
  handlePress: () => void;
  lines: {
    title: string;
    percent: number;
    symbols: string[];
  }[];
  isWithoutImage?: boolean;
}

export const TopPreview: FC<ITopPreviewProps> = ({
  title,
  handlePress,
  lines,
  isWithoutImage,
}) => {
  const [imagedLines] = usePromise(async () => {
    const coinList = await getCoinList();

    return lines.map(({ symbols, title: lineTitle, percent }) => ({
      image: getImageFromArray(symbols, coinList),
      title: lineTitle,
      relative: percent - 100,
      percent,
    }));
  }, [lines]);

  return (
    <TopPreviewStyles.Wrapper>
      <TopPreviewStyles.Row>
        <Theme.Text color={COLORS.black} fontSize="title">
          {title}
        </Theme.Text>
        <TopPreviewStyles.SeeAll
          underlayColor={COLORS.transparent}
          onPress={handlePress}
        >
          <Theme.Text color={COLORS.black}>{STRINGS.DEFI.seeAll}</Theme.Text>
        </TopPreviewStyles.SeeAll>
      </TopPreviewStyles.Row>
      {imagedLines?.map(({ title: lineTitle, relative, percent, image }, index) => (
        <Coin
          image={image}
          title={lineTitle}
          percent={percent > 0 ? relative.toFixed(2) : '-'}
          key={`${title}-${index}`}
          isWithoutImage={isWithoutImage}
        />
      ))}
    </TopPreviewStyles.Wrapper>
  );
};
