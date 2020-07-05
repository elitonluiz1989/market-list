import React, { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Modal, Alert, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { t } from 'i18n-js';

import AppGlobalContext from 'App/contexts/AppGlobalContext';

import IAppGlobalContext from 'App/common/interfaces/IAppGlobalContext';
import ISavedList from 'App/common/interfaces/ISavedList';
import IProduct from 'App/common/interfaces/IProduct';

import * as Utils from 'App/common/helpers';
import Currency from 'App/common/helpers/Currency';
import Storage from 'App/common/helpers/Storage';

import AppButton from 'App/components/AppButton';
import AppHeader from 'App/components/AppHeader';

import commonStyles from 'App/common/styles/common';
import productStyles from 'App/common/styles/product';
import styles from './styles';
import AppModal from 'App/components/AppModal';

export default function App() {
  const { products, setProducts } = useContext<IAppGlobalContext | undefined>(AppGlobalContext);
  const [savedLists, setSavedLists] = useState<ISavedList[]>([]);
  const [selectedList, setSelectedList] = useState<number>(0);
  const [savingListName, setSavingListName] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  const navidator = useNavigation();

  const goToDetail: Function = (productId: number): void => navidator.navigate('Product', { productId });

  // Saved lists
  useEffect(() => {
    const loadSavedLists = async () => {
      const data = await Storage.getJson('saved_lists');
      const savedLists = Utils.castList<ISavedList>(data);

      setSavedLists(savedLists);
    };

    loadSavedLists();
  }, []);

  const getSelectedList = (): ISavedList | undefined => savedLists.find(l => l.id === selectedList);

  const loadList = (): void => {
    if (selectedList > 0) {
      const savedList = getSelectedList();

      setProducts(savedList?.items);
    }
  };

  const showSaveListModal = (): void => {
    if (products.length > 0) {
      if (selectedList > 0) {
        const selectedListContent = getSelectedList();

        setSavingListName(selectedListContent?.name || '');
      }

      setShowModal(true);
    }
  }

  const storeLists = async (lists: ISavedList[]) => {
    try {
      await Storage.setJson('saved_lists', lists);
    } catch (ex) {
      Alert.alert(t('an error occur on save the list'));
    }
  }

  const saveList = async () => {
    if (!Utils.isNullOrEmpty(savingListName)) {
      const newList: ISavedList = {
        id: Utils.getNextListId(savedLists),
        name: savingListName,
        items: products.map((product: IProduct, p: number): IProduct => {
          return {
            id: product.id,
            name: product.name,
            quantity: 1,
            value: 0,
            total: 0
          };
        })
      }

      let lists = savedLists;
      const isReplacing = savedLists.find(l => l.name === savingListName);

      if (!Utils.isNullOrUndefined(isReplacing)) {
        lists = lists.filter(l => l.id !== isReplacing?.id)
      }

      const updatelists = [
        ...lists,
        newList
      ];

      await storeLists(updatelists);

      setSavedLists(updatelists);
      setSelectedList(newList.id);
      setShowModal(false);

      Alert.alert("List is saved");
    }
  }

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

  const handleCurrency: Function = (amount: string): void => {
    let currency = Currency.input(amount);

    setPrice(currency);
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
      <AppHeader />

      <View style={[
        commonStyles.container,
        commonStyles.main
      ]}>
        <AppModal
          animation="slide"
          transparent={true}
          title="save the list"
          visible={showModal}
          actions={{
            close: {
              action: (show: boolean): void => setShowModal(show)
            },
            submit: {
              title: 'save',
              action: saveList
            }
          }}>
          <View style={[commonStyles.flexRow]}>
            <Text>{t('name')}: </Text>

            <TextInput
              value={savingListName}
              onChangeText={value => setSavingListName(value)} />
          </View>
        </AppModal>

        <View style={[
          styles.totalBar,
          styles.barBordered
        ]}>
          <Text style={[
            styles.totalBarLabel,
            styles.totalBarText
          ]}>{t('total')}</Text>

          <Text style={[
            styles.totalBarValue,
            styles.totalBarText,
            commonStyles.textBordered,
          ]}>{Currency.format(total)}</Text>
        </View>

        <View style={[
          styles.listsBar,
          styles.barBordered
        ]}>
          <View style={[
            commonStyles.flexRow,
            commonStyles.flexFill
          ]}>
            <View
              style={styles.listsBarPickerWrap}>
              <Picker
                style={styles.listsBarPicker}
                selectedValue={selectedList}
                accessibilityLabel="saved lists"
                onValueChange={(value, key) => setSelectedList(Number(value))}>
                <Picker.Item label={t('saved_lists')} value="0" />
                {savedLists.map((item: ISavedList, key: number) => (
                  <Picker.Item label={item.name} value={item.id} key={key} />
                ))}
              </Picker>
            </View>

            <AppButton
              styles={[
                styles.listsBarBtn,
                styles.btn
              ]}
              action={() => loadList()}>
              <Text style={styles.listsBarBtnText}> {t('load')}</Text>
            </AppButton>
          </View>

          {products.length > 0 ? (
            <AppButton
              styles={[
                styles.listsBarBtn,
                styles.btn
              ]}
              action={() => showSaveListModal()}>
              <Text style={styles.listsBarBtnText}>{t('save')}</Text>
            </AppButton>
          ) : <Text></Text>}
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
              <View>
                <TouchableWithoutFeedback style={[
                  styles.product,
                  commonStyles.viewBordered,
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
                    ]}>{Currency.format(product.total)}</Text>
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.productBtn,
                      styles.btn,
                      styles.productBordered
                    ]}
                    onPress={() => removeProduct(product.id)}>
                    <FontAwesome5 name="minus" size={28} color="#444" />
                  </TouchableOpacity>
                </TouchableWithoutFeedback>
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
              productStyles.productField,
              commonStyles.flexFill,
              commonStyles.viewBordered,
              styles.productBordered
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
              commonStyles.viewBordered,
              styles.productBordered
            ]}
            keyboardType="number-pad"
            maxLength={3}
            placeholder="1"
            value={Utils.numericInputValue(qtd)}
            onChangeText={value => setQtd(Number(value))} />

          <TextInput
            style={[
              styles.productValue,
              styles.productInput,
              productStyles.productField,
              commonStyles.viewBordered,
              styles.productBordered,
              commonStyles.textRight
            ]}
            keyboardType="number-pad"
            placeholder="0.00"
            value={price}
            onChangeText={value => handleCurrency(value)} />

          <TouchableOpacity
            style={[
              styles.productBtn,
              styles.btn,
              styles.productBordered
            ]}
            onPress={() => addProduct()}>
            <FontAwesome5 name="plus" size={28} color="#444" />
          </TouchableOpacity>
        </View>
      </View >
    </View >
  );
}
