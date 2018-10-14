/**
 * Sample React Native Checksheet
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesChecksheet';
import { getChecksheet } from '../../global/redux/actions/actionChecksheet';
import ChecksheetItem from '../components/ChecksheetItem';
import renderComponentAfterInteraction from '../../global/components/renderComponentAfterInteraction';

type Props = {};
class Checksheet extends Component<Props> {

  constructor(props) {
    super(props);
    props.navigation.setParams({ handleCreate: this.navigateToCreateChecksheet });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getChecksheet());
  }

  navigateToCreateChecksheet = () => {
    this.props.navigation.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ChecksheetCreate'
    });
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => <ChecksheetItem item={item} index={index} />

  render() {
    const { data, isLoading } = this.props.checksheet;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  checksheet: state.checksheet
});

export default renderComponentAfterInteraction(connect(mapStateToProps)(Checksheet));

Checksheet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checksheet: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

