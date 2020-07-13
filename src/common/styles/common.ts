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
  flexSpaceBetween: {
    justifyContent: 'space-between'
  },
  flexFill: {
    flex: 1
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  modalBlock: {
    paddingHorizontal: 35,
    paddingVertical: 20
  },
  modalBox: {  
    alignItems: "center",
    elevation: 5,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  modalHeader: {
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.gray.light
  },
  modalHeaderText: {
    fontSize: 26,
    textAlign: 'center'
  },
  modalContent: {
    marginVertical: 40
  },
  modalFooter: {
    width: '100%'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnDefault: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    paddingVertical: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray.light,
    borderRadius: 10
  },
  btnSuccess: {
    backgroundColor: colors.pallete.first,
    borderColor: colors.pallete.first,
    color: 'white'
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