import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';

import { IAppButtonProps } from 'App/common/interfaces/AppInterfaces';

import * as Utils from 'App/common/helpers';

export default function AppButton(props: IAppButtonProps) {
  const { styles, action, icon, text, children } = props;
  let defaultChildren = null;

  if (!Utils.isNullOrUndefined(icon)) {
    defaultChildren = <FontAwesome5 name={icon?.name} size={icon?.size || 16} color={icon?.color || '#444'} />
  }

  if (!Utils.isNullOrUndefined(text)) {
    defaultChildren = <Text>{t(text || "")}</Text>
  }

  return (
    <TouchableOpacity
      style={styles}
      onPress={action}>
      {!Utils.isNullOrUndefined(children) ? children : defaultChildren}
    </TouchableOpacity>
  );
}