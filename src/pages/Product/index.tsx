import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';
import { useNavigation } from "@react-navigation/native";

import Currency from 'App/common/helpers/Currency';
import * as Utils from 'App/common/helpers';

import HeaderApp from 'App/components/HeaderApp';

import IProduct from 'App/common/interfaces/IProduct';

import commonStyles from 'App/common/styles/common';
import styles from './styles';

export default function App() {
  const [product, setProduct] = useState<IProduct>({
    id: 1,
    name: 'Product 001',
    quantity: 1,
    value: 1,
    total: 1
  });
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  const handleCurrency = (value: string): void => {
    let currency = Currency.input(value);

    setPrice(currency);
  }

  let navigator = useNavigation()
  const navigateTo: Function = (route: string, params: any): void => {
    navigator.navigate(route, { params });
  };

  const goBack: Function = (product: IProduct): void => navigateTo('Products');

  const save: Function = (): void => console.log("sss");

  // Product's actions
  useEffect(() => {
    let product: IProduct = {
      id: 1,
      name: 'Product 001',
      quantity: 999,
      value: 1530.90,
      total: 1530.85
    }

    setName(product.name);
    setQtd(product.value);
    setPrice(product.value.toString());

    setProduct(product);
  }, []);

  return (
    <View style={[commonStyles.page, commonStyles.container]}>
      <HeaderApp />

      <View style={[
        commonStyles.container,
        commonStyles.main
      ]}>
        <View style={styles.titleBar}>
          <Text style={styles.titleBarText}>{t('product_detail')}</Text>
        </View>

        <View style={styles.productContent}>
          <View style={[
            styles.productRow,
            commonStyles.flexRow
          ]}>
            <Text style={styles.productLabel}>{t('name')}</Text>

            <TextInput style={[
              styles.productName,
              styles.productField,
              commonStyles.textBordered
            ]}
              maxLength={60}
              placeholder={t('product.product')}
              textContentType="name"
              value={name}
              onChangeText={value => setName(value)} />
          </View>

          <View style={[
            styles.productRow,
            commonStyles.flexRow
          ]}>
            <Text style={styles.productLabel}>{t('quantity')}</Text>

            <TextInput style={[
              styles.productQtd,
              styles.productField,
              commonStyles.textBordered
            ]}
              keyboardType="number-pad"
              maxLength={3}
              placeholder="1"
              value={Utils.numericInputValue(qtd)}
              onChangeText={value => setQtd(Number(value))} />
          </View>

          <View style={[
            styles.productRow,
            commonStyles.flexRow
          ]}>
            <Text style={styles.productLabel}>{t('price')}</Text>

            <TextInput style={[
              styles.productPrice,
              styles.productField,
              commonStyles.textBordered
            ]}
              keyboardType="number-pad"
              placeholder="0.00"
              value={price}
              onChangeText={value => handleCurrency(value)} />
          </View>

          <View style={[
            styles.productTotalWrap,
            styles.productRow,
            commonStyles.flexRow
          ]}>
            <Text style={[
              styles.productLabel,
              commonStyles.textWhite
            ]}>{t('total')}</Text>

            <Text style={[
              styles.productTotal,
              styles.productField,
              commonStyles.textBordered
            ]}>{Currency.format(total)}</Text>
          </View>
        </View>

        <View style={styles.productBtnBar}>
          <TouchableOpacity style={[
            styles.productBtn,
            commonStyles.viewBordered
          ]}
            onPress={() => goBack()}>
            <Text style={styles.productBtnText}>{t('back')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.productBtn,
            styles.productBtnSave,
            commonStyles.viewBordered
          ]}
            onPress={() => save()}>
            <Text style={[
              styles.productBtnText,
              commonStyles.textWhite
            ]}>{t('save')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
