import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';

import { IAppButtonProps } from 'App/common/interfaces/AppInterfaces';

import * as Utils from 'App/common/helpers';

export default function AppButton(props: IAppButtonProps) {
  const { styles, action, icon, text, children, disabled, onLayout } = props;
  let defaultChildren = null;
  let isDisabled = disabled || false;

  if (!Utils.isNullOrUndefined(icon)) {
    let style: any;

    switch (icon?.style) {
      case 'light':
        style = { light: true };
        break;

      case 'solid':
        style = { solid: true };
        break;

      case 'brand':
        style = { brand: true };
        break;

      default:
        style = { regular: true };
        break;
    };

    let attributes = {
      ...style,
      name: icon?.name,
      size: icon?.size || 16,
      color: icon?.color || '#444'
    };

    defaultChildren = <FontAwesome5  {...attributes} />
  }

  if (!Utils.isNullOrUndefined(text)) {
    defaultChildren = <Text>{t(text || "")}</Text>
  }

  return (
    <TouchableOpacity
      style={styles}
      disabled={isDisabled}
      onPress={action}
      onLayout={onLayout}>
      {!Utils.isNullOrUndefined(children) ? children : defaultChildren}
    </TouchableOpacity>
  );
}