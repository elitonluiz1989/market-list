import { StyleSheet } from 'react-native';
import IProductsStyles from './styles.d';
import commonStyles from 'App/common/styles/common';
import colors from 'App/common/styles/colors';

export default StyleSheet.create<IProductsStyles>({
  totalBar: {
    ...commonStyles.flexRow,
    ...commonStyles.flexSpaceAround,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.pallete.first
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
    borderColor: colors.pallete.first,
    borderRadius: 5,
    ...commonStyles.textRight,
  },
  totalBarText: {
    fontSize: 30
  },
  products: {
    flex: 1,
    paddingBottom: 7
  },
  product: {
    ...commonStyles.flexRow,
    ...commonStyles.flexSpaceAround,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 5
  },
  productFieldSeparator: {
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: colors.pallete.first,
    borderRadius: 0
  },
  productBordered: {
    borderColor: colors.pallete.first
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
    borderTopColor: colors.pallete.first,
  }
});