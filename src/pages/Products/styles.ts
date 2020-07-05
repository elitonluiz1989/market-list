import { StyleSheet } from 'react-native';
import IProductsStyles from './styles.d';
import commonStyles from 'App/common/styles/common';
import colors from 'App/common/styles/colors';

export default StyleSheet.create<IProductsStyles>({
  btn: {
    ...commonStyles.btn,
    ...commonStyles.viewBordered,
    borderRadius: 10
  },
  barBordered: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.pallete.first
  },
  totalBar: {
    ...commonStyles.flexRow,
    ...commonStyles.flexSpaceAround,
    ...commonStyles.section,
    paddingTop: 10,
    paddingBottom: 10
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
  listsBar: {
    ...commonStyles.flexRow,
    alignItems: 'center',
    ...commonStyles.section,
    paddingVertical: 5,
    backgroundColor: colors.pallete.third
  },
  listsBarPickerWrap: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10
  },
  listsBarPicker: {
    height: 50,
    width: 180
  },
  listsBarBtn: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'transparent'
  },
  listsBarBtnText: {
    fontSize: 20
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
    width: 50,
    backgroundColor: 'white'
  },
  productBtnBar: {
    ...commonStyles.flexRow,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: colors.pallete.first,
  }
});