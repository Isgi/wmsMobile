import { StyleSheet } from 'react-native';

const stylesChecksheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefe'
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
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 20
  },
  fieldNoDr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    marginTop: 20,
    borderBottomColor: '#bebebe',
    borderBottomWidth: 1
  },
  buttonSetNoDr: {
    fontWeight: 'bold',
    fontSize: 16
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
