import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const SponsorButtonStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.solidGray};
    padding: 5px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Text: styled(Theme.Text)`
    font-size: 8.5px;
  `,
};
