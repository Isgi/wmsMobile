import { StyleSheet } from 'react-native';

const stylesChecksheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // paddingHorizontal: 20
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: '#666'
  },
  formGroup: {
    marginBottom: 15,
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 50,
  },
  fieldNoDr: {
    paddingHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'rgba(0,0,0,1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    textAlignVertical: 'center',
    height: 48,
  },
  placeholderSelect: {
    fontSize: 14,
    color:'rgba(0,0,0,0.7)'
  },
  textSelect: {
    fontSize: 14,
    color: 'rgba(0,0,0,1)',
  },
  iconContentSelect: {
    position: 'absolute',
    top: 13,
    left: 5,
  },
  iconSelect: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.3)',
  },
  iconRightContentSelect: {
    position: 'absolute',
    top: 13,
    right: 5,
  },
  selectError: {
    marginTop: 3,
    color: 'rgb(213, 0, 0)',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  containerButtonSubmit: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  containerFooter: {
    height: 100
  }
});

export default stylesChecksheet;
