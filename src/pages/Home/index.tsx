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

  const getNumericValues: Function = (value: number): string => {
    return value > 0 ? value.toString() : '';
  }

  const addProduct: Function = () => {
    console.log(name, qtd, value)
    if (name.trim() !== '' && qtd > 0 && value > 0) {

      const productList: IProduct[] = [
        {
          id: products.length,
          name: name,
          quantity: qtd,
          value: value
        },
        ...products
      ];

      setProducts(productList);

      setName('');
      setQtd(0)
      setValue(0);
    }
  }

  return (
    <View style={[styles.page, styles.container]}>
      <View style={styles.header}>
        <Text>{t('app.title')}</Text>
      </View>

      <View style={[styles.container, { backgroundColor: 'white', marginBottom: 20, padding: 10, borderRadius: 10 }]}>
        <FlatList
          style={styles.products}
          data={products}
          keyExtractor={product => product.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <View style={styles.product}>
              <Text style={[
                styles.productField
              ]}>{product.name}</Text>
              <Text style={[
                styles.productField
              ]}>{product.quantity}</Text>
              <Text style={[
                styles.productField
              ]}>{product.value}</Text>
              <Text style={[
                styles.productField
              ]}>{product.quantity * product.value}</Text>

              <TouchableOpacity
                style={styles.productBtn}
                onPress={() => '#'}>
                <FontAwesome5 name="minus" size={28} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.product}>
          <TextInput
            style={[
              styles.productName,
              styles.productField,
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
              styles.productField,
              styles.productFieldBordered
            ]}
            keyboardType="number-pad"
            maxLength={3}
            placeholder="qtd."
            value={getNumericValues(qtd)}
            onChangeText={qtd => setQtd(Number(qtd))} />

          <TextInput
            style={[
              styles.productValue,
              styles.productField,
              styles.productFieldBordered
            ]}
            keyboardType="number-pad"
            maxLength={3}
            placeholder={t('product.value')}
            value={getNumericValues(value)}
            onChangeText={value => setValue(Number(value))} />

          <TouchableOpacity
            style={styles.productBtn}
            onPress={() => addProduct()}>
            <FontAwesome5 name="plus" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
