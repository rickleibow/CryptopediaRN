import React, { FC } from 'react';
import { KeyboardTypeOptions } from 'react-native';

import { Input } from '@components/input';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { TransactionStyles } from '../transaction.styles';

interface IRowProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  keyboardType: KeyboardTypeOptions;
}

export const Row: FC<IRowProps> = ({
  title,
  value,
  onChange,
  keyboardType,
}) => (
  <TransactionStyles.Row>
    <Theme.Screen>
      <Theme.Text color={COLORS.black} fontSize="big">
        {title}
      </Theme.Text>
    </Theme.Screen>
    <TransactionStyles.Value>
      <Input value={value} setValue={onChange} keyboardType={keyboardType} />
    </TransactionStyles.Value>
  </TransactionStyles.Row>
);
