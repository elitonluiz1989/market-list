import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Constants from 'expo-constants';
import IHomeStyles from './interfaces/HomeStyles';

const gray: string = '#ddd';
const grayDark: string = '#aaa';

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
  main: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10
  },
  section: {
    padding: 10
  },
  textCenter: {
    textAlign: 'center',
  },
  products: {
    flexGrow: 0,
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#888'
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#fefefe',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: gray,
    borderRadius: 5
  },
  productField: {
    marginRight: 4,
    padding: 3,
    fontSize: 28
  },
  productFieldAutoSize: {
    flexGrow: 1
  },
  productFieldBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#aaa'
  },
  prodcutFieldGroup: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  productFieldSeparator: {
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: grayDark
  },
  productInput: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    borderRadius: 10
  }
});