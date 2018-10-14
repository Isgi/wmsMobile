import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from '../stylesComponents';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: props.secureTextEntry
    };
  }

  handleChangeVisibility = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  ref = () => r => (typeof (this.props.onRef) === 'function' ? this.props.onRef(r) : null)

  render() {
    const {
      label,
      meta,
      input,
      secureTextEntry,
      autoCapitalize,
      onSubmitEditing,
      returnKeyType,
      autoFocus,
      disabled,
      maxLength,
      editable,
      keyboardType,
      iconName,
      iconType,
      placeholder,
      multiline,
      helper_message,
      textHelper,
      style
    } = this.props;
    return (
      <View style={styles.formGroup}>
        <Icon name={iconName} type="font-awesome" iconStyle={styles.iconTextInput} containerStyle={styles.iconContentTextInput} />
        <TextInput
          style={[styles.textInput, meta.touched && meta.error ? styles.bordertextInputError : null, style]}
          underlineColorAndroid="transparent"
          underlineColorios="transparent"
          placeholderTextColor='rgba(0,0,0,0.7)'
          placeholder={label}
          keyboardType={keyboardType}
          disabled={disabled}
          editable={editable}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          multiline={multiline}
          textInputRef={this.ref()}
          autoCapitalize={autoCapitalize}
          value={input.value.toString()}
          onChangeText={input.onChange}
          secureTextEntry={this.state.secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          maxLength={maxLength} />
        {meta.touched && meta.error
          ? <Text style={styles.textInputError}>{meta.error}</Text>
          : null}

        {helper_message === true && <Text style={styles.textInputTextHelper}>{textHelper}</Text>}
        {/* {secureTextEntry
          ? <Icon
            name={this.state.secureTextEntry ? 'visibility' : 'visibility-off'}
            iconStyle={styles.iconVisibility}
            color="#666"
            onPress={this.handleChangeVisibility}
          />
          : null} */}

      </View>
    );
  }
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  onRef: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  returnKeyType: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string
};