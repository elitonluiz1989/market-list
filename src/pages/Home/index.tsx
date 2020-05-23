import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';

import IProduct from './interfaces/Product';
import commonStyles from '../../common/styles/common';
import styles from './styles';
import LogoImg from '../../../assets/icon.png';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  // Product's actions
  useEffect(() => {
    let total = products.reduce((amount: number, product: IProduct) => {
      return amount + product.total;
    }, 0);

    setTotal(total);
  }, [products]);

  const addProduct: Function = (): void => {
    let value = Number(price);
    if (value > 0) {
      const product: IProduct =
      {
        id: getNextProductId(),
        name: name,
        quantity: qtd,
        value: value,
        total: 0
      }

      if (product.name.trim() === '') {
        product.name = t('product.product') + product.id;
      }

      if (product.quantity === 0) {
        product.quantity = 1;
      }

      product.total = product.value * product.quantity;

      const productList: IProduct[] = [
        product,
        ...products
      ];

      setProducts(productList);

      setName('');
      setQtd(0);
      setPrice('');
    }
  }

  const removeProduct: Function = (id: number): void => {
    const productList: IProduct[] = products.filter((item: IProduct, index: number) => {
      return item.id != id;
    });

    setProducts(productList);
  }

  // Helpers
  const setNumberToTextInput: Function = (value: number, defaultValue: string = ''): string => {
    return value > 0 ? value.toString() : defaultValue;
  }

  const handleCurrency: Function = (amount: string): void => {
    let sanitizedAmount = amount.replace(/\.|,/g, '');

    if (Number(sanitizedAmount) > 0) {
      let newAmount = sanitizedAmount;
      let length = sanitizedAmount.length;

      if (length === 1) {
        newAmount = '0.0' + sanitizedAmount;
      } else if (length === 2) {
        newAmount = '0.' + sanitizedAmount
      } else if (length >= 3) {
        let breakPos: number = sanitizedAmount.length - 2;
        newAmount = sanitizedAmount.substr(0, breakPos) + '.' +
          sanitizedAmount.substr(breakPos, length);
      }
      setPrice(Number(newAmount).toFixed(2));
    } else {
      setPrice('');
    }
  }

  const formatCurrency: Function = (amount: number): string | void => {
    return amount.toFixed(2);
  }

  const getNextProductId: Function = (): number => {
    if (products.length === 0) {
      return 1;
    }

    let lastId = products.reduce((lastId: number, product: IProduct): number => {
      return product.id > lastId ? product.id : lastId;
    }, 1);

    return lastId + 1;
  }

  return (
    <View style={[commonStyles.page, commonStyles.container]}>
      <View style={commonStyles.header}>
        <Image style={commonStyles.headerLogo}
          source={LogoImg} />
        <Text style={commonStyles.headerTitle}>{t('app.title')}</Text>
      </View>

      <View style={[
        commonStyles.container,
        commonStyles.main
      ]}>
        <View style={[
          styles.totalBar,
          commonStyles.section
        ]}>
          <Text style={[
            styles.totalBarLabel,
            styles.totalBarText
          ]}>{t('total')}</Text>

          <Text style={[
            styles.totalBarValue,
            styles.totalBarText
          ]}>{formatCurrency(total)}</Text>
        </View>
        <View style={[
          styles.products,
          commonStyles.section
        ]}>
          <FlatList
            data={products}
            keyExtractor={product => product.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: product }) => (
              <View style={styles.product}>
                <View style={styles.prodcutFieldGroup}>
                  <Text style={[
                    styles.productField,
                    commonStyles.flexFill,
                    commonStyles.textCenter
                  ]}>{product.name}</Text>

                  <Text style={[
                    styles.productField,
                    styles.productFieldSeparator,
                    commonStyles.flexFill,
                    commonStyles.textCenter
                  ]}>{formatCurrency(product.total)}</Text>
                </View>

                <TouchableOpacity
                  style={[
                    styles.productBtn,
                    styles.productFieldBordered
                  ]}
                  onPress={() => removeProduct(product.id)}>
                  <FontAwesome5 name="minus" size={28} color="#444" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={[
          styles.productBtnBar,
          commonStyles.section
        ]}>
          <TextInput
            style={[
              styles.productInput,
              styles.productField,
              commonStyles.flexFill,
              styles.productFieldBordered
            ]}
            maxLength={60}
            placeholder={t('product.product')}
            textContentType="name"
            value={name}
            onChangeText={value => setName(value)} />

          <TextInput
            style={[
              styles.productQtd,
              styles.productInput,
              styles.productField,
              styles.productFieldBordered
            ]}
            keyboardType="number-pad"
            maxLength={3}
            placeholder="1"
            value={setNumberToTextInput(qtd)}
            onChangeText={value => setQtd(Number(value))} />

          <TextInput
            style={[
              styles.productValue,
              styles.productInput,
              styles.productField,
              styles.productFieldBordered,
              commonStyles.textRight
            ]}
            keyboardType="number-pad"
            placeholder="0.00"
            value={price}
            onChangeText={value => handleCurrency(value)} />

          <TouchableOpacity
            style={[
              styles.productBtn,
              styles.productFieldBordered
            ]}
            onPress={() => addProduct()}>
            <FontAwesome5 name="plus" size={28} color="#444" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
