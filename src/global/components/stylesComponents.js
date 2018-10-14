import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const stylesComponents = StyleSheet.create({
  inputText: {
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#bebebe'
  },
  formGroup: {
    marginBottom: 15,
  },
  textInput: {
    paddingHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 14,
    color: 'rgba(0,0,0,1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    textAlignVertical: 'center',
    height: 48,
  },
  bordertextInputError: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(213, 0, 0)',
  },
  iconContentTextInput: {
    position: 'absolute',
    top: 13,
    left: 5,
  },
  iconTextInput: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.3)',
  },
  textInputTextHelper: {
    marginTop: 3,
    color: 'rgba(0,0,0,0.3)',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  textInputError: {
    marginTop: 3,
    color: 'rgb(213, 0, 0)',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  iconVisibility: {
    position: 'absolute',
    right: 20,
    top: -30,
    borderColor: 'red',
    borderWidth: 1,
    zIndex: 10000
  },
  iconNavigator: {
    padding: Platform.OS === 'ios' ? 10 : 15
  },
  containerDrawer: {
    flex: 1
  },
  headerDrawer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerInfo: {
    marginLeft: 20
  },
  textUsername: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  containerHeaderDrawer: {
    height: 140,
    padding: 20,
    paddingTop: 30,
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ceced0'
  },
  textOperator: {
    fontWeight: 'bold',
    color: '#666'
  },
  footerDrawer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0
  },
  containerSwitch: {
    marginLeft: 10,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelSwitch: {
    fontSize: 13,
    marginBottom: 15,
    alignSelf: 'center',
    fontWeight: 'normal'
  },
  containerAction: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000'
  },
  modalAction: {
    marginTop: height / 2,
    height: height / 2,
    backgroundColor: '#ffffff',
    elevation: 1,
    borderTopWidth: 0.2,
    borderTopColor: '#bebebe'
  },
  titleAction: {
    fontSize: 18,
    color: '#000000',
    paddingTop: 10,
    paddingBottom: 10
  },
  touchOtherModal: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  headerModalAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  iconCloseAction: {
    marginRight: 10,
    color: '#bebebe'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  containerIconSecondary: {
    backgroundColor: '#666',
    height: Platform.OS === 'ios' ? 43 : 56,
    width: Platform.OS === 'ios' ? 43 : 56
  },
  iconNavigatorSecondary: {
    padding: Platform.OS === 'ios' ? 10 : 15,
    color: '#fff'
  },
  containerButtonSubmit: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fffefe'
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconCountQty: {
    fontSize: 50,
    color: '#666'
  },
  containerIconCountQty: {
    marginTop: 27
  },
  containerModifiers: {
    margin: 20,
    marginBottom: 0,
    marginTop: 0
  }
});

export default stylesComponents;
