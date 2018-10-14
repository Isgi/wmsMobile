import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm, change } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from '../stylesChecksheet';
import InputText from '../../global/components/redux-form/InputText';
import { required } from '../../global/utils/validationForm';

class ChecksheetForm extends Component {

  constructor(props) {
    super(props);
    this.serial = '';
    this.state = {
      no_dr: props.initialValues && props.initialValues.no_dr ? props.initialValues.no_dr : ''
    };
    if (!props.initialValues || !props.initialValues.tanggal) {
      props.dispatch(change('checksheet', 'tanggal', moment().format('YYYY-MM-DD')))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formState && this.props.formState.values && this.props.formState.values.serial) {
      if (this.props.formState.values.serial !== nextProps.formState.values.serial) {
        if (typeof (nextProps.formState.values.serial) === 'string') {
          this.serial = nextProps.formState.values.serial.replace(' ', '').split(',');
          this.props.dispatch(change('checksheet', 'count', this.serial.length.toString()));
        } else {
          this.props.dispatch(change('checksheet', 'count', '0'));
        }
      }
    }
  }

  handleSelectNoDr = () => (no_dr) => {
    this.setState({ no_dr });
    this.props.dispatch(change('checksheet', 'stock_name', no_dr.stock_name));
    this.props.dispatch(change('checksheet', 'ekspedisi', no_dr.ekspedisi));
    this.props.dispatch(change('checksheet', 'driver_name', no_dr.driver_name));
    this.props.dispatch(change('checksheet', 'nopol', no_dr.nopol));
  };

  navigateToSelectNoDr = () => () => {
    this.props.navigation.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'GeneralStack',
      action: {
        type: 'Navigation/NAVIGATE',
        routeName: 'SelectNoDr',
        params: {
          handleSelectNoDr: this.handleSelectNoDr()
        }
      }
    });
  };

  render() {
    const { isLoading } = this.props.checksheet;
    return (
      <KeyboardAwareScrollView
        scrollEnabled
        keyboardShouldPersistTaps="always"
        extraScrollHeight={90}
        style={{ paddingHorizontal: 20, paddingTop: 10 }}
      >
        <Field
          name="tanggal"
          iconName='calendar'
          component={InputText}
          label="Tanggal"
          validate={[required]}
          returnKeyType="next"
          editable={false}
        />

        <Field
          name="checker"
          iconName='user'
          component={InputText}
          label="Checker"
          validate={[required]}
          returnKeyType="next"
        />

        <TouchableOpacity onPress={this.navigateToSelectNoDr()} style={styles.formGroup}>
          <Icon name={'file'} type="font-awesome" iconStyle={styles.iconSelect} containerStyle={styles.iconContentSelect} />
          <View style={styles.fieldNoDr}>
            {this.state.no_dr === '' ?
              <Text style={styles.placeholderSelect}>No. DR/</Text>
              :
              <Text style={styles.textSelect} >{this.state.no_dr.dr_id}</Text>
            }
          </View>
          <Icon name={'caret-down'} type="font-awesome" iconStyle={styles.iconSelect} containerStyle={styles.iconRightContentSelect} />
        </TouchableOpacity>

        <Field
          name="stock_name"
          iconName='map-marker'
          component={InputText}
          label="Tujuan"
          editable={false}
          returnKeyType="next"
        />
        <Field
          name="ekspedisi"
          iconName='ambulance'
          component={InputText}
          label="Ekspedisi"
          editable={false}
          returnKeyType="next"
        />

        <Field
          name="driver_name"
          iconName='user'
          component={InputText}
          label="Driver"
          editable={false}
          returnKeyType="next"
        />
        <Field
          name="nopol"
          iconName='barcode'
          component={InputText}
          label="Nopol"
          editable={false}
          returnKeyType="next"
        />
        <Field
          name="model"
          iconName='clipboard'
          component={InputText}
          label="Model"
          returnKeyType="next"
        />
        <Field
          name="serial"
          iconName='file'
          component={InputText}
          label="Serial"
          returnKeyType="next"
        />
        <Field
          name="count"
          iconName='archive'
          component={InputText}
          label="Count"
          returnKeyType="next"
          editable={false}
        />

        <Button
          title="SUBMIT"
          backgroundColor="#666"
          color="#fff"
          loading={isLoading}
          buttonStyle={{
            width: '100%',
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerViewStyle={styles.buttonSubmit}
          onPress={this.props.handleSubmit(value => this.props.onSubmit({ ...value, no_dr: this.state.no_dr }))}
        />

      </KeyboardAwareScrollView>
    );
  }

}

ChecksheetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  checksheet: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  navigation: PropTypes.object,
  formState: PropTypes.object
};

const wrapperChecksheetForm = reduxForm({
  form: 'checksheet'
})(ChecksheetForm);

const mapStateToProps = (state) => ({
  formState: state.form.checksheet
});


export default connect(mapStateToProps)(wrapperChecksheetForm);

