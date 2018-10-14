/**
 * Sample React Native ChecksheetCreate
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import styles from '../stylesChecksheet';
import ChecksheetForm from '../components/ChecksheetForm';
import { createChecksheet } from '../../global/redux/actions/actionChecksheet';
import renderComponentAfterInteraction from '../../global/components/renderComponentAfterInteraction';
import objectId from '../../global/utils/objectId';


const handleSubmit = props => (value) => {
  props.dispatch(createChecksheet({...value, _id: objectId()}));
  props.navigation.dispatch({
    type: 'Navigation/BACK'
  });
};

const ChecksheetCreate = props => (
  <View style={styles.container}>
    <ChecksheetForm
      {...props}
      onSubmit={handleSubmit(props)}
    />
  </View>
);

const mapStateToProps = state => ({
  checksheet: state.checksheet
});

export default renderComponentAfterInteraction(connect(mapStateToProps)(ChecksheetCreate));

ChecksheetCreate.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checksheet: PropTypes.object.isRequired
};
