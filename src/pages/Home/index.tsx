import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { t } from 'i18n-js';

import IProduct from './interfaces/Product';
import styles from './styles';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<number>(0);
  const [price, setPrice] = useState<string>('');

  const getNumericValues: Function = (value: number, defaultValue: string = ''): string => {
    return value > 0 ? value.toString() : defaultValue;
  }

  const addProduct: Function = (): void => {
    let value = Number(price);
    if (value > 0) {
      const product: IProduct =
      {
        id: products.length + 1,
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
      setQtd(0)
      setPrice('');
    }
  }

  const removeProduct: Function = (id: number): void => {
    const productList: IProduct[] = products.filter((item: IProduct, index: number) => {
      return item.id != id;
    });

    setProducts(productList);
  }

  const handleCurrency: Function = (amount: string): void => {
    let sanitizedAmount = amount.replace(/\.|,/g, '');
    console.log(sanitizedAmount, amount.replace(/\.|,/g, ''))

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
      console.log(newAmount);
      setPrice(Number(newAmount).toFixed(2).toString());
    } else {
      setPrice('')
    }
  }

  const formatCurrency: Function = (amount: number): string | void => {
    return amount.toString();
  }

  return (
    <View style={[styles.page, styles.container]}>
      <View style={styles.header}>
        <Text>{t('app.title')}</Text>
      </View>

      <View style={[
        styles.container,
        styles.main
      ]}>
        <FlatList
          style={[
            styles.products,
            styles.section
          ]}
          data={products}
          keyExtractor={product => product.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <View style={styles.product}>
              <View style={styles.prodcutFieldGroup}>
                <Text style={[
                  styles.productField,
                  styles.productFieldAutoSize,
                  styles.textCenter
                ]}>{product.name}</Text>

                <Text style={[
                  styles.productField,
                  styles.productFieldAutoSize,
                  styles.productFieldSeparator,
                  styles.textCenter
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

        <View style={styles.section}>
          <View style={styles.product}>
            <TextInput
              style={[
                styles.productInput,
                styles.productField,
                styles.productFieldAutoSize,
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
              value={getNumericValues(qtd)}
              onChangeText={value => setQtd(Number(value))} />

            <TextInput
              style={[
                styles.productValue,
                styles.productInput,
                styles.productField,
                styles.productFieldBordered,
                styles.textRight
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
    </View>
  );
}
