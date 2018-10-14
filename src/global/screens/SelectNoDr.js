/**
 * Sample React Native NoDr
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
import { Button } from 'react-native-elements';

import styles from './stylesScreens';
import { getDr } from '../redux/actions/actionDr';
import ItemSelectNoDr from '../components/ItemSelectNoDr';
import renderComponentAfterInteraction from '../components/renderComponentAfterInteraction';

type Props = {};
class SelectNoDr extends Component<Props> {

  constructor(props) {
    super(props);
    this.handleSelectNoDr = props.navigation.getParam('handleSelectNoDr');
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getDr());
  }

  handleSelect = (item) => {
    this.handleSelectNoDr(item);
    this.props.navigation.dispatch({
      type: 'Navigation/BACK'
    });
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => <ItemSelectNoDr handleSelect={this.handleSelect} item={item} />

  render() {
    const { isLoading } = this.props.dr;
    const { data } = this.props.dr;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          refreshing={isLoading}
          onRefresh={this.getData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListFooterComponent={<View style={styles.containerFooter} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dr: state.dr
});

export default renderComponentAfterInteraction(connect(mapStateToProps)(SelectNoDr));

SelectNoDr.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dr: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

