import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { Networks } from '../networks';
import { InfoRow, LinkRow } from './components';

import { openBrowser } from '@services/utils';
import { useAboutState } from './about.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { AboutStyles } from './about.styles';

interface IAboutProps {
  symbol: string;
}

export const About: FC<IAboutProps> = ({ symbol }) => {
  const { coinInfo } = useAboutState(symbol);

  const handleWhitepaperPress = () => {
    if (coinInfo?.paperUrl) {
      openBrowser(coinInfo.paperUrl);
    }
  };

  const { DETAIL } = STRINGS;

  if (!coinInfo) {
    return null;
  }

  return (
    <>
      <AboutStyles.Wrapper>
        <AboutStyles.Title fontSize="bigTitle" color={COLORS.black}>
          {DETAIL.about}
        </AboutStyles.Title>
        {coinInfo.about && (
          <AboutStyles.About color={COLORS.black}>
            {coinInfo.about}
          </AboutStyles.About>
        )}
        {coinInfo.paperUrl && (
          <TouchableHighlight
            underlayColor={COLORS.transparent}
            onPress={handleWhitepaperPress}
          >
            <AboutStyles.Whitepaper fontSize="title" color={COLORS.primaryBlue}>
              {DETAIL.whitepaper}
            </AboutStyles.Whitepaper>
          </TouchableHighlight>
        )}
        {coinInfo.creator && <InfoRow title={DETAIL.creator} text={coinInfo.creator} />}
        {coinInfo.website && (
          <LinkRow
            title={DETAIL.website}
            text={coinInfo.website.displayText}
            link={coinInfo.website.url}
          />
        )}
        {coinInfo.consensus_method && (
          <InfoRow title={DETAIL.consensus} text={coinInfo.consensus_method} />
        )}
        {coinInfo.hashing_algorithm && (
          <InfoRow title={DETAIL.hash} text={coinInfo.hashing_algorithm} />
        )}
        {coinInfo.explorer && (
          <LinkRow
            title={DETAIL.explorer}
            text={coinInfo.explorer.displayText}
            link={coinInfo.explorer.url}
          />
        )}
        {coinInfo.more_info && (
          <LinkRow
            title={DETAIL.more_info}
            text={coinInfo.more_info.displayText}
            link={coinInfo.more_info.url}
          />
        )}
      </AboutStyles.Wrapper>
      {coinInfo.networks && (
        <Networks
          twitter={coinInfo.networks.twitter}
          reddit={coinInfo.networks.reddit}
          facebook={coinInfo.networks.facebook}
        />
      )}
    </>
  );
};
