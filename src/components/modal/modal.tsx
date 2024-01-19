import React, { useContext } from 'react';
import { Modal } from 'react-native';

import { Button } from './components';
import { ModalContext } from './modal-context';

import { openBrowser } from '@services/utils';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ModalStyles } from './modal.styles';

export const ModalWrapper = () => {
  const { isOpen, setOpen, modalInfo } = useContext(ModalContext);

  const { MODAL } = STRINGS;

  if (!modalInfo) {
    return null;
  }
  const handleMorePress = () => {
    if (setOpen) {
      setOpen(false);
    }

    openBrowser(modalInfo.readmoreurl);
  };
  const handleOtherPress = () => {
    if (setOpen) {
      setOpen(false);
    }
    openBrowser(modalInfo.othersponsorurl);
  };
  const handleCancelPress = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <Modal animationType="fade" visible={isOpen} transparent>
      <ModalStyles.Wrapper blurType="dark">
        <ModalStyles.Content>
          <ModalStyles.Message>
            <ModalStyles.Image
              source={{ uri: modalInfo.imageurl }}
              resizeMode="contain"
            />
            <Theme.Text
              color={COLORS.black}
              fontSize="title"
              fontWeight="medium"
              isCentered
            >
              {modalInfo.title}
            </Theme.Text>
            <Theme.Text color={COLORS.darkGray} fontSize="big" isCentered>
              {modalInfo.description}
            </Theme.Text>
          </ModalStyles.Message>
          <Button
            text={MODAL.readMore}
            color={COLORS.primaryBlue}
            onPress={handleMorePress}
          />
          <Button
            text={MODAL.other}
            color={COLORS.primaryBlue}
            onPress={handleOtherPress}
          />
          <Button text={MODAL.cancel} onPress={handleCancelPress} />
        </ModalStyles.Content>
      </ModalStyles.Wrapper>
    </Modal>
  );
};
