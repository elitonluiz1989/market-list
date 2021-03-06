import React from 'react';
import { Text, View, Image } from 'react-native';
import { t } from 'i18n-js';

import commonStyles from 'App/common/styles/common';
import LogoImg from 'Assets/icon.png';

export default function AppHeader() {

  return (
    <View style={commonStyles.header}>
      <Image style={commonStyles.headerLogo}
        source={LogoImg} />
      <Text style={commonStyles.headerTitle}>{t('app.title')}</Text>
    </View>
  );
}