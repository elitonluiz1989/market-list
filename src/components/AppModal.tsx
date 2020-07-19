import React, { useState, useEffect } from 'react';
import { Modal, View, Text } from 'react-native';
import { t } from 'i18n-js';

import { IAppModalProps, IAppModalStyles } from 'App/common/interfaces/AppInterfaces';

import * as Utils from 'App/common/helpers';

import commonStyles from 'App/common/styles/common';

import AppButton from 'App/components/AppButton';

export default function AppModal(props: IAppModalProps) {
  const {
    animation,
    transparent,
    visible,
    title,
    children,
    actions,
    styles
  } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  let modalStyles: IAppModalStyles = {
    modal: [
      commonStyles.modal,
      commonStyles.flexFill
    ],
    modalBox: [
      commonStyles.modalBox,
      commonStyles.modalBoxDefault
    ],
    modalHeader: [
      commonStyles.modalHeader,
      commonStyles.modalBlock
    ]
  }

  if (styles) {
    modalStyles = {
      ...modalStyles,
      ...styles
    };    
  }

  const onCloseModal = (): void => {
    setShowModal(false);

    actions?.close?.action(false);
  };

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  return (
    <Modal
      animationType={animation || 'slide'}
      transparent={transparent || true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <View style={modalStyles.modal}>
        <View style={modalStyles.modalBox}>
          {!Utils.isNullOrEmpty(title) &&
            <View style={modalStyles.modalHeader}>
              <Text style={commonStyles.modalHeaderText}>{t(title)}</Text>
            </View>}

          <View
            style={[
              commonStyles.modalContent,
              commonStyles.modalBlock,
              commonStyles.flexSpaceAround
            ]}>
            {children}
          </View>

          {!Utils.isNullOrUndefined(actions) &&
            <View
              style={[
                commonStyles.modalFooter,
                commonStyles.modalBlock,
                commonStyles.flexRow,
                commonStyles.flexSpaceAround
              ]}>
              <AppButton
                styles={[commonStyles.btnDefault]}
                action={onCloseModal}
                text={actions?.close?.title || "cancel"} />

              <AppButton
                styles={[commonStyles.btnDefault, commonStyles.btnSuccess]}
                action={actions?.submit?.action}>
                <Text style={commonStyles.textWhite}>{t(actions?.submit?.title || '')}</Text>
              </AppButton>
            </View>}
        </View>
      </View>
    </Modal>
  );
}