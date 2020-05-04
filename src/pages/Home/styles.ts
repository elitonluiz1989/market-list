import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Constants from 'expo-constants';
import IHomeStyles from './interfaces/HomeStyles';

export default StyleSheet.create<IHomeStyles>({
  container: {
    flex: 1
  },
  page: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12,
    backgroundColor: '#339966'
  },
  header: {
    height: 30,
    backgroundColor: '#339900'
  },
  products: {
    flexGrow: 0,
    borderColor: '#f00',
    borderStyle: 'solid',
    borderWidth: 1
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#efefef',
    borderRadius: 5
  },
  productField: {
    marginRight: 4,
    padding: 3,
    fontSize: 28
  },
  productFieldBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d0d0d0'
  },
  productName: {
    flexGrow: 1
  },
  productQtd: {
    width: 60

  },
  productValue: {
    width: 80
  },
  productBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: '#037ffc',
    borderRadius: 10
  }
});