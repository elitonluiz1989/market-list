import React, { useState, useEffect } from 'react';
import { Modal, View, Text } from 'react-native';
import { t } from 'i18n-js';

import { IAppModalProps } from 'App/common/interfaces/AppInterfaces';

import styles from 'App/common/styles/common';

import AppButton from 'App/components/AppButton';

export default function AppModal(props: IAppModalProps) {
  const { 
    animation, 
    transparent, 
    visible, 
    title, 
    children, 
    actions 
  } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

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
      <View style={[styles.modal, styles.flexFill]}>
        <View style={styles.modalBox}>
          <View style={[styles.modalHeader, styles.modalBlock]}>
            <Text style={styles.modalHeaderText}>{t(title)}</Text>
          </View>

          <View
            style={[
              styles.modalContent,
              styles.modalBlock,
              styles.flexSpaceAround
            ]}>
            {children}
          </View>

          <View
            style={[
              styles.modalFooter,
              styles.modalBlock,
              styles.flexRow,
              styles.flexSpaceAround
            ]}>
            <AppButton
              styles={[styles.btnDefault]}
              action={onCloseModal}
              text={actions?.close?.title || "cancel"} />

            <AppButton
              styles={[styles.btnDefault]}
              action={actions?.submit?.action}
              text={actions?.submit?.title} />
          </View>
        </View>
      </View>
    </Modal>
  );
}