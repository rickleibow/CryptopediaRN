import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button } from '@components/button';
import { Chart, TopPreview } from './components';

import { openBrowser, openLink } from '@services/utils';
import { useDefiState } from './defi.state';

import { LINKS } from '@constants/links';
import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { DefilStyles } from './defi.styles';

export const DeFi = () => {
  const { DEFI } = STRINGS;

  const { navigate } = useNavigation();

  const { pools, rates } = useDefiState();

  const handlePressWhatIsDefi = () => openLink(LINKS.whatIsDefi);
  const handlePressInvestInDefi = () => openBrowser(LINKS.investInDefi);

  const handlePressPools = () =>
    navigate(ROUTES.defiList, {
      title: DEFI.pools,
      list: pools,
      isWithoutImage: true,
    });

  const handlePressRates = () =>
    navigate(ROUTES.defiList, {
      title: DEFI.rates,
      list: rates,
    });

  return (
    <Theme.Screen color={COLORS.white}>
      <DefilStyles.Wrapper>
        <DefilStyles.Row>
          <DefilStyles.ButtonWrapper>
            <Button
              title={DEFI.what}
              color="primaryBlue"
              fontSize="title"
              onPress={handlePressWhatIsDefi}
              padding={10}
            />
          </DefilStyles.ButtonWrapper>
          <DefilStyles.ButtonWrapper>
            <Button
              title={DEFI.invest}
              color="primaryBlue"
              fontSize="title"
              onPress={handlePressInvestInDefi}
              padding={10}
            />
          </DefilStyles.ButtonWrapper>
        </DefilStyles.Row>
        <Chart />
        <TopPreview
          title={DEFI.topRates}
          lines={rates.slice(0, 4)}
          handlePress={handlePressRates}
        />
        <TopPreview
          title={DEFI.topPools}
          handlePress={handlePressPools}
          lines={pools.slice(0, 4)}
          isWithoutImage
        />
      </DefilStyles.Wrapper>
    </Theme.Screen>
  );
};
