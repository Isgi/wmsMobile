/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import styles from '../stylesLogin';
import FormLogin from '../components/FormLogin';
import { login } from '../../global/redux/actions/actionAuth';

const handleSubmit = props => (value) => {
  props.dispatch(login(value));
  props.navigation.dispatch({
    type: 'Navigation/RESET',
    key: 'AuthorizedStack',
    index: 0,
    actions: [{
      type: 'Navigation/NAVIGATE',
      routeName: 'ChecksheetStack'
    }]
  });
};

const Login = props => (
  <View style={styles.container}>
    <FormLogin
      {...props}
      onSubmit={handleSubmit(props)}
    />
  </View>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
