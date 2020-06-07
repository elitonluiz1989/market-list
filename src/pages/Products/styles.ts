import { StyleSheet } from 'react-native';
import IProductStyles from './styles';
import commonStyles from 'App/common/styles/common';
import colors from 'App/common/styles/colors';

export default StyleSheet.create<IProductStyles>({
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
    backgroundColor: colors.pallete.third,
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
    backgroundColor: colors.pallete.second
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
    borderLeftColor: colors.pallete.third,
    borderRadius: 0
  },
  productBordered: {
    borderColor: colors.pallete.third
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