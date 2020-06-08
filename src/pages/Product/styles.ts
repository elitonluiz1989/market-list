import { StyleSheet } from 'react-native';
import IProductsStyles from './styles.d';
import commonStyles from 'App/common/styles/common';
import colors from 'App/common/styles/colors';

export default StyleSheet.create<IProductsStyles>({
  titleBar: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.pallete.first
  },
  titleBarText: {
    fontSize: 30,
    ...commonStyles.textCenter
  },
  productContent: {
    flexGrow: 1,
    paddingBottom: 10,
    paddingHorizontal: 15
  },
  productRow: {
    paddingTop: 15,
    paddingHorizontal: 10
  },
  productTotalWrap: {
    marginTop: 20,
    paddingRight: 5,
    paddingBottom: 10,
    backgroundColor: colors.pallete.first,
    borderRadius: 15
  },
  productLabel: {
    textAlignVertical: 'center',
    minWidth: '30%',
    paddingRight: 10,
    ...commonStyles.textRight,
    fontSize: 18
  },
  productField: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: colors.pallete.first,
    borderRadius: 10,
    fontSize: 18
  },
  productName: {
    flexGrow: 1
  },
  productQtd: {
    width: 60
  },
  productPrice: {
    width: 100
  },
  productTotal: {
    backgroundColor: 'white',
    width: 150
  },
  productBtnBar: {
    ...commonStyles.flexRow,
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopColor: colors.pallete.first
  },
  productBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    paddingVertical: 10,
    borderColor: colors.pallete.first,
    borderRadius: 10
  },
  productBtnText: {
    fontSize: 20
  },
  productBtnSave: {
    backgroundColor: colors.pallete.first
  }
});