import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';

import IProduct from 'App/common/interfaces/IProduct';
import commonStyles from 'App/common/styles/common';
import HeaderApp from 'App/components/HeaderApp';

import productStyles from 'App/common/styles/product';
import styles from './styles';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  const navidator = useNavigation();

  const goToDetail: Function = (productId: number): void => navidator.navigate('Product', { productId });

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
      <HeaderApp />

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
              <TouchableWithoutFeedback style={[
                styles.product,
                productStyles.productFieldBordered,
                styles.productBordered
              ]}
                onLongPress={() => goToDetail(product.id)} >
                <View style={productStyles.productFieldGroup}>
                  <Text style={[
                    productStyles.productField,
                    commonStyles.flexFill,
                    commonStyles.textCenter
                  ]}>{product.name}</Text>

                  <Text style={[
                    productStyles.productField,
                    styles.productFieldSeparator,
                    commonStyles.flexFill,
                    commonStyles.textCenter
                  ]}>{formatCurrency(product.total)}</Text>
                </View>

                <TouchableOpacity
                  style={[
                    styles.productBtn,
                    productStyles.productFieldBordered,
                    styles.productBordered
                  ]}
                  onPress={() => removeProduct(product.id)}>
                  <FontAwesome5 name="minus" size={28} color="#444" />
                </TouchableOpacity>
              </TouchableWithoutFeedback>
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
              productStyles.productField,
              commonStyles.flexFill,
              productStyles.productFieldBordered,
              productStyles.productFieldBorderedDefault
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
              productStyles.productField,
              productStyles.productFieldBordered,
              productStyles.productFieldBorderedDefault
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
              productStyles.productField,
              productStyles.productFieldBordered,
              productStyles.productFieldBorderedDefault,
              commonStyles.textRight
            ]}
            keyboardType="number-pad"
            placeholder="0.00"
            value={price}
            onChangeText={value => handleCurrency(value)} />

          <TouchableOpacity
            style={[
              styles.productBtn,
              productStyles.productFieldBordered,
              productStyles.productFieldBorderedDefault
            ]}
            onPress={() => addProduct()}>
            <FontAwesome5 name="plus" size={28} color="#444" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
