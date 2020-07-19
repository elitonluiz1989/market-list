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
    paddingBottom: 10,
    backgroundColor: colors.pallete.third
  },
  totalBarLabel: {
    paddingRight: 15,
    ...commonStyles.flexFill,
    ...commonStyles.textRight,
    ...commonStyles.textWhite
  },
  totalBarValue: {
    minWidth: 100,
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: 'white',
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
    paddingVertical: 5
  },
  listsBarPickerWrap: {
    marginRight: 10,
    backgroundColor: 'white',
    ...commonStyles.viewBordered,
    borderRadius: 10
  },
  listsBarPicker: {
    height: 50,
    width: 200
  },
  listsBarBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'transparent'
  },
  listsModal: {
    ...commonStyles.flexRow,
    alignItems: 'center',
    width: '100%'
  },
  listsModalText: {
    fontSize: 20
  },
  listsModalInput: {
    ...commonStyles.flexFill,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray.light,
    borderRadius: 5
  },
  listsMenu: {
    alignSelf: 'flex-end',
    width: 200,
    position: 'absolute',
    top: 68,
    right: 15,
    zIndex: 2,
    backgroundColor: 'white',
    ...commonStyles.viewBordered,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  listsMenuMask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  },
  listsMenuArrow: {
    marginTop: -23,
    marginBottom: -12,
    marginRight: -2,
    alignItems: 'flex-end'
  },
  listsMenuItem: {
    paddingVertical: 20
  },
  listsMenuItemBordered: {
    borderBottomWidth: 1,
    borderStyle: 'solid'
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