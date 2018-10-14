/**
 * Sample React Native ChecksheetUpdate
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesChecksheet';
import ChecksheetForm from '../components/ChecksheetForm';
import { updateProduct } from '../../global/redux/actions/actionChecksheet';
import renderComponentAfterInteraction from '../../global/components/renderComponentAfterInteraction';


const handleSubmit = props => (value) => {
    props.dispatch(updateProduct(value))
    props.navigation.dispatch({
      type: 'Navigation/BACK'
    });
};

const ChecksheetUpdate = (props) => {
  const { params } = props.navigation.state;
  return (
    <View style={styles.container}>
      <ChecksheetForm
        {...props}
        onSubmit={handleSubmit(props)}
        initialValues={params.item}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  checksheet: state.checksheet
});

export default renderComponentAfterInteraction(connect(mapStateToProps)(ChecksheetUpdate));

ChecksheetUpdate.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checksheet: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};
