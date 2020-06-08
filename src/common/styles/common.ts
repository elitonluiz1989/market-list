import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Constants from 'expo-constants';
import ICommonStyles from 'App/common/interfaces/ICommonStyles'
import colors from './colors';

export default StyleSheet.create<ICommonStyles>({
  container: {
    flex: 1
  },
  page: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12,
    backgroundColor: colors.pallete.first
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0
  },
  headerLogo: {
    width: 60,
    height: 60
  },
  headerTitle: {
    paddingLeft: 20,
    fontSize: 38,
    color: 'white'
  },
  main: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10
  },
  section: {
    padding: 10
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexSpaceAround: {
    justifyContent: 'space-around'
  },
  flexFill: {
    flex: 1
  },
  viewBordered: {
    borderWidth: 1,
    borderStyle: "solid"
  },
  textBordered: {
    borderWidth: 1,
    borderStyle: "solid"
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  },
  textWhite: {
    color: 'white'
  }
});