import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';

import styles from '../stylesLogin';
import InputText from '../../global/components/redux-form/InputText';
import { email, required, minLength6 } from '../../global/utils/validationForm';

const FormLogin = (props) => {

  let password = null;

  const refPassword = () => (ref) => {
    const refs = ref;
    password = refs;
  };

  const refSubmitUsername = () => () => password.focus();

  const refSubmitPassword = () => props.handleSubmit;

  return (
    <View>
      <Field
        autoCapitalize="none"
        name="username"
        component={InputText}
        label="Email"
        keyboardType="email-address"
        validate={[required, email]}
        returnKeyType="next"
        disabled={props.auth.isLoading}
        onSubmitEditing={refSubmitUsername()}
      />
      <Field
        name="password"
        component={InputText}
        label="Password"
        secureTextEntry
        validate={[required, minLength6]}
        onRef={refPassword()}
        returnKeyType="done"
        disabled={props.auth.isLoading}
        onSubmitEditing={refSubmitPassword()}
      />
      <Button
        title="LOGIN"
        backgroundColor="#666"
        color="#fffefe"
        disabled={props.auth.isLoading}
        loading={props.auth.isLoading}
        containerViewStyle={styles.buttonLogin}
        onPress={props.handleSubmit}
      />
    </View>
  );
};

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const initialForm = {
  form: 'login',
  initialValues: {
    username: 'isgi@gmail.com',
    password: '2wsx1qaz'
  }
};

export default reduxForm(initialForm)(FormLogin);

