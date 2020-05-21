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
  const [value, setValue] = useState<number>(0);

  const getNumericValues: Function = (value: number, defaultValue: string = ''): string => {
    return value > 0 ? value.toString() : defaultValue;
  }

  const addProduct: Function = (): void => {
    if (value > 0) {
      const product: IProduct =
      {
        id: products.length + 1,
        name: name,
        quantity: qtd,
        value: value
      }

      if (product.name.trim() === '') {
        product.name = t('product.product') + product.id;
      }

      if (product.quantity === 0) {
        product.quantity = 1;
      }

      const productList: IProduct[] = [
        product,
        ...products
      ];

      setProducts(productList);

      setName('');
      setQtd(0)
      setValue(0);
    }
  }

  const removeProduct: Function = (id: number): void => {
    const productList: IProduct[] = products.filter((item: IProduct, index: number) => {
      return item.id != id;
    });

    setProducts(productList);
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
                ]}>{product.id}</Text>

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
                ]}>{product.quantity * product.value}</Text>
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
              onChangeText={name => setName(name)} />

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
              onChangeText={qtd => setQtd(Number(qtd))} />

            <TextInput
              style={[
                styles.productValue,
                styles.productInput,
                styles.productField,
                styles.productFieldBordered
              ]}
              keyboardType="number-pad"
              maxLength={3}
              placeholder="0.00"
              value={getNumericValues(value)}
              onChangeText={value => setValue(Number(value))} />

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
