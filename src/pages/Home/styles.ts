import { StyleSheet } from 'react-native';
import IHomeStyles from './interfaces/HomeStyles';
import commonStyles from '../../common/styles/common';

const gray: string = '#ddd';
const grayDark: string = '#aaa';
const violetDark: string = '#210063';

export default StyleSheet.create<IHomeStyles>({
  totalBar: {
    ...commonStyles.flexRow,
    ...commonStyles.flexSpaceAround,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: violetDark,
  },
  totalBarLabel: {
    paddingRight: 15,
    ...commonStyles.flexFill,
    ...commonStyles.textRight
  },
  totalBarValue: {
    minWidth: 100,
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: violetDark,
    borderRadius: 5,
    color: 'white',
    ...commonStyles.textRight,
  },
  totalBarText: {
    fontSize: 30
  },
  products: {
    flex: 1,
    paddingBottom: 7,
    backgroundColor: violetDark
  },
  product: {
    ...commonStyles.flexRow,
    ...commonStyles.flexSpaceAround,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: gray,
    borderRadius: 5
  },
  productField: {
    marginRight: 4,
    padding: 3,
    borderRadius: 5,
    fontSize: 28
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
  },
  productBtnBar: {
    ...commonStyles.flexRow,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: violetDark,
  }
});