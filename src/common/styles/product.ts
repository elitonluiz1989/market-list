import { StyleSheet } from 'react-native';
import ICommonProductStyles from 'App/common/interfaces/ICommonProductStyles';
import colors from 'App/common/styles/colors';

export default StyleSheet.create<ICommonProductStyles>({
  productField: {
    marginRight: 4,
    padding: 3,
    borderRadius: 5,
    fontSize: 28
  },
  productFieldBordered: {
    borderWidth: 1,
    borderStyle: 'solid'
  },
  productFieldBorderedDefault: {
    borderColor: colors.gray.dark
  },
  productFieldGroup: {
    flexGrow: 1,
    flexDirection: 'row'
  }
});